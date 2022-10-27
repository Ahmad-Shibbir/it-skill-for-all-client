import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const FAQ = () => {
    return (
        <div>
            <h1 style={{textAlign:'center', margin:"20px"}}>Frequently asked question</h1>
            <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>Why I need to login in checkout page</Accordion.Header>
                <Accordion.Body>
                    In, checkout page, developer use private route to prevent unauthorized user. you must login to access this page.other than checkout page you can visit all other page in this site. if you have any other inquiry, please contact with us.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>In blog page, why user can not write the blog</Accordion.Header>
                <Accordion.Body>
                  For now just admin can upload blog. 
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
        </div>
        
    );
};

export default FAQ;