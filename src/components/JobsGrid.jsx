import JobCard from "./JobCard"

const JobsGrid = ({ filterJobs }) => {
    return (
        <>
            <div className="grid-container">
                {
                    filterJobs.map((job) => {
                        return <JobCard currJob={job} key={job.id}/>
                    })
                }
            </div>
        </>
    )
}

export default JobsGrid
