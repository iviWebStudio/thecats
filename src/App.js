/**
 * Main component for application.
 *
 * @since 0.1.0
 */

import "./App.scss";
import {Content, Header, Sidebar} from "./components";
import {BrowserRouter as Router} from "react-router-dom";

/**
 * App component.
 *
 * @return {JSX.Element}
 * @constructor
 */
const App = () => {
    return (
        <Router>
            <div className="container">
                <Header/>
                <div className="row">
                    <div className="col-md-4">
                        <Sidebar/>
                    </div>
                    <div className="col-md-8">
                        <Content/>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;
