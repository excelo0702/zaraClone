import Navbar  from "./components/Navbar";
import Login from "./pages/Login";
import Contact from "./pages/contact";
import Cart from "./pages/cart";
import { Route, Switch } from "react-router";
import Home from "./pages/home";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route path="/home"><Home/></Route>
        <Route path="/login"><Login/></Route>
        <Route path="/contact"><Contact/></Route>
        <Route path="/cart"><Cart/></Route>
      </Switch>
    </div>
  );
}

export default App;
