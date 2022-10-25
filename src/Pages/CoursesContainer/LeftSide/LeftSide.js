import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSide = () => {

    const [Courses, setCourses] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/courses-name')
        .then(res=> res.json())
        .then(data=> setCourses(data))
    },[])
    
    console.log(Courses);
    return (
        <div>
            <h1>This from left side bar {Courses.length}</h1>
            {
                Courses.map(name=> <p key={name.id} >
                    <Link>{name.name}</Link> </p>)
            }


        </div>
    );
};

export default LeftSide;