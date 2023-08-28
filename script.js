//function to take input from user
function getdata() {
    var city = document.getElementById('city').value;
    var url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city;
    const options = {

        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '44c0cd3fcdmsh0c649eb53ee5ce1p134b3ajsn3f9a177532c0',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };
    fetchdata(url, options, city);
}

//function to fetch data from API
async function fetchdata(url, options, city) {
    const response = await fetch(url, options);
    if (response.status === 200) {
        var data = await response.json();
        console.log(data);
        var items = JSON.stringify(data);
        display(data, city);
    }
    else {
        window.alert("Please enter valid city");
    }

}

//function to populate the results
function display(data, city) {
    document.getElementById('citytemp').innerHTML = city;
    document.getElementById('temp').innerHTML = "Temperature " + data.temp;
    document.getElementById('feelslike').innerHTML = "Feels like " + data.feels_like;
    document.getElementById('windspeed').innerHTML = "Wind <br> Wind Speed " + data.wind_speed;
    document.getElementById('winddegree').innerHTML = "Wind degrees " + data.wind_degrees;
    document.getElementById('humid').innerHTML = "Humidity <br> " + data.humidity;
    if(data.temp>0 && data.temp<10){
        document.getElementById('tempicon').data="winter.jpg";
        document.getElementById('tempicon').height="60px";
        document.getElementById('tempicon').width="60px";
    }
    else if(data.temp>=10 && data.temp<30){
        document.getElementById('tempicon').data="mid.jpg";
        document.getElementById('tempicon').height="60px";
        document.getElementById('tempicon').width="60px";
    }
    else if(data.temp>=30){
        document.getElementById('tempicon').data="summers.png";
        document.getElementById('tempicon').height="60px";
        document.getElementById('tempicon').width="60px";
    }
    else{
        console.log("Invalid temperature");
    }
}

//function to clear the results
function cleardata() {
    document.getElementById('citytemp').innerHTML = "";
    document.getElementById('temp').innerHTML = "";
    document.getElementById('feelslike').innerHTML = "";
    document.getElementById('windspeed').innerHTML = "";
    document.getElementById('winddegree').innerHTML = "";
    document.getElementById('humid').innerHTML = "";
    document.getElementById('tempicon').data="";
}
