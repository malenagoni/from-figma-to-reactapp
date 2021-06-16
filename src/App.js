import "./App.css";
import { Switch, Route } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";

function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path="/" component={Layout} />
            </Switch>
        </div>
    );
}

export default App;
