import "./posts.css"

function Posts() {

    const postData = [
        {
            userIcon: "https://res.cloudinary.com/intellectfox/image/upload/v1629752944/fe/foxgram/header/profile_xr60wq.svg",
            userName: "intellectfox",
            postImg: "https://i.pinimg.com/736x/ab/f0/e5/abf0e5f8791d23fcc4d4fcebcaf027a4.jpg",
            counter: "23 отметок 'Нравится'",
            imgHeartEmpty: "https://res.cloudinary.com/intellectfox/image/upload/v1629752944/fe/foxgram/header/notifications_m1be8e.svg",
            postDescr: "Лайк природе"
        },
        {
            userIcon: "https://res.cloudinary.com/intellectfox/image/upload/v1629752944/fe/foxgram/header/profile_xr60wq.svg",
            userName: "intellectfox",
            postImg: "https://mobimg.b-cdn.net/v3/fetch/28/2892a3887bd226b3cdd24742aa0a48b5.jpeg",
            counter: "23 отметок 'Нравится'",
            imgHeartEmpty: "https://res.cloudinary.com/intellectfox/image/upload/v1629752944/fe/foxgram/header/notifications_m1be8e.svg",
            postDescr: "Стоп быстрой езде. Или как остановить нарушителей"
        },
        {
            userIcon: "https://res.cloudinary.com/intellectfox/image/upload/v1629752944/fe/foxgram/header/profile_xr60wq.svg",
            userName: "intellectfox",
            postImg: "https://omoro.ru/wp-content/uploads/2018/05/obnimashki-kartinki-prikolnie-1.jpg",
            counter: "23 отметок 'Нравится'",
            imgHeartEmpty: "https://res.cloudinary.com/intellectfox/image/upload/v1629752944/fe/foxgram/header/notifications_m1be8e.svg",
            postDescr: "Почему котики не поместились в <div>"
        },
        {
            userIcon: "https://res.cloudinary.com/intellectfox/image/upload/v1629752944/fe/foxgram/header/profile_xr60wq.svg",
            userName: "intellectfox",
            postImg: "https://avochka.ru/img/kartinka/1/enot_glass.jpg",
            counter: "23 отметок 'Нравится'",
            imgHeartEmpty: "https://res.cloudinary.com/intellectfox/image/upload/v1629752944/fe/foxgram/header/notifications_m1be8e.svg",
            postDescr: "Как быть крутым, ...Енотом =)"
        }
    ]
    const posts = postData.map(({ userIcon, userName, postImg, counter, imgHeartEmpty, postDescr }) => {
        return (
            <div className="post d-flex flex-column bd-highlight mb-3">
                <div className="post-header p-2 bd-highlight">
                    <div className="d-flex flex-row bd-highlight mb-3 align-items-center">
                        <img src={userIcon} alt="" className="post-icon bd-highlight"></img>
                        <p className="post-name p-2 bd-highlight">{userName}</p>
                    </div>
                </div>
                <img src={postImg} alt="" className="img-post bd-highlight" />
                <div className="post-footer p-2 bd-highlight">
                    <div className="post-like d-flex flex-row bd-highlight mb-3 align-items-center">
                        <img src={imgHeartEmpty} alt="" />
                        <p className="like-counter">{counter}"</p>
                    </div>
                    <div className="post-description d-flex flex-row bd-highlight mb-3 align-items-center">
                        <p className="post-name bd-highlight">{userName}</p>
                        <p className="post-descr bd-highlight">{postDescr}</p>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div className="posts">
            {posts}
        </div>
    )
}

export default Posts;