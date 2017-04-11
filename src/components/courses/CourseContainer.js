import React from 'react';
import PropTypes from 'prop-types';
import Course from './Course';

const CourseContainer = (props) => {

  let courseList = props.data;
  let courses = courseList.map((course) => {
    return <Course title={course.title}
                   desc={course.description}
                   img={course.img_src}
                   key={course.id} />    
  });

  return (
    <div>
      <ul>
        {courses}
      </ul>
    </div>
  );
}

CourseContainer.propTypes = {
  data: PropTypes.array.isRequired     
};

export default CourseContainer;