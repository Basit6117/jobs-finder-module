import "../styles/JobsPages.css"
const JobCard = ({ currJob, index }) => {
    //job salary regex
    const salaryToShow = /\d/.test(currJob.salary);
    return (
        <div className="card" key={index}>
            <h2>{currJob.title}</h2>
            <p>Company Name: {currJob.company_name}</p>
            <br />
            <span> {currJob.candidate_required_location}</span>
            <span>{currJob.job_type.replaceAll('_', ' ')}</span>
            {salaryToShow && <span>{currJob.salary}</span>}
            <p>
                Posted on: {new Date(currJob.publication_date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric"
                })}
            </p>
            <button><a target="_blank" href={currJob.url}>Apply Now</a></button>

        </div>
    )
}

export default JobCard
