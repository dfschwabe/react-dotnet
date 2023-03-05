import axios from 'axios';
import React from 'react';

class Weather extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tmrw: 'not sure'
        };
    }
    
    async componentDidMount() {
        const forecast = await axios.get('http://localhost:5223/weatherforecast').then(r => r.data);
        const tmrw = forecast[0].temperatureF;

        this.setState({ tmrw });
          
    }
    
    render() {
        return (
          <div>tomorrow is gonna be {this.state.tmrw}F</div>
        );
    }
}

export default Weather;
