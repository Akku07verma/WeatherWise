/*const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key':  'b93def6f25msh66e4b7bbf414eb8p1e8489jsn973750617484',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getData=async()=>{
	try {
		const response = await fetch(url, options);
		const result = await response.text();
		console.log(result);
	} catch (error) {
		console.error(error);
	}
}
getData()


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key':  'b93def6f25msh66e4b7bbf414eb8p1e8489jsn973750617484',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle',options)
.then(response=> response.json())
.then((response)=> {console.log(response)})
.catch(err => console.error(err));



const url =
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle";*/
const options = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": "e60d81a09emsh298c2129fcfed33p17cca3jsn3969ee95a884",
        "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
};

const getWeather = (city)=>{

	cityName.innerHTML= city


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city ,options)
.then(response => response.json())
.then((response)=> {
	
	console.log(response)

	
	temp.innerHTML =  response.temp
	temp2.innerHTML =  response.temp            
	feels_like.innerHTML =response.feels_like 
	humidity.innerHTML=response.humidity
	humidity2.innerHTML=response.humidity
	min_temp.innerHTML=response.min_temp
	max_temp.innerHTML=response.max_temp
	wind_speed.innerHTML=response.wind_speed
	wind_speed2.innerHTML=response.wind_speed
	wind_degrees.innerHTML=response.wind_degrees
	sunrise.innerHTML=response.sunrise
	sunset.innerHTML=response.sunset
     })
.catch(err => console.error(err));

}
const submit= document.querySelector("#submit")
 submit.addEventListener("click",(e)=>{
	e.preventDefault()
	getWeather(city.value)
})

getWeather("Delhi")