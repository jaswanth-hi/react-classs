import Navabar from "../compoent/navabar/navabar"
import Userabc from "../compoent/july23/hooks/tasks23/recipetableusing usestate"
import { useContext } from "react"
import { Datas } from "../App"
import "./screen.css"


const Aboutscreen=()=>{
     const about=useContext(Datas)
   
    return(
        <div className={`${about.darkss?"dark":"light"}`} >
             <Navabar  className={`${about.darkss?"dark":"light"}`}></Navabar>

              <Userabc></Userabc>
             
        </div>
    )
}
export default Aboutscreen;