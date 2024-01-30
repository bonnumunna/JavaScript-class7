/*
    =================== ARRAYS ====================
    Arrays are group of items stored in a single variable instead of having them on separate variables.
    It is an important feature of high level programming languages which helps in arranging and sorting data.

    JavaScript defines arrays in two ways
    1. var arr1 = [item1, item2, item3,...];
    2. var arr2 = new Array(item1, item2, item3);

    To access the elements of an array, we write the name, followed by a pair of square brackets and the index number of the item inside the square brackets.
    NOTE: 
    1.  Index numbers start counting from 0.
    2.  A JavaScript array can hold items of different data types.
    3.  The length of an array is the total number of elements in the array.
*/

const cities = ['Abuja', 'Benin', 'Calabar'];
const animals = new Array('Antelope', 'Beer', 'Cheeta', 'Dog', 'Eagle');
const randomVals = ['Ade', 12, true]; // Having different data types


// Accessing The Elements of The Above Arrays
console.log(cities[0]) // Prints Abuja on the console
console.log(animals[4]) // Prints Eagle on the browser console
console.log(randomVals[2]) // Prints true on the browser console


// ============= MULTIDIMENTIONAL ARRAYS - Arrays in an Array ======================
/*
    Multidimensional arrays, are arrays having arrays inside as elements.
    They can be arranged in rows and collumn format.
    To access the elements of a multidimensional array, 'multi', we say:
    mult[R][C], Where R is the index value of the inner array (or row) we want access and 
    C is the index value of the specific element in the inner array (column position).
*/
var mult1 = [
    [23, 41, 13],
    [0, 9, 48],
    [30, 17, 4]
];

console.log(mult1[2][1]); // Prints 17 on the console