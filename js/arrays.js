// ___ ____   ____  ___  ______ __ __  __   ___    
// //   || \\ ||    // \\ | || | || ||\ ||  // \\   
// ((    ||_// ||==  ||=||   ||   || ||\\|| (( ___    
// \\__ || \\ ||___ || ||   ||   || || \||  \\_||   
                                                 
//    ___  __  __     ___  ____  ____   ___  _  _   
//   // \\ ||\ ||    // \\ || \\ || \\ // \\ \\//   
//   ||=|| ||\\||    ||=|| ||_// ||_// ||=||  )/    
//   || || || \||    || || || \\ || \\ || || //    

/*20. arrays are created with [] scopes.
two [] are not equal, even if they have the same elements.
empty array has true value. 
when reassigning array two arrays have the same reference to the same data, changing the one will affect the other one. 
if you reassign one of them they won't be connected anymore.  */

// ___    ___   ___  ____  __   __  __ __  __   ___             
// // \\  //    //   ||    (( \ (( \ || ||\ ||  // \\            
// ||=|| ((    ((    ||==   \\   \\  || ||\\|| (( ___            
// || ||  \\__  \\__ ||___ \_)) \_)) || || \||  \\_||            
                                                              
//  ___  __  __     ____ __     ____ ___  ___  ____ __  __ ______
// // \\ ||\ ||    ||    ||    ||    ||\\//|| ||    ||\ || | || |
// ||=|| ||\\||    ||==  ||    ||==  || \/ || ||==  ||\\||   ||  
// || || || \||    ||___ ||__| ||___ ||    || ||___ || \||   ||  
                                                              
//    __ __  __     ___  __  __     ___  ____  ____   ___  _  _  
//    || ||\ ||    // \\ ||\ ||    // \\ || \\ || \\ // \\ \\//  
//    || ||\\||    ||=|| ||\\||    ||=|| ||_// ||_// ||=||  )/   
//    || || \||    || || || \||    || || || \\ || \\ || || //    

/*21. we can access element in array through it's index.
const arr = [1, 2, 3, 4]
arr[0] === 1;

// ____   ____  ___   __   __  __   ___  __  __ __ __  __   ___     
// || \\ ||    // \\ (( \ (( \ ||  // \\ ||\ || || ||\ ||  // \\    
// ||_// ||==  ||=||  \\   \\  || (( ___ ||\\|| || ||\\|| (( ___    
// || \\ ||___ || || \_)) \_)) ||  \\_|| || \|| || || \||  \\_||    
                                                                 
//  ___  __  __     ____ __     ____ ___  ___  ____ __  __ ______   
// // \\ ||\ ||    ||    ||    ||    ||\\//|| ||    ||\ || | || |   
// ||=|| ||\\||    ||==  ||    ||==  || \/ || ||==  ||\\||   ||     
// || || || \||    ||___ ||__| ||___ ||    || ||___ || \||   ||     
                                                                 
// __ __  __     ___  __  __     ___  ____  ____   ___  _  _        
// || ||\ ||    // \\ ||\ ||    // \\ || \\ || \\ // \\ \\//        
// || ||\\||    ||=|| ||\\||    ||=|| ||_// ||_// ||=||  )/         
// || || \||    || || || \||    || || || \\ || \\ || || //  

/*22. can reassign the value like this:
const arr = [1, 2, 3, 4]
arr[0] = 'cat';
// arr = ['cat', 2, 3, 4]

// __     ____ __  __   ___  ______ __  __      ___    ____     ___  ____  ____   ___  _  _
// ||    ||    ||\ ||  // \\ | || | ||  ||     // \\  ||       // \\ || \\ || \\ // \\ \\//
// ||    ||==  ||\\|| (( ___   ||   ||==||    ((   )) ||==     ||=|| ||_// ||_// ||=||  )/ 
// ||__| ||___ || \||  \\_||   ||   ||  ||     \\_//  ||       || || || \\ || \\ || || //  

/*23. for the length  we have reserved method:
arr.length

// __     ___   __  ______     ____ __     ____ ___  ___  ____ __  __ ______
// ||    // \\ (( \ | || |    ||    ||    ||    ||\\//|| ||    ||\ || | || |
// ||    ||=||  \\    ||      ||==  ||    ||==  || \/ || ||==  ||\\||   ||  
// ||__| || || \_))   ||      ||___ ||__| ||___ ||    || ||___ || \||   ||  
                                                                         
//   ___    ____     ___  __  __     ___  ____  ____   ___  _  _            
//  // \\  ||       // \\ ||\ ||    // \\ || \\ || \\ // \\ \\//            
// ((   )) ||==     ||=|| ||\\||    ||=|| ||_// ||_// ||=||  )/             
//  \\_//  ||       || || || \||    || || || \\ || \\ || || //      

/*24. function getLastElement(array) {
  var lastIndex = array.length - 1;
  var lastElement = array[lastIndex];
  return lastElement;
}

var resultLastElement1 = getLastElement([1, 2, "buckle", "my", "shoe"]);
console.log('should log "shoe":', resultLastElement1); /*

//   ___  ____   ____   __ __  __   ___      ___  __  __     ____ __     ____ ___  ___  ____ __  __ ______                              
//  // \\ || \\  || \\  || ||\ ||  // \\    // \\ ||\ ||    ||    ||    ||    ||\\//|| ||    ||\ || | || |                              
//  ||=|| ||  )) ||  )) || ||\\|| (( ___    ||=|| ||\\||    ||==  ||    ||==  || \/ || ||==  ||\\||   ||                                
//  || || ||_//  ||_//  || || \||  \\_||    || || || \||    ||___ ||__| ||___ ||    || ||___ || \||   ||                                
                                                                                                                                     
//     ______   ___      ______ __  __  ____    ____   ___    ___ __ __      ___    ____     ___  __  __     ___  ____  ____   ___  _  _
//     | || |  // \\     | || | ||  || ||       || )) // \\  //   || //     // \\  ||       // \\ ||\ ||    // \\ || \\ || \\ // \\ \\//
//       ||   ((   ))      ||   ||==|| ||==     ||=)  ||=|| ((    ||<<     ((   )) ||==     ||=|| ||\\||    ||=|| ||_// ||_// ||=||  )/ 
//       ||    \\_//       ||   ||  || ||___    ||_)) || ||  \\__ || \\     \\_//  ||       || || || \||    || || || \\ || \\ || || // 

/*25. function applyPush(array, element) {
  array.push(element);
  return array;
}

var resultArray2 = applyPush(['abc', 'def'], 'ghi');
console.log('should log ["abc", "def", "ghi"]:', resultArray2); */

// ____   ____ ___  ___   ___   __ __ __ __  __   ___      ___  __  __     ____ __     ____ ___  ___  ____ __  __ ______   
// || \\ ||    ||\\//||  // \\  || || || ||\ ||  // \\    // \\ ||\ ||    ||    ||    ||    ||\\//|| ||    ||\ || | || |   
// ||_// ||==  || \/ || ((   )) \\ // || ||\\|| (( ___    ||=|| ||\\||    ||==  ||    ||==  || \/ || ||==  ||\\||   ||     
// || \\ ||___ ||    ||  \\_//   \V/  || || \||  \\_||    || || || \||    ||___ ||__| ||___ ||    || ||___ || \||   ||     
                                                                                                                        
//  ____ ____    ___   ___  ___    ______ __  __  ____    ____   ___    ___                                                
// ||    || \\  // \\  ||\\//||    | || | ||  || ||       || )) // \\  //                                                  
// ||==  ||_// ((   )) || \/ ||      ||   ||==|| ||==     ||=)  ||=|| ((                                                   
// ||    || \\  \\_//  ||    ||      ||   ||  || ||___    ||_)) || ||  \\__                                                
                                                                                                                        
// __ __      ___    ____     ___  __  __     ___  ____  ____   ___  _  _                                                  
// || //     // \\  ||       // \\ ||\ ||    // \\ || \\ || \\ // \\ \\//                                                  
// ||<<     ((   )) ||==     ||=|| ||\\||    ||=|| ||_// ||_// ||=||  )/                                                   
// || \\     \\_//  ||       || || || \||    || || || \\ || \\ || || //  

/*26. function applyPop(array) {
  var popped = array.pop()
  return popped;
}

var resultElement1 = applyPop([1, 171, 129]);
console.log('should log 129:', resultElement1); */

// ___  ____   ____   __ __  __   ___      ___  __  __     ____ __     ____ ___  ___  ____ __  __ ______
// // \\ || \\  || \\  || ||\ ||  // \\    // \\ ||\ ||    ||    ||    ||    ||\\//|| ||    ||\ || | || |
// ||=|| ||  )) ||  )) || ||\\|| (( ___    ||=|| ||\\||    ||==  ||    ||==  || \/ || ||==  ||\\||   ||  
// || || ||_//  ||_//  || || \||  \\_||    || || || \||    ||___ ||__| ||___ ||    || ||___ || \||   ||  
                                                                                                      
//    ______   ___      ______ __  __  ____     ____ ____    ___   __  __ ______                         
//    | || |  // \\     | || | ||  || ||       ||    || \\  // \\  ||\ || | || |                         
//      ||   ((   ))      ||   ||==|| ||==     ||==  ||_// ((   )) ||\\||   ||                           
//      ||    \\_//       ||   ||  || ||___    ||    || \\  \\_//  || \||   ||                           
                                                                                                      
//      ___    ____     ___  __  __     ___  ____  ____   ___  _  _                                      
//     // \\  ||       // \\ ||\ ||    // \\ || \\ || \\ // \\ \\//                                      
//    ((   )) ||==     ||=|| ||\\||    ||=|| ||_// ||_// ||=||  )/                                       
//     \\_//  ||       || || || \||    || || || \\ || \\ || || //     

/*27. function applyUnshift(array, element) {
  array.unshift(element);
  return array;
}

var resultArray1 = applyUnshift([7, 9, 4], 1);
console.log('should log [1, 7, 9, 4]:', resultArray1); */

// ____   ____ ___  ___   ___   __ __ __ __  __   ___      ___  __  __     ____ __     ____ ___  ___  ____ __  __ ______
// || \\ ||    ||\\//||  // \\  || || || ||\ ||  // \\    // \\ ||\ ||    ||    ||    ||    ||\\//|| ||    ||\ || | || |
// ||_// ||==  || \/ || ((   )) \\ // || ||\\|| (( ___    ||=|| ||\\||    ||==  ||    ||==  || \/ || ||==  ||\\||   ||  
// || \\ ||___ ||    ||  \\_//   \V/  || || \||  \\_||    || || || \||    ||___ ||__| ||___ ||    || ||___ || \||   ||  
                                                                                                                     
//     ____ ____    ___   ___  ___    ______ __  __  ____     ____ ____    ___   __  __ ______                          
//    ||    || \\  // \\  ||\\//||    | || | ||  || ||       ||    || \\  // \\  ||\ || | || |                          
//    ||==  ||_// ((   )) || \/ ||      ||   ||==|| ||==     ||==  ||_// ((   )) ||\\||   ||                            
//    ||    || \\  \\_//  ||    ||      ||   ||  || ||___    ||    || \\  \\_//  || \||   ||                            
                                                                                                                     
//      ___    ____     ___  __  __     ___  ____  ____   ___  _  _                                                     
//     // \\  ||       // \\ ||\ ||    // \\ || \\ || \\ // \\ \\//                                                     
//    ((   )) ||==     ||=|| ||\\||    ||=|| ||_// ||_// ||=||  )/                                                      
//     \\_//  ||       || || || \||    || || || \\ || \\ || || //   

/*28. function applyShift(array) {
  var shifted = array.shift();
  return shifted;
}

var resultElement1 = applyShift([1, 171, 129]);
console.log('should log 1:', resultElement1); */

// ___  ____   ____   __ __  __   ___      ___  __  __     ____ __     ____ ___  ___  ____ __  __ ______
// // \\ || \\  || \\  || ||\ ||  // \\    // \\ ||\ ||    ||    ||    ||    ||\\//|| ||    ||\ || | || |
// ||=|| ||  )) ||  )) || ||\\|| (( ___    ||=|| ||\\||    ||==  ||    ||==  || \/ || ||==  ||\\||   ||  
// || || ||_//  ||_//  || || \||  \\_||    || || || \||    ||___ ||__| ||___ ||    || ||___ || \||   ||  
                                                                                                      
//    __ __  __      ___   ____ __  __  ____ ____   ___  __                                              
//    || ||\ ||     // \\ ||    ||\ || ||    || \\ // \\ ||                                              
//    || ||\\||    (( ___ ||==  ||\\|| ||==  ||_// ||=|| ||                                              
//    || || \||     \\_|| ||___ || \|| ||___ || \\ || || ||__|   

// ███████╗██████╗ ██╗     ██╗ ██████╗███████╗
// ██╔════╝██╔══██╗██║     ██║██╔════╝██╔════╝
// ███████╗██████╔╝██║     ██║██║     █████╗  
// ╚════██║██╔═══╝ ██║     ██║██║     ██╔══╝  
// ███████║██║     ███████╗██║╚██████╗███████╗
// ╚══════╝╚═╝     ╚══════╝╚═╝ ╚═════╝╚══════╝

// When we want to add an element, without replacing anything, to an existing array.

/*29. function addAnElementInGeneral(array, index, element) {
  array.splice(index, 0, element);
  return array;
}

var resultArray1 = addAnElementInGeneral([7, 9, 10], 1, 8);
console.log('should log [7, 8 , 9, 10]:', resultArray1);


a. let arr = ["I", "study", "JavaScript"];
arr.splice(1, 1); // from index 1 remove 1 element
alert( arr ); // ["I", "JavaScript"]

b. let arr = ["I", "study", "JavaScript", "right", "now"];
// remove 3 first elements and replace them with another
arr.splice(0, 3, "Let's", "dance");
alert( arr ) // now ["Let's", "dance", "right", "now"]

c. let arr = ["I", "study", "JavaScript"];
// from index 2
// delete 0
// then insert "complex" and "language"
arr.splice(2, 0, "complex", "language");
alert( arr ); // "I", "study", "complex", "language", "JavaScript"

d. let arr = [1, 2, 5];
// from index -1 (one step from the end)
// delete 0 elements,
// then insert 3 and 4
arr.splice(-1, 0, 3, 4);
alert( arr ); // 1,2,3,4,5 */

/*
███████╗██╗     ██╗ ██████╗███████╗
██╔════╝██║     ██║██╔════╝██╔════╝
███████╗██║     ██║██║     █████╗  
╚════██║██║     ██║██║     ██╔══╝  
███████║███████╗██║╚██████╗███████╗
╚══════╝╚══════╝╚═╝ ╚═════╝╚══════╝

returns a new array copying to it all items from index start to end (not including end). 
Both start and end can be negative, in that case position from array end is assumed.

let arr = ["t", "e", "s", "t"];
alert( arr.slice(1, 3) ); // e,s (copy from 1 to 3)
alert( arr.slice(-2) ); // s,t (copy from -2 till the end)

function getElementsAfter(array, n) {
  return array.slice(n + 1);
 }
 
 var output = getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2);
 console.log(output); // --> ['d', 'e'] */



// ____   ____ ___  ___   ___   __ __ __ __  __   ___      ___  __  __     ____ __     ____ ___  ___  ____ __  __ ______
// || \\ ||    ||\\//||  // \\  || || || ||\ ||  // \\    // \\ ||\ ||    ||    ||    ||    ||\\//|| ||    ||\ || | || |
// ||_// ||==  || \/ || ((   )) \\ // || ||\\|| (( ___    ||=|| ||\\||    ||==  ||    ||==  || \/ || ||==  ||\\||   ||  
// || \\ ||___ ||    ||  \\_//   \V/  || || \||  \\_||    || || || \||    ||___ ||__| ||___ ||    || ||___ || \||   ||  
                                                                                                                     
//    __ __  __      ___   ____ __  __  ____ ____   ___  __                                                             
//    || ||\ ||     // \\ ||    ||\ || ||    || \\ // \\ ||                                                             
//    || ||\\||    (( ___ ||==  ||\\|| ||==  ||_// ||=|| ||                                                             
//    || || \||     \\_|| ||___ || \|| ||___ || \\ || || ||__|

/*30. function removeAnElementInGeneral(array, index) {
  array.splice(index, 1);
  return array;  
}

var resultArray1 = removeAnElementInGeneral([8, 9, 10, 'bad entry', 11], 3);
console.log('should log [8, 9, 10, 11]:', resultArray1); */


// ____    ____ ______  ____ ____  ___  ___ __ __  __ __ __  __   ___                                           
// || \\  ||    | || | ||    || \\ ||\\//|| || ||\ || || ||\ ||  // \\                                          
// ||  )) ||==    ||   ||==  ||_// || \/ || || ||\\|| || ||\\|| (( ___                                          
// ||_//  ||___   ||   ||___ || \\ ||    || || || \|| || || \||  \\_||                                          
                                                                                                             
// __  ____     ___     __ __  ___  __    __ __  ____    __  __      ___  __  __     ___  ____  ____   ___  _  _
// || ||       // \\    || || // \\ ||    || || ||       || (( \    // \\ ||\ ||    // \\ || \\ || \\ // \\ \\//
// || ||==     ||=||    \\ // ||=|| ||    || || ||==     ||  \\     ||=|| ||\\||    ||=|| ||_// ||_// ||=||  )/ 
// || ||       || ||     \V/  || || ||__| \\_// ||___    || \_))    || || || \||    || || || \\ || \\ || || // 

/*32. function isAnArray(input) {
  var result = Array.isArray(input);
  return result;
} 

var resultBoolean1 = isAnArray([1, 2, 3]);
console.log('should log true:', resultBoolean1); */


// ██████╗ ██████╗ ███╗   ██╗ ██████╗ █████╗ ████████╗
// ██╔════╝██╔═══██╗████╗  ██║██╔════╝██╔══██╗╚══██╔══╝
// ██║     ██║   ██║██╔██╗ ██║██║     ███████║   ██║   
// ██║     ██║   ██║██║╚██╗██║██║     ██╔══██║   ██║   
// ╚██████╗╚██████╔╝██║ ╚████║╚██████╗██║  ██║   ██║   
//  ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝ ╚═════╝╚═╝  ╚═╝   ╚═╝   
                                                      

// ███████╗██████╗ ██████╗ ███████╗ █████╗ ██████╗ 
// ██╔════╝██╔══██╗██╔══██╗██╔════╝██╔══██╗██╔══██╗
// ███████╗██████╔╝██████╔╝█████╗  ███████║██║  ██║
// ╚════██║██╔═══╝ ██╔══██╗██╔══╝  ██╔══██║██║  ██║
// ███████║██║     ██║  ██║███████╗██║  ██║██████╔╝
// ╚══════╝╚═╝     ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═════╝ 

/*
the original arrays don't change.

a.concat(b, d) // a, b, d are arrays
if you don't pass anything to (), you wii receive the copy of the array a.concat() // a
if you change the copy array, the original one stays the same

34. function applyConcat(array1, array2) {
  var concattedArray = array1.concat(array2);
  return concattedArray;
}

var array1 = ['a', 'b', 'c'];
var array2 = ['d', 'e', 'f']
var resultConcat1 = applyConcat(array1, array2);
console.log('should log ["a", "b", "c", "d", "e", "f"]:', resultConcat1); 

// spread method
const kids = ['Joe', 'Ann'];
const parents = ['Monica', 'Adam'];
let fullFamily = [...kids, ...parents];
console.log(fullFamily);*/

// ______ ____   ___  __  __  __   ____   ___   ____  ___  ___ __ __  __   ___      ___  __  __     ___  ____  ____   ___  _  _   
// | || | || \\ // \\ ||\ || (( \ ||     // \\  || \\ ||\\//|| || ||\ ||  // \\    // \\ ||\ ||    // \\ || \\ || \\ // \\ \\//   
//   ||   ||_// ||=|| ||\\||  \\  ||==  ((   )) ||_// || \/ || || ||\\|| (( ___    ||=|| ||\\||    ||=|| ||_// ||_// ||=||  )/    
//   ||   || \\ || || || \|| \_)) ||     \\_//  || \\ ||    || || || \||  \\_||    || || || \||    || || || \\ || \\ || || //     
                                                                                                                               
// __ __  __ ______   ___       ___      __  ______ ____  __ __  __   ___                                                         
// || ||\ || | || |  // \\     // \\    (( \ | || | || \\ || ||\ ||  // \\                                                        
// || ||\\||   ||   ((   ))    ||=||     \\    ||   ||_// || ||\\|| (( ___                                                        
// || || \||   ||    \\_//     || ||    \_))   ||   || \\ || || \||  \\_||

/*35. function applyJoin(arrayOfStrings, string) {
  var joinedString = arrayOfStrings.join(string);
  return joinedString;
}

var resultString1 = applyJoin(['first', 'second', 'third'], '--');
console.log('should log joined string:', resultString1);

can use toString method also = arr.toString()*/

// ______ ____   ___  __  __  __   ____   ___   ____  ___  ___ __ __  __   ___      ___      __  ______ ____  __ __  __   ___ 
// | || | || \\ // \\ ||\ || (( \ ||     // \\  || \\ ||\\//|| || ||\ ||  // \\    // \\    (( \ | || | || \\ || ||\ ||  // \\
//   ||   ||_// ||=|| ||\\||  \\  ||==  ((   )) ||_// || \/ || || ||\\|| (( ___    ||=||     \\    ||   ||_// || ||\\|| (( ___
//   ||   || \\ || || || \|| \_)) ||     \\_//  || \\ ||    || || || \||  \\_||    || ||    \_))   ||   || \\ || || \||  \\_||
                                                                                                                           
//    __ __  __ ______   ___       ___  __  __     ___  ____  ____   ___  _  _                                                
//    || ||\ || | || |  // \\     // \\ ||\ ||    // \\ || \\ || \\ // \\ \\//                                                
//    || ||\\||   ||   ((   ))    ||=|| ||\\||    ||=|| ||_// ||_// ||=||  )/                                                 
//    || || \||   ||    \\_//     || || || \||    || || || \\ || \\ || || // 

// ███████╗██████╗ ██╗     ██╗████████╗
// ██╔════╝██╔══██╗██║     ██║╚══██╔══╝
// ███████╗██████╔╝██║     ██║   ██║   
// ╚════██║██╔═══╝ ██║     ██║   ██║   
// ███████║██║     ███████╗██║   ██║   
// ╚══════╝╚═╝     ╚══════╝╚═╝   ╚═╝   
                                    

/*36. function applySplit(stringToBeSplit, splitter) {
  var splitString = stringToBeSplit.split(splitter);
  return splitString;
}

var resultArray1 = applySplit('first--second--third', '--');
console.log('should log split string:', resultArray1);

var resultArray2 = applySplit('git push origin master', ' ');
console.log('should also log split string:', resultArray2); */

//  __ __  __ ____    ____ _   _   ___    ____    ___  ___  ____ ______ __  __   ___   ____     
//  || ||\ || || \\  ||    \\ //  // \\  ||       ||\\//|| ||    | || | ||  ||  // \\  || \\    
//  || ||\\|| ||  )) ||==   )X(  ((   )) ||==     || \/ || ||==    ||   ||==|| ((   )) ||  ))   
//  || || \|| ||_//  ||___ // \\  \\_//  ||       ||    || ||___   ||   ||  ||  \\_//  ||_//    
                                                                                             
//    ___   __  __     ___  __  __     ___  ____  ____   ___  _  _                              
//   // \\  ||\ ||    // \\ ||\ ||    // \\ || \\ || \\ // \\ \\//                              
//  ((   )) ||\\||    ||=|| ||\\||    ||=|| ||_// ||_// ||=||  )/                               
//   \\_//  || \||    || || || \||    || || || \\ || \\ || || //  

/*37. function applyIndexOfToArray(array, element) {
  var index = array.indexOf(element);
  return index;
}

var array1 = ['Quick', 'sort', 'is', 'wild'];
var element1 = 'sort';
var resultIndex1 = applyIndexOfToArray(array1, element1);
console.log('should log 1:', resultIndex1); 

we are getting the index of the element

to get the last index, we can use lastIndexOf(elem).
*/

/*
███████╗ ██████╗ ██████╗ ███████╗ █████╗  ██████╗██╗  ██╗
██╔════╝██╔═══██╗██╔══██╗██╔════╝██╔══██╗██╔════╝██║  ██║
█████╗  ██║   ██║██████╔╝█████╗  ███████║██║     ███████║
██╔══╝  ██║   ██║██╔══██╗██╔══╝  ██╔══██║██║     ██╔══██║
██║     ╚██████╔╝██║  ██║███████╗██║  ██║╚██████╗██║  ██║
╚═╝      ╚═════╝ ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(consoleItem);

function consoleItem(item, index, arr) {
  console.log(item); // or index or arr(is not used)
}


 // the same with an arrow function
 numbers.forEach((item, index, arr) => {
   console.log(item)
 })

 const letters = ['a', 'b', 'c', 'd', 'c'];

 let count = {};
 letters.forEach(item => {
   if (count[item]) {
     count[item]++;
   } else {
      count = 1;
   }
 })

 console.log(count); // {a: 1, b: 1, c: 2, d: 1}

 ███╗   ███╗ █████╗ ██████╗ 
████╗ ████║██╔══██╗██╔══██╗
██╔████╔██║███████║██████╔╝
██║╚██╔╝██║██╔══██║██╔═══╝ 
██║ ╚═╝ ██║██║  ██║██║     
╚═╝     ╚═╝╚═╝  ╚═╝╚═╝     
                           
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(double);

function double(item, index, arr) {
  return item * 2; // or index or arr(is not used)
}
console.log(doubled)

creates new array with new values 

const products = [
  {
    name: 'laptop',
    price: 1000,
    count: 5
  },
  {
    name: 'desktop',
    price: 1500,
    count: 10
  } 
]

const totalProductsValue = products.map(item => item.price * item.count);
console.log(totalProductsValue);

const str = ['1','2','3'];
const numbers = str.map(Number);
console.log(numbers);// [1, 2, 3]

███████╗██╗██╗  ████████╗███████╗██████╗ 
██╔════╝██║██║  ╚══██╔══╝██╔════╝██╔══██╗
█████╗  ██║██║     ██║   █████╗  ██████╔╝
██╔══╝  ██║██║     ██║   ██╔══╝  ██╔══██╗
██║     ██║███████╗██║   ███████╗██║  ██║
╚═╝     ╚═╝╚══════╝╚═╝   ╚══════╝╚═╝  ╚═╝
                                         
creates a new array with filtered values:
a. const numbers = [1, 2, 3, 4, 5];

const even = numbers.filter(isEven);

function isEven(value) {
  return value % 2 === 0;
}

console.log(even);

b. const people = [
  {
    name: 'Florin',
    age: 26
  },
  {
    name: 'Ivan',
    age: 18
  }
]

const adults = people.filter(person => person.age >= 18);
console.log(adults);

c. const numbers = [1, 2, 3, 2, 1, 3, 3, 5, 4, 6];

const nums = numbers.filter((value, index, arr) => {
  return arr.indexOf(value) === index;
})

console.log(nums); // [1, 2, 3, 5, 4, 6]

██████╗ ███████╗██████╗ ██╗   ██╗ ██████╗███████╗
██╔══██╗██╔════╝██╔══██╗██║   ██║██╔════╝██╔════╝
██████╔╝█████╗  ██║  ██║██║   ██║██║     █████╗  
██╔══██╗██╔══╝  ██║  ██║██║   ██║██║     ██╔══╝  
██║  ██║███████╗██████╔╝╚██████╔╝╚██████╗███████╗
╚═╝  ╚═╝╚══════╝╚═════╝  ╚═════╝  ╚═════╝╚══════╝

const nums = [1, 2, 3, 4];
a. const total = nums.reduce(sum, 0); // 0 === accumulator, sum === cb

function sum(accumulator, value) {
  return accumulator + value;
}

console.log(total);

b. const max = nums.reduce(cb, 0); 

function cb(accumulator, value) {
  if (accumulator > value) {
    return accumulator; 
  } else {
    return value;
  }
}

console.log(max);

const store = [
  {
    name: 'laptop',
    value: 1000,
    count: 5
  },
  {
    name: 'desktop',
    value: 1500,
    count: 10
  } 
]

const totalValuesStore = store.reduce((acc, item) => acc + (item.value * item.count), 0);
console.log(totalValuesStore);

███████╗ ██████╗ ██████╗ ████████╗
██╔════╝██╔═══██╗██╔══██╗╚══██╔══╝
███████╗██║   ██║██████╔╝   ██║   
╚════██║██║   ██║██╔══██╗   ██║   
███████║╚██████╔╝██║  ██║   ██║   
╚══════╝ ╚═════╝ ╚═╝  ╚═╝   ╚═╝   

a. const names = ['Florin', 'Liam', 'Jai', 'Ivan'];
names.sort();
console.log(names);

b. const numbers = [1, 4, 3, 2];
numbers.sort(compare);
console.log(numbers);

function compare(a, b) {
  return a - b;
}

c. const products = [
  {
    name: 'laptop',
    price: 1000,
    count: 5
  },
  {
    name: 'desktop',
    price: 1500,
    count: 10
  } 
]

products.sort((a, b) => {
  return a. price - b. price;
});

// or

products.sort((a, b) => a. price - b. price);

console.log(produucts)

███████╗██╗██╗     ██╗     
██╔════╝██║██║     ██║     
█████╗  ██║██║     ██║     
██╔══╝  ██║██║     ██║     
██║     ██║███████╗███████╗
╚═╝     ╚═╝╚══════╝╚══════╝

modifies the initial array
const arr = [1, 2, 3, 4, 5];
arr.fill(0); // [0, 0, 0, 0, 0]
arr.fill(0, startIndex, endIndex) => arr.fill(0, 1, 4) // [1, 0, 0, 0, 5]

function f(n) {
  return Array(n).fill(0).map((_,index) => index + 1);
}

f(5)

     ██╗ ██████╗ ██╗███╗   ██╗
     ██║██╔═══██╗██║████╗  ██║
     ██║██║   ██║██║██╔██╗ ██║
██   ██║██║   ██║██║██║╚██╗██║
╚█████╔╝╚██████╔╝██║██║ ╚████║
 ╚════╝  ╚═════╝ ╚═╝╚═╝  ╚═══╝

is joining the elements by what you will give in " ", doesn't modify the original array
const arr = [1, 2, 3, 4, 5];
arr.join('') => '12345'
arr.join('-') => '1-2-3-4-5'

██████╗ ███████╗██╗   ██╗███████╗██████╗ ███████╗███████╗
██╔══██╗██╔════╝██║   ██║██╔════╝██╔══██╗██╔════╝██╔════╝
██████╔╝█████╗  ██║   ██║█████╗  ██████╔╝███████╗█████╗  
██╔══██╗██╔══╝  ╚██╗ ██╔╝██╔══╝  ██╔══██╗╚════██║██╔══╝  
██║  ██║███████╗ ╚████╔╝ ███████╗██║  ██║███████║███████╗
╚═╝  ╚═╝╚══════╝  ╚═══╝  ╚══════╝╚═╝  ╚═╝╚══════╝╚══════╝
 
modifies the original array

const arr = [1, 2, 3, 4, 5];
arr.reverse() => [5, 4, 3, 2, 1]

███████╗██╗   ██╗███████╗██████╗ ██╗   ██╗
██╔════╝██║   ██║██╔════╝██╔══██╗╚██╗ ██╔╝
█████╗  ██║   ██║█████╗  ██████╔╝ ╚████╔╝ 
██╔══╝  ╚██╗ ██╔╝██╔══╝  ██╔══██╗  ╚██╔╝  
███████╗ ╚████╔╝ ███████╗██║  ██║   ██║   
╚══════╝  ╚═══╝  ╚══════╝╚═╝  ╚═╝   ╚═╝   

doesn't modify the original array
needs cb // as a result is giving true or false
return false, if one of the elements returns false

a. const arr = [1, 2, 3, 4, 5];
let result = arr.every(isPositive);

function isPositive(item) { // index, arr
  return item > 0;
}

console.log(result)

b. const persons = [
  {
    name: 'Gohar'
  },

  {
    surname: 'Sara'
  }
]

const result = persons.every(haveNameProp)

function haveNameProp(person) {
  return person.name !== undefined;
}

console.log(result)

c. const persons = [[1, 2, 3], [1, 2, 3]]
const result = persons.every((elem) => Array.isArray(elem))
console.log(result)

███████╗ ██████╗ ███╗   ███╗███████╗
██╔════╝██╔═══██╗████╗ ████║██╔════╝
███████╗██║   ██║██╔████╔██║█████╗  
╚════██║██║   ██║██║╚██╔╝██║██╔══╝  
███████║╚██████╔╝██║ ╚═╝ ██║███████╗
╚══════╝ ╚═════╝ ╚═╝     ╚═╝╚══════╝
                                    
return true, if one of the elements returns true

a.const arr = [1, 2, 3, 4, 5];

const result = arr.some(isGreaterThanFour);
function isGreaterThanFour(item) {
  return item > 4;
}

console.log(result);

b. const persons = [
  {
  name: 'Ivan',
  age: 20
  },
  {
    name: 'Florin',
    age: 16
  }
]

const result = persons.some(isAdult);

function isAdult(person) {
  return person.age >= 18;
}
console.log(result);

███████╗██╗███╗   ██╗██████╗ 
██╔════╝██║████╗  ██║██╔══██╗
█████╗  ██║██╔██╗ ██║██║  ██║
██╔══╝  ██║██║╚██╗██║██║  ██║
██║     ██║██║ ╚████║██████╔╝
╚═╝     ╚═╝╚═╝  ╚═══╝╚═════╝ 
                    
will return the first element for which cb returns truthy value.

a. const arr = [1, 2, 3, 4, 5];

const result = arr.find(isGreaterThanFour);
function isGreaterThanFour(item) {
  return item > 4;
}

console.log(result)

b. const persons = [
  {
  name: 'Ivan',
  age: 20
  },
  {
    name: 'Florin',
    age: 16
  }
]

const result = persons.find(findIvan).age; // 20

function findIvan(person) {
  return person.name === 'Ivan';
}

console.log(result);

███████╗██╗███╗   ██╗██████╗ ██╗███╗   ██╗██████╗ ███████╗██╗  ██╗
██╔════╝██║████╗  ██║██╔══██╗██║████╗  ██║██╔══██╗██╔════╝╚██╗██╔╝
█████╗  ██║██╔██╗ ██║██║  ██║██║██╔██╗ ██║██║  ██║█████╗   ╚███╔╝ 
██╔══╝  ██║██║╚██╗██║██║  ██║██║██║╚██╗██║██║  ██║██╔══╝   ██╔██╗ 
██║     ██║██║ ╚████║██████╔╝██║██║ ╚████║██████╔╝███████╗██╔╝ ██╗
╚═╝     ╚═╝╚═╝  ╚═══╝╚═════╝ ╚═╝╚═╝  ╚═══╝╚═════╝ ╚══════╝╚═╝  ╚═╝
  
returns yhe index of the element
a.const arr = [1, 2, 3, 4, 5];

const result = arr.findIndex(findThree);

function findThree(value) {
  return value === 3;
}

console.log(result)

███████╗██╗      █████╗ ████████╗
██╔════╝██║     ██╔══██╗╚══██╔══╝
█████╗  ██║     ███████║   ██║   
██╔══╝  ██║     ██╔══██║   ██║   
██║     ███████╗██║  ██║   ██║   
╚═╝     ╚══════╝╚═╝  ╚═╝   ╚═╝   
                                 

const arr = [1, [2, [3, [4]]]];
const result = arr.flat(Infinity); // Infinite number of nested arrays
console.log(result)

 █████╗ ██████╗ ██████╗  █████╗ ██╗   ██╗███████╗██████╗  ██████╗ ███╗   ███╗
██╔══██╗██╔══██╗██╔══██╗██╔══██╗╚██╗ ██╔╝██╔════╝██╔══██╗██╔═══██╗████╗ ████║
███████║██████╔╝██████╔╝███████║ ╚████╔╝ █████╗  ██████╔╝██║   ██║██╔████╔██║
██╔══██║██╔══██╗██╔══██╗██╔══██║  ╚██╔╝  ██╔══╝  ██╔══██╗██║   ██║██║╚██╔╝██║
██║  ██║██║  ██║██║  ██║██║  ██║   ██║██╗██║     ██║  ██║╚██████╔╝██║ ╚═╝ ██║
╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝╚═╝╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚═╝     ╚═╝
                                                                             
receiving an array from a string

a. const str = '1234';
const result = Array.from(str);
console.log(result) // ['1', '2', '3', '4']

b. const str = '1234';
const result = Array.from(str, mapFn); // or x => Number(x) // or Number instead of mapFn

function mapFn(x) {
  return Number(x); 
}
console.log(result) 

c. remove duplicated values

const numbers = [1, 2, 3, 4, 6, 2, 4]
const result = Array.from(new Set(numbers));
console.log(result); //[ 1, 2, 3, 4, 6 ]

██████╗ ███████╗███████╗████████╗██████╗ ██╗   ██╗ ██████╗████████╗██╗   ██╗██████╗ ██╗███╗   ██╗ ██████╗ 
██╔══██╗██╔════╝██╔════╝╚══██╔══╝██╔══██╗██║   ██║██╔════╝╚══██╔══╝██║   ██║██╔══██╗██║████╗  ██║██╔════╝ 
██║  ██║█████╗  ███████╗   ██║   ██████╔╝██║   ██║██║        ██║   ██║   ██║██████╔╝██║██╔██╗ ██║██║  ███╗
██║  ██║██╔══╝  ╚════██║   ██║   ██╔══██╗██║   ██║██║        ██║   ██║   ██║██╔══██╗██║██║╚██╗██║██║   ██║
██████╔╝███████╗███████║   ██║   ██║  ██║╚██████╔╝╚██████╗   ██║   ╚██████╔╝██║  ██║██║██║ ╚████║╚██████╔╝
╚═════╝ ╚══════╝╚══════╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝  ╚═════╝   ╚═╝    ╚═════╝ ╚═╝  ╚═╝╚═╝╚═╝  ╚═══╝ ╚═════╝ 
// for array
a. const numbers = [1, 2, 3];
const [elem, secondElem] = numbers;
console.log(elem); // 1
const [elem, , secondElem] = numbers;

b. const numbers = [1, 2, 3];
const [elem, , secondElem] = numbers;
console.log(secondElem); // 3

c. const numbers = [1, 2, 3, 4];
const [elem, secondElem, ...rest] = numbers;
console.log(rest); // [ 3, 4 ]

if there is no left for the rest, the result will be [];  

// for object
in case of object the important part is keys, the sequence and quantity is not important
there is no rest here(we have no indexes in case of object)
const user = {
  name: 'Gohar',
  surname: 'Mamunts',
  age: '26'
}

const {name, surname} or {surname, name} = user;

const {name, surname, lastName} // lastName will be undefined 

const arr = [1, 2, 3]
const obj = {};
[obj.age, obj.age2] = arr;
console.log(obj) // { age: 1, age2: 2 }

if the value is undefined(for elem4), will work = 'default'
const arr = [1, 2, 3]
const [elem1, elem2, elem3, elem4 = 'default'] = arr;
console.log(elem4); // 'default'



