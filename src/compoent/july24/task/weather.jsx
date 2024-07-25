import { useEffect, useState } from "react";


// Winter, Summer, Monsoon, Spring, Autumn

const Weather=()=>{
    const[weatherapp,setweathers]=useState("")

    useEffect(()=>{
        
        handlers()
    },[])
    const handlers=()=>{
        const newssp=weather();
        setweathers(newssp)
    }
    
    function weather(){
        let newss =new Date()
        let month=newss.getMonth()
        let weathers=""
        let images=[]
        
        if(month>=0 && month<4){
            weathers="Winter";
           images= <img src="https://tse1.mm.bing.net/th?id=OIP.uZY4Wh-V2fzn0JgjQNq4WwHaE5&pid=Api&P=0&h=180" width={100} height={100}/>
        }
        else if(month>=4 && month<5){
            weathers="summer";
           images= <img src="https://tse4.mm.bing.net/th?id=OIP.2T70tgmdYl36sIKRJttHBgHaEH&pid=Api&P=0&h=180" width={100} height={100}/>
        }
        else if(month>=6 && month<10){
            weathers="monsoon";
           images= <img src="https://tse1.mm.bing.net/th?id=OIP.EhL2HoF4cgQ84V-JG017DQHaEd&pid=Api&P=0&h=180" width={100} height={100}/>
        }
        else{
            weathers="spring";
           images= <img src="https://tse4.mm.bing.net/th?id=OIP.2T70tgmdYl36sIKRJttHBgHaEH&pid=Api&P=0&h=180" width={100} height={100}/>
        }
        return [weathers,images];
    }
    return(
        <div>
            <h1>{weatherapp[0]} session</h1>
            <h1>{weatherapp[1]}</h1>
        </div>
    )
}

export default Weather;
