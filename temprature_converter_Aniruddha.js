let tempCelsius = 60;
let tempFahrenheit = 45;
//convertFrom can have two values 1.CelsiusToFahrenheit and 2.FahrenheitToCelsius
let convertFrom = "CelsiusToFahrenheit";  

switch(convertFrom){
    case "CelsiusToFahrenheit" :
        let cToF = (1.8 * tempCelsius) +32;
        console.log(`Temperature is : ${cToF} °F.`);
        break;
    case "FahrenheitToCelsius" :
        let fToC = (tempFahrenheit - 32) * 0.5556;
        console.log(`Temperature is : ${fToC} °C.`);
        break;
    default :
        console.log("Error. convertFrom can have two values 1.CelsiusToFahrenheit and 2.FahrenheitToCelsius only.");
        break;
}
