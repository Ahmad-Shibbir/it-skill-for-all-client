import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Courses = () => {
    const [Courses, setCourses] = useState([])

    useEffect(() => {
        fetch('https://it-skills-for-all-server.vercel.app/courses-name')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    console.log(Courses);
    return (
        <div>
            <div className='mb-2 d-flex flex-wrap justify-content-center justify-content-around  '>
                {
                    Courses.map(course => <div className='m-8'>
                        <Card style={{ width: '18rem',height:'95%', margin:'10px' }} className='mb-8' >
                            <Card.Img variant="top" src={course.img} />
                            <Card.Body>
                                <Card.Title >
                                    {course.name}
                                </Card.Title>
                                <Card.Text>
                                    {/* {course.description} */}
                                </Card.Text>
                                <Button variant="outline-info" >
                                    <Link style={{textDecoration:'none'}} to={`/course-details/${course.id}`}>Course Details </Link>
                                </Button>
                            </Card.Body>
                        </Card>
                    </div>)
                }
            </div>






        </div>
    );
};

export default Courses;