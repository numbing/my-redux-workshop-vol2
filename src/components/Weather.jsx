import React, { Component } from "react";
import { connect } from "react-redux";
import { getWeather } from "../action/getData";

class Weather extends Component {
  componentDidMount() {
    this.props.getWeather();
  }
  render() {
    if (!this.props.weatherData) {
      return <div>Loading...</div>;
    }
    console.log("weather", this.props.weatherData.pressure);
    return (
      <div>
        <h1>Weather In berlin</h1>
        <li>pressure: {this.props.weatherData.pressure}</li>
        <li>humidity: {this.props.weatherData.humidity}</li>
        <li>temp_min: {this.props.weatherData.temp_min}</li>
        <li>temp_max: {this.props.weatherData.temp_max}</li>
      </div>
    );
  }
}

const mapStateToPtops = state => ({
  weatherData: state.weatherReducer.weather.main
});

export default connect(
  mapStateToPtops,
  { getWeather }
)(Weather);
