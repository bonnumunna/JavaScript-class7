/*
    ========= Decision Making in JS =========
    While writing programs, we would often come to points where we need to take certain actions based on the current value of a variable under consideration.
    We would first determine the present value and then take a course of action based on the value of that varialbe.
*/

const age = 18;
const user = "user";

if (age >= 18 || user == "admin") {
    console.log("You can apply")
} else {
    console.log("You're not elligible")
}

// Allow access if user age > 18 and is admin
/*
if (age > 0 && age < 13) {
    // execute if condition1 is true
    console.log("This is a child");
    
} else if (age >= 13 && age <= 19) {
    // execute if condition2 is true
    console.log("This is a teenager");
    
} else if (age >= 20 && age <= 40) {
    // execute if condition3 is true
    console.log("This is a young adult (Youth)");
} else {
    // execute if all conditions are false
    console.log("Invalid age");
}



const fruit = "pawpaw";

// Write message for different fruits
if (fruit == "apple") {
    // Normal concatenation
    console.log("I love eating " + fruit);

} else if (fruit == "orange") {
    // Use of comma separator to concatenate
    console.log("I like the smell of", fruit);

} else if (fruit == "pineapple") {
    console.log(`${fruit} was the first I tasted in 2024.`);
} else {
    console.log(`We don't have ${fruit} on our shelf`);
}
*/

//  ========= SWITCH...CASE =========
// var day = "Tuesday";
// switch (day) {
//     case "Monday":
//         // do something
//         console.log(`No class on ${day}.`);
//         break;
//     case "Tuesday":
//         // do something else
//         console.log(`We have JS class on ${day}s.`)
//         break;
//     case "Wednesday":
//         // do something else
//         console.log(`${day}s is for PHP`);
//         break;
//     case "Thursday":
//         console.log(`${day} is our last class for the week.`);
//     default:
//         // No other choice
//         console.log("We are on break...");
// }