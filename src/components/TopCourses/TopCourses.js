import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import DisplayTopCourse from '../DisplayTopCourse/DisplayTopCourse';
import './TopCourses.css';

const TopCourses = () => {
    const [subject, setSubject] = useState([]);
    useEffect(() => {
        fetch('./topCourse.json')
            .then(res => res.json())
            .then(data => setSubject(data));
    }, []);

    return (
        <div className="topCourse pb-5">
            <h1 className="text-center p-3"> Course <span className="courseHeading">Categories</span></h1>
            <Row xs={1} md={2} lg={3} className="g-4 mx-5">
                {
                    subject.map(sub => <DisplayTopCourse
                        key={sub._id}
                        sub={sub}
                    ></DisplayTopCourse>)
                }
            </Row>
        </div>
    );
};

export default TopCourses;