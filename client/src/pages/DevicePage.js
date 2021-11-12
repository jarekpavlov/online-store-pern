import React from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import star from '../assets/Star.png'
const DevicePage = () => {
    const device={id:1, name: "12 pro", price:25000, rating: 5, img: `https://www.purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png`};
    const description= [
        {id:1, title: "RAM", description:'2Gb' },
        {id:2, title: "Camera", description:'12Mpx' },
        {id:3, title: "Processor", description:'2 core'},
        {id:4, title: "Akku", description:'4000Ah'}
    ];

    return (
        <Container className="mt-3">
            <Row>
                <Col md={4} >
                    <Image width={300} height={300} src = {device.img}/>
                </Col>
                <Col md={4}>
                    <Row className="d-flex flex-column align-items-center">
                        <h2>{device.name}</h2>
                        <div
                            className="d-flex align-items-center justify-content-center"
                            style={{background: `url(${star}) no-repeat center center`, width: 280, height: 280, backgroundSize:'cover', fontSize: 64}}>
                            {device.rating}
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around"
                        style={{width:300, height:300,fontSize:32, border: '5px solid lightgray'}}
                    >
                        <h3>From: {device.price}$</h3>
                        <Button variant="outline-dark">Add to the basket</Button>
                    </Card>
                </Col>
            </Row>
            <Row className="d-flex flex-column m-3">
                <h1>Specifications</h1>
                {description.map((info,index)=>
                    <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgrey' : 'transparent', padding: 10}} >
                        {info.title}: {info.description}
                    </Row>
                )}
            </Row>
        </Container>
    );
};

export default DevicePage;