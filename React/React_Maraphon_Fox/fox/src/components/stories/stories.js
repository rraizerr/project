import React from "react";

import "./stories.css"

class Stories extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {   img: "https://res.cloudinary.com/intellectfox/image/upload/v1629752959/fe/foxgram/stories/intellectfox_ybka7q.svg",
                    name: "intellectfox",
                    active: false,
                    live: false
                },
                {   img: "https://res.cloudinary.com/intellectfox/image/upload/v1629752960/fe/foxgram/stories/zuck_qfqytu.svg",
                    name: "zuck",
                    active: false,
                    live: false
                },
                {   img: "https://res.cloudinary.com/intellectfox/image/upload/v1629752960/fe/foxgram/stories/elon.mask_izjwbh.svg",
                    name: "elon.musk",
                    active: false,
                    live: false
                },
                {   img: "https://res.cloudinary.com/intellectfox/image/upload/v1629752963/fe/foxgram/stories/bezos_vfvy2h.svg",
                    name: "bezos",
                    active: false,
                    live: false
                },
                {   img: "https://res.cloudinary.com/intellectfox/image/upload/v1629752960/fe/foxgram/stories/tim_cook_mmsgis.svg",
                    name: "tim_cook",
                    active: false,
                    live: false
                },
                {   img: "https://res.cloudinary.com/intellectfox/image/upload/v1629752958/fe/foxgram/stories/bill.gates_w0dcqp.svg",
                    name: "bill.gates",
                    active: false,
                    live: false
                }
            ]
        }
    }

    render() {
        return (
            <div className="stories-container d-flex justify-content-between">
                <div className="story">
                    <img src={this.state.data[0].img} alt="" />
                    <p className="name">{this.state.data[0].name}</p>
                </div>
                <div className="story">
                    <img src={this.state.data[1].img} alt="" />
                    <p className="name">{this.state.data[1].name}</p>
                </div>
                <div className="story">
                    <img src={this.state.data[2].img} alt="" />
                    <p className="name">{this.state.data[2].name}</p>
                </div>
                <div className="story">
                    <img src={this.state.data[3].img} alt="" />
                    <p className="name">{this.state.data[3].name}</p>
                </div>
                <div className="story">
                    <img src={this.state.data[4].img} alt="" />
                    <p className="name">{this.state.data[4].name}</p>
                </div>
                <div className="story">
                    <img src={this.state.data[5].img} alt="" />
                    <p className="name">{this.state.data[5].name}</p>
                </div>
            </div>
        )
    }
}

export default Stories;