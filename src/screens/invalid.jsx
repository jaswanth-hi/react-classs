import {  useNavigate } from "react-router-dom";




const Invalidscreen=()=>{
    const rec=useNavigate()

    const Navig=()=>{
        rec("/")
    }
    return(
        <div>
            
            <h2>error 404</h2>
            <button onClick={Navig}>go to home</button>
        </div>
    )
}
export default  Invalidscreen;