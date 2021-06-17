import React from "react";
import "./Layout.css";
import ipsum from "../../icons/ipsum.png";
import bellactive from "../../icons/bellactive.png";
import help from "../../icons/help.png";
import profilepic from "../../icons/profilepic.png";
import { Navbar } from "../Navbar/Navbar";
import { CardsContainer } from "../CardsContainer/CardsContainer";
import { Footer } from "../Footer/Footer";

export const Layout = () => {
    return (
        <div className="Layout">
            <div className="Layout-Items">
                <button className="Layout-Ipsum">
                    <img src={ipsum} alt="ipsum" width="24px" height="24px" />
                </button>
                <div className="Layout-Buttons">
                    <button className="Layout-Btn">
                        <img src={bellactive} alt="bellactive" width="24px" height="24px" />
                    </button>
                    <button className="Layout-Btn">
                        <img src={help} alt="help" width="20px" height="20px" />
                    </button>
                    <button className="Layout-Btn">
                        <img src={profilepic} alt="profilepic" width="24px" height="24px" />
                    </button>
                </div>
            </div>
            <Navbar />
            <CardsContainer />
            <Footer />
        </div>
    );
};
