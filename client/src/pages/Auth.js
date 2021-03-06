import React from 'react';
import {Card, Container, Form, Row} from "react-bootstrap";
import {Button} from "react-bootstrap";
import {LOGIN_ROTE, REGISTRATION_ROTE} from "../utils/consts";
import {NavLink, useLocation} from "react-router-dom";

const Auth = () => {

    const location = useLocation();
    const islogin =  location.pathname=== LOGIN_ROTE;
    return (
        <Container
        className="d-flex justify-content-center align-items-center"
        style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">{islogin ? 'Authorization' : 'Registration'}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder = "Enter your email..."
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder = "Enter your password..."
                    />
                    <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
                        {islogin?
                        <div>
                            Don't have an account? <NavLink to = {REGISTRATION_ROTE}>Register</NavLink>
                        </div>
                            :
                        <div>
                            Have an account? <NavLink to = {LOGIN_ROTE}>Enter</NavLink>
                        </div>
                        }
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