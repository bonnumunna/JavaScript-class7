// ========INTRODUCTION TO JAVASCRIPT ==========
/*
    BASIC GUIDING RULES FOR WRITING JS PRGORAMS
    - GENERAL
    1. Always end your codes with semi-colon (;)
    2. Semi-colon is the logical end of a line 
        of code
    3. JavaScript is lenient to ignore absence 
        of ; at the end of a line of code. But if two separate codes are on same line, differentiate them with a ;

    4. Almost everything in JavaScript is an object.
    
    -VARIABLES
        These are named memory locations used to store values used in your program.

    1. Variables are declared by using key words
        such as 'var', 'let' and 'const'.
        NOTE: 'const' is meant for what will not change in value while the program is running -constant value.
        'var' and 'let' are basically the same, only for their scope and ability to reassign values to such variables.

    2. Variables are case sensitive in JS. I.e. 
        var firstName, var FirstName, var firstname are all different variables.

        In declaring variables, always beging with lowercase. You may use uppercase for constants, though strongly discouraged. The following format may be used:
        i.      firstname (all lowercase)
        ii.     firstName (carmel case)
        iii.    first_name (underscore)
        iv.     FirstName (Only use for class names)
        v.      DATABASE_NAME (all uppercase -constant)
    
    3. Variables can hold data of various types:
        i.      Number -integer
        ii.     Number -float/double (decimal)
        iii.    Boolean (true or false)
        iv.     String
                Anything between single or double quotes is a string.
                e.g. "John Doe", 'Carlos Slim'
                are both strings.
        v.      Array (set of values)
        vi.     Null (Nothing)
        vii.    Object
        viii.   Resource (some path locations)

    NOTE: Variables are not strongly typed, unlike in Java lang. Meaning, a variable declared as var can be reassigned with another value of different data type.

    To assign a value to a variable, we use the = sign. e.g. 
    var age = 3;
    Meaning, the variable age, holds the integer value, 3. So we can use age in our program instead writing 3.

    - BRACKETS IN PROGRAMMING -
    1. () - Parenthesis
    2. <> - Angle brackets
    3. [] - Bracket (square bracket)
    4. {} - Curly brace
*/

// CONCATENATION OF VARIABLE WITH STRING
var firstName = "John";
var lastName = "Doe";

// console.log(firstName + " " + lastName);
var fullName = firstName + " " + lastName;

console.log(fullName);
var sentence = "My name is " + fullName;
// console.log(sentence);

var age = 19;
var height = 1.74;
var city = "New York";
var day = 'Tuesday';

sentence = "My name is " + fullName + " I am " + age + " years old and " + height + "m tall. On " + day + ", I will be travelling to " + city;
console.log(sentence);

var word1 = "They're coming from Lagos today";
console.log(word1);
var word2 = 'They\'re coming from Warri today';
console.log(word2);

/* ========= OPERATORS ===========
    Operators are symbols used to manipulate, combine and mix variables with other variables or values or numbers
    1. ASSIGNMENT OPERATOR
        i. = Used to assign values to variables
            e.g var age = 17.
    2. ARITHMETIC OPERATOR
        i. +    Add values (also used to concatenate)
        ii. -   Subtraction
        iii. *  Multiplication
        iv. /   Division
        v. %    Modulus - Remainder after   division

    3. ARITTHMETIC-ASSIGNMENT OPERATOR
        i. += Add and assign
        ii. -= Subtract and assign
        iii. *= Multiply and assign
        iv. /= Divide and assign
        v. %= Modulus and assign
    4. COMPARISON OPERATOR
        i. < Less than
        ii. > Greater than
        iii. <= Less than or equal to
        iv. >= Greater than or equal to
        v. == Equal to
        vi. != Not equal to
        vii. === Identical (in value and type)
    5. LOGICAL OPERATOR
        i. && Logical AND
        ii. ! Logical NOT
        iii. || Logical OR
    */