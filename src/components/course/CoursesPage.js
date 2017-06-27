/**
 * Created by jaures on 26/06/2017.
 */

import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';


class CoursesPage extends React.Component {

  constructor(props,context){
    super(props,context);
  }


  courseRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }

  render () {
/**
    It's  the destructuring shorthand . THat's mean
    const {courses} = this.props; ==> const courses= this.props.courses
    Other concepts are avaible here : https://www.saltycrane.com/blog/2016/03/es6-features-used-react-development/
 */
    const {courses} = this.props;
    
    return(
      <div>
        <h1>Courses</h1>
        <CourseList courses={courses}/>
      </div>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);