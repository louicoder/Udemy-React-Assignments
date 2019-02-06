import React, { Component } from 'react';

import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';
import {BrowserRouter, Route, Link, Switch, Redirect} from 'react-router-dom';
// import Course from './containers/Course/Course';
import NotFound from './containers/Errors/ErrorHandler';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <nav>
            <ul>
              <li>
                <Link to="/">courses</Link>
              </li>
              <li>
                <Link to="/users">users</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/users" exact component={Users} />
            {/* <Route path="/:title/:id" exact component={Courses} /> */}
            <Redirect from="/all-courses" to="/"/>
            <Route path="/"  component={Courses} />
            <Route path="/courses"  component={Courses} />

            <Route component={NotFound} />

          </Switch>
          
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
