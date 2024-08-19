import Navabar from "../compoent/navabar/navabar"
import Userabc from "../compoent/july23/hooks/tasks23/recipetableusing usestate"
import { useContext } from "react"
import { Datas } from "../App"
import "./screen.css"
import Reactmemo from "../compoent/aug5/reactmemo/parent"
import HocCont from "../compoent/aug5/HOC(reactmemo)EX2"
import Usememo from "../compoent/aug6/usememo"
import UseCallback from "../compoent/aug6/usecallback"


const Aboutscreen=(prop)=>{
     const about=useContext(Datas)
     const {data,add}=prop
     console.log(prop.add)
   
    return(
        <div >
             <Navabar></Navabar>
             <h1>cont{data}</h1>
             <button onClick={()=>add+1}>add</button>
             {/* <Usememo></Usememo> */}
             <h1> use callback</h1>
             <UseCallback></UseCallback>


            

              {/* <Userabc></Userabc> */}
              {/* <Reactmemo></Reactmemo> */}
             
        </div>
    )
}
export default HocCont(Aboutscreen);