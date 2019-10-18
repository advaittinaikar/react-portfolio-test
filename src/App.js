import React from 'react';
import logo from './logo.svg';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import Projects from './Projects.js';
import Articles from './Articles.js';
import About from './About.js';
import './App.css';

function App() {
  return (
  	
	    <div className="App">
	
            <header className="navigation">                              
	            	<h1 className="portfolio-title">Advait Tinaikar</h1>
	            	<ul>
	            		<li>
	            			<Link to="/" className="item">Projects</Link>
	            		</li>
	            		<li>
	            			<Link to="/articles" className="item">Articles</Link>
	            		</li>
	            		<li>
	            			<Link to="/about" className="item">About</Link>
	            		</li>
	            	</ul>
		            
		            
		            
  			</header>
          		
        	<Route exact path="/" component={Projects} />
	    	<Route exact path="/articles" component={Articles} />
	    	<Route exact path="/about" component={About} />
			
	    </div>
    
  );
}

export default App;
