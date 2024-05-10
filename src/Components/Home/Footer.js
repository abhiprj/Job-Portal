import React from 'react';
import '../Styles/Home/Footer.css';
// import Logo from '../Images/logo.png'
import envelope from '../Images/envelope.gif';
// import {Link} from 'react-router-dom';

function Footer()
{
    return(
        <div>
            <div className="Footer">
                <div className="row mx-0">
                    <div className="col-md-2 mt-3 Logo mr-5">
                        
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
                        <p>Vellore Institute of Technology, Bhopal, Madhya Pradesh, India</p>
                        <p>+91 6200273542</p>
                        <p>suryamanikumar344@gmail.com</p>
                    </div>
                    <div className='col-md-3'>
                        {/* <img src={envelope} className="col-md-12" alt="gif"></img> */}
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