import React, { useState } from 'react'
import DisplayWeather from './DisplayWeather';
import "./weather.css";

function Weather() {

    const APIKEY="b6ae51bff74139986da5d9e6d8c9b796";

    const [form, setForm] = useState({
        city: "",
        country: "",
      });
      const [weather, setWeather] = useState([]);
async function weatherData(e){
    e.preventDefault();
    if(form.city===""){
        alert("Please enter city or country");
    }
    else {
        const data= await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&APPID=${APIKEY}`).then((res)=> res.json()).then(data => data);
            setWeather(
                {
                    data:data
                }
            );
    }
}

      const handleChange = (e) =>{
          let name= e.target.name;
          let value= e.target.value;

        if (name==="city"){
            setForm({...form, city:value});
        }
        if (name==="country"){
            setForm({...form, country:value});
        }
        console.log(form.city,form.country);
      };
    return (
        <div className="Back">
        <div className="weather">
            <span className="title">Weather Conditions </span>
           <br/>
           <form action="">
             <input type="text" name="city"  placeholder="Enter city"  onChange={(e) => handleChange(e)}/> &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;
             <input type="text" name="country"  placeholder="Enter country"   onChange={(e) => handleChange(e)}/> &nbsp; &nbsp; &nbsp;&nbsp;
             <button className="getweather" onClick={(e) => weatherData(e)}>Go</button>
           </form>
{
    weather.data != undefined ?
     <div> 
         <DisplayWeather data={weather.data} />
     </div>
     :null
    
}

        </div>
        </div>
    )
}

export default Weather
