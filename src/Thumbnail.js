import React from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import Twitter from './Twitter.js'
import './App.css'

function Thumbnail(props){
	return (
		// <BrowserRouter>
		<div>
			<div className="project">
				<Link to={props.link}>
					<div className="project-image">
					  <img src={props.image} id="project-img-id" alt="Project Image"/>
					</div>
					<div className="project-title">{props.title}</div>
					<div className="project-category">{props.category}</div>
				</Link>
	    	</div>

	    	<Route exact path="/twitter" component={Twitter}/>
    	</div>
		
		);
}

export default Thumbnail;


