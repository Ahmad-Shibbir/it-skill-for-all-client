import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import './CourseDetail.css'

const CourseDetails = () => {
    const { id,duration, name, ratings, instructor, skills, img, description ,level} = useLoaderData();
    return (
        <div>
            <div className='title-container'>
                <div>
                    <h1>Learn {name}</h1>
                    <h4>an {level} level course</h4>
                    <h6>Download the pdf below, to know more about the course</h6>
                    <Button variant="outline-info">Course details pdf</Button>

                </div>

                <div className='info-container'>
                    <div className='info'>
                        <h5>course ratings:{ratings} </h5>
                        <h5>course duration:{duration} </h5>
                        <h5> Learners: {instructor.learners}</h5>
                    </div>
                    <div className='course-img'>
                        <img src={img} alt="" />
                    </div>
                </div>
                <div>


                </div>
            </div>

            <div className='description'>
                

                <div>
                    <h5>Skills you will develop</h5>
                    {
                        skills.map(s => <h4>* {s}</h4>)
                    }
                </div>

                <h5>{description}</h5>
                <br /><br />
            </div>
            <br />
            <div className='premium'>
            <Button variant="outline-info"> <Link to= {`/checkout/${id}`} style={{textDecoration:'none'}}>Get premium access </Link> </Button>
            </div>
            


        </div>
    );
};

export default CourseDetails;