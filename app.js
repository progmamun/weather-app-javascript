'use strict';
const cityInput = document.getElementById('city-name');

// const API_KEY = `46ad7457603b9b0104e633e78cd60e16`;
const API_KEY = `2e81c84cc474ebf04ee39c84e1fc97cc`;
const searchTemperature = () => {
  const city = document.getElementById('city-name').value;
  // clear input value
  cityInput.value = '';
  if (city === '') {
    return alert('Please Enter Valid Name');
  } else {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    // console.log(url);
    fetch(url)
      .then(res => res.json())
      .then(data => displayTemperature(data));
    // clear
    // city.value = '';
  }
};

const setInnerText = (id, text) => {
  document.getElementById(id).innerText = text;
  city.value = '';
};

const displayTemperature = temperature => {
  setInnerText('city', temperature.name);
  setInnerText('temperature', temperature.main.temp);
  setInnerText('condition', temperature.weather[0].main); // array মধ্যে object থাকলে [০] এভাবে নিতে হবে ।
  // console.log(temperature);
  // set weather icon
  const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
  const imgIcon = document.getElementById('weather-icon');
  imgIcon.setAttribute('src', url);
};
