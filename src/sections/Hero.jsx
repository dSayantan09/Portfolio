import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-content">
        <h1>Sayantan Das</h1>

        <h3>
          Java Full Stack Developer · React Developer · Software Tester
        </h3>

        <p>
          React.js developer with hands-on experience in frontend development,
          Java Full Stack training, and manual & automation testing using
          Selenium.
        </p>

        <div className="hero-actions">
          <Link to="/contact" className="btn secondary">
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
