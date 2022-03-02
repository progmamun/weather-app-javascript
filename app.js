'use strict';

// const API_KEY = `638276579b54c6cdb0de136de52c2951`;
const API_KEY = `2e81c84cc474ebf04ee39c84e1fc97cc`;
const searchTemperature = () => {
  const city = document.getElementById('city-name').value;
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid={API_KEY}&units=metric`;
  // console.log(url);
  fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data));
};

const setInnerText = (id, text) => {
  document.getElementById(id).innerText = text;
};

const displayTemperature = temperature => {
  setInnerText('city', temperature.name);
  setInnerText('temperature', temperature.main.temp);
  console.log(temperature);
};
