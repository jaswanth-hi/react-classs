import { useState } from "react"


const ControlledDrop=()=>{
    const[select,setselect]=useState("")
    const recipess=[
        {
            name:"rice",
            id:1,
        },
        {
            name:"chick rice",
            id:1,
        }
    ]

    
    const changehandler=(event)=>{
        setselect(event.target.value)

    }
    const subha=(event)=>{
        event.preventDefault()
        console.log(select,"dish")

    }

    return(
        <div>
            <form onSubmit={subha}>
            <select onChange={changehandler}>
                {
                    recipess.map(each=>{
                        return(
                            <option value={each.name}>{each.name}</option>
                        )
                    })
                }
            </select>
            <button>submit</button>
            </form>
        </div>
    )

}
export default ControlledDrop