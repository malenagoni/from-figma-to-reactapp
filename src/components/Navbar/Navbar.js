import React from "react";
import "./Navbar.css";
import quierounacasa from "../../icons/quierounacasa.png";
import greenconstruction from "../../icons/greenconstruction.png";
import user from "../../icons/user.png";
import create from "../../icons/create.png";
import cash from "../../icons/cash.png";
import search from "../../icons/search.png";

const quierocasa = {
    constructions: "25",
    people: "71",
    amount: "891.308.499.537 MXN",
};

export const Navbar = () => {
    return (
        <div className="Navbar">
            {/* lEFT */}
            <div className="Navbar-Left">
                <img src={quierounacasa} alt="quierounacasa" width="65px" height="65px" />

                {/* SUBLEFT*/}
                <div className="Navbar-SubLeft">
                    <div className="Navbar-Quierocasa">Quierocasa</div>

                    {/* ITEMS */}
                    <div className="Navbar-Items">
                        <img src={greenconstruction} alt="construction" width="16.25px" height="18.75" />
                        <div className="Navbar-DataFont">{quierocasa.constructions}</div>

                        <img src={user} alt="user" width="18.33px" height="18.33px" />
                        <div className="Navbar-DataFont">{quierocasa.people}</div>

                        <img src={cash} alt="cash" width="8.33pxpx" height="15px" />
                        <select className="Navbar-Amount-Select">
                            <option>{quierocasa.amount}</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* RIGHT*/}
            <div className="Navbar-Right">
                <div className="Navbar-Search">
                    <input type="text" placeholder="Buscar" className='Navbar-Input'/>
                    <button className="Navbar-BtnSearch">
                        <img src={search} alt="search" width="24px" height="24px" />
                    </button>
                </div>
                <button className="Navbar-Btn">
                    <img src={create} alt="create" width="24px" height="24px" />
                    <div className="Navbar-Create">Crear proyecto</div>
                </button>
            </div>
        </div>
    );
};
