import React from 'react';
import { Carousel } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Banner.css';
import img1 from '../../images/img1.jpg';
import img2 from '../../images/img2.jpg';
import img3 from '../../images/img3.jpg';

const Banner = () => {
    const history = useHistory();
    const handleButton = () => {
        history.push('/topCourses');
    }
    return (
        <div className="App">
            <div className="banner row-md d-md-flex bannerDown align-items-center justify-content-center">
                <div className="col-md-6 row-sm">
                    <h2 className="title">
                        <span>CREATE</span> a successful <br /> online <span>COURSE</span>
                    </h2>
                    <p className="text-white text-center ms-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                        tellus luctus nec ullamcorper mattis.
                    </p>
                    <button onClick={handleButton} className="mt-3 about-btn">COURSES</button>
                </div>
                <div className="col-md-6 row-sm p-5">
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={img1} height="400px"
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={img2} height="400px"
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={img3} height="400px"
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </div>
    );
};

export default Banner;