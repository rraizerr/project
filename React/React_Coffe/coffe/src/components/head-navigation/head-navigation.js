import "./head-navigation.css";

function HeadNavigation() {
    
    return (
        <nav className="main-nav">
            <ul className="navigation">
                <li className="logo"></li>
                <li><a href="#">Coffe house</a></li>
                <li><a href="#">Our coffe</a></li>
                <li><a href="#">For your pleasure</a></li>
            </ul>
        </nav>
    )
}

export default HeadNavigation;