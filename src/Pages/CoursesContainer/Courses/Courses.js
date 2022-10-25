import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Courses = () => {
    const [Courses, setCourses] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/courses-name')
        .then(res=> res.json())
        .then(data=> setCourses(data))
    },[])
    
    console.log(Courses);
    return (
        <div>
            <h1>This from Main and card {Courses.length}</h1>
            {
                Courses.map(name=> <p key={name.id} >
                    <Link to={`/course-details/${name.id}`}>{name.name}</Link> </p>)
            }


        </div>
    );
};

export default Courses;