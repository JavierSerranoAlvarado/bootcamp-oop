
const Charmander = new Pokemon("Charmander", "Fire", ["Charmeleon", "Charizar"]);
const Squirtle = new Pokemon("Squirtle", "Water", ["Wartortle", "Blastoise"]);

console.log(`${Charmander.name} es de tipo ${Charmander.type}`);
console.log(Charmander.attack());
console.log(Charmander.evolve());
console.log(Charmander.attack());
console.log(Charmander.evolve());
Charmander.name = "blastoide";
console.log(Charmander.name);
console.log("---------------------------------------")

console.log(`${Squirtle.name} es de tipo ${Squirtle.type}`);
console.log(Squirtle.attack());
console.log(Squirtle.evolve(4));
console.log(Squirtle.attack());
console.log("-------------------------------")


class Piedrosos extends Pokemon{
    constructor(name = '', evolutions = [] ){
        super(name = name, "Piedroso", evolutions = evolutions);
    }
}

const Juan = new Piedrosos("Juan");
console.log(`${Juan.name} es de tipo ${Juan.type}`);
console.log(Juan.attack());
console.log(Juan.evolve());
console.log(Juan.attack());
