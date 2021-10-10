import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './DisplayAllCourse.css';


const DisplayAllCourse = (props) => {
    const { img, courseName, authorName, courseFee, view } = props.cours;
    return (
        <div>
            <Col>
                <Card className="card">
                    <Card.Img variant="top" src={img} style={{ height: '300px', borderRadius: '5px' }} />
                    <Card.Body>
                        <Card.Title><h3>{courseName}</h3></Card.Title>
                        <Card.Title>By : <small className="small">{authorName}</small></Card.Title>
                        <Card.Title>Rating : <small className="small">{view}</small></Card.Title>
                        <Card.Title><small className="small">{courseFee}</small></Card.Title>
                    </Card.Body>
                    <Card.Footer style={{ padding: '0px' }}>
                        <button className="button">Enroll Now</button>
                    </Card.Footer>
                </Card>
            </Col>
        </div>
    );
};

export default DisplayAllCourse;