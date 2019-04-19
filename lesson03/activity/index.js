class dog {
  constructor(name, age, breed, color, barkLevel, energyLevel, pat) {
    this.name = name;
    this.age = age;
    this.breed = breed;
    this.color = color;
    this.barkLevel = 10;
    this.energyLevel = 0;
  }

  // Pat method 

  pat() {
    this.energyLevel++
    this.barkLevel--;

    console.log(`This dog's name is ${this.name}, age is ${this.age}, current energy level is ${this.energyLevel} and the bark level is ${this.barkLevel}`);
  }
}

