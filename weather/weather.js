const key = '0b7c497f61a09ac4bb83162c5413d588';
const inputValue = document.querySelector('#inputValue');
const findCity = document.querySelector('.dodajNotatke');
let notes = [];
const LSkey = 'notes';

const note = {
    city: null,
    country: null,
    temp: null,
    cloud: null,
    wind: null,
    id: null
};

function LocationOfCity() {
    return document.querySelector('#cityInput').value;
}

findCity.addEventListener('click', DataInput);

function DataInput() {
    let id = new Date().getTime();  //do id ma sie pobrac data
    let city = LocationOfCity();
    let data = {
        id: id,
        city: city
    };
    notes.push(data);
    inputValue.innerHTML = '';
    notes.forEach(element => GetWeather(element));
}

notes.forEach(element => GetWeather(element));

function GetWeather(element) {
    let weather = `https://api.openweathermap.org/data/2.5/weather?q=${element.city}&lang=pl&APPID=${key}`;

    fetch(weather)
        .then(function (response) {
            let data = response.json();
            return data;
        })
        //Przypisanie informacji pogodowych
        .then(function (data) {
            note.city = data.name;
            note.country = data.sys.country;
            note.temp = Math.floor((data.main.temp - 273.15), 2);
            note.cloud = data.clouds.all;
            note.wind = Math.floor(data.wind.speed);
            note.id = data.weather[0].icon;
            noteAdd();
        });
}

function noteAdd() {
    const noteObj = document.createElement('div');
    noteObj.classList.add('note');
    inputValue.appendChild(noteObj);

    const location = document.createElement('div');
    location.classList.add('location');
    noteObj.appendChild(location);
    location.innerHTML = '<h2>' + note.city + ', ' + note.country + '</h2>';

    const temperature = document.createElement('div');
    noteObj.appendChild(temperature);
    temperature.innerHTML = 'Temperatura wynosi: ' + note.temp + ' &deg' + 'C';

    const info = document.createElement('div');
    noteObj.appendChild(info);


    const windSpeed = document.createElement('div');
    windSpeed.classList.add('wind');
    info.appendChild(windSpeed);
    windSpeed.innerHTML = 'Prędkość wiatru to: ' + note.wind + ' m/s';

    const clouds = document.createElement('div');
    clouds.classList.add('cloud');
    info.appendChild(clouds);
    clouds.innerHTML = 'Zachmurzenie: ' + note.cloud + '%';

    const icon = document.createElement('img');
    icon.classList.add('icon');
    icon.src = `http://openweathermap.org/img/wn/${note.id}@2x.png`;
    noteObj.appendChild(icon);
}
