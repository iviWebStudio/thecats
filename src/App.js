import "./App.scss";

const App = () => {
    return (
        <div className="App">
            <div className="container">
                <header>The header area</header>
                <div className="row">
                    <div className="col-md-4">
                        <aside>The sidebar area</aside>
                    </div>
                    <div className="col-md-8">
                        <main>The content area</main>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
