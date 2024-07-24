import { useState } from "react";




const User2=()=>{
    const[currentstate1,updaterfunction1]=useState([{period:"gm",food:"bf at 8am"},{period:"ga",food:"lunch at 1pm"},])
   const  todos=()=>{
    // console.log(currentstate1);
    const cs1={period:"gn",food:"dinner at 9am"}
    const newcs1=[...currentstate1,cs1]
    updaterfunction1(newcs1);

    }
    const deletess=(index)=>{
        const final=currentstate1.filter((each,totalfinal)=>{return(totalfinal!=index)})
        updaterfunction1(final)

    }
    return(
        <div>
            <h2>ex2</h2>
            <button onClick={todos}>add todo</button>
            {
                currentstate1.map((eachtodo,index)=>{
                    return(
                        <div key={index}>
                            <h2>current periods:-{eachtodo.period}</h2>
                            <h2>current foods:-{eachtodo.food}</h2>
                            <button onClick={()=>deletess(index)}>delete todo</button>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default User2;