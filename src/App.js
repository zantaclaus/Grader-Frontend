import Login from "./pages/Login";
import Home from "./pages/Home";
import { Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" component={Home} />
        <Redirect path="/" exact to="/home" />
      </Switch>
    </div>
  );
}

export default App;
