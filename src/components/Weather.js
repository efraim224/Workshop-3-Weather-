import { useEffect, useState } from "react"
import { WeatherForm } from "./WeatheForm"

export const Weather = (props) => {
    const [city, useCity] = useState('')
    const [data, setData] = useState('')

    // TODO: find out how to create proper try catch clauses, because the regular not working for fetch. 
    useEffect(() => {
            const url = `http://127.0.0.1:5000/weather/${city}`
            const fetchData = async () => {
                const result = await fetch(url);
                if (!result.ok) {
                    setData('not valid city')
                    throw new Error(result.status);
                }
                else {
                    const res = await result.text()
                    setData(res);
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