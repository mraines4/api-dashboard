import React from 'react';
import Axios from 'axios';

class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            weather: {}
        }
    }

    async componentDidMount() {
        const weatherData = await Axios.get('http://api.openweathermap.org/data/2.5/weather?q=Atlanta,us&units=imperial&APPID=1efd23d575e7f6ab1b69c24ba772d747')
        // console.log(weatherData.data)
        this.setState({
            weather: weatherData.data
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.weather.name}</h1>
                <h3>{this.state.weather.main ? Math.round(this.state.weather.main.temp) : null} °F</h3>
                <h3>{this.state.weather.weather ? this.state.weather.weather[0].description : null}</h3>
            </div>
        )
    }   
}

export default Weather;