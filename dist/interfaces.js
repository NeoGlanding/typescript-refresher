"use strict";
var andika = {
    name: "Andika",
    age: 19,
    division: "Tech Researcher",
    location: 'Bogor',
    introduction: function () {
        console.log("Hi! My name is " + this.name + ", I am " + this.age + " year/s old, also part of " + this.division + " division");
    },
    optionalFunction: function () {
        console.log('Optional');
    }
};
var andi = {
    name: "Andi",
    age: 20,
    division: "Product Researcher",
    introduction: function () {
        console.log("Hi! My name is " + this.name + ", I am " + this.age + " year/s old, also part of " + this.division + " division");
    }
};
andika.introduction();
andi.introduction();
