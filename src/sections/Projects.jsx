function Projects() {
  return (
    <section className="projects">
      <div className="projects-card">
        <h2>Projects</h2>

        <div className="projects-grid">

          {/* My Portfolio */}
          <div className="project-card">
            <h3>My Portfolio</h3>
            <p><strong>Tech Stack:</strong> React JS</p>
            <p>
              A professional portfolio and digital resume highlighting my career
              trajectory & core competencies.
            </p>
            <div className="project-links">
              <a href="https://github.com/dSayantan09/Portfolio" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>

          {/* Dilwala Wine Shop */}
          <div className="project-card">
            <h3>Dilwala Wine Shop</h3>
            <p><strong>Tech Stack:</strong> HTML, CSS, JavaScript</p>
            <p>
              A dynamic webpage with a dynamic login page and static content pages.
            </p>
            <p>Username: dsayantan09 <br /> Password: 123456</p>
            <div className="project-links">
              <a href="https://dilwala-wine-shop.netlify.app/" target="_blank" rel="noopener noreferrer">Live</a>
              <a href="https://github.com/dSayantan09/Dilwala_Wine-Shop" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>

          {/* Travel Testing Website */}
          <div className="project-card">
            <h3>Travel Testing Website (Asianet Tours)</h3>
            <p><strong>Type:</strong> Manual Testing</p>
            <p>
              Tested destination listings, inquiry forms, validations, dropdowns,
              navigation links, and booking buttons.
            </p>
            <div className="project-links">
              <a href="https://www.asianet-tours.it/" target="_blank" rel="noopener noreferrer">Website</a>
              <a href="https://docs.google.com/spreadsheets/d/1J3iIxv6orQu08aejuhQMkJJ6ykklLW77a8q-GdW5pl4/edit?gid=0#gid=0" target="_blank" rel="noopener noreferrer">Test Report</a>
            </div>
          </div>

          {/* Orange HRM */}
          <div className="project-card">
            <h3>Orange HRM Testing</h3>
            <p><strong>Tech Stack:</strong> Java Selenium</p>
            <p><strong>Frameworks:</strong> BDD Cucumber, TestNG</p>
            <p>
              End-to-end functional testing for Login, Admin, PIM, and Leave modules.
            </p>
            <div className="project-links">
              <a href="https://opensource-demo.orangehrmlive.com/web/index.php/auth/login" target="_blank" rel="noopener noreferrer">Project</a>
              <a href="https://drive.google.com/file/d/14kwDAWQOKDrse1qXok8hPcFvuRAf0oHg/view" target="_blank" rel="noopener noreferrer">Report</a>
              <a href="https://github.com/dSayantan09/OrangeHRM_Java-Selenium/tree/main" target="_blank" rel="noopener noreferrer">Selenium</a>
              <a href="https://github.com/dSayantan09/OrangeHRM_BDDCucumber" target="_blank" rel="noopener noreferrer">Cucumber</a>
              <a href="https://github.com/dSayantan09/OrangeHRM_TestNG" target="_blank" rel="noopener noreferrer">TestNG</a>
            </div>
          </div>

          {/* WLAN Project */}
          <div className="project-card">
            <h3>Study of WLAN 802.11a in AWGN Channel</h3>
            <p><strong>Tech Stack:</strong> MATLAB, System Vue Generator</p>
            <p>
              Academic project on packet-based OFDM wireless communication standard.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Projects
