import Navabar from "../compoent/navabar/navabar";
import Controlled from "../compoent/july26/controlled compoent";
import { useEffect, useState } from "react";
import axios from "axios";
import Listss from "../compoent/july23/hooks/tasks23/customList";

const Settingsscreen=()=>{
    const[use,setuse]=useState([])
    const [name,setname]=useState("")
    useEffect(()=>{
        product()
    },[])

    const product=async()=>{
        try{

            const abc=await axios.get("https://dummyjson.com/recipes")
           
            setuse(abc.data.recipes)
        }catch(error){

        }

      
    }
    const datafilter=use.filter((each)=>{
        return each.name.toLowerCase().includes(name.toLowerCase())

       })
    return(
        <div>
            <Navabar></Navabar>
           <center> <input type="search" onChange={(each)=>{setname(each.target.value)}} /></center>
            <div>
            {
                datafilter.map((eachs,inde)=>{
                    return(
                        <div>
                            <h1>{eachs.name}</h1>
                            <img src={eachs.image}  width={100} height={100}/>
                            <Listss list={eachs.instructions} />
                            <Listss list={eachs.ingredients} />
                            <h1>{eachs.rating}</h1>


                        </div>
                    )

                })
            }
            </div>
           



           
          
        </div>
    )
}
export default Settingsscreen;