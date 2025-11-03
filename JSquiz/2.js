let person = {
    name: 'John',
    greet: function() {
        console.log(`Hello ${this.name}`);
        return 'return value'
    }
};

let animal = {
    name: 'Tommy'
};

let greetfunc = person.greet.bind(animal)
//greetfunc();


function god(name, power, intro) {
    this.name = name;
    this.power =power;
    this.intro = function() {
                console.log(`God ${this.name} has power over ${this.power}`);
                return 'return value'
            }       

}

let indra = new god('Indra', 'Climate', 'intro');
//indra.intro()

class Item {
    constructor(name,use) {
        this.name = name;
        this.use = use;
    }

    describe() {
        console.log(`name is ${this.name}, use is ${this.use}`)
    }
    
    get GetName() {
        return this.name;
    }

    GetUse() {
        return this.use;
    }

}


let Bottle = new Item('Milton', 'Liquid storage');

console.log(Bottle instanceof Item);

console.log(Item.prototype);






