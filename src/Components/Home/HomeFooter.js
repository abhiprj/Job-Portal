import React, { useEffect, useState } from 'react';
import '../Styles/Home/Footer.css';
// import Logo from '../Images/logo.png';
import envelope from '../Images/envelope.gif';
// import {Link} from 'react-router-dom';

import Register from './Register';
import Login from './Login';

function Footer()
{
    const [signup, showsignup] = useState(false);

    const toggleSignup = e => {
        showsignup(!signup);
    }

    return(
        <div className="MyFooter">
            <div className="preFooter pt-5 pb-3">
                <h1>Got a Question?</h1>
                <p>We're here to help. Check out our FAQs, send us an email or call us at <span>+91 6200273542</span></p>
                <button className="sign" onClick={toggleSignup}>Sign Up</button>
                {signup && <Register open={toggleSignup} close={toggleSignup} signup={signup}/>}
            </div>
            <div className="Footer">
                <div className="row mx-0">
                    <div className="col-md-2 Logo mr-5">
                        {/* <img src={Logo} style={{height:"200px"}} className="col-md-12"></img> */}
                    </div>
                    <div className="col-md-4 content">
                        <h5>Frequently Asked Questions</h5>
                        <hr className="footline"></hr>
                        <p><a href="#"><span> - </span> How to Register</a></p>
                        <p><a href="#"><span> - </span> Privacy and Security </a></p>
                        <p><a href="#"><span> - </span> Lending Licenses </a></p>
                        <p><a href="#"><span> - </span> Terms and Conditions </a></p>
                    </div>
                    <div className="col-md-2 content">
                        <h5>Contact Us</h5>
                        <hr className="footline"></hr>
                        <p>Bhopal sehore MadhyaPradesh</p>
                        <p>+91 6200273542</p>
                        <p>suryamanikumar344@gmail.com</p>
                    </div>
                    <div className='col-md-3 pt-3'>
                        {/* <img src={envelope} className="col-md-12"></img> */}
                    </div>
                </div>
            </div>
            <div className="copyright py-1">
                <h6><b>Copyright © 2024 JobBoardRevamp | All rights reserved.</b></h6>
            </div>
        </div>
    );
}

export default Footer;