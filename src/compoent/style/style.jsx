
import "./style.css"
const Style=(prop)=>{
    const {text,bg,width=100}=prop 
    
    return(
        <div>
           
            <button className="button">{text}</button>
        </div>
    )
}
export default Style;