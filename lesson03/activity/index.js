class dog {
  constructor(name, age, breed, color, barkLevel, energyLevel, patMethod) {
    this.name = name;
    this.age = age;
    this.breed = breed;
    this.color = color;
    this.barkLevel = barkLevel;
    this.energyLevel = energyLevel;
  }


   patMethod() {
     return this.energyLevel++
    //  this.barkLevel--;
   }
  }

  const dog1 = new dog('rosie', 13, 'baset hound/lab', 'brown white', 5, 8);
  console.log(dog1);
  dog1.patMethod();
  



    console.log(`This dog's name is ${this.name}, age is ${this.age}, current energy level is ${this.energyLevel} and the bark level is ${this.barkLevel}.`);
  


// // Create new dog 

// const Penny = new dog('Penny', 13, 'Carin Terrior', 'brown');

// // Pat method 

// Penny.patMethod();
// Penny.patMethod();
// Penny.patMethod();
// Penny.patMethod();
// Penny.patMethod();