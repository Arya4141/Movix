import React from "react";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                Your ultimate movie companion! Explore a vast library of films and TV shows with IMDb ratings and show popularity at your fingertips. With easy sorting options, discover new favorites or revisit classics based on your preferences. Whether you're a film enthusiast or casual viewer, Movix empowers you to curate your entertainment experience like never before. Elevate your movie nights with Movix – where cinematic exploration meets convenience.
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
