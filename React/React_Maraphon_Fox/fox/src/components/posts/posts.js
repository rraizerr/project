import { Component } from "react";

import "./posts.css"

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    postIcon: "",
                    postName: "",
                    postImg: "",
                    postLike: "",
                    imgLike: "",
                    PostDescrName: "",
                    postDescr: ""
                }
            ]
        }
    }
    render() {
        return (
            <>
                <div className="post d-flex flex-column bd-highlight mb-3">
                    <div className="post-header p-2 bd-highlight">
                        <div className="d-flex flex-row bd-highlight mb-3 align-items-center">
                            <img src="https://res.cloudinary.com/intellectfox/image/upload/v1629752959/fe/foxgram/stories/intellectfox_ybka7q.svg" alt="" className="post-icon bd-highlight"></img>
                            <p className="post-name p-2 bd-highlight">intellectfox</p>
                        </div>
                    </div>
                    <img src="https://i.pinimg.com/736x/ab/f0/e5/abf0e5f8791d23fcc4d4fcebcaf027a4.jpg" alt="" className="img-post bd-highlight" />
                    <div className="post-footer p-2 bd-highlight">
                        <div className="post-like d-flex flex-row bd-highlight mb-3 align-items-center">
                            <img src="https://res.cloudinary.com/intellectfox/image/upload/v1629752944/fe/foxgram/header/notifications_m1be8e.svg" alt="" className="" />
                            <p className="like-counter"> 23 отметок "Нравится"</p>
                        </div>
                        <div className="post-description d-flex flex-row bd-highlight mb-3 align-items-center">
                            <p className="post-descr-name bd-highlight">intellectfox</p>
                            <p className="post-descr bd-highlight">Топ 8 ошибок начинающего программиста</p>
                        </div>
                    </div>
                </div>
                <div className="post d-flex flex-column bd-highlight mb-3">
                    <div className="post-header p-2 bd-highlight">
                        <div className="d-flex flex-row bd-highlight mb-3 align-items-center">
                            <img src="https://res.cloudinary.com/intellectfox/image/upload/v1629752959/fe/foxgram/stories/intellectfox_ybka7q.svg" alt="" className="post-icon bd-highlight"></img>
                            <p className="post-name p-2 bd-highlight">intellectfox</p>
                        </div>
                    </div>
                    <img src="https://i.pinimg.com/736x/ab/f0/e5/abf0e5f8791d23fcc4d4fcebcaf027a4.jpg" alt="" className="img-post bd-highlight" />
                    <div className="post-footer p-2 bd-highlight">
                        <div className="post-like d-flex flex-row bd-highlight mb-3 align-items-center">
                            <img src="https://res.cloudinary.com/intellectfox/image/upload/v1629752944/fe/foxgram/header/notifications_m1be8e.svg" alt="" className="" />
                            <p className="like-counter"> 23 отметок "Нравится"</p>
                        </div>
                        <div className="post-description d-flex flex-row bd-highlight mb-3 align-items-center">
                            <p className="post-descr-name bd-highlight">intellectfox</p>
                            <p className="post-descr bd-highlight">Топ 8 ошибок начинающего программиста</p>
                        </div>
                    </div>
                </div>
            </>
                
        )
    }
}

export default Posts;