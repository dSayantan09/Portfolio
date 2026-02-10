import javaIcon from "../assets/skills/java.svg"
import jsIcon from "../assets/skills/javascript.svg"
import pythonIcon from "../assets/skills/python.svg"
import sqlIcon from "../assets/skills/sql.svg"
import htmlIcon from "../assets/skills/html5.svg"
import cssIcon from "../assets/skills/css3.svg"
import reactIcon from "../assets/skills/react.svg"
import springIcon from "../assets/skills/spring.svg"
import springBootIcon from "../assets/skills/springboot.svg"
import cucumberIcon from "../assets/skills/cucumber.svg"
import mysqlIcon from "../assets/skills/mysql.svg"
import oracleIcon from "../assets/skills/oracle.svg"
import seleniumIcon from "../assets/skills/selenium.svg"
import gitIcon from "../assets/skills/git.svg"
import githubIcon from "../assets/skills/github.svg"
import testngIcon from "../assets/skills/testNG.png"

function Skills() {
  return (
    <section className="skills">
      <div className="skills-card">
        <h2>Technical Skills</h2>

        <div className="skills-grid">

          <div className="skill-category">
            <h4>Programming Languages</h4>
            <ul>
              <li className="skill-item"><img src={javaIcon} /><span>Core Java</span></li>
              <li className="skill-item"><img src={jsIcon} /><span>JavaScript</span></li>
              <li className="skill-item"><img src={pythonIcon} /><span>Python</span></li>
              <li className="skill-item"><img src={sqlIcon} /><span>SQL</span></li>
            </ul>
          </div>

          <div className="skill-category">
            <h4>Web Technologies</h4>
            <ul>
              <li className="skill-item"><img src={htmlIcon} /><span>HTML5</span></li>
              <li className="skill-item"><img src={cssIcon} /><span>CSS3</span></li>
              <li className="skill-item"><img src={jsIcon} /><span>JavaScript</span></li>
            </ul>
          </div>

          <div className="skill-category">
            <h4>Frameworks</h4>
            <ul>
              <li className="skill-item"><img src={reactIcon} /><span>React</span></li>
              <li className="skill-item"><img src={springIcon} /><span>Spring</span></li>
              <li className="skill-item"><img src={springBootIcon} /><span>Spring Boot</span></li>
              <li className="skill-item"><img src={cucumberIcon} /><span>Cucumber</span></li>
              <li className="skill-item"><img src={testngIcon} /><span>TestNG</span></li>
            </ul>
          </div>

          <div className="skill-category">
            <h4>Databases</h4>
            <ul>
              <li className="skill-item"><img src={mysqlIcon} /><span>MySQL</span></li>
              <li className="skill-item"><img src={oracleIcon} /><span>Oracle</span></li>
            </ul>
          </div>

          <div className="skill-category">
            <h4>Testing & Tools</h4>
            <ul>
              <li className="skill-item"><img src={seleniumIcon} /><span>Selenium</span></li>
              <li className="skill-item"><img src={gitIcon} /><span>Git</span></li>
              <li className="skill-item"><img src={githubIcon} /><span>GitHub</span></li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Skills
