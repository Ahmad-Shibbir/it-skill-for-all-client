import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const LeftSide = () => {

    const [CoursesName, setCoursesName] = useState([])

    useEffect(()=>{
        fetch('https://it-skills-for-all-server.vercel.app/courses-name')
        .then(res=> res.json())
        .then(data=> setCoursesName(data))
    },[])
    
    console.log(CoursesName);
    return (
        <div>
            

            <div style={{margin:'12px 0 0 0'}} className=' margin-top d-flex mx-auto flex-column '>
            {
                CoursesName.map(name=> <p  key={name.id} >
                    <Button style={{width:'250px', margin:'auto 8% '}} variant="outline-info">
                        <Link style={{textDecoration:'none'}} to={`/course-details/${name.id}`}>{name.name}</Link>
                    </Button>{' '}
                     </p>)
            }
            </div>
           
           

        </div>
    );
};

export default LeftSide;