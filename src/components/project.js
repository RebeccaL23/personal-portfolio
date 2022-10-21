import React from "react"

export default function Project(props) {

  return(
    <>{props.show &&
    <div className="project-container">
      <div className="project-pane">
        <div className="project-sidebar">
          <p onClick={()=>props.close(props.id)}>Close</p>
          <p>{props.project}</p>
          <p>{props.title}</p>
          <a target="_blank" href={props.link}>View project</a>
        </div>
        <div className="project-preview">
          {/* <img src={require('../images/job-board.png')} /> */}
        </div>
      </div>
    </div>
    }
    </>
  )
}
