import React, { Component } from "react";
import fetchApi from "../services/fetchAPI";

import "../styles/cardsection.css";

export default class CardSection extends Component {
  constructor() {
    super();

    this.state = {
      data: "",
      city: "",
      dataSearch: {},
    };
  }

  componentDidMount = () => {
    this.getPosition();
  };

  getPosition = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const long = position.coords.longitude;
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&APPID=b0fd4f9fe0936f641d7144d2f1083db1&lang=pt_br`;
      this.fetchApiInitial(url);
    });
  };

  fetchApiInitial = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ data: data });
  };

  clickSearch = async (city) => {
    const dataSearch = await fetchApi(city);
    this.setState({ dataSearch: dataSearch })
  };

  handleChange = ({target}) => {
    const { name, value } = target;
    this.setState({ [name]: value })
  }

  render() {
    const { data, city } = this.state;
    return (
      <section className="card-section">
        <div id="divInput">
          <input
            className="input-city"
            name="city"
            value={ city }
            onChange={ this.handleChange }
            type="text"
            placeholder=" Busque por uma cidade"
          />
          <button
            type="button"
            onClick={() => this.clickSearch(city)}
            className="buttonSearch"
          >
            Buscar
          </button>
        </div>

        <div id="cardInformation">
          {data ? (
            <>
              <div id="city">{`${data.name}, ${data.sys.country}`}</div>
              <div id="temp_max">{`Máx: ${data.main.temp_max.toFixed(
                1
              )} °C`}</div>
              <div id="temp_min">{`Min: ${data.main.temp_min.toFixed(
                1
              )} °C`}</div>
              <div id="temperature">
                {`Agora: ${data.main.feels_like.toFixed(1)} °C 
              ${data.weather[0].description}`}
              </div>
              <div id="pressure">{`Pressão: ${data.main.pressure} hPa`}</div>
              <div id="humidity">{`Umidade: ${data.main.humidity} %`}</div>
            </>
          ) : (
            ""
          )}
        </div>
      </section>
    );
  }
}
