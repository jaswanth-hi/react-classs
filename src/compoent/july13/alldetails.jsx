import Datarecs from "./data";
import Imag from "./imagefood";
import Head from "./heading";
import "./july13.css"
import Lists from "./list";
const Food=()=>{
    return(
        <div className="bat" >
           {Datarecs.map((each,index)=>{
            return(
                <div className="cards ">
                    <Head text={each.name} />
                    <Imag sor={each.image} width="300" height="300" />
                    <hr></hr>
                   
                   <Lists title={each.ingredients}/>
                 
                   
                    
                    
                    <hr></hr>
                    <Lists title={each.instructions} />
                    <hr></hr>
                    <Head  text={each.rating}/>
                    <hr></hr>
                

                </div>
            )
        
           })}
        </div>
    )
}
export default Food;
