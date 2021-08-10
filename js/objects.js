// ___ ____   ____  ___  ______ __ __  __   ___      ___  __  __      ___   ____     __  ____   ___ ______
// //   || \\ ||    // \\ | || | || ||\ ||  // \\    // \\ ||\ ||     // \\  || ))    || ||     //   | || |
// ((    ||_// ||==  ||=||   ||   || ||\\|| (( ___    ||=|| ||\\||    ((   )) ||=)     || ||==  ((      ||  
// \\__ || \\ ||___ || ||   ||   || || \||  \\_||    || || || \||     \\_//  ||_)) |__|| ||___  \\__   ||  
                                                                                                        
/*function createObject() {
    var result = {};
    return result;
  }

  var resultObject = createObject();
console.log('should be an object:', typeof resultObject);
console.log('should not be an array:', Array.isArray(resultObject));*/

// ___    ___   ___  ____  __   __  __ __  __   ___      ___     ____  ____    ___   ____   ____ ____  ______ _  _
// // \\  //    //   ||    (( \ (( \ || ||\ ||  // \\    // \\    || \\ || \\  // \\  || \\ ||    || \\ | || | \\//
// ||=|| ((    ((    ||==   \\   \\  || ||\\|| (( ___    ||=||    ||_// ||_// ((   )) ||_// ||==  ||_//   ||    )/ 
// || ||  \\__  \\__ ||___ \_)) \_)) || || \||  \\_||    || ||    ||    || \\  \\_//  ||    ||___ || \\   ||   // 

/*function accessAProperty(object, key) {
    var result = object[key];
    return result;
  }

  var resultValue = accessAProperty({machine: 'Computer', type: 'Macbook', ram: '2 GHz'}, 'ram');
console.log('should be "2 GHz":', resultValue); */

// ____   ____ ___  ___   ___   __ __ __ __  __   ___        
// || \\ ||    ||\\//||  // \\  || || || ||\ ||  // \\       
// ||_// ||==  || \/ || ((   )) \\ // || ||\\|| (( ___       
// || \\ ||___ ||    ||  \\_//   \V/  || || \||  \\_||       
                                                          
//  ___     ____  ____    ___   ____   ____ ____  ______ _  _
// // \\    || \\ || \\  // \\  || \\ ||    || \\ | || | \\//
// ||=||    ||_// ||_// ((   )) ||_// ||==  ||_//   ||    )/ 
// || ||    ||    || \\  \\_//  ||    ||___ || \\   ||   //  

/*function removeAProperty(object, key) {
    delete object[key];
    return object;
  }

  var resultObject1 = removeAProperty({q: 9, r: 10, text: 'bad entry'}, 'text');
console.log('should log {q: 9, r: 10}:', resultObject1);

var resultObject2 = removeAProperty({first: 'one', second: 'two', why: 452, third: 'three'}, 'why');
console.log('should log {first: "one", second: "two", third: "three"}:', resultObject2); */

// ___ __  __  ____   ___ __ __ __ __  __   ___     __  ____     ___     ____  ____    ___   ____   ____ ____  ______ _  _   
// //   ||  || ||     //   || // || ||\ ||  // \\    || ||       // \\    || \\ || \\  // \\  || \\ ||    || \\ | || | \\//   
//((    ||==|| ||==  ((    ||<<  || ||\\|| (( ___    || ||==     ||=||    ||_// ||_// ((   )) ||_// ||==  ||_//   ||    )/    
// \\__ ||  || ||___  \\__ || \\ || || \||  \\_||    || ||       || ||    ||    || \\  \\_//  ||    ||___ || \\   ||   //     
                                                                                                                           
// __  __     ____  ____   ____  __   ____ __  __ ______                                                                       
// || (( \    || \\ || \\ ||    (( \ ||    ||\ || | || |                                                                       
// ||  \\     ||_// ||_// ||==   \\  ||==  ||\\||   ||                                                                         
// || \_))    ||    || \\ ||___ \_)) ||___ || \||   || 

/*function isPropertyPresent(object, key) {
    var isPresent = object[key] !== undefined;
    return isPresent;
  }

  var object1 = {
    a: 1,
    b: 2
  }
  var key1 = 'c';
  var result1 = isPropertyPresent(object1, key1);
  console.log('should log false:', result1);
  
  var object2 = {
    'size': 'M',
    'color': 'green',
    'cut': 'tapered',
    'price': 30
  };
  var key2 = 'cut';
  var result2 = isPropertyPresent(object2, key2);
  console.log('should log true:', result2); */

//   ____    ____ ______  ____ ____  ___  ___ __ __  __ __ __  __   ___     __  ____     ___           
//   || \\  ||    | || | ||    || \\ ||\\//|| || ||\ || || ||\ ||  // \\    || ||       // \\          
//   ||  )) ||==    ||   ||==  ||_// || \/ || || ||\\|| || ||\\|| (( ___    || ||==     ||=||          
//   ||_//  ||___   ||   ||___ || \\ ||    || || || \|| || || \||  \\_||    || ||       || ||          
                                                                                                    
//   __ __  ___  __    __ __  ____    __  __      ___  __  __      ___   ____     __  ____   ___ ______
//   || || // \\ ||    || || ||       || (( \    // \\ ||\ ||     // \\  || ))    || ||     //   | || |
//   \\ // ||=|| ||    || || ||==     ||  \\     ||=|| ||\\||    ((   )) ||=)     || ||==  ((      ||  
//    \V/  || || ||__| \\_// ||___    || \_))    || || || \||     \\_//  ||_)) |__|| ||___  \\__   || 

/*function isAnObject(input) {
    // create an isObject variable
    var isObject = typeof input === "object";
    // assign it to whether the input is an object type
    // create an isNotAnArray variable
    isNotAnArray = !Array.isArray(input);
    // assign it to whether the input is not an array
    // create an isObjectAndNotAnArray variable
    isObjectAndNotAnArray = isObject && isNotAnArray;
    // assign it to a combination of isObject AND isNotAnArray
    // return the isObjectAndNotAnArray variable
    return isObjectAndNotAnArray;
  }

  var resultBoolean1 = isAnObject([1, 2, 3]);
console.log('should log false:', resultBoolean1);

var resultBoolean2 = isAnObject({name: 'Tom', friend: 'Jerry'});
console.log('should log true:', resultBoolean2); */

// ___   ____ __  __  ____ ____   ___  ______ __ __  __   ___      ___  __  __     ___  ____  ____   ___  _  _                     
// // \\ ||    ||\ || ||    || \\ // \\ | || | || ||\ ||  // \\    // \\ ||\ ||    // \\ || \\ || \\ // \\ \\//                     
//(( ___ ||==  ||\\|| ||==  ||_// ||=||   ||   || ||\\|| (( ___    ||=|| ||\\||    ||=|| ||_// ||_// ||=||  )/                      
// \\_|| ||___ || \|| ||___ || \\ || ||   ||   || || \||  \\_||    || || || \||    || || || \\ || \\ || || //                       
                                                                                                                                 
//  ___    ____     ___  __    __       __ __  ____ _  _  __     __ __  __     ___  __  __      ___   ____     __  ____   ___ ______
// // \\  ||       // \\ ||    ||       || // ||    \\// (( \    || ||\ ||    // \\ ||\ ||     // \\  || ))    || ||     //   | || |
//((   )) ||==     ||=|| ||    ||       ||<<  ||==   )/   \\     || ||\\||    ||=|| ||\\||    ((   )) ||=)     || ||==  ((      ||  
// \\_//  ||       || || ||__| ||__|    || \\ ||___ //   \_))    || || \||    || || || \||     \\_//  ||_)) |__|| ||___  \\__   ||  

/*function getAllKeys(obj) {
    var keys = Object.keys(obj);
    return keys;
  }

    var resultKeys = getAllKeys({firstScore: 12, secondScore: 34, thirdScore: 28});
    console.log('should log ["firstScore", "secondScore", "thirdScore"]:', resultKeys); */

//     ___   ____ __  __  ____ ____   ___  ______ __ __  __   ___      ___  __  __     ___  ____  ____   ___  _  _   
//     // \\ ||    ||\ || ||    || \\ // \\ | || | || ||\ ||  // \\    // \\ ||\ ||    // \\ || \\ || \\ // \\ \\//   
//    (( ___ ||==  ||\\|| ||==  ||_// ||=||   ||   || ||\\|| (( ___    ||=|| ||\\||    ||=|| ||_// ||_// ||=||  )/    
//     \\_|| ||___ || \|| ||___ || \\ || ||   ||   || || \||  \\_||    || || || \||    || || || \\ || \\ || || //     
                                                                                                                   
//      ___    ____     ___  __    __       __ __  ___  __    __ __  ____  __                                         
//     // \\  ||       // \\ ||    ||       || || // \\ ||    || || ||    (( \                                        
//    ((   )) ||==     ||=|| ||    ||       \\ // ||=|| ||    || || ||==   \\                                         
//     \\_//  ||       || || ||__| ||__|     \V/  || || ||__| \\_// ||___ \_))                                        
                                                                                                                   
//    __ __  __     ___  __  __      ___   ____     __  ____   ___ ______                                             
//    || ||\ ||    // \\ ||\ ||     // \\  || ))    || ||     //   | || |                                             
//    || ||\\||    ||=|| ||\\||    ((   )) ||=)     || ||==  ((      ||                                               
//    || || \||    || || || \||     \\_//  ||_)) |__|| ||___  \\__   ||

/*function getAllValues(obj) {
    var value = Object.values(obj);
    return value;
}

var resultValues = getAllValues({firstScore: 12, secondScore: 34, thirdScore: 28});
console.log('should log [12, 34, 28]:', resultValues); */

// ___  ___  ____ ______ __  __   ___   ____       ___  ____  ____  __    __  ____ ____      ______   ___       ___ 
// ||\\//|| ||    | || | ||  ||  // \\  || \\     // \\ || \\ || \\ ||    || ||    || \\     | || |  // \\     // \\
// || \/ || ||==    ||   ||==|| ((   )) ||  ))    ||=|| ||_// ||_// ||    || ||==  ||  ))      ||   ((   ))    ||=||
// ||    || ||___   ||   ||  ||  \\_//  ||_//     || || ||    ||    ||__| || ||___ ||_//       ||    \\_//     || ||
                                                                                                                 
//    __  __  ____  __  ______  ____ ____        ___   ____     __  ____   ___ ______                               
//    ||\ || ||    (( \ | || | ||    || \\      // \\  || ))    || ||     //   | || |                               
//    ||\\|| ||==   \\    ||   ||==  ||  ))    ((   )) ||=)     || ||==  ((      ||                                 
//    || \|| ||___ \_))   ||   ||___ ||_//      \\_//  ||_)) |__|| ||___  \\__   ||    

/*function getAllKeysAgain(obj, key) {
    // create a keys variable
    // assign it to an expression which will generate an array of all of the keys located within obj at key
    // return to the keys variable
    var keys = Object.keys(obj[key]);
    return keys;
  }

  var resultKeys = getAllKeysAgain({firstScore: {part1: 12, part2: 14, part3: 10}, secondScore: 34, thirdScore: 28}, 'firstScore');
console.log('should log ["par1", "part2", "part3"]:', resultKeys); */

// ___   ____   ____ ____   ___  ______   ___   ____      ___  ____  ____  __    __  ____ ____  
// // \\  || \\ ||    || \\ // \\ | || |  // \\  || \\    // \\ || \\ || \\ ||    || ||    || \\ 
//((   )) ||_// ||==  ||_// ||=||   ||   ((   )) ||_//    ||=|| ||_// ||_// ||    || ||==  ||  ))
// \\_//  ||    ||___ || \\ || ||   ||    \\_//  || \\    || || ||    ||    ||__| || ||___ ||_// 
                                                                                              
//   ______   ___       ___  __  __      ___   ____     __  ____   ___ ______                    
//   | || |  // \\     // \\ ||\ ||     // \\  || ))    || ||     //   | || |                    
//     ||   ((   ))    ||=|| ||\\||    ((   )) ||=)     || ||==  ((      ||                      
//     ||    \\_//     || || || \||     \\_//  ||_)) |__|| ||___  \\__   ||                      
                                                                                              
// __    __ __ ______ __  __ __ __  __     ___  __  __     ___  ____  ____   ___  _  _            
// ||    || || | || | ||  || || ||\ ||    // \\ ||\ ||    // \\ || \\ || \\ // \\ \\//            
// \\ /\ // ||   ||   ||==|| || ||\\||    ||=|| ||\\||    ||=|| ||_// ||_// ||=||  )/             
//  \V/\V/  ||   ||   ||  || || || \||    || || || \||    || || || \\ || \\ || || //    

/*function removeAPropertyAgain(arrayOfObjects, index, key) {
    // remove the property at the given key from the object at the given index
    delete arrayOfObjects[index][key];
    return arrayOfObjects;
    // return the input array of objects
  }

  var resultObject1 = removeAPropertyAgain([{q: 9, r: 10, text: 'bad entry'}, {a: 1, b: 2}], 0, 'text');
console.log('should log [{q: 9, r: 10}, {a: 1, b: 2}]:', resultObject1);

var resultObject2 = removeAPropertyAgain([{key: 'value'}, {first: 'one', second: 'two', why: 452, third: 'three'}], 1, 'why');
console.log('should log [{key: "value"}, {first: "one", second: "two", third: "three"}]:', resultObject2); */

/*
████████╗██╗  ██╗██╗███████╗
╚══██╔══╝██║  ██║██║██╔════╝
   ██║   ███████║██║███████╗
   ██║   ██╔══██║██║╚════██║
   ██║   ██║  ██║██║███████║
   ╚═╝   ╚═╝  ╚═╝╚═╝╚══════╝
                            

  let user = {
  name: "John",
  age: 30
};

user.sayHi = function() {
  alert("Hello!");
};

user.sayHi(); // Hello!

 __        __   __  ___                 __  
/__` |__| /  \ |__)  |  |__|  /\  |\ | |  \ 
.__/ |  | \__/ |  \  |  |  | /~~\ | \| |__/ 
                                            
// these objects do the same

user = {
  sayHi: function() {
    alert("Hello");
  }
};

// method shorthand looks better, right?
user = {
  sayHi() { // same as "sayHi: function(){...}"
    alert("Hello");
  }
};

// with 'this'

let user = {
  name: "John",
  age: 30,

  sayHi() {
    // "this" is the "current object"
    alert(this.name);
  }

};

user.sayHi(); // John

let user = { name: "John" };
let admin = { name: "Admin" };

function sayHi() {
  alert( this.name );
}

// use the same function in two objects
user.f = sayHi;
admin.f = sayHi;

// these calls have different this
// "this" inside the function is the object "before the dot"
user.f(); // John  (this == user)
admin.f(); // Admin  (this == admin)

admin['f'](); // Admin (dot or square brackets access the method – doesn't matter)
*/

/*
 ██████╗ ██████╗ ███╗   ██╗███████╗████████╗██████╗ ██╗   ██╗ ██████╗████████╗ ██████╗ ██████╗ 
██╔════╝██╔═══██╗████╗  ██║██╔════╝╚══██╔══╝██╔══██╗██║   ██║██╔════╝╚══██╔══╝██╔═══██╗██╔══██╗
██║     ██║   ██║██╔██╗ ██║███████╗   ██║   ██████╔╝██║   ██║██║        ██║   ██║   ██║██████╔╝
██║     ██║   ██║██║╚██╗██║╚════██║   ██║   ██╔══██╗██║   ██║██║        ██║   ██║   ██║██╔══██╗
╚██████╗╚██████╔╝██║ ╚████║███████║   ██║   ██║  ██║╚██████╔╝╚██████╗   ██║   ╚██████╔╝██║  ██║
 ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝╚══════╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝  ╚═════╝   ╚═╝    ╚═════╝ ╚═╝  ╚═╝
                                                                                               
 Constructor functions technically are regular functions. There are two conventions though:

1. They are named with capital letter first.
2. They should be executed only with "new" operator.

a. function User(name) {
  this.name = name;
  this.isAdmin = false;
}

let user = new User("Jack");

alert(user.name); // Jack
alert(user.isAdmin); // false

b. function User() {
  alert(new.target);
}

// without "new":
User(); // undefined

// with "new":
new User(); // function User { ... }

c. function BigUser() {
  this.name = "John";
  return { name: "Godzilla" };  // <-- returns this object
}

alert( new BigUser().name );  // Godzilla, got that object

d. function SmallUser() {

  this.name = "John";

  return; // <-- returns this
}

alert( new SmallUser().name );  // John

e. function User(name) {
  this.name = name;

  this.sayHi = function() {
    alert( "My name is: " + this.name );
  };
}

let john = new User("John");

john.sayHi(); // My name is: John

/*
john = {
   name: "John",
   sayHi: function() { ... }
}
*/




                                                                                              
                                                                                                                 


                                                                                                                   
                                                                                                                   
                                                                                                                   
                                                                                                                   
                                                                                                                   
                                                                                                                   
                                                                                                                                 
                                                                                                    
                                                                                                                           
                                                          
                                                                                                                

