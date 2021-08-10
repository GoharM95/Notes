
/*  ███████╗██╗   ██╗███╗   ██╗ ██████╗████████╗██╗ ██████╗ ███╗   ██╗███████╗
    ██╔════╝██║   ██║████╗  ██║██╔════╝╚══██╔══╝██║██╔═══██╗████╗  ██║██╔════╝
    █████╗  ██║   ██║██╔██╗ ██║██║        ██║   ██║██║   ██║██╔██╗ ██║███████╗
    ██╔══╝  ██║   ██║██║╚██╗██║██║        ██║   ██║██║   ██║██║╚██╗██║╚════██║
    ██║     ╚██████╔╝██║ ╚████║╚██████╗   ██║   ██║╚██████╔╝██║ ╚████║███████║
    ╚═╝      ╚═════╝ ╚═╝  ╚═══╝ ╚═════╝   ╚═╝   ╚═╝ ╚═════╝ ╚═╝  ╚═══╝╚══════╝

function is a chain of commands we can reuse in different/multiple places
                                                                          
Functions are one of the fundamental building blocks in JS
1. A function is a JavaScript procedure, which is:
2. A set of statements that perform a task or calculate a value
3. A function definition (or declaration) consists of a function keyword, followed by:
    a. The name of the function
    b. A list of parameters to the function, enclosed in parentheses and separated by commas
    c. The JS statements that define the function, enclosed in curly braces { }
// definition
function nameOfFunction(list of parameters) {
  statements that define the function
}

//calling the function (test)
var result = nameOfFunction(list of arguments);
console.log(result);

Values passed to a function as parameters are copied to its local variables.
A function may access outer variables. But it works only from inside out. The code outside of the function doesn’t see its local variables.
A function can return a value. If it doesn’t, then its result is undefined.

// 1. named function or function declaration
function name(parameter) {
  return result;
}

name() the code will be executed when calling the function.
 we can call a function before declaration, bcs functions are being hoisted to the top of the document

2. anonymous function or function expression
in this case we are assigning a funtion to a variable
const result = function() {

} 
result()

in this case as it is assigned to the variable, we can call it only after the function, it behave as a variable.





 █████╗ ██████╗ ██████╗  ██████╗ ██╗    ██╗                                   
██╔══██╗██╔══██╗██╔══██╗██╔═══██╗██║    ██║                                   
███████║██████╔╝██████╔╝██║   ██║██║ █╗ ██║                                   
██╔══██║██╔══██╗██╔══██╗██║   ██║██║███╗██║                                   
██║  ██║██║  ██║██║  ██║╚██████╔╝╚███╔███╔╝                                   
╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝  ╚══╝╚══╝                                    
                                                                              
    ███████╗██╗   ██╗███╗   ██╗ ██████╗████████╗██╗ ██████╗ ███╗   ██╗███████╗
    ██╔════╝██║   ██║████╗  ██║██╔════╝╚══██╔══╝██║██╔═══██╗████╗  ██║██╔════╝
    █████╗  ██║   ██║██╔██╗ ██║██║        ██║   ██║██║   ██║██╔██╗ ██║███████╗
    ██╔══╝  ██║   ██║██║╚██╗██║██║        ██║   ██║██║   ██║██║╚██╗██║╚════██║
    ██║     ╚██████╔╝██║ ╚████║╚██████╗   ██║   ██║╚██████╔╝██║ ╚████║███████║
    ╚═╝      ╚═════╝ ╚═╝  ╚═══╝ ╚═════╝   ╚═╝   ╚═╝ ╚═════╝ ╚═╝  ╚═══╝╚══════╝
  
1. If we have only one argument: 
let double = n => n * 2;
// roughly the same as: let double = function(n) { return n * 2 }

alert( double(3) ); // 6

2. If there are no arguments:
let sayHi = () => alert("Hello!");

sayHi();

3. Multiline arrow functions:
let sum = (a, b) => {  // the curly brace opens a multiline function
  let result = a + b;
  return result; // if we use curly braces, then we need an explicit "return"
};

alert( sum(1, 2) ); // 3

let arr = [1, 0, false];

██╗███╗   ██╗██████╗ ███████╗██╗  ██╗ ██████╗ ███████╗                                 
██║████╗  ██║██╔══██╗██╔════╝╚██╗██╔╝██╔═══██╗██╔════╝                                 
██║██╔██╗ ██║██║  ██║█████╗   ╚███╔╝ ██║   ██║█████╗                                   
██║██║╚██╗██║██║  ██║██╔══╝   ██╔██╗ ██║   ██║██╔══╝                                   
██║██║ ╚████║██████╔╝███████╗██╔╝ ██╗╚██████╔╝██║                                      
╚═╝╚═╝  ╚═══╝╚═════╝ ╚══════╝╚═╝  ╚═╝ ╚═════╝ ╚═╝                                      
                                                                                       
██╗      █████╗ ███████╗████████╗██╗███╗   ██╗██████╗ ███████╗██╗  ██╗ ██████╗ ███████╗
██║     ██╔══██╗██╔════╝╚══██╔══╝██║████╗  ██║██╔══██╗██╔════╝╚██╗██╔╝██╔═══██╗██╔════╝
██║     ███████║███████╗   ██║   ██║██╔██╗ ██║██║  ██║█████╗   ╚███╔╝ ██║   ██║█████╗  
██║     ██╔══██║╚════██║   ██║   ██║██║╚██╗██║██║  ██║██╔══╝   ██╔██╗ ██║   ██║██╔══╝  
███████╗██║  ██║███████║   ██║   ██║██║ ╚████║██████╔╝███████╗██╔╝ ██╗╚██████╔╝██║     
╚══════╝╚═╝  ╚═╝╚══════╝   ╚═╝   ╚═╝╚═╝  ╚═══╝╚═════╝ ╚══════╝╚═╝  ╚═╝ ╚═════╝ ╚═╝     
                                                                                       
██╗███╗   ██╗ ██████╗██╗     ██╗   ██╗██████╗ ███████╗███████╗                         
██║████╗  ██║██╔════╝██║     ██║   ██║██╔══██╗██╔════╝██╔════╝                         
██║██╔██╗ ██║██║     ██║     ██║   ██║██║  ██║█████╗  ███████╗                         
██║██║╚██╗██║██║     ██║     ██║   ██║██║  ██║██╔══╝  ╚════██║                         
██║██║ ╚████║╚██████╗███████╗╚██████╔╝██████╔╝███████╗███████║                         
╚═╝╚═╝  ╚═══╝ ╚═════╝╚══════╝ ╚═════╝ ╚═════╝ ╚══════╝╚══════╝                         
                                                                                       
const arr = [1, 0, 2, false, 3, 4]
alert( arr.indexOf(0) ); // 1
alert( arr.indexOf(false) ); // 3
alert( arr.indexOf(null) ); // -1, there is no null
alert( arr.includes(1) ); // true


 /* 
███████╗██╗    ██╗██╗████████╗ ██████╗██╗  ██╗
██╔════╝██║    ██║██║╚══██╔══╝██╔════╝██║  ██║
███████╗██║ █╗ ██║██║   ██║   ██║     ███████║
╚════██║██║███╗██║██║   ██║   ██║     ██╔══██║
███████║╚███╔███╔╝██║   ██║   ╚██████╗██║  ██║
╚══════╝ ╚══╝╚══╝ ╚═╝   ╚═╝    ╚═════╝╚═╝  ╚═╝


___       ___     __           ___          
 |  |__| |__     /__` \ / |\ |  |   /\  \_/ 
 |  |  | |___    .__/  |  | \|  |  /~~\ / \ 
                                            
 switch(x) {
  case 'value1':  // if (x === 'value1')
    ...
    [break]
  case 'value2':  // if (x === 'value2')
    ...
    [break]
  default:
    ...
    [break]
}

1. The value of x is checked for a strict equality to the value from the first case (that is, value1) then to the second (value2) and so on.
2. If the equality is found, switch starts to execute the code starting from the corresponding case, until the nearest break (or until the end of switch).
3. If no case is matched then the default code is executed (if it exists).

let a = 2 + 2;

switch (a) {
  case 3:
    alert( 'Too small' );
    break;
  case 4:
    alert( 'Exactly!' );
    break;
  case 5:
    alert( 'Too big' );
    break;
  default:
    alert( "I don't know such values" );
}
If there is no break, it will give all results until the next break.