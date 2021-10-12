import React from 'react';
import {Card, Container, Form, NavLink, Row} from "react-bootstrap";
import {Button} from "react-bootstrap";
import {REGISTRATION_ROTE} from "../utils/consts";

const Auth = () => {
    return (
        <Container
        className="d-flex justify-content-center align-items-center"
        style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">Authorization</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-2"
                        placeholder = "Enter your email..."
                    />
                    <Form.Control
                        className="mt-2"
                        placeholder = "Enter your password..."
                    />
                    <Row className="mb-3">
                        <div>
                            Don't have an account? <NavLink to = {REGISTRATION_ROTE}>Register</NavLink>
                        </div>
                        <Button>
                            Submit
                        </Button>
                    </Row>
                </Form>
            </Card>
        </Container>
    );
};

export default Auth;