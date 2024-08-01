import { Link, Outlet } from "react-router-dom";





const Policess=()=>{
    return(
        <div>
            
            <h3>list of police</h3>
            <Link to={"new"}>new police</Link>
            <Link to={"old"}>old police</Link>
            <Outlet />
            
        </div>
    )
}
export default Policess;

export const NewPolicess=()=>{
    return(
        <div>
            
            <h3>NEW police</h3>
            
            
        </div>
    )
}
 export const OldPolicess=()=>{
    return(
        <div>
            
            <h3>Old police</h3>
           
            
        </div>
    )
}