var temp,temp_min, temp_max, description, latitude, longitude;
var ourRequest = new XMLHttpRequest();
var bt = document.getElementById("bt");

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    latitude =position.coords.latitude;
    longitude=	position.coords.longitude;
  });
}

ourRequest.open("GET","https://api.openweathermap.org/data/2.5/weather?lat="+Math.floor(latitude)+"&lon="+Math.floor(longitude)+"&appid=a15bc5a3af30894b88f264ace66c13dd");
ourRequest.onload= function(){
  var ourData= JSON.parse(ourRequest.responseText);
  temp = (ourData.main.temp-273).toFixed(2);
  temp_min =(ourData.main.temp_min-273).toFixed(2);
  temp_max =(ourData.main.temp_max-273).toFixed(2);
  description= ourData.weather[0].description;

 }
ourRequest.send();

bt.addEventListener("click", display);

 function display(){
  weatherIcon();
 document.getElementById("data").innerHTML = temp+ "C  "+ description;
 }

function weatherIcon(){
	var icon = document.getElementById("icon");
	if(description == "overcast clouds")
	{
		document.getElementById("icon").style.display= "block"
	}

}
