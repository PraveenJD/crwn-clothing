import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Switch, Route, Link } from "react-router-dom";

function App() {
  const HatsPage = () => {
    return (
      <div>
        <h1>Vinayaga Thunai</h1>
      </div>
    );
  };
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
