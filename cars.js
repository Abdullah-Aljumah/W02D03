// class Car {
//   constructor(make, model, colour, image, registrationNumber, price) {
//     this.make = make;
//     this.model = model;
//     this.colour = colour;
//     this.image = image;
//     this.registrationNumber = registrationNumber;
//     this.price = price;
//   }
//   editPrice(newPrice) {
//     return (this.price = newPrice);
//   }
//   showAll() {
//     return console.log(
//       `Make is ${this.make} and the model is ${this.model} and the colour of the car is ${this.colour} and this is the image of the car ${this.image} and the registration number is ${this.registrationNumber} and the price is ${this.price}`
//     );
//   }
// }

// const car1 = new Car("Toyota", 2022, "white", "image", 1234, 80000);
// car1.editPrice(90000);
// car1.showAll();

// const car2 = new Car("BMW", 2019, "blue", "image", 7582, 200000);
// car2.editPrice(240000);
// car2.showAll();

// const car3 = new Car("Honda", 2014, "white", "image", 4826, 65000);
// car3.editPrice(60000);
// car3.showAll();

// const car4 = new Car("Hyundai", 2009, "gray", "image", 2038, 20000);
// car4.editPrice(19000);
// car4.showAll();

// const car5 = new Car("Toyota", 2018, "red", "image", 9272, 50000);
// car5.editPrice(47000);
// car5.showAll();

function Car(make, model, colour, image, registrationNumber, price) {
      this.make = make;
  this.model = model;
  this.colour = colour;
  this.image = image;
  this.registrationNumber = registrationNumber;
  this.price = price;

this.editPrice = function(newPrice) {
    return (this.price = newPrice);
}
this.showAll = function() {
    return console.log(this)
}
  

}

const car1 = new Car("Toyota", 2022, "white", "image", 1234, 80000);
car1.editPrice(90000);
car1.showAll();

const car2 = new Car("BMW", 2019, "blue", "image", 7582, 200000);
car2.editPrice(240000);
car2.showAll();

const car3 = new Car("Honda", 2014, "white", "image", 4826, 65000);
car3.editPrice(60000);
car3.showAll();

const car4 = new Car("Hyundai", 2009, "gray", "image", 2038, 20000);
car4.editPrice(19000);
car4.showAll();

const car5 = new Car("Toyota", 2018, "red", "image", 9272, 50000);
car5.editPrice(47000);
car5.showAll();