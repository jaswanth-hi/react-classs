import axios from "axios";
import { useEffect, useState } from "react";



const CounApi=()=>{
    const [country,setcountry]=useState([])
    const [select,setselect]=useState({})
    useEffect(()=>{
        apicalling()
    },[])

    const apicalling=async()=>{
        try{
            const resc=await axios.get("https://restcountries.com/v3.1/all")
            // console.log(res.data)
            const resapi=resc.data.map((each,ind)=>{
                return{Id:each.cca2,Name:each.name.official}
            })
            setcountry(resapi)
            }catch(err){
    
            }
    }
    const countryhandler=(event)=>{
        const Selectcountry=event.target.value;
        fetchdata(Selectcountry)

    }
    const fetchdata=async(id)=>{
        try{
        const {data}=await axios.get(`https://restcountries.com/v3.1/alpha/${id}`);
        setselect(data[0])
        }catch(err){
            
        }

    }
    return(
        <div>
            <h1>country</h1>
            {
                <select onChange={countryhandler}>
                    {
                        country.map((each)=>{
                            return(
                                <option value={each.Id}>{each.Name}</option>
                            )
                        })
                    }
                </select>
            }
            {
                Object.keys(select).length>0 &&(
                    <div>
                    <h2>Name:{select.name.official}</h2>
                    <h2>Stats:{select.status}</h2>
                   </div>                    
                )
            }
        </div>
    )
}
export default CounApi;