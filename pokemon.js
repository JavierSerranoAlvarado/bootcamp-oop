/* El nombre de la clase debe ir en mayuscula la primer letra */
class Pokemon{
    
    #name = ""; 
    #type = ""
    #evoluciones = []; 

    constructor(name, type, evoluciones ){
        this.#name = name;
        this.#type = type;
        this.#evoluciones = evoluciones;
    }

    set name (name){
         this.#name = name;
    }

    set type (type){
        this.#type = type;
    }

    set evoluciones(evoluciones){
        this.#evoluciones = evoluciones;
    }

    get name () {
        return this.#name;
    }

    get type(){
        return this.#type;
    }

    get evoluciones(){
        return this.#evoluciones;
    }

    attack(){
        return `${this.name}, esta atacando`;
    }

    evolve(){
        //valida que la opcion exista
        const EVOLVE = (this.evoluciones[0]) ? this.evoluciones.shift() : '';
        let message = "No puedo evolucionar"

        if(EVOLVE){
            message = `${this.name} esta evolucionando a ${EVOLVE}`;
            this.name = EVOLVE;
        }

        return message;

    }
};

class TypeFire extends Pokemon {
    constructor(name = '', evoluciones = []){
        super(name, 'fire', evoluciones);
    }

    message() {
        return `Hola soy ${this.name} y soy de tipo Fuego`;
    }
}

const charmander = new TypeFire('Charmander', ['Pedro', 'juan']);
console.log(charmander.name) 
console.log(charmander.message());
console.log(charmander.evolve());


