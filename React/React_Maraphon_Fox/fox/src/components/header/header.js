// import { Component } from "react";

import "./header.css"

function Header({ data }) {
    const arr = data.map(item => item.img)
    
        return (
            
            <div className="header d-flex flex-row bd-highlight mb-3">
                <div className="logo p-2 flex-fill bd-highlight">
                    <img src="https://res.cloudinary.com/intellectfox/image/upload/v1629752944/fe/foxgram/header/foxgram_logo_te2l4m.svg" alt="" />
                </div>
                <div className="icons p-2 flex-fill bd-highlight">
                    <div className="img-container d-flex justify-content-between">
                        <img src={arr[0]} alt="" />
                        <img src={arr[1]} alt="" />
                        <img src={arr[2]} alt="" />
                    </div>
                </div>
            </div>
        )

}

export default Header;