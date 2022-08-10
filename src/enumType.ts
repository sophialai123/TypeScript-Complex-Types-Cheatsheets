//Enums
let petOnSale = 'chinchilla';
let ordersArray = [
  ['rat', 2],
  ['chinchilla', 1],
  ['hamster', 2],
  ['chinchilla', 50]
]

//Create an Numeric Enums named Pet
enum Pet {
  Hamster,
  Rat,
  Chinchilla,
  Tarantula
}

//variable petOnSaleTS and assign to it the value Pet.Chinchilla
let petOnSaleTS: Pet = Pet.Chinchilla;

//An array of length-2 tuples has a type annotation
let ordersArrayTS: [Pet, number][] = [
  [Pet.Rat, 2],
  [Pet.Chinchilla, 1],
  [Pet.Hamster, 2],
  [Pet.Chinchilla, 50]
];

//does not exist on type 'typeof Pet'
//ordersArrayTS.push([Pet.Jerboa, 3]);



//Create a string enum named StringPet
enum StringPet {
  Hamster = "HAMSTER",
  Rat = "RAT",
  Chinchilla = "CHINCHILLA",
  Tarantula = "TARANTULA"
}
