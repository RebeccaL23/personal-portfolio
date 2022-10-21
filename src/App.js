import React from "react"
import logo from './logo.svg'
import './App.css'
import Project from './components/project'
import Main from './components/main'
import Contact from './components/contact'
import projectData from './data/projectData'
import { hover } from "@testing-library/user-event/dist/hover"

function App() {
  const [projects, setProjects] = React.useState(projectData)
  const [blur, setBlur] = React.useState(false);

  const projectElements = projects.map(project => (
    <Project
      key={project.id}
      id={project.id}
      project={project.project}
      title={project.title}
      link={project.link}
      technology={project.technology}
      heroImage={project.preview.heroImage}
      description={project.preview.description}
      secondaryImage={project.preview.secondaryImage}
      show={project.show}
      close={close}
    />
  ))

  const projectList = projects.map(project => (
    <li
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    onClick={() => toggle(project.id) }>
    {project.project}
    </li>
  ))

  function handleMouseEnter(){
    setBlur(true)
  }

  function handleMouseLeave() {
    setBlur(false)
  };

  const blurStyle = {
    filter: blur ? "blur(8px)" : ""
  }

  function close(id) {
    setProjects(prevProjects => {
      return prevProjects.map((project) => {
        return project.id === id ? {...project, show: !project.show} : project
      })
    })
  }

  function toggle(id) {
    setProjects(prevProjects => {
      return prevProjects.map((project) => {
        return project.id === id ? {...project, show: !project.show} : project
      })
    })
  }

  return (
    <div className="app" >
      <div className="page-layout">
        {/* <h1 style={blurStyle}>Rebecca Lim</h1> */}
        <img className="logo" src={require('./images/Bec-logo.png')} />
        <div className="portfolio-grid">
            <div className="portfolio-col">
              <div className="recent-projects">
                <h2 style={blurStyle}>Recent Projects</h2>
                <ul>
                  {projectList}
                </ul>
              </div>
            </div>
            <div className="portfolio-col, about-section">
              <div className="about" style={blurStyle}>
                <h2>About</h2>
                <div><p>I'm a Malaysian-Australian fullstack developer based in London.
                I was previously the Manager of Business Systems at <a href="https://www.bluerockdigital.com.au/">BlueRock Digital</a>, a Melbourne-based digital consultancy part of the <a href="https://www.bluerock.com.au/">BlueRock</a> group.
                That experience gave me an all-rounded view and appreciation of the digital space;
                I had the opportunity to plan, design and manage the development of digital solutions for clients across various industries.</p><br></br>
                <p>The missing puzzle piece for me was getting hands-on and building the solution, so I pivoted slightly and completed the intensive
                web development course at Le Wagon. I am now on the hunt for junior developer roles.</p>
                </div>
              </div>
              <div className="currently-learning" style={blurStyle}>
                <h2>Currently Learning</h2>
                <ul>
                  <li>React</li>
                  <li>Shopify Hydrogen Framework</li>
                </ul>
              </div>
            </div>
        </div>
      </div>

      <div>{projectElements}</div>

      <Contact  />
    </div>
  );
}

export default App;
