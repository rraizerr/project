import React from "react";

import "./stories.css"

function Stories({data}) {

    const stories = data.map(({ img, name, url, id }) => {
        return (
            <a href={url} className="story" key={id}>
                <img src={img} alt="" />
                <p className="name">{name}</p>
            </a>
        )
    })

    return (
        <div className="stories-container d-flex justify-content-between">
            {stories}
        </div>
    )

}

export default Stories;