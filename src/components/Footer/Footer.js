import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {

    return (
        <div className="footer-container">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 row-sm">
                        <div className="left-container text-start">
                            <h1>Dynamic online Institute</h1>
                            <small>
                                These Course are not intended to
                                diagnose.
                            </small>
                            <div className="icon my-5">
                                <FontAwesomeIcon icon={faCoffee} />
                            </div>
                            <div className="map d-flex ">
                                <div className="foter-icon">
                                    {/* <FontAwesomeIcon icon={faMapMarkedAlt} /> */}
                                </div>
                                <div>
                                    <p>
                                        160 Dhanmondhi, Dhaka, Bangladesh,
                                        <br />  101/A 1stlan, kolabagan,
                                    </p>
                                </div>
                            </div>
                            <small>Dynamic ©  All rights reserved.</small>

                        </div>
                    </div>
                    <div className="col-md-6 row-sm">

                        <div className="right-container ms-5">
                            <h1 className="mt-2">Contact us</h1>

                            {/* <div className="icons-container d-flex text-center ">
                                
                                <div className="icon">
                                    
                                    <FontAwesomeIcon icon={faInstagramSquare} />
                                </div>
                                {<div className="icon">
                                    <FontAwesomeIcon icon={faTwitterSquare} />
                                </div>
                                <div className="icon">
                                    <FontAwesomeIcon icon={faYoutube} />
                                </div>
                                <div className="icon">
                                    <FontAwesomeIcon icon={faFacebookSquare} />
                                </div>
                            </div> */}

                            <div className="d-flex  mt-4">
                                <div className="foter-icon">
                                    {/* <FontAwesomeIcon icon={faPhoneVolume} /> */}
                                </div>
                                <div className="my-3">
                                    <h5>+1 8 800 555 35 35</h5>
                                    <small>dynamicCourse@gmail.com</small><br />
                                    <small>dynamicCourse@Email.com</small><br />
                                    <small>dynamicCourse@yahoo.com</small>
                                </div>
                            </div>
                            <div className="my-3">
                                <h3>Sign up for the newsletter</h3>
                                <input type="text"
                                    className="footer-input"
                                    placeholder="Enter Email"
                                />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;