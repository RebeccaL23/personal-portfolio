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
  const [blur, setBlur] = React.useState(false)
  const [thumbnail, setThumbnail] = React.useState("")
  const [contactColour, setContactColour] = React.useState(false)

  const projectElements = projects.map(project => (
    <Project
      key={project.id}
      id={project.id}
      project={project.project}
      title={project.title}
      link={project.link}
      technology={project.technology}
      slideOne={project.preview.slideOne}
      slideTwo={project.preview.slideTwo}
      slideThree={project.preview.slideThree}
      show={project.show}
      close={close}
    />
  ))

  const blurStyle = {
    filter: blur ? "blur(8px)" : ""
  }

  const contactStyle = {
    color: contactColour ? "#fff" : "#B99230"
  }

  const projectList = projects.map(project => (
    <li style={blurStyle} className="project-list-items"
    onMouseEnter={(event) => handleMouseEnter(event, project.id)}
    onMouseLeave={handleMouseLeave}
    onClick={() => toggle(project.id)}>
    {project.project}
    </li>
  ))

  function handleMouseEnter(event, id){
    setBlur(true)
    // if project id is the same as the id
    if (projects[id-1].id !== id) {
      console.log("YES")
    } else {
      console.log("NO")
    }
    // if project id is
    setThumbnail(<img className="thumbnail" src={projects[id-1].thumbnail} />)
  }

  function handleMouseLeave() {
    setBlur(false)
    setThumbnail("")
  };

  function close(id) {
    setProjects(prevProjects => {
      return prevProjects.map((project) => {
        return project.id === id ? {...project, show: !project.show} : project
      })
    })

    setContactColour(false)
  }

  function toggle(id) {
    setProjects(prevProjects => {
      return prevProjects.map((project) => {
        return project.id === id ? {...project, show: !project.show} : project
      })
    })

    setContactColour(true)

  }

  return (
    <div className="app" >

      <div className="main">
          {/* <h1 style={blurStyle}>Rebecca Lim</h1> */}
        <div className="col-1">
          <img style={blurStyle} className="logo" src={require('./images/Bec-logo.png')} />
          <div styles={contactStyle} className="contact-div" style={blurStyle}>
            <Contact />
          </div>
        </div>

        <div className="portfolio-grid">
          <div className="portfolio-row">
            <div className="portfolio-col recent-projects">
              <h2 style={blurStyle}>Recent Projects</h2>
              <ul>
                {projectList}
              </ul>
              {thumbnail}
            </div>
          </div>

          <div className="portfolio-row">
            <div className="about" style={blurStyle}>
              <div className="portfolio-col">
                <h2>About</h2>
                <div>
                  <p>
                    I'm a Malaysian-Australian fullstack developer based in London.
                    I was previously the Manager of Business Systems at <a href="https://www.bluerockdigital.com.au/">BlueRock Digital</a>,
                    a Melbourne-based digital consultancy part of the <a href="https://www.bluerock.com.au/">BlueRock</a> group.
                    That experience gave me an all-rounded view and appreciation of the digital space;
                    I had the opportunity to plan, design and manage the development of digital solutions for clients across various industries.
                  </p>
                  <br></br>
                  <p>
                    The missing puzzle piece for me was getting hands-on and building the solution,
                    so I pivoted slightly and completed the intensive web development course at Le Wagon.
                    I am now on the hunt for junior developer roles.
                  </p>
                </div>
              </div>
              <div className="portfolio-col">
                <h2 className="currently-learning">Currently Learning</h2>
                <ul className="currently-learning">
                  <li>React</li>
                  <li>Shopify Hydrogen Framework</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>

      {projectElements}

    </div>
  );
}

export default App;
