import React from "react"
import Slider from 'react-touch-drag-slider'
import Carousel, { CarouselItem } from "./carousel"

export default function Project(props) {

  return(
    <>{props.show &&
    <div className="project-container">
      <div className="project-pane">
        <div className="project-sidebar">
          <div className="project-sidebar-top">
            <img className="close" onClick={()=>props.close(props.id)} src={require('../images/close.png')} />
            <h2>{props.project}</h2>
            <h3>{props.title}</h3>
          </div>

          <div className="project-sidebar-bottom">

            <a target="_blank" href={props.link}>Live Site</a>
            <br></br>
            <a target="_blank" href={props.link}>GitHub</a>
          </div>

        </div>
        <div className="project-preview">
          <Carousel>
            <CarouselItem>{props.slideOne.toString().includes("/") ? <img src={props.slideOne}/> : <p>{props.slideOne}</p> }</CarouselItem>
            <CarouselItem>{props.slideTwo.toString().includes("/") ? <img src={props.slideTwo}/> : <p>{props.slideTwo}</p>}</CarouselItem>
            <CarouselItem>{typeof slideThree === 'string' ? <p>{props.slideThree}</p> : <img src={props.slideOne}/>}</CarouselItem>
            <CarouselItem>{typeof slideFour === 'string' ? <p>{props.slideFour}</p> : <img src={props.slideOne}/>}</CarouselItem>
          </Carousel>


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
            <div><img src={props.slideOne}/></div>
            <div><img src={props.slideTwo}/></div>
            <div><img src={props.slideThree}/></div>
            <div><img src={props.slideFour}/></div>
            {props.slideOne.includes("images") ? <h1>YES</h1> : <h1>NO</h1>}
            {/* {(props.slideOne).includes("images") ? <img src={props.slideOne}/> : <h1>NO</h1>} */}
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
