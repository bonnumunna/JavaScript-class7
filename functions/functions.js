/*
    **************** JAVASCRIPT FUNCTIONS ******************
    Functions are very crucial blocks of code in every high level programming language.
    They are also called methods when they exist inside a class or are associated with an object.

    Function is a named block of code which performs specific task(s) when called. A function will NEVER run until it is called. It helps to solve repettition of certain lines of code in our program.
    To define a function in JavaScript we use the keyword 'function' followed by the name of the function, then a pair of parenthesis and then a pair of curly brace, and in-between the curly brace sits the set of tasks to be performed by the function.

    Sometimes, a function can be defined with parameters. Meaning, when calling the functionm, we would need to pass in arguments for the function to run properly.
    
    JavaScript functions are broadly categorized:
    1. User-defined function
    2. Inbuilt functions

    Syntactically and behaviourally, functions can also be classed under:
    i.      named function
    ii.     variable function
    iii.    callback function
    iv.     self calling function
*/
// ************* Named Function **************
function sayHello() {
    console.log("Hello everyone");
}

/*
    To call a function, just write the name, followed by a pair of parenthesis.
    NOTE: If the function was defined with some parameters, ensure to include argument values when calling such kind of function.
*/
// Call function sayHello
// sayHello();

// Adding Parameter to Functions
/*
    NOTE: We can add a default value for parameters by using assignment operator after the parameter and then the intended default value.

    IT IS A GOOD PRACTICE TO ALWAYS USE 'return' STATEMENTS WHILE WRITING FUNCTIONS
*/
function greetPerson(name = "everyone") {
    console.log("Good day", name);
}

// Call greetPerson
// greetPerson("Alex");

// EXAMPLE
function arithmetic(num1 = 1, num2 = 1, operator) {
    switch (operator) {
        case "+":
            var answer = num1 + num2;
            // console.log(answer);
            return answer;
            break;
        case "-":
            var answer = num1 - num2;
            // console.log(answer);
            return answer;
            break;
        case "*":
            var answer = num1 * num2;
            // console.log(answer);
            return answer;
            break;
        case "/":
            var answer = num1 / num2;
            // console.log(answer);
            return answer;
            break;
        default:
            console.log("Invalid operator...");
    }
}

var result = arithmetic(7, 13, '-');
// console.log(result);

// document.body.append(result);

// ************ Variable Function
var addNumber = function(num1 = 0, num2 = 0) {
    if (num1 == 0 && num2 == 0) {
        return "Please insert a number";
    } else {
        return num1 + num2;
    }
}

var result = addNumber(3, 4);
// console.log(result);


function calculateArea(sideA = 1, sideB = 1, sideC = 1, shape) {
    switch (shape) {
        case "triangle":
            var area = 0.5 * sideA * sideB;
            return area;
            break;
        case "circle":
            var area = (22 / 7) * sideA * sideA;
            return area;
            break;
        case "rectangle":
            var area = sideA * sideB;
            return area;
            break;
        case "trapezium":
            var area = 0.5(sideA + sideB) * sideC;
            return area;
            break;
        default:
            return "Shape not recognized";
    }
}