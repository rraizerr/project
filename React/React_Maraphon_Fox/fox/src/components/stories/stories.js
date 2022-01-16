import React from "react";

import "./stories.css"

function Stories() {

    const storiesData = [
        {   img: "https://res.cloudinary.com/intellectfox/image/upload/v1629752959/fe/foxgram/stories/intellectfox_ybka7q.svg",
            name: "intellectfox",
            active: false,
            live: false,
            url: "#",
            id: 1
        },
        {   img: "https://res.cloudinary.com/intellectfox/image/upload/v1629752960/fe/foxgram/stories/zuck_qfqytu.svg",
            name: "zuck",
            active: false,
            live: false,
            url: "#",
            id: 2
        },
        {   img: "https://res.cloudinary.com/intellectfox/image/upload/v1629752960/fe/foxgram/stories/elon.mask_izjwbh.svg",
            name: "elon.musk",
            active: false,
            live: false,
            url: "#",
            id: 3
        },
        {   img: "https://res.cloudinary.com/intellectfox/image/upload/v1629752963/fe/foxgram/stories/bezos_vfvy2h.svg",
            name: "bezos",
            active: false,
            live: false,
            url: "#",
            id: 4
        },
        {   img: "https://res.cloudinary.com/intellectfox/image/upload/v1629752960/fe/foxgram/stories/tim_cook_mmsgis.svg",
            name: "tim_cook",
            active: false,
            live: false,
            url: "#",
            id: 5
        },
        {   img: "https://res.cloudinary.com/intellectfox/image/upload/v1629752958/fe/foxgram/stories/bill.gates_w0dcqp.svg",
            name: "bill.gates",
            active: false,
            live: false,
            url: "#",
            id: 6
        }
    ]

    const stories = storiesData.map(({ img, name, url, id }) => {
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