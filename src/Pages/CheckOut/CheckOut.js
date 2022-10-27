import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CheckOut = () => {

    const {name, description,instructor} = useLoaderData();
   
    const checkOutMsg =()=>{
        alert("checkOut is successfull");
    }
    return (
        <div>
            <Card className="text-center">
                <Card.Header>premium access</Card.Header>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        please click the button below to get premium access 
                    </Card.Text>
                    <Button onClick={checkOutMsg} variant="primary">Checkout</Button>
                </Card.Body>
                <Card.Footer className="text-muted">You will join with {instructor.learners} learners</Card.Footer>
            </Card>
        </div>
    );
};

export default CheckOut;