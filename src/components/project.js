import React, { useEffect, useState } from "react";
import Slider from 'react-touch-drag-slider'
import { useSwipeable } from "react-swipeable";
import projectData from '../data/projectData'
// import Carousel, { CarouselItem } from "./carousel"

const photos = [
  {
    id: 'p1',
    url: require('../images/1800d2c-gif.gif'),
  },
  {
    id: 'p2',
    title: 'Merging the digital and real-world experience through custom scavenger hunt games. Two',
  },
  {
    id: 'p3',
    url: require('../images/1800d2c-gif.gif'),
  },
  {
    id: 'p4',
    title: 'Merging the digital and real-world experience through custom scavenger hunt games. Two',
  },
];

export default function Project(props)  {

  const slides = [
    {
      id: 1,
      url: props.slideOne,
    },
    {
      id: 2,
      url: props.slideTwo,
    },
    {
      id: 3,
      url: props.slideThree,
    },
    {
      id: 4,
      url: props.slideFour,
    },
  ]

  // show the photo with this index
  const [currentIndex, setCurrentIndex] = useState(0);

  // move to the next photo
  // if we are at the end, go to the first photo
  const next = () => {
    setCurrentIndex((currentIndex + 1) % slides.length);
  };

  // move to the previous photo
  // if we are at the beginning, go to the last photo
  const prev = () => {
    setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
  };


  return(
    <>
    {props.show &&
    <div className="project-container">
      <div className="project-pane">
        <div className="project-sidebar">
          <div className="project-sidebar-top">
            <img className="close" onClick={()=>props.close(props.id)} src={require('../images/close.png')} />
            <h2>{props.project}</h2>
            <h3>{props.title}</h3>

            {/* Render dots indicator */}

            <div className="indicators">
              <div className='dots'>
                {slides.map((slide) => (
                  <span
                    key={slide.id}
                    // highlight the dot that corresponds to the current photo
                    className={
                      slides[currentIndex].id === slide.id ? 'dot active' : 'dot'
                    }
                    // when the user clicks on a dot, go to the corresponding photo
                    onClick={() => setCurrentIndex(slides.indexOf(slide))}
                  ></span>
                ))}
              </div>
              <div className="pagination">
                  <p>{currentIndex + 1}/{slides.length} </p>
              </div>
            </div>

          </div>

          <div className="project-sidebar-bottom">

            <a target="_blank" href={props.link}>Live Site</a>
            <br></br>
            <a target="_blank" href={props.link}>GitHub</a>
          </div>

        </div>
        <div className="project-preview">

        {/* Render the carousel */}
        <div className='slider-container'>
          {slides.map((slide) => (
            <div
              key={slide.id}

              // if the photo is the current photo, show it
              className={
                slides[currentIndex].id === slide.id ? 'fade' : 'slide fade'
              }
            >

              {/* <img src={props.slideOne}/> */}

              {/* {props.slideOne.toString().includes("/") ? <img src={props.slideOne}/> : <span>{props.slideOne}</span> } */}

              { slide.url.toString().includes("/")  ? <img src={slide.url} className='photo' /> : <h4>{slide.url}</h4> }
              {/* <div className='caption'>{photo.title}</div> */}
            </div>
          ))}

          {/* Previous button */}
          {/* <button onClick={prev} className='prev'>
            Previous
          </button> */}

          {/* Next button */}
          {/* <button onClick={next} className='next'>
            Next
          </button> */}
        </div>



          {/* <Carousel> */}
            {/* <CarouselItem>{props.slideOne.toString().includes("/") ? <img src={props.slideOne}/> : <span>{props.slideOne}</span> }</CarouselItem> */}
            {/* <CarouselItem>{props.slideTwo.toString().includes("/") ? <img src={props.slideTwo}/> : <span>{props.slideTwo}</span>}</CarouselItem> */}
            {/* <CarouselItem>{props.slideThree.toString().includes("/") ? <img src={props.slideThree}/> : <span>{props.slideThree}</span>}</CarouselItem> */}
            {/* <CarouselItem>{props.slideFour.toString().includes("/") ? <img src={props.slideFour}/> : <p>{props.slideFour}</p>}</CarouselItem> */}
          {/* </Carousel> */}


          {/* <Slider
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
            {props.slideOne.includes("images") ? <h1>YES</h1> : <h1>NO</h1>} */}
            {/* {(props.slideOne).includes("images") ? <img src={props.slideOne}/> : <h1>NO</h1>} */}
            {/* { props.slideOne.includes("require") ? <h1>YES</h1> /> : <h1>Hello</h1> } */}
            {/* {props.slideTwo.includes("require") ? <img src={props.slideTwo} /> : <h1>Hello</h1>}
            {props.slideThree.includes("require") ? <img src={props.slideThree} /> : <h1>Hello</h1>}
            {props.slideFour.includes("require") ? <img src={props.slideThree} /> : <h1>Hello</h1>} */}

          {/* </Slider> */}
        </div>
      </div>
    </div>
    }
    </>
  )
}
