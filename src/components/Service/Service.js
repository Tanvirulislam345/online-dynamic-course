import React from 'react';
import { Accordion } from 'react-bootstrap';
import './Service.css';
import img from '../../images/faq.png';

const Service = () => {
    return (
        <div className="container mb-5">
            <h2 className="text-center p-5">Our <span>service</span></h2>
            <div className="row-md d-md-flex align-item-center justify-content-center pb-5">
                <div className="col-md-6 row-sm p-5 ">
                    <img src={img} alt="" width="100%" className="image" />
                </div>
                <div className="col-md-6 row-sm">
                    <Accordion defaultActiveKey="0" flush>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header> <h5>Learn Python</h5> </Accordion.Header>
                            <Accordion.Body className="accordianBody">
                                1. Learn to use Python professionally, learning both Python 2 and Python 3! <br />
                                2. Create games with Python, like Tic Tac Toe and Blackjack! <br />
                                3.  Learn advanced Python features, like the collections module and how to work with timestamps! <br />
                                4. Learn to use Object Oriented Programming with classes!
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header> <h5>Learn Web Development</h5> </Accordion.Header>
                            <Accordion.Body>
                                COMPLETELY REDONE - The only course you need to learn web development - <br />
                                * HTML, CSS, JS <br />
                                * Node, and More! <br />
                                1. The ins and outs of HTML5, CSS3, and Modern JavaScript for 2021 <br />
                                2. Make REAL web applications using cutting-edge technologies <br />
                                3.Create responsive, accessible, and beautiful layouts <br />
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header> <h5>Learn React Crash Course</h5> </Accordion.Header>
                            <Accordion.Body>
                                Build powerful, fast, user-friendly and reactive web apps
                                Provide amazing user experiences by leveraging the power of JavaScript with ease
                                Apply for high-paid jobs or work as a freelancer in one the most-demanded sectors you can find in web dev right now
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header> <h5>Learn App Development</h5> </Accordion.Header>
                            <Accordion.Body>
                                Be able to build any app you want
                                Start your own app based business
                                Create a portfolio of apps to apply for junior developer jobs at a technology company
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header> <h5>Learn Game Development</h5> </Accordion.Header>
                            <Accordion.Body>
                                Be able to build any app you want
                                Start your own app based business
                                Create a portfolio of apps to apply for junior developer jobs at a technology company
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>

            </div>
        </div>
    );
};

export default Service;