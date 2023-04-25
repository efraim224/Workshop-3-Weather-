import React from "react"

export const WeatherForm = (props) => {
    // const [val, useVal] = React.useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
        const res = event.target.cityName.value;
        props.useCity(res)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label name="fname">City:</label><br></br>
                <input type="text" id="cityName"></input>
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    )
}