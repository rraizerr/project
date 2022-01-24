import HeadNavigation from "../head-navigation/head-navigation";
import HeadMainInfo from "../head-main-info/head-main-info";
import "./header.css";

function Header() {
    
    return (
        <div className="header-container main">
            <HeadNavigation />
            <HeadMainInfo />
        </div>
    )
}

export default Header;