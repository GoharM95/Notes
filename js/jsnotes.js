// ███████╗████████╗██████╗ ██╗ ██████╗████████╗    ███╗   ███╗ ██████╗ ██████╗ ███████╗
// ██╔════╝╚══██╔══╝██╔══██╗██║██╔════╝╚══██╔══╝    ████╗ ████║██╔═══██╗██╔══██╗██╔════╝
// ███████╗   ██║   ██████╔╝██║██║        ██║       ██╔████╔██║██║   ██║██║  ██║█████╗  
// ╚════██║   ██║   ██╔══██╗██║██║        ██║       ██║╚██╔╝██║██║   ██║██║  ██║██╔══╝  
// ███████║   ██║   ██║  ██║██║╚██████╗   ██║       ██║ ╚═╝ ██║╚██████╔╝██████╔╝███████╗
// ╚══════╝   ╚═╝   ╚═╝  ╚═╝╚═╝ ╚═════╝   ╚═╝       ╚═╝     ╚═╝ ╚═════╝ ╚═════╝ ╚══════╝

/* a === b (strict mode), in this case we are comparing not only values, but the types also.

console.log(num === num); // true
console.log(obj === obj); // true
console.log(str === str); // true

console.log(num === obj); // false
console.log(num === str); // false
console.log(obj === str); // false
console.log(null === undefined); // false
console.log(obj === null); // false
console.log(obj === undefined); // false

console.log(num == str); // true
console.log(big == num); // true
console.log(str == big); // true

console.log(num == obj); // true
console.log(big == obj); // true
console.log(str == obj); // true

// ██╗   ██╗ █████╗ ██████╗ ██╗ █████╗ ██████╗ ██╗     ███████╗███████╗
// ██║   ██║██╔══██╗██╔══██╗██║██╔══██╗██╔══██╗██║     ██╔════╝██╔════╝
// ██║   ██║███████║██████╔╝██║███████║██████╔╝██║     █████╗  ███████╗
// ╚██╗ ██╔╝██╔══██║██╔══██╗██║██╔══██║██╔══██╗██║     ██╔══╝  ╚════██║
//  ╚████╔╝ ██║  ██║██║  ██║██║██║  ██║██████╔╝███████╗███████╗███████║
//   ╚═══╝  ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝╚═╝  ╚═╝╚═════╝ ╚══════╝╚══════╝╚═════

/*A variable is a “named storage” for data. 
To create a variable in JavaScript, use let, var, const (can't change it's value in the future) keyword.
We can easily grasp the concept of a “variable” if we imagine it as a “box” for data, with a uniquely-named sticker on it.
For instance, the variable message can be imagined as a box labeled "message".
We can put any value in the box. We can also change it as many times as we want. The variable(data type) is receiving a value by assigning(=).

Apple and apple are 2 different variables. JavaScript has the convention of using camel case(camelCase or under_score).
A variable should be declared only once.

// let message;
message = 'Hello!';
message = 'World!'; // value changed
alert(message);//

//Check if variable is equal to value:
var username = "sammy_shark";
if (username === "sammy_shark") { 
  console.log(true);
}//

When the value is changed, the old data is removed from the variable.

//let hello = 'Hello world!';
let message;
// copy 'Hello world' from hello into message
message = hello;//

A variable should be declared only once. A repeated declaration of the same variable is an error.
Examples of incorrect variable names:
//let 1a; // cannot start with a digit
let my-name; // hyphens '-' aren't allowed in the name//

There is a list of reserved words, which cannot be used as variable names:
//let let = 5;
let return = 5;//

Variables declared with the var keyword are always function-scoped, meaning they recognize functions as having a separate scope. This locally-scoped variable is therefore not accessible from the global scope.
The new keywords let and const, however, are block-scoped. This means that a new, local scope is created from any kind of block, including function blocks, if statements, and for and while loops.

1. Variable names can consist of letters(a-z), numbers(0-9), ($), (_).
2. Can't contain tabs or spaces.
3. Can't begin with a number.
4. Can't use  reserved keywords(true, let, return...).
5. Variable names are case sensitive.(This means that language keywords, variables, function names, and any other identifiers must always be typed with a consistent capitalization of letters. The while keyword, for example, must be typed “while”, not “While” or “WHILE”.)

// Assignment of various variables
var name = "Sammy";
var spartans = 300;
var kingdoms = [ "mammals", "birds", "fish" ];
var poem = { roses: "red", violets: "blue" };
var success = true;
var nothing = null;
Using console.log(), we can see the value contained in a specific variable.

Keyword	        Scope	      Hoisting	    Can Be Reassigned	 Can Be Redeclared
var	        Function scope	    Yes	                Yes	               Yes
let	         Block scope	     No      	        Yes	                No
const	     Block scope	     No      	         No	                No

1. Global variables are those declared outside of a block
2. Local variables are those declared inside of a block

// Initialize a global variable
var species = "human";

function transform() {
  // Initialize a local, function-scoped variable
  var species = "werewolf";
  console.log(species);
}

a. // Log the global and local variable
console.log(species);
transform();
console.log(species);

Output
human
werewolf
human

b. var fullMoon = true;

// Initialize a global variable
let species = "human";

if (fullMoon) {
  // Initialize a block-scoped variable
  let species = "werewolf";
  console.log(`It is a full moon. Lupin is currently a ${species}.`);
}

console.log(`It is not a full moon. Lupin is currently a ${species}.`);
 

Output
It is a full moon. Lupin is currently a werewolf.
It is not a full moon. Lupin is currently a human.

c. // Use var to initialize a variable
var species = "human";

if (fullMoon) {
  // Attempt to create a new variable in a block
  var species = "werewolf";
  console.log(`It is a full moon. Lupin is currently a ${species}.`);
}

console.log(`It is not a full moon. Lupin is currently a ${species}.`);
 

Output
It is a full moon. Lupin is currently a werewolf.
It is not a full moon. Lupin is currently a werewolf.
*/

// ██╗  ██╗ ██████╗ ██╗███████╗████████╗██╗███╗   ██╗ ██████╗ 
// ██║  ██║██╔═══██╗██║██╔════╝╚══██╔══╝██║████╗  ██║██╔════╝ 
// ███████║██║   ██║██║███████╗   ██║   ██║██╔██╗ ██║██║  ███╗
// ██╔══██║██║   ██║██║╚════██║   ██║   ██║██║╚██╗██║██║   ██║
// ██║  ██║╚██████╔╝██║███████║   ██║   ██║██║ ╚████║╚██████╔╝
// ╚═╝  ╚═╝ ╚═════╝ ╚═╝╚══════╝   ╚═╝   ╚═╝╚═╝  ╚═══╝ ╚═════╝ 
                                                           
/*
a. // Attempt to use a variable before declaring it
console.log(x);

// Variable assignment
var x = 100;
 
Output
undefined

b. // Attempt to use a variable before declaring it
console.log(x);

// Variable assignment without var
x = 100;
 
Output
ReferenceError: x is not defined

c. // Initialize x in the global scope
var x = 100;

function hoist() {
  // A condition that should not affect the outcome of the code
  if (false) {
    var x = 200;
  }
  console.log(x);
}

hoist();
 
Output
undefined

1. // Attempt to overwrite a variable declared with var
var x = 1;
var x = 2;
console.log(x);
 
Output
2

2. // Attempt to overwrite a variable declared with let
let y = 1;
let y = 2;
console.log(y);
 
Output
Uncaught SyntaxError: Identifier 'y' has already been declared

3. // Assign value to const
const SPECIES = "human";

// Attempt to reassign value
SPECIES = "werewolf";
console.log(SPECIES);
 
Output
Uncaught TypeError: Assignment to constant variable.

Values that cannot change in programming are known as immutable, while values that can be changed are mutable.
Although const values cannot be reassigned, they are mutable as it is possible to modify the properties of objects declared with const.

// Create a CAR object with two properties
const CAR = {
    color: "blue",
    price: 15000
}

// Modify a property of CAR
CAR.price = 20000;
console.log(CAR);
 

Output
{ color: 'blue', price: 20000 }

Constants are useful for making it clear to your future self and other programmers working on a project with you that the intended variable should not be reassigned. 
If you expect that a variable may be modified in the future, you will likely want to use let to declare the variable instead.




// ██████╗  █████╗ ████████╗ █████╗     ████████╗██╗   ██╗██████╗ ███████╗███████╗
// ██╔══██╗██╔══██╗╚══██╔══╝██╔══██╗    ╚══██╔══╝╚██╗ ██╔╝██╔══██╗██╔════╝██╔════╝
// ██║  ██║███████║   ██║   ███████║       ██║    ╚████╔╝ ██████╔╝█████╗  ███████╗
// ██║  ██║██╔══██║   ██║   ██╔══██║       ██║     ╚██╔╝  ██╔═══╝ ██╔══╝  ╚════██║
// ██████╔╝██║  ██║   ██║   ██║  ██║       ██║      ██║   ██║     ███████╗███████║
// ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝       ╚═╝      ╚═╝   ╚═╝     ╚══════╝╚══════╝


// __  __ __ __ ___  ___ ____   ____ ____   __ 
// ||\ || || || ||\\//|| || )) ||    || \\ (( \
// ||\\|| || || || \/ || ||=)  ||==  ||_//  \\ 
// || \|| \\_// ||    || ||_)) ||___ || \\ \_))
                                            
The number type represents both integer and floating point numbers.

There are many operations for numbers, e.g. multiplication *, division /, addition +, subtraction -, and so on.

Besides regular numbers, there are so-called “special numeric values” which also belong to this data type: Infinity, -Infinity and NaN.

Infinity represents the mathematical Infinity ∞. It is a special value that’s greater than any number.

We can get it as a result of division by zero: 
alert( 1 / 0 ); // Infinity  
alert( "not a number" / 2 ); // NaN, such division is erroneous  
alert( "not a number" / 2 + 5 ); // NaN  

 __   __             __          __  
|__) /  \ |  | |\ | |  \ | |\ | / _` 
|  \ \__/ \__/ | \| |__/ | | \| \__> 
                                     
1. Math.floor
Rounds down: 3.1 becomes 3, and -1.1 becomes -2.
2. Math.ceil
Rounds up: 3.1 becomes 4, and -1.1 becomes -1.
3. Math.round
Rounds to the nearest integer: 3.1 becomes 3, 3.6 becomes 4, the middle case: 3.5 rounds up to 4 too.
4. Math.trunc (not supported by Internet Explorer)
Removes anything after the decimal point without rounding: 3.1 becomes 3, -1.1 becomes -1.
5. toFixed(n) rounds the number to n digits after the point and returns a string representation of the result.
let num = 12.34;
alert( num.toFixed(1) ); // "12.3"
6. toFixed is a string. If the decimal part is shorter than required, zeroes are appended to the end:
let num = 12.34;
alert( num.toFixed(5) ); // "12.34000", added zeroes to make exactly 5 digits
We can convert it to a number using the unary plus or a Number() call: +num.toFixed(5).
7. parseInt and parseFloat
alert( parseInt('100px') ); // 100
alert( parseFloat('12.5em') ); // 12.5
alert( parseInt('12.3') ); // 12, only the integer part is returned
alert( parseFloat('12.3.4') ); // 12.3, the second point stops the reading
alert( parseInt('a123') ); // NaN, the first symbol stops the process
8. Math.random()
Returns a random number from 0 to 1 (not including 1).
alert( Math.random() ); // 0.1234567894322
alert( Math.random() ); // 0.5435252343232
alert( Math.random() ); // ... (any random numbers)
9.Math.max(a, b, c...) / Math.min(a, b, c...)
alert( Math.max(3, 5, -10, 0, 1) ); // 5
alert( Math.min(1, 2) ); // 1
10. Math.pow(n, power) - Returns n raised to the given power.
alert( Math.pow(2, 10) ); // 2 in power 10 = 1024
11. toString()
var num = 15;
var n = num.toString();

// __  ______ ____  __ __  __   ___ 
// (( \ | || | || \\ || ||\ ||  // \\
//  \\    ||   ||_// || ||\\|| (( ___
// \_))   ||   || \\ || || \||  \\_||
                                  
                          
// ____    ___     ___   __     ____  ___  __  __
// || ))  // \\   // \\  ||    ||    // \\ ||\ ||
// ||=)  ((   )) ((   )) ||    ||==  ||=|| ||\\||
// ||_))  \\_//   \\_//  ||__| ||___ || || || \||
                                              
                                  
/*The boolean type has only two values: true and false.

The NULL = “nothing”, “empty” or “value unknown”

UNDEFINED

The meaning of undefined is “value is not assigned”.

let age;
console.log(age);
undefined

Falsy values:
false
0
""
null
undefined
NaN */

//  ______ _  _ ____   ____   ___    ____
//  | || | \\// || \\ ||     // \\  ||   
//    ||    )/  ||_// ||==  ((   )) ||== 
//    ||   //   ||    ||___  \\_//  ||   
                                      

/*The TYPEOF operator = returns a string

As an operator: typeof x.
As a function: typeof(x).

typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)*/


// █████╗ ██╗     ███████╗██████╗ ████████╗    ██████╗ ██████╗  ██████╗ ███╗   ███╗██████╗ ████████╗
// ██╔══██╗██║     ██╔════╝██╔══██╗╚══██╔══╝    ██╔══██╗██╔══██╗██╔═══██╗████╗ ████║██╔══██╗╚══██╔══╝
// ███████║██║     █████╗  ██████╔╝   ██║       ██████╔╝██████╔╝██║   ██║██╔████╔██║██████╔╝   ██║   
// ██╔══██║██║     ██╔══╝  ██╔══██╗   ██║       ██╔═══╝ ██╔══██╗██║   ██║██║╚██╔╝██║██╔═══╝    ██║   
// ██║  ██║███████╗███████╗██║  ██║   ██║▄█╗    ██║     ██║  ██║╚██████╔╝██║ ╚═╝ ██║██║        ██║▄█╗
// ╚═╝  ╚═╝╚══════╝╚══════╝╚═╝  ╚═╝   ╚═╝╚═╝    ╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚═╝     ╚═╝╚═╝        ╚═╝╚═╝
                                                                                                  
//  ██████╗ ██████╗ ███╗   ██╗███████╗██╗██████╗ ███╗   ███╗                                         
// ██╔════╝██╔═══██╗████╗  ██║██╔════╝██║██╔══██╗████╗ ████║                                         
// ██║     ██║   ██║██╔██╗ ██║█████╗  ██║██████╔╝██╔████╔██║                                         
// ██║     ██║   ██║██║╚██╗██║██╔══╝  ██║██╔══██╗██║╚██╔╝██║                                         
// ╚██████╗╚██████╔╝██║ ╚████║██║     ██║██║  ██║██║ ╚═╝ ██║                                         
//  ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝╚═╝     ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝ 


// ___  __     ____ ____  ______
// // \\ ||    ||    || \\ | || |
// ||=|| ||    ||==  ||_//   ||  
// || || ||__| ||___ || \\   ||  
                             
                    
                      
// alert("Hello");
// the mini window will appear with "ok" button.

// ____  ____    ___   ___  ___ ____  ______
// || \\ || \\  // \\  ||\\//|| || \\ | || |
// ||_// ||_// ((   )) || \/ || ||_//   ||  
// ||    || \\  \\_//  ||    || ||      ||  
                                         
/*result = prompt(title, [default]);
title = The text to show the visitor.
default = An optional second parameter, the initial value for the input field
example
let age = prompt('How old are you?', 100);
alert(`You are ${age} years old!`); // You are 100 years old!*/

// ___   ___   __  __  ____ __ ____  ___  ___
// //    // \\  ||\ || ||    || || \\ ||\\//||
//((    ((   )) ||\\|| ||==  || ||_// || \/ ||
// \\__  \\_//  || \|| ||    || || \\ ||    ||
                                           
/*result = confirm(question);
The function confirm shows a modal window with a question and two buttons: OK and Cancel.
The result is true if OK is pressed and false otherwise.
example
let isBoss = confirm("Are you the boss?");
alert( isBoss ); // true if OK is pressed

Summary
alert - shows a message.
prompt - shows a message asking the user to input text. It returns the text or, if Cancel button or Esc is clicked, null.
confirm - shows a message and waits for the user to press “OK” or “Cancel”. It returns true for OK and false for Cancel/Esc.*/


// ██████╗  █████╗ ███████╗██╗ ██████╗     ██████╗ ██████╗ ███████╗██████╗  █████╗ ████████╗ ██████╗ ██████╗ ███████╗
// ██╔══██╗██╔══██╗██╔════╝██║██╔════╝    ██╔═══██╗██╔══██╗██╔════╝██╔══██╗██╔══██╗╚══██╔══╝██╔═══██╗██╔══██╗██╔════╝
// ██████╔╝███████║███████╗██║██║         ██║   ██║██████╔╝█████╗  ██████╔╝███████║   ██║   ██║   ██║██████╔╝███████╗
// ██╔══██╗██╔══██║╚════██║██║██║         ██║   ██║██╔═══╝ ██╔══╝  ██╔══██╗██╔══██║   ██║   ██║   ██║██╔══██╗╚════██║
// ██████╔╝██║  ██║███████║██║╚██████╗    ╚██████╔╝██║     ███████╗██║  ██║██║  ██║   ██║   ╚██████╔╝██║  ██║███████║
// ╚═════╝ ╚═╝  ╚═╝╚══════╝╚═╝ ╚═════╝     ╚═════╝ ╚═╝     ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝    ╚═════╝ ╚═╝  ╚═╝╚══════╝

// __ __ __  __  ___  ____  _  _       ____  __ __  __  ___  ____  _  _         ___   ____   ____ ____   ___  __  __ ____  
// || || ||\ || // \\ || \\ \\//       || )) || ||\ || // \\ || \\ \\//        // \\  || \\ ||    || \\ // \\ ||\ || || \\ 
// || || ||\\|| ||=|| ||_//  )/        ||=)  || ||\\|| ||=|| ||_//  )/        ((   )) ||_// ||==  ||_// ||=|| ||\\|| ||  ))
// \\_// || \|| || || || \\ //   //    ||_)) || || \|| || || || \\ //   //     \\_//  ||    ||___ || \\ || || || \|| ||_// 
                                                                                                                        

/*An OPERAND – is what operators are applied to. For instance, in the multiplication of 5 * 2 (5 and 2 are operands)
An operator is unary if it has a single operand. For example, the unary negation - reverses the sign of a number:

let x = 1;
x = -x;
alert( x ); // -1, UNARY negation was applied

An operator is BINARY if it has two operands. The same minus exists in binary form as well:
let x = 1, y = 3;
alert( y - x ); // 2, binary minus subtracts values

Remainder %
The result of a % b is the remainder of the integer division of a by b.
alert( 5 % 2 ); // 1, a remainder of 5 divided by 2
alert( 8 % 3 ); // 2, a remainder of 8 divided by 3

Exponentiation **
The exponentiation operator a ** b multiplies a by itself b times.
alert( 2 ** 2 ); // 4  (2 multiplied by itself 2 times)
alert( 4 ** (1/2) ); // 2 (power of 1/2 is the same as a square root)
alert( 8 ** (1/3) ); // 2 (power of 1/3 is the same as a cubic root)


String concatenation with binary +
let s = "my" + "string";
alert(s); // mystring

Note that if any of the operands is a string, then the other one is converted to a string too.
alert( '1' + 2 ); // "12"
alert( 2 + '1' ); // "21"
alert(2 + 2 + '1' ); // "41" and not "221"
alert('1' + 2 + 2); // "122" and not "14"

The binary + is the only operator that supports strings in such a way. Other arithmetic operators work only with numbers and always convert their operands to numbers.
Here’s the demo for subtraction and division:
alert( 6 - '2' ); // 4, converts '2' to a number
alert( '6' / '2' ); // 3, converts both operands to numbers*/

// ██████╗ ██████╗ ███╗   ██╗██╗   ██╗███████╗██████╗ ███████╗██╗ ██████╗ ███╗   ██╗
// ██╔════╝██╔═══██╗████╗  ██║██║   ██║██╔════╝██╔══██╗██╔════╝██║██╔═══██╗████╗  ██║
// ██║     ██║   ██║██╔██╗ ██║██║   ██║█████╗  ██████╔╝███████╗██║██║   ██║██╔██╗ ██║
// ██║     ██║   ██║██║╚██╗██║╚██╗ ██╔╝██╔══╝  ██╔══██╗╚════██║██║██║   ██║██║╚██╗██║
// ╚██████╗╚██████╔╝██║ ╚████║ ╚████╔╝ ███████╗██║  ██║███████║██║╚██████╔╝██║ ╚████║
//  ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝  ╚═══╝  ╚══════╝╚═╝  ╚═╝╚══════╝╚═╝ ╚═════╝ ╚═╝  ╚══

/*The unary plus or, in other words, the plus operator + applied to a single value, doesn’t do anything to numbers. 
But if the operand is not a number, the unary plus converts it into a number.

No effect on numbers
let x = 1;
alert( +x ); // 1

let y = -2;
alert( +y ); // -2

// Converts non-numbers
alert( +true ); // 1
alert( +"" );   // 0

 does the same thing as Number(...), but is shorter.

let apples = "2";
let oranges = "3";

// both values converted to numbers before the binary plus
alert( +apples + +oranges ); // 5

// the longer variant
// alert( Number(apples) + Number(oranges) ); // 5

Increment/decrement
let counter = 2;
counter++;        // works the same as counter = counter + 1, but is shorter
alert( counter ); // 3

let counter = 2;
counter--;        // works the same as counter = counter - 1, but is shorter
alert( counter ); // 1

!!! Increment/decrement can only be applied to variables. Trying to use it on a value like 5++ will give an error.

let counter = 1;
let a = ++counter; // (*)
alert(a); // 2

In the line (*), the prefix form ++counter increments counter and returns the new value, 2. So, the alert shows 2.

Now, let’s use the postfix form:

let counter = 1;
let a = counter++; // (*) changed ++counter to counter++
alert(a); // 1

In the line (*), the postfix form counter++ also increments counter but returns the old value (prior to increment). So, the alert shows 1.

To summarize:

If the result of increment/decrement is not used, there is no difference in which form to use:

let counter = 0;
counter++;
++counter;
alert( counter ); // 2, the lines above did the same

If we’d like to increase a value and immediately use the result of the operator, we need the prefix form:
let counter = 0;
alert( ++counter ); // 1

If we’d like to increment a value but use its previous value, we need the postfix form:
let counter = 0;
alert( counter++ ); // 0

For instance:
let counter = 1;
alert( 2 * ++counter ); // 4
Compare with:

let counter = 1;
alert( 2 * counter++ ); // 2, because counter++ returns the "old" value

COMMA has a very low precedence
Please note that the comma operator has very low precedence, lower than =, so parentheses are important in the example above.

Without them: a = 1 + 2, 3 + 4 evaluates + first, summing the numbers into a = 3, 7, 
then the assignment operator = assigns a = 3, and the rest is ignored. It’s like (a = 1 + 2), 3 + 4.*/

// "" + 1 + 0 = "10" // (1)
// "" - 1 + 0 = -1 // (2)
// true + false = 1
// 6 / "3" = 2
// "2" * "3" = 6
// 4 + 5 + "px" = "9px"
// "$" + 4 + 5 = "$45"
// "4" - 2 = 2
// "4px" - 2 = NaN
// "  -9  " + 5 = "  -9  5" // (3)
// "  -9  " - 5 = -14 // (4)
// null + 1 = 1 // (5)
// undefined + 1 = NaN // (6)
// " \t \n" - 2 = -2 // (7)

/*1.The addition with a string "" + 1 converts 1 to a string: "" + 1 = "1", and then we have "1" + 0, the same rule is applied.
2.The subtraction - (like most math operations) only works with numbers, it converts an empty string "" to 0.
3.The addition with a string appends the number 5 to the string.
4.The subtraction always converts to numbers, so it makes " -9 " a number -9 (ignoring spaces around it).
5.null becomes 0 after the numeric conversion.
6.undefined becomes NaN after the numeric conversion.
Space characters, are trimmed off string start and end when a string is converted to a number.
Here the whole string consists of space characters, such as \t, \n and a “regular” space between them.
So, similarly to an empty string, it becomes 0.*/


// ____  __ __  __   ___       ___   ___   __  __ __ __  ____ ____   __  __   ___   __  __
// (( \ | || | || \\ || ||\ ||  // \\     //    // \\  ||\ || || || ||    || \\ (( \ ||  // \\  ||\ ||
//  \\    ||   ||_// || ||\\|| (( ___    ((    ((   )) ||\\|| \\ // ||==  ||_//  \\  || ((   )) ||\\||
// \_))   ||   || \\ || || \||  \\_||     \\__  \\_//  || \||  \V/  ||___ || \\ \_)) ||  \\_//  || \||
                                                                                                   
/*let value = true;
alert(typeof value); // boolean
value = String(value); // now value is a string "true"
alert(typeof value); // string */

// __  __ __ __ ___  ___  ____ ____  __   ___      ___   ___   __  __ __ __  ____ ____   __  __   ___   __  __
// ||\ || || || ||\\//|| ||    || \\ ||  //       //    // \\  ||\ || || || ||    || \\ (( \ ||  // \\  ||\ ||
// ||\\|| || || || \/ || ||==  ||_// || ((       ((    ((   )) ||\\|| \\ // ||==  ||_//  \\  || ((   )) ||\\||
// || \|| \\_// ||    || ||___ || \\ ||  \\__     \\__  \\_//  || \||  \V/  ||___ || \\ \_)) ||  \\_//  || \||
                                                                                                           
/*alert( "6" / "2" ); // 3, strings are converted to numbers
let str = "123";
alert(typeof str); // string
let num = Number(str); // becomes a number 123
alert(typeof num); // number

Numeric conversion rules:

Value	        Becomes…
undefined	      NaN
null	               0
true and false	1 and 0
string	        Whitespaces from the start and end are removed.
                 If the remaining string is empty, the result is 0. Otherwise, the number is “read” from the string. An error gives NaN.


Examples:

alert( Number("   123   ") ); // 123
alert( Number("123z") );      // NaN (error reading a number at "z")
alert( Number(true) );        // 1
alert( Number(false) );       // 0 */

// ____    ___     ___   __     ____  ___  __  __      ___   ___   __  __ __ __  ____ ____   __  __   ___   __  __
// || ))  // \\   // \\  ||    ||    // \\ ||\ ||     //    // \\  ||\ || || || ||    || \\ (( \ ||  // \\  ||\ ||
// ||=)  ((   )) ((   )) ||    ||==  ||=|| ||\\||    ((    ((   )) ||\\|| \\ // ||==  ||_//  \\  || ((   )) ||\\||
// ||_))  \\_//   \\_//  ||__| ||___ || || || \||     \\__  \\_//  || \||  \V/  ||___ || \\ \_)) ||  \\_//  || \||
                                                                                                               

/*The conversion rule:
Values that are intuitively “empty”, like 0, an empty string, null, undefined, and NaN, become false.
Other values become true.

For instance:
alert( Boolean(1) ); // true
alert( Boolean(0) ); // false
alert( Boolean("hello") ); // true
alert( Boolean("") ); // false

alert( Boolean("0") ); // true (the string with zero "0" is true)
alert( Boolean(" ") ); // spaces, also true (any non-empty string is true)*/


// !!!!
// undefined is NaN as a number, not 0.
// "0" and space-only strings like " " are true as a boolean.

// Comparison with null and undefined !!!!!

// alert( null === undefined ); // false
// alert( null == undefined ); // true


// alert( null > 0 );  // (1) false
// alert( null == 0 ); // (2) false
// alert( null >= 0 ); // (3) true

/*The reason is that an equality check == and comparisons > < >= <= work differently. 
Comparisons convert null to a number, treating it as 0. That’s why (3) null >= 0 is true and (1) null > 0 is false.
On the other hand, the equality check == for undefined and null is defined such that, without any conversions, they equal each other and don’t equal anything else. 
That’s why (2) null == 0 is false.*/

// alert( undefined > 0 ); // false (1)
// alert( undefined < 0 ); // false (2)
// alert( undefined == 0 ); // false (3)

/*Comparisons (1) and (2) return false because undefined gets converted to NaN and NaN is a special numeric value which returns false for all comparisons.
The equality check (3) returns false because undefined only equals null, undefined, and no other value.

Summary !!!!!
Comparison operators return a boolean value.
Strings are compared letter-by-letter in the “dictionary” order.
When values of different types are compared, they get converted to numbers (with the exclusion of a strict equality check).
The values null and undefined equal == each other and do not equal any other value.
Be careful when using comparisons like > or < with variables that can occasionally be null/undefined. Checking for null/undefined separately is a good idea.*/


// ██╗ ██████╗ ██████╗ ██╗         ██╗ █████╗ ███╗   ██╗██████╗ ██╗        ██╗     ██╗███╗   ██╗ ██████╗ ████████╗██╗        
// ██╔╝██╔═══██╗██╔══██╗╚██╗       ██╔╝██╔══██╗████╗  ██║██╔══██╗╚██╗       ██║    ██╔╝████╗  ██║██╔═══██╗╚══██╔══╝╚██╗       
// ██║ ██║   ██║██████╔╝ ██║       ██║ ███████║██╔██╗ ██║██║  ██║ ██║       ██║    ██║ ██╔██╗ ██║██║   ██║   ██║    ██║       
// ██║ ██║   ██║██╔══██╗ ██║       ██║ ██╔══██║██║╚██╗██║██║  ██║ ██║       ╚═╝    ██║ ██║╚██╗██║██║   ██║   ██║    ██║       
// ╚██╗╚██████╔╝██║  ██║██╔╝▄█╗    ╚██╗██║  ██║██║ ╚████║██████╔╝██╔╝▄█╗    ██╗    ╚██╗██║ ╚████║╚██████╔╝   ██║   ██╔╝▄█╗    
//  ╚═╝ ╚═════╝ ╚═╝  ╚═╝╚═╝ ╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═════╝ ╚═╝ ╚═╝    ╚═╝     ╚═╝╚═╝  ╚═══╝ ╚═════╝    ╚═╝   ╚═╝ ╚═╝ 

// 1.|| (OR)

/*alert( true || true );   // true
alert( false || true );  // true
alert( true || false );  // true
alert( false || false ); // false

OR “||” finds the first truthy value

alert( 1 || 0 ); // 1 (1 is truthy)
alert( null || 1 ); // 1 (1 is the first truthy value)
alert( null || 0 || 1 ); // 1 (the first truthy value)
alert( undefined || null || 0 ); // 0 (all falsy, returns the last value)

let firstName = "";
let lastName = "";
let nickName = "SuperCoder";

alert( firstName || lastName || nickName || "Anonymous"); // SuperCoder

It means that || processes its arguments until the first truthy value is reached, 
and then the value is returned immediately, without even touching the other argument.
true || alert("not printed");
false || alert("printed"); */

// 2.&& (AND)

/*alert( true && true );   // true
alert( false && true );  // false
alert( true && false );  // false
alert( false && false ); // false

AND “&&” finds the first falsy value

if the first operand is truthy,
AND returns the second operand:
alert( 1 && 0 ); // 0
alert( 1 && 5 ); // 5

// if the first operand is falsy,
// AND returns it. The second operand is ignored
alert( null && 5 ); // null
alert( 0 && "no matter what" ); // 0

alert( 1 && 2 && null && 3 ); // null
When all values are truthy, the last value is returned:
alert( 1 && 2 && 3 ); // 3, the last one */

// 3.! (NOT)

/*The operator accepts a single argument and does the following:

Converts the operand to boolean type: true/false.
Returns the inverse value.
For instance:

alert( !true ); // false
alert( !0 ); // true
A double NOT !! is sometimes used for converting a value to boolean type:

alert( !!"non-empty string" ); // true
alert( !!null ); // false
That is, the first NOT converts the value to boolean and returns the inverse, and the second NOT inverses it again. 
In the end, we have a plain value-to-boolean conversion.

There’s a little more verbose way to do the same thing – a built-in Boolean function:

alert( Boolean("non-empty string") ); // true
alert( Boolean(null) ); // false */

<h1>My diary</h1>

                                                                          