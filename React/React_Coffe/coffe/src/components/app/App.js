import { Component } from "react";

import Header from "../header/header";
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="main-container">
                <Header />
            </div>
        )
    }
}

export default App;