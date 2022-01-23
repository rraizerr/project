import "./posts.css"

function Posts({data}) {

    const posts = data.map(({ userIcon, userName, postImg, counter, imgHeartEmpty, postDescr, id }) => {
        return (
            <div className="post d-flex flex-column bd-highlight mb-3" key={id}>
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