import { ReactQueryDevtools } from "react-query-devtools";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import Main from "./pages/Main/Main";
import Meters from "./pages/Meters/Meters";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="App-container">
          <div className="main container">
            <div className="main-header">
              <p>METER MONITOR</p>
              <Switch>
                <Route exact path="/home" component={Main} />
                <Route exact path="/meters/:stateName" component={Meters} />
                <Route  path="/" component={Main} />
              </Switch>
            </div>
            <ReactQueryDevtools initialIsOpen={false} />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
