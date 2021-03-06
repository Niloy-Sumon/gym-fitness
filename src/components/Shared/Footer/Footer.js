import React from 'react';
import './Footer.css';
import FooterCol from '../FooterCol/FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const noNamed = [
        {name: "Power zone gym" , link: "/home"},
        {name: "Get Service" , link: "/service"},
        {name: "GROUP FITNESS" , link: "/personal-treatment"},
        {name: "PERSONAL TRAINER" , link: "/tooth-extract"},
        {name: "CARDIO PROGRAM" , link: "/Service"},
    ]
    const ourAddress = [
        {name: "New York - 101010 Hudson" , link: "//google.com/map"},
        {name: "Yards" , link: "//google.com/map"},
       
    ]
    const ourService = [
        {name: "Functional Training Area" , link: "/emergency"},
        {name: "Get Services" , link: "/Service"},
        {name: "GROUP FITNESS" , link: "/group-fitness"},
        {name: "Get Services" , link: "/Service"},
        {name: "Get Services" , link: "/Service"},
        {name: "Get Services" , link: "/Service"}
    ]
    const services = [
        {name: "Zumba Aerobics" , link: "/emergency"},
        {name: "Get Services" , link: "/Service"},
        {name: "fitness" , link: "/fitness"},
        {name: "Body Health" , link: "/Health"},
        {name: "Get Services" , link: "/Service"},
        {name: "Get Services" , link: "/Service"},
        {name: "Get Services" , link: "/Service"}
    ]
    return (
        <footer className="footer-area clear-both text-white">
        <div className="container pt-5">
            <div className="row py-5 ">
                <FooterCol key={1} menuTitle={"."} menuItems={noNamed}/>
                <FooterCol key={2} menuTitle="Services" menuItems={services}/>
                <FooterCol key={3} menuTitle=" Personal Training" menuItems={ourService}/>
                <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}> 
                    <ul className="social-media list-inline">
                        <li className="list-inline-item"><a href="https://www.facebook.com/Abidur.Niloy.DarkCoder/"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                        <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                        <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                    </ul>
                    <div className="mt-5">
                        <h6>Call now</h6>
                        <button className="btn btn-primary">+88 01740 100570</button>
                    </div>
                </FooterCol>
            </div>
            <div className="copyRight text-center">
                <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
            </div>
        </div>
    </footer>
    );
};

export default Footer;