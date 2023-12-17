function calculaFahrenheit() {
   let celsius = parseFloat(prompt("Insira a temperatura em Celsius para converter em Fahrenheit: "));
   if(!isNaN(celsius)) {
      var fahrenheit = (9 * celsius + 160) / 5;
      console.log("Celsius = "+celsius);
      console.log("Fahrenheit = "+fahrenheit);
   } else {
      console.log("O valor inserido não se classifica como um número!");
   }
}

//site: loupe 