import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Courses from './Courses/Courses';
import LeftSide from './LeftSide/LeftSide';

const CoursesContainer = () => {
    return (
        <div>
            <Row>
                <Col xs={3}>
                    <LeftSide></LeftSide>
                </Col>
                <Col xs={9}>
                    <Courses></Courses>
                </Col>
            </Row>
            
            
        </div>
    );
};

export default CoursesContainer;