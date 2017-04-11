import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

// App components
import Header from './Header';
import Home from './Home';
import About from './About';
import Courses from './Courses';
import Teachers from './Teachers';
import NotFound from './NotFound';
import Featured from './Featured';

const App = (props) => (
  <Router>
    <div className="container">
      <Header />
      
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