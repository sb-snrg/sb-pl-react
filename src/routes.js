/**
 * Created by jaures on 26/06/2017.
 */
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/course/CoursesPage';
import ManageCoursePage from './components/course/ManageCoursePage';

export default (
  /**
   * HomePage and AboutPage are the childen of App Commpoment. It's why
   * we add the props {this.props.children} in app.js code (for routing)
   *
   **/

  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="courses" component={CoursesPage} />
    <Route path="course" component={ManageCoursePage} />
    <Route path="course/:id" component={ManageCoursePage} />
    <Route path="about" component={AboutPage} />

  </Route>
);
