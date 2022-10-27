import React from 'react';
import { Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import './Home.css'
const Home = () => {
    return (
        <div className='home-container'>
            <h1>Let's Learn with ITskills4all</h1>
            <p>Our site have verity of courses for IT students</p>
            <Button variant="outline-info"> <Link to= '/courses-container' style={{textDecoration:'none'}}>Get Courses </Link> </Button>
            <div className=' carousel-container'>

                <Carousel>
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100"
                            src="https://waftengine.org/public/blog/1B5EE4D5D773F8A-RR.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                            className="d-block w-100"
                            src="https://www.twine.net/blog/wordpress/wp-content/uploads/2022/07/Screenshot-2022-07-19-at-11.17.55.png"
                            alt="Second slide"
                        />
                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://www.whizlabs.com/blog/wp-content/uploads/2021/11/Data-Mining-Vs-Big-Data.png"
                            alt="Third slide"
                        />
                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>


    );
};

export default Home;