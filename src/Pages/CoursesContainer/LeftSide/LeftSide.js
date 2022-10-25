import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSide = () => {

    const [CoursesName, setCoursesName] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/courses-name')
        .then(res=> res.json())
        .then(data=> setCoursesName(data))
    },[])
    
    console.log(CoursesName);
    return (
        <div>
            <h1>This from left side bar {CoursesName.length}</h1>
            {
                CoursesName.map(name=> <p key={name.id} >
                    <Link to={`/course-details/${name.id}`}>{name.name}</Link> </p>)
            }


        </div>
    );
};

export default LeftSide;