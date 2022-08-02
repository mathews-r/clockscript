const getUrl = (cityName) => `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=b0fd4f9fe0936f641d7144d2f1083db1&lang=pt_br`;

const fetchApi = async (cityName) => {
  try {
    const url = getUrl(cityName)
    const response = await fetch(url);
    const data = await response.json();

    return data;
  } catch (err) {
    return 'Falha ao acessar OpenWeatherMap, verifique sua conexão.';
  }
};

export default fetchApi;