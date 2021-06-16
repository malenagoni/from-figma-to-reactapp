import React, { useState } from "react";
import "./Card.css";
import cash from "../../icons/cash.png";
import pcrimg from "../../icons/pcr.png";
import ppcimg from "../../icons/ppc.png";
import okay from "../../icons/okay.png";
import m2 from "../../icons/m2.png";
import user2 from "../../icons/user2.png";
import Datecalendar from "../../icons/Datecalendar.png";
import star from "../../icons/wishlist.png";
import fullstar from "../../icons/fullstar.png";


export const Card = ({ state, date, people, name, wishlist, address, price, size, progress, ppc, pcr, image }) => {

    const [isWishlist, setWishlist] = useState(wishlist)

    function onclick() {
        isWishlist?setWishlist(false):setWishlist(true)
    }

    return (
        <div className="Card">
            <div className="Card-Image">
                {" "}
                {/*imagen */}
                <img src={image} alt={name} width="366px" height="235px" className="Card-Image-Img" />
                <div className="Card-Image-Data">
                    <div className="Card-Image-Data-Header">
                        <div className="Card-Image-Data-Header-A">
                            {state === "Iniciado" && <div className="Card-State-Iniciado">{state}</div>}
                            {state === "No Iniciado" && <div className="Card-State-NoIniciado">{state}</div>}
                            {state === "Detenido" && <div className="Card-State-Detenido">{state}</div>}
                            {state === "Finalizado" && <div className="Card-State-Finalizado">{state}</div>}
                            <button className="Card-Star">
                                {isWishlist? <img src={fullstar} alt={fullstar} width="27px" height="26px" style={{ cursor: "pointer" }} onClick={(e) => onclick(e)}/>:
                                <img src={star} alt={star} width="24px" height="21px" style={{ cursor: "pointer" }} onClick={() => onclick()}/>
                                }
                                
                            </button>
                        </div>
                        <div className="Card-Image-Data-Header-B">
                            <div className="Card-Description-Data">
                                <img src={Datecalendar} alt={Datecalendar} width="20px" height="20px" className="Card-Description-Data-Img" />
                                <div style={{ paddingRight: "8px", fontSize: "14px", fontWeight: "400" }}>{date}</div>
                            </div>
                            <div className="Card-Description-Data">
                                <img src={user2} alt={user2} width="20px" height="20px" className="Card-Description-Data-Img" />
                                <div style={{ fontSize: "14px", fontWeight: "200", fontStyle: "normal" }}>{people}</div>
                            </div>
                        </div>
                    </div>
                    <div className="Card-Image-Data-Footer">
                        <div className="Card-Image-Data-Footer-Name">{name}</div>
                        <div className='Card-Image-Data-Footer-Address'>{address}</div>
                    </div>
                </div>
            </div>
            <div className="Card-Description">
                <div className="Card-Description-Header">
                    <div className="Card-Description-Data">
                        <img src={cash} alt="cash" width="10px" height="18px" className="Card-Description-Data-Img" />
                        {price}
                    </div>
                    <div className="Card-Description-Data">
                        <img src={m2} alt="m2" width="24px" height="24px" className="Card-Description-Data-Img" />
                        {size}
                    </div>
                </div>
                <div className="Card-Description-Footer">
                    <div className="Card-Description-Data">
                        <img src={okay} alt="okay" width="20px" height="20px" className="Card-Description-Data-Img" />
                        {progress}
                    </div>
                    <div className="Card-Description-Data">
                        <img src={ppcimg} alt="ppc" width="24px" height="24px" className="Card-Description-Data-Img" />
                        {ppc}
                    </div>
                    <div className="Card-Description-Data">
                        <img src={pcrimg} alt="pcr" width="24px" height="24px" className="Card-Description-Data-Img" />
                        {pcr}
                    </div>
                </div>
            </div>
        </div>
    );
};
