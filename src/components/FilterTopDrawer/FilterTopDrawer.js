import React from "react";
import cleanb from "../../icons/cleanb.svg";
import clean from "../../icons/clean.svg";
import blackfilter from "../../icons/blackfilter.png";
import close from "../../icons/close.png";
import filledfilter from "../../icons/filledfilter.png";
import "./FilterTopDrawer.css";
import { filterData } from "../../data";
import { data } from "../../data";

export const FilterTopDrawer = ({ setIsOpen, setDataCards, setSubtitle }) => {
    function onClick() {
        setIsOpen(false);
    }

    function filterCards() {
        setDataCards(filterData);
        setIsOpen(false);
        setSubtitle("(Iniciado, De la A a la Z)");
    }
    function cleanFilters() {
        setDataCards(data);
        setIsOpen(false);
        setSubtitle("(Todos)");
    }

    return (
        <div className="FilterTopDrawer">
            <div className="FilterTopDrawer-Header">
                <div className="FilterTopDrawer-Header-Title">
                    <img src={blackfilter} alt="blackfilter" width="20px" height="20px" />
                    <div style={{ paddingLeft: "10px" }}>Filtros y ordén</div>
                    <div className="FilterTopDrawer-Header-SubTitle">(Iniciado, De la A a la Z)</div>
                </div>
                <button className="FilterTopDrawer-Header-CloseBtn" onClick={onClick}>
                    <img src={close} alt="close" width="24px" height="24px" />
                </button>
            </div>
            <div className="FilterTopDrawer-Content">
                <div className="FilterTopDrawer-Content-Options">
                    <div className="FilterTopDrawer-Content-Options-Title">Estado:</div>
                    <div className="FilterTopDrawer-Content-Select-Wrapper">
                        <select className="FilterTopDrawer-Content-Select">
                            <option className="FilterTopDrawer-Content-Select-Options">Iniciado</option>
                        </select>
                    </div>
                </div>
                <div className="FilterTopDrawer-Content-Options">
                    <div className="FilterTopDrawer-Content-Options-Title">Nombre:</div>
                    <div className="FilterTopDrawer-Content-Select-Wrapper">
                        <select className="FilterTopDrawer-Content-Select">
                            <option className="FilterTopDrawer-Content-Select-Options">A a la Z</option>
                        </select>
                    </div>
                </div>
                <div className="FilterTopDrawer-Content-Options">
                    <div className="FilterTopDrawer-Content-Options-Title">Fecha:</div>
                    <div className="FilterTopDrawer-Content-Select-Wrapper">
                        <select className="FilterTopDrawer-Content-Select">
                            <option className="FilterTopDrawer-Content-Select-Options">Escoge una opción</option>
                        </select>
                    </div>
                </div>
                <div className="FilterTopDrawer-Content-Options">
                    <div className="FilterTopDrawer-Content-Options-Title">Tamaño:</div>
                    <div className="FilterTopDrawer-Content-Select-Wrapper">
                        <select className="FilterTopDrawer-Content-Select">
                            <option className="FilterTopDrawer-Content-Select-Options">Escoge una opción</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="FilterTopDrawer-Footer">
                <button className="FilterTopDrawer-Footer-Limpiar" onClick={cleanFilters}>
                    <img src={cleanb} alt="cleanb" width="24px" height="24px" className="BtnLimpiar" />
                    <img src={clean} alt="clean" width="24px" height="24px" className="BtnLimpiarBlanco" />
                    <div style={{ paddingLeft: "10px" }}>Limpiar filtros</div>
                </button>
                <button className="FilterTopDrawer-Footer-Aplicar" onClick={filterCards}>
                    <img src={filledfilter} alt="filledfilter" width="24px" height="24px" />
                    <div style={{ paddingLeft: "10px" }}>Aplicar Filtros</div>
                </button>
            </div>
        </div>
    );
};
