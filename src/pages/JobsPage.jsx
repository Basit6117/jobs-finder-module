import "../styles/JobsPages.css"
import Searchbar from '../components/Searchbar'
import Filters from '../components/Filters'
import { useEffect, useState } from "react"
import JobsGrid from "../components/JobsGrid"
import JobCard from "../components/JobCard"
import Loading from "../components/Loading"


const JobsPage = () => {
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState("all")
  const [selectedLocation, setSelectedLocation] = useState("all")
  const [timeFilter, setTimeFilter] = useState("all");


  useEffect(() => {
    setLoading(true)
    fetch("https://remotive.com/api/remote-jobs?limit=500")
      .then(res => res.json())
      .then(data => {
        setJobs(data.jobs)
        setLoading(false)   
      })

       
  }, [])

  //handle search input | search data
  const searchJob = (job) => {
    if (search) {
      // console.log(job)
      return job.title.toLowerCase().includes(search.toLowerCase())
    } return job;
  }

//handle selection | filter data
const filterJobType = (job) =>{
if(filter === 'all'){
  return job
} else{
  return job.job_type === filter
}
}

//location search
const filterByLocation = (job) => {
  if (selectedLocation === "all") return true;
  return job.candidate_required_location
           .toLowerCase()
           .includes(selectedLocation.toLowerCase());
};
 //time filter
const filterByTime = (job) => {
  if (timeFilter === "all") return true;

  const jobDate = new Date(job.publication_date);
  const today = new Date();

  if (timeFilter === "24h") {
    return (today - jobDate) / (1000 * 60 * 60) <= 24;
  } 
  if (timeFilter === "7d") {
    return (today - jobDate) / (1000 * 60 * 60 * 24) <= 7;
  }
  if (timeFilter === "30d") {
    return (today - jobDate) / (1000 * 60 * 60 * 24) <= 30;
  }

  return true;
};



  //search and filter logic
  const filterJobs = jobs.filter((indJob) => 
    searchJob(indJob)
  && filterJobType(indJob)
  && filterByLocation(indJob)
  && filterByTime(indJob)
   )
  console.log(jobs)
  return (
    <>
      <header className='header-container'>
        <Searchbar search={search} setSearch={setSearch} setLoading={setLoading} />
        <Filters 
        filter={filter} 
        setFilter={setFilter} 
        setLoading={setLoading} 
        jobs={jobs}
        selectedLocation={selectedLocation}
        setSelectedLocation={setSelectedLocation}
        timeFilter={timeFilter}
        setTimeFilter={setTimeFilter}
        />
      </header>
      <main>
       <h1>Explore Opportunities {filterJobs.length}</h1>
       {
         filterJobs.length > 0 ? 
         <JobsGrid filterJobs={filterJobs} /> : 
         <p>Oops No Jobs Found</p>
       }

       {loading && 
   <Loading />
}
        </main>
    </>
  )
}

export default JobsPage
