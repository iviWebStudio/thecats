/**
 * Main component for application.
 *
 * @since 0.1.0
 */

import {BrowserRouter as Router} from "react-router-dom";
import "./App.scss";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import {useSelector} from "react-redux";


/**
 * App component.
 *
 * @return {JSX.Element}
 * @constructor
 */
const App = () => {
    let imagesState = useSelector((state) => state.images);
    let categoryState = useSelector((state) => state.categories);
    let isLoading = imagesState.isLoading || categoryState.isLoading;

    return (
        <Router>
            <div className={isLoading ? "App loading" : "App"}>
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
                <div className="loading-overlay">

                </div>
            </div>
        </Router>
    );
}

export default App;
