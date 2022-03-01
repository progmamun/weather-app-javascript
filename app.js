'use strict';

const API_KEY = `638276579b54c6cdb0de136de52c2951`;
const searchTemperature = () => {
  const city = document.getElementById('city-name').value;
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid={API_KEY}`;
  // console.log(url);
  fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data));
};

const displayTemperature = temperature => {
  console.log(temperature);
};
