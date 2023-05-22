import axios from "axios";
import https from "https";
import { getKeyvalue, TOKEN_DICTINORY } from "./storege.js";
const Get_weather = async (city) => {
  // https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

  const token = process.env.TOKEN ?? (await getKeyvalue(TOKEN_DICTINORY.token));
  if (!token) {
    throw new Error("API DOESN'T exsist");
  }


const {data} = await axios.get("https://api.openweathermap.org/data/2.5/weather",{
  params:{
    q: city,
    appid : token,
    lang : "en",
    units : "metric"
  }
})
console.log(data);
return data



};

export { Get_weather };
