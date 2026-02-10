function Experience() {
    return (
        <section className="experience">
            <div className="experience-card">
                <h2>Experience</h2>

                {/* Full-time Role */}
                <div className="experience-item">
                    <div className="experience-header">
                        <h3>Persistent Systems</h3>
                        <span className="experience-duration">
                            July 2022 – February 2023
                        </span>
                    </div>

                    <p className="experience-role">
                        <strong>Software Engineer</strong> — Nagpur
                    </p>

                    <ul className="experience-points">
                        <li>Worked as a Frontend Developer using React JS.</li>
                        <li>
                            Designed and developed webpages for an internal office portal as
                            part of a project assignment.
                        </li>
                    </ul>
                </div>

                {/* Internship */}
                <div className="experience-item">
                    <div className="experience-header">
                        <h3>Persistent Systems (Internship)</h3>
                        <span className="experience-duration">
                            February 2022 – July 2022
                        </span>
                    </div>

                    <p className="experience-role">
                        <strong>Software Engineer Intern</strong> — Nagpur
                    </p>

                    <ul className="experience-points">
                        <li>
                            Trained on HTML5, CSS3, JavaScript (ES6+), React JS, Oracle SQL,
                            Git, and GitHub.
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Experience
