const input=document.getElementById('search');
let temp=document.getElementById('temp');
let title=document.getElementById('title');
const api={
    key:"5f0394dbe9ab29319f68987aaa8449b0",
    baseurl:"https://api.openweathermap.org/data/2.5/",
};

input.addEventListener('keypress',function(e){
    if(e.keyCode===13){
        getResults(input.value);
        console.log(input.value)
    }
})

function getResults(query){
    fetch(`${api.baseurl}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then((weather)=>{
        return weather.json()
    })
    .then(displayResults);

}

function displayResults(weather){
    console.log(weather);
    title.innerHTML=`${weather.name}, ${weather.sys.country}`;
    temp.innerHTML=`${Math.round(weather.main.temp_min)}°C/${Math.round(weather.main.temp_max)}°C`
}