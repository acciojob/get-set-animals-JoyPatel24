//complete this code
class Animal {
	constructor(species){
		this._species = species;
	}

	// Getter for species
	get species(){
		return this._species;
	}

	// Method to log a sound that animal makes
	makeSound(){
		console.log(`The ${this._species} makes a sound`);
	}
}

class Dog extends Animal {
	bark(){
		console.log("woof");
	}
}

class Cat extends Animal {
	purr(){
		console.log("purr");
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
