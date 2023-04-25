import { useEffect, useState } from "react"
import { WeatherForm } from "./WeatheForm"
import axios from "axios"


export const Weather = (props) => {
    const [city, useCity] = useState('')
    const [data, setData] = useState('')

    // TODO: find out how to create proper try catch clauses, because the regular not working for fetch. 
    useEffect(() => {
            const weather_url = "https://api.openweathermap.org/data/2.5/weather"
            const params = {'q': city, 'units': 'metric', 'appid': process.env.REACT_APP_WEATHER_KEY}
            console.log(params)
            const fetchData = async () => {
                try {
                    const result = await axios.get(weather_url,{ params });
                    const res = await result.data.main.temp
                    setData(res);
                } catch (error) {
                    setData('not valid city')
                }
            }
            
            if (city !== '') {
                fetchData()
            }
            else {
                setData('')
            }
        }, [city])

    return (
        <div>
            <WeatherForm useCity={useCity}/>
            {data}
        </div>
    )
}