import React from 'react';
import Courses from './Courses/Courses';
import LeftSide from './LeftSide/LeftSide';

const CoursesContainer = () => {
    return (
        <div>
            <LeftSide></LeftSide>
            <Courses></Courses>
        </div>
    );
};

export default CoursesContainer;