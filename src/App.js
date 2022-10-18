import { Route, Switch } from "react-router-dom";
import Home from './Home';
import About from "./About";
import Login from "./Login";
import NavBar from "./NavBar";

//Step 2. Use <Route> components to define client-side routes in our app
//Add the NavBar component to our App component
export default function App() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
    );
  }