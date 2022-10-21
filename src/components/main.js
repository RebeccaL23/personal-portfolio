import React from "react"
import projectData from "../data/projectData"

export default function Main(props) {
  return(
    <div className="page-layout">
      <h1>Rebecca Lim</h1>
      <div className="portfolio-grid">
          <div className="portfolio-col">
            <h2>Recent Projects</h2>
            <ul>
              <li>Trace</li>
              <li>Context</li>
              <li>Whippet Good</li>
              <li>1800-D2C Job Board</li>
              <li>Learn to fold with origa-me</li>
            </ul>
          </div>
          <div className="portfolio-col">
            <h2>About</h2>
            <div><p>I'm a Malaysian-Australian fullstack developer based in London.
            I was previously the Manager of Business Systems at <a href="https://www.bluerockdigital.com.au/">BlueRock Digital</a>, a Melbourne-based digital consultancy part of the <a href="https://www.bluerock.com.au/">BlueRock</a> group.
            That experience gave me an all-rounded view and appreciation of the digital space;
            I had the opportunity to plan, design and manage the development of digital solutions for clients across various industries.</p><br></br>
            <p>The missing puzzle piece for me was getting hands-on and building the solution, so I pivoted slightly and completed the intensive
            web development course at Le Wagon. I am now on the hunt for junior developer roles.</p>
            </div>
          </div>
          <div className="portfolio-col">
            <h2>Currently Learning</h2>
            <ul>
              <li>React</li>
              <li>Shopify Hydrogen Framework</li>
            </ul>
          </div>
      </div>
    </div>
  )
}
