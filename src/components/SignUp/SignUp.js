import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Form } from 'react-bootstrap';
import './SignUp.css';

const SignUp = () => {
    return (
        <div className="container">
            <Form className="w-50 mx-auto pt-5">
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
            </Form>
            <div className="w-25 mx-auto mb-5">
                <Button variant="outline-primary" className="formButton">submit</Button>
            </div>
        </div>
    );
};

export default SignUp;