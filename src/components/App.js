import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';

// App components
import Home from './Home';
import About from './About';
import Courses from './Courses';
import Teachers from './Teachers';
import NotFound from './NotFound';
import Featured from './Featured';

const App = () => (
  <Router>
    <div className="container">
      <header>
        <span className="icn-logo"><i className="material-icons">code</i></span>
        <ul className="main-nav">
          <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/teachers">Teachers</NavLink></li>
          <li><NavLink to="/courses">Courses</NavLink></li>
        </ul>       
      </header>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" render={ () => <About title="About" /> }  />
        <Route path="/teachers" component={Teachers} />
        <Route path="/courses" component={Courses} />
        <Route path="/featured/:topic/:name" component={Featured} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

export default App;