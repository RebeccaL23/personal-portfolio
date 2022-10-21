import React from "react"
import Slider from 'react-touch-drag-slider'
import images from '../data/images'
import projectData from '../data/projectData'

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

          <Slider
            onSlideComplete={(i) => {
              console.log('finished dragging, current slide is', i)
            }}
            onSlideStart={(i) => {
              console.log('started dragging on slide', i)
            }}
            activeIndex={0}
            threshHold={100}
            transition={0.5}
            scaleOnDrag={true}
            >
            <div><h1>Hello</h1></div>
            {/* {props.slideOne.includes("require") ? <h1>YES</h1> : <h1>NO</h1>} */}
            {(props.slideOne).includes("images") ? <img src={props.slideOne}/> : <h1>NO</h1>}
            {/* { props.slideOne.includes("require") ? <h1>YES</h1> /> : <h1>Hello</h1> } */}
            {/* {props.slideTwo.includes("require") ? <img src={props.slideTwo} /> : <h1>Hello</h1>}
            {props.slideThree.includes("require") ? <img src={props.slideThree} /> : <h1>Hello</h1>}
            {props.slideFour.includes("require") ? <img src={props.slideThree} /> : <h1>Hello</h1>} */}

          </Slider>
        </div>
      </div>
    </div>
    }
    </>
  )
}
