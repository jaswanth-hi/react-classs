const Listss=(prop)=>{
    const{list}=prop
    return(
    <ol>
         {
        list.map((each,index)=>{
        return(
        <><li key={index}>{each}</li></>
        )
        })
    }
                            
    </ol>   
    ) 
}
export default Listss;
 {
//     currentstate11.map((each,index)=>{
//         return(
//             <div>
//                 <h1>{each.id}</h1>
//                 <h1>{each.name}</h1>
//                 <Listso list={each.ingredients}></Listso>
//                 <Listso list={each.instructions}></Listso>


//             </div>
//         )
//     })
 }