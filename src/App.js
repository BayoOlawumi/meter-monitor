import { ReactQueryDevtools } from "react-query-devtools";
import "./App.css";
import Main from "./pages/Main/Main";

function App() {
  return (
    <div className="App">
      <div className="App-container">
        <Main />
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </div>
  );
}

export default App;
