import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {

    const searchHandler = () =>{
        console.log("Search Handler");
    }


    const loginHandler = () =>{
        console.log("login Handler");
    }

    
    const contactHandler = () =>{
        console.log("contact Handler");
    }

    
    const cartHandler = () =>{
        console.log("Cart Handler");
    }

  return (
    <header className="headerCSS">
      <ul className="navbarList">
        <li><Link className="logoName" to="/home">zara</Link></li>
        <div className="otherItem">
          <li onClick={searchHandler}>SEARCH</li>
          <li><NavLink to="/login">LOG IN</NavLink></li>
          <li><NavLink to="/contact">CONTACT</NavLink></li>
          <li><NavLink to="/cart">CART</NavLink></li>
        </div>
      </ul>
    </header>
  );
};

export default Navbar;
