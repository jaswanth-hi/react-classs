import { Link } from "react-router-dom";




const Invalidscreen=()=>{
    return(
        <div>
            
            <h2>error 404</h2>
            <button><Link to={"/"} style={{textDecoration:"none"}}>go to home</Link></button>
        </div>
    )
}
export default  Invalidscreen;