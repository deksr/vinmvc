var React = require('react');
var ReactDOM = require('react-dom');

import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import  WholeSite from './a-wholesite.js';

import  AboutPageHere from './b-aboutpage.js';
import  ProductPageHere from './c-productpage.js';
import  HomePageHere from './aa-homepage.js';



ReactDOM.render(
  <div>
  <h4> Some Site in routefile.js</h4>
    <Router history = {hashHistory}>
	      <Route path='/' component={WholeSite}> 
	      <IndexRoute component={HomePageHere}/>
	        <Route path='plantseeds' component={ProductPageHere}></Route>
	        <Route path='aboutourcompany' component={AboutPageHere}></Route>
	        <Route path='homepage' component={HomePageHere}></Route>


	      </Route>
    </Router>
  </div>
  ,document.getElementById('example')
);

// # Bookmark - navigations not working. 
