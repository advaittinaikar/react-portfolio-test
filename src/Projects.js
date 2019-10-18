import React from "react"
import Thumbnail from './Thumbnail.js'
import Twitter from './Twitter.js'
import './App.css'
 
function Projects(props) {
  return (

	    <div>
	      <h2 class="heading">Projects</h2>

			<Thumbnail
			  link="/twitter"
			  image="https://s3.amazonaws.com/codecademy-content/courses/learn-handlebars/musicon/electronic-keyboard.png"
			  title="Twitter Newsfeed"
			  category="Mobile App"
			/>
			 
			<Thumbnail
			  link="/airbnb"
			  image="https://s3.amazonaws.com/codecademy-content/courses/learn-handlebars/musicon/electronic-keyboard.png"
			  title="Airbnb Experiences"
			  category="Website"
			/>
			 
			<Thumbnail
			  link="/photoshop"
			  image="https://s3.amazonaws.com/codecademy-content/courses/learn-handlebars/musicon/electronic-keyboard.png"
			  title="Photoshop Redesign"
			  category="Desktop App"
			/>

	    </div>

  )
}
 
export default Projects;