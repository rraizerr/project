import { Component } from "react";

import Header from "../header/header";
import Stories from "../stories/stories";
import Posts from "../posts/posts";

import "./app.css"

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataHeader: [
                { img: "https://res.cloudinary.com/intellectfox/image/upload/v1629752944/fe/foxgram/header/direct_zvkzsg.svg", id: 1},
                { img: "https://res.cloudinary.com/intellectfox/image/upload/v1629752944/fe/foxgram/header/notifications_m1be8e.svg", id: 2},
                { img: "https://res.cloudinary.com/intellectfox/image/upload/v1629752944/fe/foxgram/header/profile_xr60wq.svg", id: 3}
            ],
            storiesData: [
                {   
                    img: "https://res.cloudinary.com/intellectfox/image/upload/v1629752959/fe/foxgram/stories/intellectfox_ybka7q.svg",
                    name: "intellectfox",
                    active: false,
                    live: false,
                    url: "#",
                    id: 1
                },
                {   
                    img: "https://res.cloudinary.com/intellectfox/image/upload/v1629752960/fe/foxgram/stories/zuck_qfqytu.svg",
                    name: "zuck",
                    active: false,
                    live: false,
                    url: "#",
                    id: 2
                },
                {   
                    img: "https://res.cloudinary.com/intellectfox/image/upload/v1629752960/fe/foxgram/stories/elon.mask_izjwbh.svg",
                    name: "elon.musk",
                    active: false,
                    live: false,
                    url: "#",
                    id: 3
                },
                {   
                    img: "https://res.cloudinary.com/intellectfox/image/upload/v1629752963/fe/foxgram/stories/bezos_vfvy2h.svg",
                    name: "bezos",
                    active: false,
                    live: false,
                    url: "#",
                    id: 4
                },
                {   
                    img: "https://res.cloudinary.com/intellectfox/image/upload/v1629752960/fe/foxgram/stories/tim_cook_mmsgis.svg",
                    name: "tim_cook",
                    active: false,
                    live: false,
                    url: "#",
                    id: 5
                },
                {   
                    img: "https://res.cloudinary.com/intellectfox/image/upload/v1629752958/fe/foxgram/stories/bill.gates_w0dcqp.svg",
                    name: "bill.gates",
                    active: false,
                    live: false,
                    url: "#",
                    id: 6
                }
            ],
            postData: [
                {
                    userIcon: "https://res.cloudinary.com/intellectfox/image/upload/v1629752944/fe/foxgram/header/profile_xr60wq.svg",
                    userName: "intellectfox",
                    postImg: "https://i.pinimg.com/736x/ab/f0/e5/abf0e5f8791d23fcc4d4fcebcaf027a4.jpg",
                    counter: "23 отметок 'Нравится'",
                    imgHeartEmpty: "https://res.cloudinary.com/intellectfox/image/upload/v1629752944/fe/foxgram/header/notifications_m1be8e.svg",
                    postDescr: "Лайк природе",
                    id: 1
                },
                {
                    userIcon: "https://res.cloudinary.com/intellectfox/image/upload/v1629752944/fe/foxgram/header/profile_xr60wq.svg",
                    userName: "intellectfox",
                    postImg: "https://mobimg.b-cdn.net/v3/fetch/28/2892a3887bd226b3cdd24742aa0a48b5.jpeg",
                    counter: "23 отметок 'Нравится'",
                    imgHeartEmpty: "https://res.cloudinary.com/intellectfox/image/upload/v1629752944/fe/foxgram/header/notifications_m1be8e.svg",
                    postDescr: "Стоп быстрой езде. Или как остановить нарушителей",
                    id: 2
                },
                {
                    userIcon: "https://res.cloudinary.com/intellectfox/image/upload/v1629752944/fe/foxgram/header/profile_xr60wq.svg",
                    userName: "intellectfox",
                    postImg: "https://omoro.ru/wp-content/uploads/2018/05/obnimashki-kartinki-prikolnie-1.jpg",
                    counter: "23 отметок 'Нравится'",
                    imgHeartEmpty: "https://res.cloudinary.com/intellectfox/image/upload/v1629752944/fe/foxgram/header/notifications_m1be8e.svg",
                    postDescr: "Почему котики не поместились в <div>",
                    id: 3
                },
                {
                    userIcon: "https://res.cloudinary.com/intellectfox/image/upload/v1629752944/fe/foxgram/header/profile_xr60wq.svg",
                    userName: "intellectfox",
                    postImg: "https://avochka.ru/img/kartinka/1/enot_glass.jpg",
                    counter: "23 отметок 'Нравится'",
                    imgHeartEmpty: "https://res.cloudinary.com/intellectfox/image/upload/v1629752944/fe/foxgram/header/notifications_m1be8e.svg",
                    postDescr: "Как быть крутым, ...Енотом =)",
                    id: 4
                }
            ]
        }
    }
    render() {
        return (
            <div className="app">
                <Header
                    data={this.state.dataHeader} />
           
                <div className="stories">
                    <Stories
                        data={this.state.storiesData}/>
                </div>

                <Posts
                    data={this.state.postData}/>
                
            </div>
        );
    }
}

export default App;