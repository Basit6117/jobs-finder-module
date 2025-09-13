import "../styles/JobsPages.css"
import Searchbar from '../components/Searchbar'
import Filters from '../components/Filters'
import { useEffect, useState } from "react"
import JobsGrid from "../components/JobsGrid"
import Loading from "../components/Loading"
import ErrorMsg from "../components/ErrorMsg"

const JobsPage = () => {
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState("all")
  const [selectedLocation, setSelectedLocation] = useState("all")
  const [timeFilter, setTimeFilter] = useState("all");
  const [error, setError] = useState("")


  useEffect(() => {
    setLoading(true)
    fetch("https://remotive.com/api/remote-jobs?limit=500")
      .then(res => res.json())
      .then(data => {
        setJobs(data.jobs)
        setLoading(false)
      })
      .catch(() => {
        setError("⚠️ Failed to fetch jobs. Please try again later.");
        setLoading(false);
      });


  }, [])


  const searchJob = (job) => {
  if (search) {
    const term = search.toLowerCase();
    const inTitle = job.title.toLowerCase().includes(term);
    const inTags = job.tags?.some(tag => 
      tag.toLowerCase().includes(term)
    );

    return inTitle || inTags;
  }
  return true;
};

  //filter with job type
  const filterJobType = (job) => {
    if (filter === 'all') {
      return job
    } else {
      return job.job_type === filter
    }
  }

  // filter with location
  const filterByLocation = (job) => {
    if (selectedLocation === "all") return true;
    return job.candidate_required_location
      .toLowerCase()
      .includes(selectedLocation.toLowerCase());
  };
  //filter with time
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

  //search and filters logic
  const filterJobs = jobs.filter((indJob) =>
    searchJob(indJob)
    && filterJobType(indJob)
    && filterByLocation(indJob)
    && filterByTime(indJob)
  )
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
        <h1>Explore Opportunities</h1>
        {loading ? (
          <Loading />
        ) : filterJobs.length === 0 && error === "" ? (
          <p>No jobs found. Try adjusting your search or filters.</p>
        ) : (
          <JobsGrid filterJobs={filterJobs} />
        )}
        {error && <ErrorMsg message={error} />}

      </main>
    </>
  )
}

export default JobsPage
