import { useEffect, useState } from "react";


export const Weatherjs=()=>{

    const [coords,setcoords]=useState({
        latitude:null,
        longitude:null,
    })
    const [err,seterr]=useState(false)
    useEffect(() => {
        initGeolocation();
      }, []);
      function initGeolocation() {
        if (navigator.geolocation) {
          // Call getCurrentPosition with success and failure callbacks
          navigator.geolocation.getCurrentPosition(success, fail);
        } else {
          alert("Sorry, your browser does not support geolocation services.");
          seterr(true)
        }
      }
    
      function success(position) {
        console.log(position.coords.longitude);
        console.log(position.coords.latitude);
        setcoords({...coords,latitude:position.coords.latitude,longitude:position.coords.longitude})
      }
      function fail() {
        // Could not obtain location
      }
      return [coords,err]
    
}