import Navabar from "../compoent/navabar/navabar"
import Userabc from "../compoent/july23/hooks/tasks23/recipetableusing usestate"
import { useContext } from "react"
import { Datas } from "../App"
import "./screen.css"
import Reactmemo from "../compoent/aug5/reactmemo/parent"
import HocCont from "../compoent/aug5/HOC(reactmemo)EX2"


const Aboutscreen=(prop)=>{
     const about=useContext(Datas)
     const {data,add}=prop
     console.log(prop.add)
   
    return(
        <div >
             <Navabar></Navabar>
             <h1>cont{data}</h1>
             <button onClick={()=>add+1}>add</button>
            

              {/* <Userabc></Userabc> */}
              {/* <Reactmemo></Reactmemo> */}
             
        </div>
    )
}
export default HocCont(Aboutscreen);