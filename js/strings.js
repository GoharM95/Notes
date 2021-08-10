// ███████╗████████╗██████╗ ██╗███╗   ██╗ ██████╗ 
// ██╔════╝╚══██╔══╝██╔══██╗██║████╗  ██║██╔════╝ 
// ███████╗   ██║   ██████╔╝██║██╔██╗ ██║██║  ███╗
// ╚════██║   ██║   ██╔══██╗██║██║╚██╗██║██║   ██║
// ███████║   ██║   ██║  ██║██║██║ ╚████║╚██████╔╝
// ╚══════╝   ╚═╝   ╚═╝  ╚═╝╚═╝╚═╝  ╚═══╝ ╚═════╝ 
                                               

/* A string in JavaScript must be surrounded by quotes. ('', "", ``)

let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`; 

function sum(a, b) {
    return a + b;
  }
  
  alert(`1 + 2 = ${sum(1, 2)}.`); // 1 + 2 = 3.

Another advantage of using backticks is that they allow a string to span multiple lines:

let guestList = `Guests:
* John
* Pete
* Mary
`;

alert(guestList); // a list of guests, multiple lines



// ___    ___   ___  ____  __   __  __ __  __   ___      ___       ___ __  __  ___  ____   ___    ___ ______  ____ ____ 
// // \\  //    //   ||    (( \ (( \ || ||\ ||  // \\    // \\     //   ||  || // \\ || \\ // \\  //   | || | ||    || \\
// ||=|| ((    ((    ||==   \\   \\  || ||\\|| (( ___    ||=||    ((    ||==|| ||=|| ||_// ||=|| ((      ||   ||==  ||_//
// || ||  \\__  \\__ ||___ \_)) \_)) || || \||  \\_||    || ||     \\__ ||  || || || || \\ || ||  \\__   ||   ||___ || \\
                                                                                                                      
//    __ __  __     ___      __  ______ ____  __ __  __   ___                                                            
//    || ||\ ||    // \\    (( \ | || | || \\ || ||\ ||  // \\                                                           
//    || ||\\||    ||=||     \\    ||   ||_// || ||\\|| (( ___                                                           
//    || || \||    || ||    \_))   ||   || \\ || || \||  \\_||   

let str = `Hello`;

// the first character
alert( str[0] ); // H
alert( str.charAt(0) ); // H

// the last character
alert( str[str.length - 1] ); // o

alert( str[1000] ); // undefined

Strings are immutable

It is impossible to change a character.

let str = 'Hi';

str[0] = 'h'; // error
alert( str[0] ); // doesn't work


/*10. function accessACharacter(string, index) {
  var result = string[index];
  return result;
}

var resultCharacter = accessACharacter('Computer', 3);
console.log('should be "p":', resultCharacter); */

// ____   ____  ___   __   __  __   ___  __  __ __ __  __   ___      ___         
// || \\ ||    // \\ (( \ (( \ ||  // \\ ||\ || || ||\ ||  // \\    // \\        
// ||_// ||==  ||=||  \\   \\  || (( ___ ||\\|| || ||\\|| (( ___    ||=||        
// || \\ ||___ || || \_)) \_)) ||  \\_|| || \|| || || \||  \\_||    || ||        
                                                                              
//     __  ______ ____  __ __  __   ___  //  __     __ __  ___  __    __ __  ____
//    (( \ | || | || \\ || ||\ ||  // \\    (( \    || || // \\ ||    || || ||   
//     \\    ||   ||_// || ||\\|| (( ___     \\     \\ // ||=|| ||    || || ||== 
//    \_))   ||   || \\ || || \||  \\_||    \_))     \V/  || || ||__| \\_// ||___
                                                                              
/*11. function reassignAString(string) {
  input = "reassigned";
  return input;
}
    
var resultString1 = reassignAString('Computer Science');
console.log('should be "reassigned":', resultString1); */

// ___   ___   __  __   ___  ___  ______  ____ __  __  ___  ______  ____    ______ __    __   ___     
// //    // \\  ||\ ||  //   // \\ | || | ||    ||\ || // \\ | || | ||       | || | ||    ||  // \\    
//((    ((   )) ||\\|| ((    ||=||   ||   ||==  ||\\|| ||=||   ||   ||==       ||   \\ /\ // ((   ))   
// \\__  \\_//  || \||  \\__ || ||   ||   ||___ || \|| || ||   ||   ||___      ||    \V/\V/   \\_//    
                                                                                                    
//  ___   ____     ___  ___   ___   ____   ____     __  ______ ____  __ __  __   ___   __              
// // \\  || \\    ||\\//||  // \\  || \\ ||       (( \ | || | || \\ || ||\ ||  // \\ (( \             
//((   )) ||_//    || \/ || ((   )) ||_// ||==      \\    ||   ||_// || ||\\|| (( ___  \\              
// \\_//  || \\    ||    ||  \\_//  || \\ ||___    \_))   ||   || \\ || || \||  \\_|| \_))        

/*12. function addTogetherTwoStrings(string1, string2) {
  var result = string1 + string2;
  return result;
}

var resultString1 = addTogetherTwoStrings('Comp', 'uter');
console.log('should be "Computer":', resultString1);*/

// __  ______ ____  __ __  __   ___                                                 
// (( \ | || | || \\ || ||\ ||  // \\                                                
//  \\    ||   ||_// || ||\\|| (( ___                                                
// \_))   ||   || \\ || || \||  \\_||                                                
                                                                                  
//    __ __  __ ______  ____ ____  ____    ___   __     ___  ______ __   ___   __  __
//    || ||\ || | || | ||    || \\ || \\  // \\  ||    // \\ | || | ||  // \\  ||\ ||
//    || ||\\||   ||   ||==  ||_// ||_// ((   )) ||    ||=||   ||   || ((   )) ||\\||
//    || || \||   ||   ||___ || \\ ||     \\_//  ||__| || ||   ||   ||  \\_//  || \||

// When we want to build a message around the values of a variable.

/*13. function interpolateAString(activity, dayOfTheWeek) {
  var result = 'We will go ' + activity + ' on ' + dayOfTheWeek + '.';
  return result;
}

var resultMessage1 = interpolateAString('hiking', 'Tuesday');
console.log("should log 'We will go hiking on Tuesday.':", resultMessage1); */

// __     ____ __  __   ___  ______ __  __      ___    ____     __  ______ ____  __ __  __   ___ 
// ||    ||    ||\ ||  // \\ | || | ||  ||     // \\  ||       (( \ | || | || \\ || ||\ ||  // \\
// ||    ||==  ||\\|| (( ___   ||   ||==||    ((   )) ||==      \\    ||   ||_// || ||\\|| (( ___
// ||__| ||___ || \||  \\_||   ||   ||  ||     \\_//  ||       \_))   ||   || \\ || || \||  \\_||

/*14. function getStringLength(string) {
  var length = string.length;
  return length;
}

var resultLength1 = getStringLength('Apple');
console.log('should log 5:', resultLength1); */

// __     ___   __  ______      ___ __  __  ___  ____   ___    ___ ______  ____ ____    
// ||    // \\ (( \ | || |     //   ||  || // \\ || \\ // \\  //   | || | ||    || \\   
// ||    ||=||  \\    ||      ((    ||==|| ||=|| ||_// ||=|| ((      ||   ||==  ||_//   
// ||__| || || \_))   ||       \\__ ||  || || || || \\ || ||  \\__   ||   ||___ || \\   
                                                                                     
//   ___    ____     ___      __  ______ ____  __ __  __   ___                          
//  // \\  ||       // \\    (( \ | || | || \\ || ||\ ||  // \\                         
// ((   )) ||==     ||=||     \\    ||   ||_// || ||\\|| (( ___                         
//  \\_//  ||       || ||    \_))   ||   || \\ || || \||  \\_||                         
                                                                
/*15. function getLastCharacter(string) {
  var lastIndex = string.length - 1;
  var lastCharacter = string[lastIndex];
  return lastCharacter;
}

var resultLastCharacter1 = getLastCharacter('Banana');
console.log('should log "a":', resultLastCharacter1); */

// ███████╗██╗     ██╗ ██████╗███████╗
// ██╔════╝██║     ██║██╔════╝██╔════╝
// ███████╗██║     ██║██║     █████╗  
// ╚════██║██║     ██║██║     ██╔══╝  
// ███████║███████╗██║╚██████╗███████╗
// ╚══════╝╚══════╝╚═╝ ╚═════╝╚══════╝

/*Returns the part of the string from start to (but not including) end.
let str = "stringify";
alert( str.slice(0, 5) ); // 'strin', the substring from 0 to 5 (not including 5)
alert( str.slice(0, 1) ); // 's', from 0 to 1, but not including 1, so only character at 0

let str = "stringify";
alert( str.slice(2) ); // 'ringify', from the 2nd position till the end

let str = "stringify";
// start at the 4th position from the right, end at the 1st from the right
alert( str.slice(-4, -1) ); // 'gif'

             
// __  __ __ ____   __  ______ ____  __ __  __   ___ 
// (( \ || || || )) (( \ | || | || \\ || ||\ ||  // \\
//  \\  || || ||=)   \\    ||   ||_// || ||\\|| (( ___
// \_)) \\_// ||_)) \_))   ||   || \\ || || \||  \\_||

// When we want to get a portion of a string.

/*let str = "stringify";

// these are same for substring
alert( str.substring(2, 6) ); // "ring"
alert( str.substring(6, 2) ); // "ring"

// ...but not for slice:
alert( str.slice(2, 6) ); // "ring" (the same)
alert( str.slice(6, 2) ); // "" (an empty string)

/*16. function applySubString(string, start, end) {
  var subString = string.substring(start, end);
  return subString;
}

var string1 = 'Queue';
var resultSubString1 = applySubString(string1, 1, 4);
console.log('should log "ueu":', resultSubString1); */

/*
███████╗██╗   ██╗██████╗ ███████╗████████╗██████╗ 
██╔════╝██║   ██║██╔══██╗██╔════╝╚══██╔══╝██╔══██╗
███████╗██║   ██║██████╔╝███████╗   ██║   ██████╔╝
╚════██║██║   ██║██╔══██╗╚════██║   ██║   ██╔══██╗
███████║╚██████╔╝██████╔╝███████║   ██║   ██║  ██║
╚══════╝ ╚═════╝ ╚═════╝ ╚══════╝   ╚═╝   ╚═╝  ╚═╝

Returns the part of the string from start, with the given length.

let str = "stringify";
alert( str.substr(2, 4) ); // 'ring', from the 2nd position get 4 characters

let str = "stringify";
alert( str.substr(-4, 2) ); // 'gi', from the 4th position get 2 characters
                                                  


// __ __  __ ____    ____ _   _   ___    ____
// || ||\ || || \\  ||    \\ //  // \\  ||   
// || ||\\|| ||  )) ||==   )X(  ((   )) ||== 
// || || \|| ||_//  ||___ // \\  \\_//  ||   

/*17. function applyIndexOf(string, subString) {
  var index = string.indexOf(subString);
  return index;
}

var string1 = 'Quicksort';
var subString1 = 'sort';
var resultIndex1 = applyIndexOf(string1, subString1);
console.log('should log 5:', resultIndex1); */

// ______   ___    __  ______ ____  __ __  __   ___     ___  ___  ____ ______ __  __   ___   ____  
// | || |  // \\  (( \ | || | || \\ || ||\ ||  // \\    ||\\//|| ||    | || | ||  ||  // \\  || \\ 
//   ||   ((   ))  \\    ||   ||_// || ||\\|| (( ___    || \/ || ||==    ||   ||==|| ((   )) ||  ))
//   ||    \\_//  \_))   ||   || \\ || || \||  \\_||    ||    || ||___   ||   ||  ||  \\_//  ||_// 

// When we want to turn a value, other than a string, into a string.
                                                                                                
/*18. function applyToString(param) {
  var stringVersion = param.toString();
  return stringVersion;
}

var input1 = 9374;
var resultString1 = applyToString(input1);
// console.log('should log "9374":', resultString1);
// console.log('type should be "string":', typeof resultString1); */

/*__                  __          __     
/  ` |__|  /\  |\ | / _` | |\ | / _`    
\__, |  | /~~\ | \| \__> | | \| \__>    
                                        
   ___       ___     __        __   ___ 
    |  |__| |__     /  `  /\  /__` |__  
    |  |  | |___    \__, /~~\ .__/ |___
    
alert( 'Interface'.toUpperCase() ); // INTERFACE
alert( 'Interface'.toLowerCase() ); // interface

██╗███╗   ██╗ ██████╗██╗     ██╗   ██╗██████╗ ███████╗███████╗ ██╗██╗ 
██║████╗  ██║██╔════╝██║     ██║   ██║██╔══██╗██╔════╝██╔════╝██╔╝╚██╗
██║██╔██╗ ██║██║     ██║     ██║   ██║██║  ██║█████╗  ███████╗██║  ██║
██║██║╚██╗██║██║     ██║     ██║   ██║██║  ██║██╔══╝  ╚════██║██║  ██║
██║██║ ╚████║╚██████╗███████╗╚██████╔╝██████╔╝███████╗███████║╚██╗██╔╝
╚═╝╚═╝  ╚═══╝ ╚═════╝╚══════╝ ╚═════╝ ╚═════╝ ╚══════╝╚══════╝ ╚═╝╚═╝ 

var str = "Hello world, welcome to the universe.";
var n = str.includes("world");

var str = "Hello world, welcome to the universe.";
var n = str.includes("world", 12);

████████╗██████╗ ██╗███╗   ███╗ ██╗██╗ 
╚══██╔══╝██╔══██╗██║████╗ ████║██╔╝╚██╗
   ██║   ██████╔╝██║██╔████╔██║██║  ██║
   ██║   ██╔══██╗██║██║╚██╔╝██║██║  ██║
   ██║   ██║  ██║██║██║ ╚═╝ ██║╚██╗██╔╝
   ╚═╝   ╚═╝  ╚═╝╚═╝╚═╝     ╚═╝ ╚═╝╚═╝ 

The trim() method removes whitespace from both sides of a string.
                                       
var str = "Hello World!";
alert(str.trim());                                                                     