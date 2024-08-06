import axios from "axios"
import { useEffect, useState } from "react"
import Navabar from "../compoent/navabar/navabar"
import Dict from "../compoent/aug1/dict"



const Droplist=()=>{

   

    
    return(
        <div>
            <Navabar></Navabar>
            <h1>dictionary</h1>
            <Dict></Dict>

            {
               

            }
           
        </div>
    )
}
export default Droplist