import Navabar from "../compoent/navabar/navabar";
import ControlledDrop from "../compoent/july31/dropdown";
import { useContext } from "react";
import { Datas } from "../App";
import "./screen.css";
import Profile from "../compoent/aug5/HOC(reatmemo)";

import WeatherApps from "../compoent/weatherApp/weatherApp";
import { Weatherjs } from "../compoent/aug8/uselatlon";
import Fakestoreapi from "../compoent/aug8/fakestoreapi/fakestoretable";



const Blogscreen=(prop)=>{
    const [data,err]=Weatherjs()
    console.log(data)
    const defa=useContext(Datas)
    const {}=prop.data
    // console.log(prop)
    Weatherjs();
    
    return(
        <div >
            <Navabar></Navabar>
            {/* {
                Object.keys(prop.data).length >0 ?<><h3>good morings{prop.data.username}</h3></>:<>pleasewait</>
            } */}
          <h1>abc</h1>
          <Fakestoreapi></Fakestoreapi>

           
             {/* <WeatherApp/> */}
            {/* <WeatherApps /> */}
            {/* <ControlledDrop></ControlledDrop> */}
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.3018027247053!2d78.39954787462925!3d17.49310079975219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91625d9cd1ad%3A0x4455387ad24a675d!2s10000coders!5e0!3m2!1sen!2sin!4v1722337194694!5m2!1sen!2sin" width={1000}  height={1000} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
        </div>
    )
}
export default Profile(Blogscreen);