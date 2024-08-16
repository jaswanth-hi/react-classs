import axios from "axios";
import { useRef, useState } from "react";
import "./weather.css";




const WeatherApps=()=>{
    const search=useRef()
    const [weather,setweather]=useState([])
    const[obj,setobj]=useState({})
   

    const api=async(city)=>{
        try{
            const {data}=await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c8f21f86ece4d2370667123432f0e078&units=metric`);
            
            setobj(data)
            console.log(obj)
            
            
            
      

        }catch(err){
            console.log(err)

        }
       
    }
    const subtHandler=(event)=>{
        event.preventDefault();
        const user=search.current.value;
        if(user.length > 0){
            api(user)
            const sugg=()=>{
                if(!weather.includes(user)){
                    return [...weather,user]
                }
                else{
                    alert("aleray")
                    return weather
                }
            }
            setweather(sugg)
        }
        else{
            alert("please enter city")
        }
    }

    return(
        <div>
           <center> <h1>WEATHER APP</h1> </center>
            <form onSubmit={subtHandler}>
                <center style={{marginBottom:"25px"}}>
                <input type="text" ref={search} />
                <button type="submit">search</button>
                </center>

            </form>
            {
                
                Object.keys(obj).length  >1 ?<div className="recipe-cards">
                <center>
                <h3>COUNTRY ID:{obj.id}</h3>
                
                <h3>COUNTRY:{obj.sys.country}</h3>
                <h3>CITY:{obj.name}</h3>
                <h3>WEATHER:{obj.weather[0].main}</h3>
                <h3>TEMPERATURE:{obj.main.temp}°C</h3>
                <h3>PRESSURE:{obj.main.pressure} hpa</h3>
                <h3>Humidity:{obj.main.humidity}%</h3>
                <h3>Lon:{obj.coord.lon}</h3>
                <h3>LAT:{obj.coord.lat}</h3>

                
                </center>
                
               
                </div>:<div className="recipe-cards"><center> <h3>search the data</h3></center></div>

            }
            </div>
    )
    
}
export default WeatherApps;