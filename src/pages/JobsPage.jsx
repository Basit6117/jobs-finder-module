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

  useEffect(() => {
    setLoading(true)
    fetch("https://remotive.com/api/remote-jobs?limit=50")
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


  //search and filter logic
  const filterJobs = jobs.filter((indJob) => searchJob(indJob) && filterJobType(indJob)
   )
  console.log(jobs)
  return (
    <>
      <header className='header-container'>
        <Searchbar search={search} setSearch={setSearch} setLoading={setLoading} />
        <Filters filter={filter} setFilter={setFilter} setLoading={setLoading}/>
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
