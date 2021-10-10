import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import DisplayAllCourse from '../DisplayAllCourse/DisplayAllCourse';
import './AllCourse.css';

const AllCourse = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./generated.json')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, []);

    return (
        <div className="topCourse pb-5">
            <h1 className="text-center p-3">Latest <span className="courseHeading">courses</span></h1>
            <Row xs={1} md={2} lg={3} className="g-4 mx-5">
                {
                    courses.map(cours => <DisplayAllCourse
                        key={cours._id}
                        cours={cours}></DisplayAllCourse>)
                }
            </Row>
        </div>
    );
};

export default AllCourse;