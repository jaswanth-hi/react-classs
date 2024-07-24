import { useState } from "react";
import "./july24.css";


const Squarels=()=>{
    const[currentstate5,updaterfunction5]=useState([]);
    const [login,setlogin]=useState(false)
    const [c,d]=useState(false)


    const squareapp=()=>{
        
           
            const newvalue=[...currentstate5,1];
            // console.log(newvalue);
           

            updaterfunction5(newvalue)
            
        
    }
    const updates=()=>{
        setlogin((login)=>!login)

    }
    const updat=()=>{
        d((c)=>!c)

    }


    
    return(
        <div>
            <h1>square Compoent :-{currentstate5.length}</h1>
            <button onClick={squareapp}>Click</button>
            {
             
              currentstate5.map((each,index)=>{
                return(
                    <div className={(index+1)%2==0 && login?   "squareven":"squareodd"} onClick={updates}>
                        <h1>{index+1}</h1>




                    </div>
                )
              })

            }
        </div>
    )

}


export default Squarels;