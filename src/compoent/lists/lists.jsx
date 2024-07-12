// const Sap=()=>{
//     const Fri=[
//         {
//         name:"jaswanth",
//         age:20,
//         id:1,
//     },
//     {
//         name:"king",
//         age:20,
//         id:2,
//     }
// ]
//     return(<>
// <ul>
//     {Fri.map(each=><li key={each.id}>{each.name}</li>)}
// </ul>

//     </>)
// }
// export default Sap;
import Head from "../images/image";
import Bat from "../button/button";
import { Ipl } from "../button/ipl";
const Apple=()=>{
    return(
        <div style={{textAlign:"center"}}>
       {Ipl.map(eachItem=>{return(
        <div>
        <Head name={eachItem.name} />
        <Bat image={eachItem.image} alt="alert" width={150} height={200} />
        <Head tropes={eachItem.tropes} />
        <Head playername={eachItem.playername} />
        </div>
       )
        

       })}
       </div>
    )
}
export default Apple;