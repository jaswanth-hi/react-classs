import Heading from "./heaing";
import Images from "./image";
import "./july.css";
import Data from "../data";
import Nave from "./nava";

const All=()=>{
    return(
        <div >
            <div className="card">
                <Nave></Nave>
            </div>
            <Heading logo="Indian Premier League"></Heading>
            <hr></hr>
            <div className="bat">
            {Data.map(each=>{
                return(
                    
                  <div className="cards ">
            
                <Heading title={each.Name} />
                <Images app={each.source} width={100} height={100}></Images>
                <Heading tro={each.Trophy}></Heading>
                <Heading cap={each. captain}></Heading>
                <Heading pla={each.Players}></Heading>
            </div>
            
                )
            })}
            </div>
            
           

        </div>
        
       
        
    )
}

export default All;