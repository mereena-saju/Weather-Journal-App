/* Global Variables */
const apiKey = '8649875c1dd2caf7103d8df983eab5f3';
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = (d.getMonth() + 1) + '.' + d.getDate() + '.' + d.getFullYear();

//Chaning Promises
const getWeather = async () => {
    let zip = document.getElementById('zip').value;
    retrieveData(baseUrl + zip + '&units=metric&appid=' + apiKey)
        .then(function (apiData) {
            // let userRes = document.getElementById('feelings').value;
            // let temp = apiData.main.temp;
            // let newEntry = {
            //     temp: temp,
            //     date: newDate,
            //     userResponse: userRes
            // }
            let newEntry = processData(apiData);
            postData('/addWeather', newEntry)
        })
        .then(function () { updateUI() });
}

//ASYNC GET
const retrieveData = async (url = '') => {
    const request = await fetch(url);
    try {
        const allData = await request.json();
        return allData;
    }
    catch (error) {
        console.log("error", error);
    }
}
//Process the data
function processData(apiData) {
    let userRes = document.getElementById('feelings').value;
    let temp = apiData.main.temp;
    let newObj = {
        temp: temp,
        date: newDate,
        userResponse: userRes
    }
    return newObj;
}
// Async POST
const postData = async (url = '', data = {}) => {
    const resp = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    try {
        const newData = await resp.json();
        return newData
    } catch (error) {
        console.log("error", error);
    }
}

//Dynamially updating the UI
const updateUI = async () => {
    const req = await fetch('/getWeather');
    try {
        const data = await req.json();
        document.getElementById('date').innerHTML = 'Date: ' + data.date;
        document.getElementById('temp').innerHTML = 'Temperature: ' + data.temperature + ' °C';
        document.getElementById('content').innerHTML = 'Content: ' + data.userResponse;
    } catch (error) {
        console.log(error);
    }
}

document.getElementById('generate').addEventListener('click', getWeather);