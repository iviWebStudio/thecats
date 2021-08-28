import "./App.scss";
import {Content, Header, Sidebar} from "./components";

const App = () => {
    return (
        <div className="App">
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
        </div>
    );
}

export default App;
