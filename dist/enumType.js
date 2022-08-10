"use strict";
//Enums
let petOnSale = 'chinchilla';
let ordersArray = [
    ['rat', 2],
    ['chinchilla', 1],
    ['hamster', 2],
    ['chinchilla', 50]
];
//Create an Numeric Enums named Pet
var Pet;
(function (Pet) {
    Pet[Pet["Hamster"] = 0] = "Hamster";
    Pet[Pet["Rat"] = 1] = "Rat";
    Pet[Pet["Chinchilla"] = 2] = "Chinchilla";
    Pet[Pet["Tarantula"] = 3] = "Tarantula";
})(Pet || (Pet = {}));
//variable petOnSaleTS and assign to it the value Pet.Chinchilla
let petOnSaleTS = Pet.Chinchilla;
//An array of length-2 tuples has a type annotation
let ordersArrayTS = [
    [Pet.Rat, 2],
    [Pet.Chinchilla, 1],
    [Pet.Hamster, 2],
    [Pet.Chinchilla, 50]
];
//does not exist on type 'typeof Pet'
//ordersArrayTS.push([Pet.Jerboa, 3]);
//Create a string enum named StringPet
var StringPet;
(function (StringPet) {
    StringPet["Hamster"] = "HAMSTER";
    StringPet["Rat"] = "RAT";
    StringPet["Chinchilla"] = "CHINCHILLA";
    StringPet["Tarantula"] = "TARANTULA";
})(StringPet || (StringPet = {}));
