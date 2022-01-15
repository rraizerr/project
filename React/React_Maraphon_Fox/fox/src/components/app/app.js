import { Component } from "react";

import Header from "../header/header";
import Stories from "../stories/stories";
import Posts from "../posts/posts";

import "./app.css"

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { img: "https://res.cloudinary.com/intellectfox/image/upload/v1629752944/fe/foxgram/header/direct_zvkzsg.svg"},
                { img: "https://res.cloudinary.com/intellectfox/image/upload/v1629752944/fe/foxgram/header/notifications_m1be8e.svg"},
                { img: "https://res.cloudinary.com/intellectfox/image/upload/v1629752944/fe/foxgram/header/profile_xr60wq.svg"}
            ]
        }
    }
    render() {
        return (
            <div className="app">
                <Header
                    data={this.state.data} />
           
                <div className="stories">
                    <Stories />
                </div>

                <div className="posts">
                    <Posts />
                </div>
            </div>
        );
    }
}

export default App;