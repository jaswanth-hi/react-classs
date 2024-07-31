import { Link, NavLink } from "react-router-dom";
import "./nava.css";


const Navabar=()=>{
    return(
        <div>
            <nav className="navbar navbar-expand-sm bg-light navbar-light">
    <div className="container-fluid">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to={"/"} style={{margin:"30px",textDecoration:"none"}}>Home</NavLink>
        </li>
        <li className="nav-item">
         <NavLink to={"/about"} style={{margin:"30px",textDecoration:"none"}}>recipes</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={"/blog"} style={{margin:"30px",textDecoration:"none"}}>Location</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={"/setting"} style={{margin:"30px",textDecoration:"none"}}>Login form</NavLink>
        </li>
       
      </ul>
    </div>
  </nav>
        </div>
    )
}

export default Navabar;