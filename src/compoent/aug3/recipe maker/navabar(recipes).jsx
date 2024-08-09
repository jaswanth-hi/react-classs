import { Link, NavLink } from "react-router-dom";
import "./navas.css"
import { useContext } from "react";
import { Recipes_Context } from "./navigation(recipes)";




const NavabarRecipes=()=>{
  const {favourite}=useContext(Recipes_Context)
 
    return(
        <div>
            <nav className={`navbar navbar-expand-sm bg-light navbar-light`}>
    <div className="container-fluid">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to={"/"} style={{margin:"30px",textDecoration:"none"}}>Home</NavLink>
        </li>
        <li className="nav-item">
         <NavLink to={"/about"} style={{margin:"30px",textDecoration:"none"}}>recipesDetails</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={"/blog"} style={{margin:"30px",textDecoration:"none"}}>blog</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={"/setting"} style={{margin:"30px",textDecoration:"none"}}>settings</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={"/favi"} style={{margin:"30px",textDecoration:"none"}}>favouriteRecipes{favourite.length}</NavLink>
        </li>
       
       
       
      </ul>
    </div>
  </nav>
        </div>
    )
}

export default NavabarRecipes;