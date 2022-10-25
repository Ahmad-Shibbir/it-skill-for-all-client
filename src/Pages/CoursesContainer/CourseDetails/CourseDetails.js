import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const {duration,name, ratings,instructor,skills} = useLoaderData();
    return (
        <div>
            <h1>From course details page {name}</h1>
            <h1> {ratings}</h1>
            <h1> {duration}</h1>
            <h1> {instructor.learners}</h1>
            {
                skills.map(s=> <p>{s}</p>)
            }
        </div>
    );
};

export default CourseDetails;