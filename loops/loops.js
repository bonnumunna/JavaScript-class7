/*
    ================== LOOPS IN JAVASCRIPT ===============
    Repettition of processes is achieved in programming with the help of loops.
    Generally, we have:
    1. While loop
    2. Do...While loop
    2. For loop.
    
    There are other advancement to the for loop which we may look into later.

    Loops will normally have conditions which must be true for the process(es) captured insided them to run. There must also be some way to keep track of iterations and change values so the loop condition eventually becomes false and the loop terminates. Otherwise, we would have an infinite (never ending) loop.
*/

// While Loop.

/*
const setValue = 10;
var currentValue = 51;
while (currentValue <= setValue) {
    console.log(currentValue); // Print the current value

    // currentValue = currentValue + 1;
    // currentValue += 1
    currentValue++; // Increment current value by 1
} // This loop will print from 1 to 10
 */

// CLASS WORK: Write a While loop that prints from 20 to 15

/* ============== DO...WHILE LOOP ================ 
    This loop will run at least once even when the condition is false.

const setVal = 5;
var currentVal = 1;
do {
    // code to run
    console.log(currentVal);
    currentVal++;

} while (currentVal <= setVal);

*/

/*
    ============== FOR LOOP ==============
    There are other enhancement of the for loop: e.g. forEach and shorthand for loop.
    For loop is one of the most useful loops in JavaScript
    
    for (var i = 0; i <= 5; i++) {
        // code to run based on above start, coditon and change 
        console.log(i);
    }
*/

/* ============= BREAKING AND SKIPPING VALUES IN LOOPS ================ 
    The above is achieved using 
    i.  break statement
    ii. continue statement
    
    for (var i = 1; i <= 10; i++) {
        // code to run based on above start, coditon and change 
        console.log(i);
        if (i == 5) {
            break; // Terminates the loop at value 5
        }
    }
*/


for (var i = 10; i <= 20; i++) {
    // code to run based on above start, coditon and change 
    if (i == 15) {
        continue; // Skip the loop at value 15
    }
    console.log(i);
}