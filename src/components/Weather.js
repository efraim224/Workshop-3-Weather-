import axios from "axios"
import React from "react";


export class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data : props.data
        }

    }
    
    componentDidMount() {}

    componentWillUnmount() {}

    setData(value) {
        this.setState({data: value})
    }
    
    HandleSubmit = (event) => {
        event.preventDefault();
        const city = event.target.cityName.value;
        const weather_url = "https://api.openweathermap.org/data/2.5/weather"
        const params = {'q': city, 'units': 'metric', 'appid': process.env.REACT_APP_WEATHER_KEY}

        const fetchData = async () => {
            try {
                const result = await axios.get(weather_url,{ params });
                const res = await result.data.main.temp
                this.setData(res);
            } catch (error) {
                this.setData('City not found.')
            }
        }

        fetchData()
    }

    render() {
        return (
            <div>
                <form onSubmit={this.HandleSubmit}>
                    <label name="fname">City:</label><br></br>
                    <input type="text" id="cityName"></input>
                    <input type="submit" value="Submit"></input>
                </form>
                {this.state.data}
            </div>
        )
    }
}
