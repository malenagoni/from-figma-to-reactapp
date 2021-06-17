import React, { useState } from "react";
import greyconstruction from "../../icons/greyconstruction.png";
import filter from "../../icons/filter.png";
import list from "../../icons/list.png";
import grid from "../../icons/grid.png";
import chat from "../../icons/chat.png";
import "./CardsContainer.css";
import { data } from "../../data";
import { Card } from "../Card/Card";
import { FilterTopDrawer } from "../FilterTopDrawer/FilterTopDrawer";

export const CardsContainer = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [dataCards, setDataCards] = useState(data);
    const [subtitle, setSubtitle] = useState("(Todos)");

    function onClick() {
        isOpen ? setIsOpen(false) : setIsOpen(true);
    }

    return (
        <div className="CardsContainer">
            {isOpen && <FilterTopDrawer setIsOpen={setIsOpen} setDataCards={setDataCards} setSubtitle={setSubtitle} />}
            <div className="CardsContainer-Header">
                <div className="CardsContainer-Titles">
                    <img src={greyconstruction} alt="construction" width="22.5" height="19.5" />
                    <div className="CardsContainer-Titles-Proyectos">Proyectos</div>
                    <div className="CardsContainer-Titles-FilterTitle">{subtitle}</div>
                </div>
                <div className="CardsContainer-Buttons">
                    <button className="CardsContainer-Buttons-Filter" onClick={onClick}>
                        <img src={filter} alt="filter" width="24px" height="24px" />
                    </button>
                    <button className="CardsContainer-Buttons-Grid">
                        <img src={grid} alt="grid" width="24px" height="24px" />
                    </button>
                    <button className="CardsContainer-Buttons-List">
                        <img src={list} alt="list" width="24px" height="24px" />
                    </button>
                </div>
            </div>
            <div className="CardsContainer-Cards">
                {dataCards?.map((d, i) => {
                    return (
                        <Card
                            key={i}
                            state={d.state}
                            date={d.date}
                            people={d.people}
                            name={d.name}
                            wishlist={d.wishlist}
                            address={d.address}
                            price={d.price}
                            size={d.size}
                            progress={d.progress}
                            ppc={d.ppc}
                            pcr={d.pcr}
                            image={d.image}
                        />
                    );
                })}
            </div>
            <div className="CardsContainer-Footer">
                <button className="CardsContainer-ChatBtn">
                    <img src={chat} alt="chat" width="36px" height="36px" />
                </button>
            </div>
        </div>
    );
};
