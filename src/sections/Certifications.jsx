import javaCert from '../assets/certificates/Java_FullStack_Certificate.pdf'
import testingCert from '../assets/certificates/SoftwareTesting_Java_Certificate.pdf'

function Certifications() {
    return (
        <section className="certifications">
            <div className="certifications-card">
                <h2>Certifications</h2>

                {/* Java Full Stack */}
                <div className="certification-item">
                    <h3>Java Full Stack Certification</h3>
                    <p className="certification-org">
                        JSpiders, Hebbal Branch (Completed)
                    </p>
                    <a
                        href={javaCert}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="certification-link"
                    >
                        View Certificate
                    </a>
                </div>

                {/* Software Testing */}
                <div className="certification-item">
                    <h3>Software Testing (Java)</h3>
                    <p className="certification-org">
                        Besant Technology, BTM Branch (Completed)
                    </p>
                    <a
                        href={testingCert}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="certification-link"
                    >
                        View Certificate
                    </a>
                </div>

                {/* Data Analytics */}
                <div className="certification-item muted">
                    <h3>Data Analytics</h3>
                    <p className="certification-org">
                        Physics Wallah (Ongoing)
                    </p>
                    <p className="certification-pending">
                        Certificate will be added after completion.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Certifications
