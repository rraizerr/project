import { Fragment } from "react";

import "./header.css"

function Header({ data }) {
    const btnArr = data.map((item, id) => {
        const btnItem = item.img;
        const btnId = id;
        return (
            <Fragment key={btnId}>
                <button type="button" ><img src={btnItem} alt="" /></button>
            </Fragment>
        )
    })
    
        return (
            
            <div className="header d-flex flex-row bd-highlight mb-3">
                <div className="logo p-2 flex-fill bd-highlight">
                    <img src="https://res.cloudinary.com/intellectfox/image/upload/v1629752944/fe/foxgram/header/foxgram_logo_te2l4m.svg" alt="" />
                </div>
                <div className="icons p-2 flex-fill bd-highlight">
                    <div className="img-container d-flex justify-content-between">
                        {btnArr}
                    </div>
                </div>
            </div>
        )

}

export default Header;