import React from 'react';

function Footer(props) {
    return (
        <div id="footer-section">
            <div className="footer-social">
                <ul>
                    <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i className="fa fa-skype" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i className="fa fa-youtube-play" aria-hidden="true"></i></a></li>
                </ul>
            </div>
            <div className="footer-nav">
                <ul>
                    <li><a href="#">home</a></li>
                    <li><a href="#">listenning</a></li>
                    <li><a href="#">speaking</a></li>
                    <li><a href="#">reading</a></li>
                    <li><a href="#">writing</a></li>
                </ul>
            </div>
            <div className="footer-copyright">
                <h2>“The limits of my language mean the limits of my world.”</h2>
                <p>© copyright @ 2022 by <span>Dat</span> all rights reserved!</p>
            </div>
        </div>
    );
}

export default Footer;