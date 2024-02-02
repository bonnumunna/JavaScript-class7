/*
    Almost everything in JavaScript is an object and here lies its power as a programming language.
    Basically objects are name-value pairs, bounded by curly brace. This is referred to as, 'Object Literal'. They help to arrange data (as properties and methods) of an entity.
*/

const person = {
        firstName: "John",
        lastName: "Doe",
        age: 37,
        isMarried: true,
        children: ['Jerry', 'Mary'],
        profession: function() {
            return "John is a programmer";
        },
        address: {
            city: "Boston",
            state: "Texas",
            country: "USA"
        }
    }
    // Accessing properties and methods (functions) of an object

console.log(person.firstName);
// console.log(person.profession());
// console.log(person.address.city);
// console.log(person.children[0]);