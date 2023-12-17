function adicao() {
   console.log("Adição de dois números");
   let n1 = parseFloat(prompt("Insira o primeiro número: "));
   let n2 = parseFloat(prompt("Insira o segundo número: "));
   if(!isNaN(n1) && !isNaN(n2)) {
      var adicao = n1 + n2;
      console.log("Adição = "+adicao);
   } else { 
      console.log("Pelo menos um dos valores inseridos não se classifica como um número!");
   }
}