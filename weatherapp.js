 async function getData() {
            let result = await fetch("https://api.open-meteo.com/v1/forecast?latitude=27.716&longitude=85.2637&current_weather=true");
            let data = await result.json();
            console.log(data);
           document.getElementById("data").innerText = data.current_weather.temperature + " °C";
            let temp = data.current_weather.temperature;
            if(temp<=0){
                document.getElementById("advice").innerHTML = "Very cold Wear thick layers";
            }
            else if(temp>0 && temp<=10){
                document.getElementById("advice").innerHTML = "Chilly; you’ll need warm clothing.";

            }
             else if(temp>10 && temp<=20){
                document.getElementById("advice").innerHTML = "Comfortable but may feel cool.";

            }
             else if(temp>20 && temp<=27){
                document.getElementById("advice").innerHTML = "Comfortable warmth; not too hot.";

            }
             else if(temp>28 && temp<=34){
                document.getElementById("advice").innerHTML = "You’ll feel the heat, especially in the sun.";

            }
             else if(temp>35){
                document.getElementById("advice").innerHTML = "Strong heat, risk of dehydration.";

            }
        }
        getData();
        setInterval(getData,6000);