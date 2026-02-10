import profilePic from '../assets/profile.png'
import emailIcon from '../assets/gmail.png'
import phoneIcon from '../assets/phone.png'
import linkedinIcon from '../assets/linkedin.svg'

function Contact() {
  return (
    <section className="contact">
      <div className="contact-card">

        {/* Profile */}
        <img
          src={profilePic}
          alt="Sayantan Das"
          className="contact-avatar"
        />

        <h2>Get In Touch</h2>

        <p className="contact-subtitle">
          Let’s connect 🚀
        </p>

        {/* Contact Items */}
        <div className="contact-items">

          <a
            href="mailto:dsayantan115@gmail.com"
            className="contact-item"
          >
            <img src={emailIcon} alt="Email" />
            <span>dsayantan115@gmail.com</span>
          </a>

          <a
            href="tel:+919002819776"
            className="contact-item"
          >
            <img src={phoneIcon} alt="Phone" />
            <span>+91-9002819776</span>
          </a>

          <a
            href="https://www.linkedin.com/in/sayantan-das-273324271/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <img src={linkedinIcon} alt="LinkedIn" />
            <span>Profile</span>
          </a>

        </div>
      </div>
    </section>
  )
}

export default Contact

