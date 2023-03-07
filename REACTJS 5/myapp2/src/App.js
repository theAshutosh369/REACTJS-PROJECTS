import "./App.css";
import Contact from "./Contact";
import About from "./About";
import { Link , Switch, Route } from "react-router-dom";


function App() {


  return (
    <div className="App ">
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About us</Link>
          </li>
          <li>
            <Link to="/Contact">Contact us</Link>
          </li>
        </ul>
      </div>
      


      <Switch>
        <Route path="/">
          
          <Route path="/About" component={() => <About age="100" />}></Route>
          <Route path="/Contact" component={Contact}></Route>
          
        </Route>
      </Switch>
    </div>
  );
}

export default App;
