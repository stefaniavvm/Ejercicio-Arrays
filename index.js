//const { log } = require("console");

const { log } = require("console");

//EJERCICIO 1
//const toy1 = {
  //name: 'Buss MyYear',
  //price: 19,
//};

//const toy2 = {
  //name: 'Rallo mcKing',
  //price: 29,
//};

//console.log(toy1.price + toy2.price);

//EJERCICIO 2
//let globalBasePrice = 100000;

//const car1 = {
  //name: 'BMW',
  //baseprice: 50000,
  //finalprice: 60000,
//};

//const car2 = {
  //name: 'Chevrolletes',
  //baseprice: 700000,
  //finalprice: 800000,
//};
//globalBasePrice = 25000;
//car1.finalprice = car1.baseprice + globalBasePrice;
//car2.finalprice = car2.baseprice + globalBasePrice;

//console.log(car1);
//console.log(car2);

//Ejercicio 3.

//const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
//console.log(avengers[0]);

//1.3 Alert numero de elementos en el array usando la propiedad correcta de Array.

//const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
//avengers.slice(0,1, 'IRONMAN');
//console.log(avengers);

//console.log(avengers.length);

//1.4 Añade 2 elementos al array: "Morty" y "Summer". 

const rickAndMortty = ["Rick", "Beth", "Jerry"];
rickAndMortty.push('Morthy', 'Summer');
console.log(rickAndMortty[4])

//1.5 Elimina el último elemento del array y muestra el primero y el último por consola.

rickAndMortty.push('lapiz lopez');
rickAndMortty.pop();
console.log(rickAndMortty);
console.log(rickAndMortty[0]);
console.log(rickAndMortty[4]);

//1.6 Elimina el segundo elemento del array y muestra el array por consola.

const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];

rickAndMortyCharacters.slice(1,1);
console.log(rickAndMortyCharacters);