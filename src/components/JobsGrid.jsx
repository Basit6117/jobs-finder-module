import JobCard from "./JobCard"

const JobsGrid = ({ filterJobs }) => {
    return (
        <>
            <div className="grid-container">
                {
                    filterJobs.map((job, index) => {
                        return <JobCard currJob={job} index={index} />
                    })
                }
            </div>
        </>
    )
}

export default JobsGrid
