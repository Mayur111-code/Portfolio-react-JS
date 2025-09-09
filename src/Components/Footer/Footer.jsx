import React from "react";
import './Footer.css';
import logomayur from '../../assets/logomayur.svg';
import user_icon from'../../assets/user_icon.svg';

const Footer = () =>{


    return(

        <div id="contact" className="footer">
            <div className="footer-top">
                <div className="footer-top-left">
                    <img src={logomayur} style={{width:"100px"}} alt="" />
                    <p>Crafting modern and responsive web experiences with passion and precision.</p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src={user_icon} alt="" />
                        <input type="email" placeholder="Enter your email" />
                    </div>
                    <div className="footer-subscribe">subscribe</div>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p className="footer-bottom-left"> &#169; 2025 Mayur Borse. All rights</p>
                <div className="footer-bottom-right">
                   <p>Term of services</p>
                   <p>Privacy Policy</p>
                   <p>Connect with me</p>
                </div>
            </div>
        </div>

    )
}

export default Footer;