// ██╗    ██╗██╗  ██╗██╗██╗     ███████╗    ██╗      ██████╗  ██████╗ ██████╗ 
// ██║    ██║██║  ██║██║██║     ██╔════╝    ██║     ██╔═══██╗██╔═══██╗██╔══██╗
// ██║ █╗ ██║███████║██║██║     █████╗      ██║     ██║   ██║██║   ██║██████╔╝
// ██║███╗██║██╔══██║██║██║     ██╔══╝      ██║     ██║   ██║██║   ██║██╔═══╝ 
// ╚███╔███╔╝██║  ██║██║███████╗███████╗    ███████╗╚██████╔╝╚██████╔╝██║     
//  ╚══╝╚══╝ ╚═╝  ╚═╝╚═╝╚══════╝╚══════╝    ╚══════╝ ╚═════╝  ╚═════╝ ╚═╝     
                                                                            


// __      ___     ___   ____       ___   __ __  ____ ____                                                              
// ||     // \\   // \\  || \\     // \\  || || ||    || \\                                                             
// ||    ((   )) ((   )) ||_//    ((   )) \\ // ||==  ||_//                                                             
// ||__|  \\_//   \\_//  ||        \\_//   \V/  ||___ || \\                                                             
                                                                                                                     
//  __   ____   ___   __ __  ____ __  __   ___  ____      ___    ____    __  __ __ __ ___  ___ ____   ____ ____   __    
// (( \ ||     // \\  || || ||    ||\ ||  //   ||        // \\  ||       ||\ || || || ||\\//|| || )) ||    || \\ (( \   
//  \\  ||==  ((   )) || || ||==  ||\\|| ((    ||==     ((   )) ||==     ||\\|| || || || \/ || ||=)  ||==  ||_//  \\    
// \_)) ||___  \\_/X| \\_// ||___ || \||  \\__ ||___     \\_//  ||       || \|| \\_// ||    || ||_)) ||___ || \\ \_))  

/*function loopASequence(start, end) {
    // create a loop which runs if start is less than or equal to end
      // log current value of start to console
      // increment value of start
      while (start <= end) {
          console.log(start);
          start++;
      }
  }

  loopASequence(2, 5);
// console output:
  // 2
  // 3
  // 4
  // 5 */

//   __      ___     ___   ____       ___   __ __  ____ ____      ___  __  __     ___  ____  ____   ___  _  _
//   ||     // \\   // \\  || \\     // \\  || || ||    || \\    // \\ ||\ ||    // \\ || \\ || \\ // \\ \\//
//   ||    ((   )) ((   )) ||_//    ((   )) \\ // ||==  ||_//    ||=|| ||\\||    ||=|| ||_// ||_// ||=||  )/ 
//   ||__|  \\_//   \\_//  ||        \\_//   \V/  ||___ || \\    || || || \||    || || || \\ || \\ || || // 

/*function loopAnArray(array) {
    // create an index variable
    var index = 0;
    while (index < array.length) {
        console.log(array[index])
        index++;
    }
    // create a loop which iterates over the input array
      // log current array element to the console
      // increment value of index variable
  }

  loopAnArray(['a', 'b', 'c', 'd']);
// console output:
  // a
  // b
  // c
  // d

loopAnArray([1, 2, 3, 4, 5]);
// console output:
  // 1
  // 2
  // 3
  // 4
  // 5 */

//   __      ___     ___   ____       ___   __ __  ____ ____      ___      __  ______ ____  __ __  __   ___ 
//   ||     // \\   // \\  || \\     // \\  || || ||    || \\    // \\    (( \ | || | || \\ || ||\ ||  // \\
//   ||    ((   )) ((   )) ||_//    ((   )) \\ // ||==  ||_//    ||=||     \\    ||   ||_// || ||\\|| (( ___
//   ||__|  \\_//   \\_//  ||        \\_//   \V/  ||___ || \\    || ||    \_))   ||   || \\ || || \||  \\_||

/*function loopAString(string) {
    // create an index variable
    var index = 0;
    // create a loop which iterates over the input string
    while (index < string.length) {
        console.log(string[index]);
        index++;
    }
      // log current string character to the console
      // increment value of index variable
  }

  loopAString('nodeJS');
// console output:
  // n
  // o
  // d
  // e
  // J
  // S

loopAString('abcd');
// console output:
  // a
  // b
  // c
  // d */

//   ███████╗ ██████╗ ██████╗     ██╗      ██████╗  ██████╗ ██████╗ 
// ██╔════╝██╔═══██╗██╔══██╗    ██║     ██╔═══██╗██╔═══██╗██╔══██╗
// █████╗  ██║   ██║██████╔╝    ██║     ██║   ██║██║   ██║██████╔╝
// ██╔══╝  ██║   ██║██╔══██╗    ██║     ██║   ██║██║   ██║██╔═══╝ 
// ██║     ╚██████╔╝██║  ██║    ███████╗╚██████╔╝╚██████╔╝██║     
// ╚═╝      ╚═════╝ ╚═╝  ╚═╝    ╚══════╝ ╚═════╝  ╚═════╝ ╚═╝     

/*function loopASequenceAgain(start, end) {
    // create a loop which loops from start to end
    for (var value = start; value <= end; value++) {
        console.log(value);
    }
  }
      // log current value to console
  
      loopASequenceAgain(2, 5);
      // console output:
        // 2
        // 3
        // 4
        // 5
      
      loopASequenceAgain(3, 7);
        // console output:
          // 3
          // 4
          // 5
          // 6
          // 7 */

        //   __      ___     ___   ____       ___   __ __  ____ ____      ___  __  __     ___  ____  ____   ___  _  _
        //   ||     // \\   // \\  || \\     // \\  || || ||    || \\    // \\ ||\ ||    // \\ || \\ || \\ // \\ \\//
        //   ||    ((   )) ((   )) ||_//    ((   )) \\ // ||==  ||_//    ||=|| ||\\||    ||=|| ||_// ||_// ||=||  )/ 
        //   ||__|  \\_//   \\_//  ||        \\_//   \V/  ||___ || \\    || || || \||    || || || \\ || \\ || || //  

        /*function loopAnArrayAgain(array) {
        // create a loop which iterates over the input array
        for (var i = 0; i < array.length; i++) {
                console.log(array[i]);
            }
                / log current array element to the console
        }

          loopAnArrayAgain(['a', 'b', 'c', 'd']);
        // console output:
        // a
        // b
        // c
        // d

        loopAnArrayAgain([1, 2, 3, 4, 5]);
        // console output:
        // 1
        // 2
        // 3
        // 4
        // 5 */

        // __      ___     ___   ____       ___   __ __  ____ ____      ___      __  ______ ____  __ __  __   ___ 
        // ||     // \\   // \\  || \\     // \\  || || ||    || \\    // \\    (( \ | || | || \\ || ||\ ||  // \\
        // ||    ((   )) ((   )) ||_//    ((   )) \\ // ||==  ||_//    ||=||     \\    ||   ||_// || ||\\|| (( ___
        // ||__|  \\_//   \\_//  ||        \\_//   \V/  ||___ || \\    || ||    \_))   ||   || \\ || || \||  \\_||

        /*function loopAStringAgain(string) {
            // create a loop which iterates over the input string
            for (var i = 0; i < string.length; i++){
            console.log(string[i]);
              // log current string character to the console
          }
          }

        loopAStringAgain('nodeJS');
        // console output:
        // n
        // o
        // d
        // e
        // J
        // S

        loopAStringAgain('abcd');
        // console output:
        // a
        // b
        // c
        // d*/

        /*A Few Things of Which to Take Note
        1. while and for loops can be very similar
        2. Iterating over a string and an array can also be very similar
        3. The concepts below can work with both strings and arrays, and while and for loops

         __      ___     ___   ____       ___   __ __  ____ ____                                           
//  ||     // \\   // \\  || \\     // \\  || || ||    || \\                                          
//  ||    ((   )) ((   )) ||_//    ((   )) \\ // ||==  ||_//                                          
//  ||__|  \\_//   \\_//  ||        \\_//   \V/  ||___ || \\                                          
                                                                                                   
//   ____ __ __  ____ ____  _  _      ___   ______ __  __  ____ ____     __ __  ___  __    __ __  ____
//  ||    || || ||    || \\ \\//     // \\  | || | ||  || ||    || \\    || || // \\ ||    || || ||   
//  ||==  \\ // ||==  ||_//  )/     ((   ))   ||   ||==|| ||==  ||_//    \\ // ||=|| ||    || || ||== 
//  ||___  \V/  ||___ || \\ //       \\_//    ||   ||  || ||___ || \\     \V/  || || ||__| \\_// ||___

function loopEveryOther(array) {
  // create a loop which iterates over every other element of the input array
    // log every other array element to the console
    for (var i = 0; i < array.length; i += 2) {
        console.log(array[i]);
    }
}

loopEveryOther(['a', 'b', 'c', 'd']);
// console output:
  // a
  // c

loopEveryOther([1, 2, 3, 4, 5]);
// console output:
  // 1
  // 3
  // 5*/

//   __      ___     ___   ____      __  ______  ___  ____  ______ __ __  __   ___    
//   ||     // \\   // \\  || \\    (( \ | || | // \\ || \\ | || | || ||\ ||  // \\   
//   ||    ((   )) ((   )) ||_//     \\    ||   ||=|| ||_//   ||   || ||\\|| (( ___   
//   ||__|  \\_//   \\_//  ||       \_))   ||   || || || \\   ||   || || \||  \\_||   
                                                                                   
//    __    ___   ___  ___  ____ __    __ __  __  ____ ____   ____                    
//   (( \  // \\  ||\\//|| ||    ||    || ||  || ||    || \\ ||                       
//    \\  ((   )) || \/ || ||==  \\ /\ // ||==|| ||==  ||_// ||==                     
//   \_))  \\_//  ||    || ||___  \V/\V/  ||  || ||___ || \\ ||___                    
                                                                                   
//   __ __  __    ______ __  __  ____    ___  ___ __ ____   ____   __     ____        
//   || ||\ ||    | || | ||  || ||       ||\\//|| || || \\  || \\  ||    ||           
//   || ||\\||      ||   ||==|| ||==     || \/ || || ||  )) ||  )) ||    ||==         
//   || || \||      ||   ||  || ||___    ||    || || ||_//  ||_//  ||__| ||___ 

/*function loopStartingAtIndex(array, index) {
    // create a loop which iterates from index to the end of the input array
      // log current array element to the console
      for (var i = index; index < array.length; i++) {
          console.log(i[index]);
      }
  }

  loopStartingAtIndex(['a', 'b', 'c', 'd', 'e'], 2);
// console output:
  // c
  // d
  // e

loopStartingAtIndex([1, 2, 3, 4, 5], 3);
// console output:
  // 4
  // 5 */

//   __      ___     ___   ____     __ __  __                                          
//   ||     // \\   // \\  || \\    || ||\ ||                                          
//   ||    ((   )) ((   )) ||_//    || ||\\||                                          
//   ||__|  \\_//   \\_//  ||       || || \||                                          
                                                                                    
//    _ ____   ____ __ __  ____ ____   __   ____  _      ___   ____  ____    ____ ____ 
//   // || \\ ||    || || ||    || \\ (( \ ||    //     // \\  || \\ || \\  ||    || \\
//      ||_// ||==  \\ // ||==  ||_//  \\  ||==        ((   )) ||_// ||  )) ||==  ||_//
//      || \\ ||___  \V/  ||___ || \\ \_)) ||___        \\_//  || \\ ||_//  ||___ || \\

/*function loopInReverse(array) {
    // create a loop which iterates from back to front of the input array
      // log current array element to the console
      for (var i = array.length - 1; i > -1; i--) {
          console.log(array[i]);
      }
  }

  loopInReverse(['a', 'b', 'c', 'd']);
// console output:
  // d
  // c
  // b
  // a

loopInReverse([1, 2, 3, 4]);
// console output:
  // 4
  // 3
  // 2
  // 1 */

//   __ __  __  __ __  __   ___       ___   ___   __  __ ______ __ __  __ __ __  ____
//   || || (( \ || ||\ ||  // \\     //    // \\  ||\ || | || | || ||\ || || || ||   
//   || ||  \\  || ||\\|| (( ___    ((    ((   )) ||\\||   ||   || ||\\|| || || ||== 
//   \\_// \_)) || || \||  \\_||     \\__  \\_//  || \||   ||   || || \|| \\_// ||___

/*function useContinue(array, index) {
    // create a loop which iterates over the input array
    for (var i = 0; i < array.length; i++) {
        if (i === index) {
            continue;
        }
        console.log(array[i]);
    }
      // if current index is equal to input index
        // use described statement to skip to next iteration of loop (must include semi-colon!)
      // log current array element to the console
  }

  useContinue(['a', 'b', 'c', 'd'], 1);
// console output:
  // a
  // c
  // d


useContinue([1, 2, 3, 4], 2);
// console output:
  // 1
  // 2
  // 4 */

//   __ __  __  __ __  __   ___     ____  ____   ____  ___  __ __
//   || || (( \ || ||\ ||  // \\    || )) || \\ ||    // \\ || //
//   || ||  \\  || ||\\|| (( ___    ||=)  ||_// ||==  ||=|| ||<< 
//   \\_// \_)) || || \||  \\_||    ||_)) || \\ ||___ || || || \\

/*function useBreak(array, index) {
    // create a loop which iterates over the input array
      // if current index is greater than input index
        // use described statement to stop the loop completely (must include semi-colon!)
      // log current array element to the console
      for (var i = 0; i < array.length; i++) {
          if (i > index) {
              break;
               }
               console.log(array[i]);
      }
  }

  useBreak(['a', 'b', 'c', 'd', 'e'], 2);
// console output:
  // a
  // b
  // c


useBreak([1, 2, 3, 4, 5, 6], 3);
// console output:
  // 1
  // 2
  // 3
  // 4 */


//   ███████╗ ██████╗ ██████╗       ██╗███╗   ██╗    ██╗      ██████╗  ██████╗ ██████╗ ███████╗
// ██╔════╝██╔═══██╗██╔══██╗      ██║████╗  ██║    ██║     ██╔═══██╗██╔═══██╗██╔══██╗██╔════╝
// █████╗  ██║   ██║██████╔╝█████╗██║██╔██╗ ██║    ██║     ██║   ██║██║   ██║██████╔╝███████╗
// ██╔══╝  ██║   ██║██╔══██╗╚════╝██║██║╚██╗██║    ██║     ██║   ██║██║   ██║██╔═══╝ ╚════██║
// ██║     ╚██████╔╝██║  ██║      ██║██║ ╚████║    ███████╗╚██████╔╝╚██████╔╝██║     ███████║
// ╚═╝      ╚═════╝ ╚═╝  ╚═╝      ╚═╝╚═╝  ╚═══╝    ╚══════╝ ╚═════╝  ╚═════╝ ╚═╝     ╚══════╝

/*1. A for-in statement allows us to loop over the properties in an object
2. It is not usually a good idea to use this for-in loop syntax on an array or a string
3. However, it is possible to use for-in loops on arrays and strings
4. Whatever variable we declare will be assigned to a string value of each key within the object

You will often hear this described as "iterating over the object"

var object = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
  };
  
  for (var key in object) {
    console.log('current key:', key);
    console.log('current value:', object[key]);
    //gives context for when each iteration of loop ends
    console.log('==============');
  }

  We can also do this with variables:
  
  var iceCream =  {
    flavor: 'Strawberry Cheesecake',
    supportingCast: 'Waffle Cone',
    price: 2.5,
    iScream: true
  };;
  
  for (var namedOddlyToMakeAPoint in iceCream) {
    console.log('current key:', namedOddlyToMakeAPoint);
    console.log('current value:', iceCream[namedOddlyToMakeAPoint]);
  }*/

//   __      ___     ___   ____       ___   __ __  ____ ____      ___  __  __  
//   ||     // \\   // \\  || \\     // \\  || || ||    || \\    // \\ ||\ ||  
//   ||    ((   )) ((   )) ||_//    ((   )) \\ // ||==  ||_//    ||=|| ||\\||  
//   ||__|  \\_//   \\_//  ||        \\_//   \V/  ||___ || \\    || || || \||  
                                                                            
//        ___   ____     __  ____   ___ ______ //  __     __ __  ____ _  _  __ 
//       // \\  || ))    || ||     //   | || |    (( \    || // ||    \\// (( \
//      ((   )) ||=)     || ||==  ((      ||       \\     ||<<  ||==   )/   \\ 
//       \\_//  ||_)) |__|| ||___  \\__   ||      \_))    || \\ ||___ //   \_))
                                                                            

  /*function loopOverKeys(object) {
    // create a loop which iterates over the input object
    for (var key in object) {
        console.log(key);
    }
      // log current key to the console
  }

  loopOverKeys({a: 1, b: 2, c: 3});
// console output:
  // a
  // b
  // c

loopOverKeys({make: 'Ford', model: 'T', year: 1913});
// console output:
  // make
  // model
  // year

//    __      ___     ___   ____       ___   __ __  ____ ____      ___  __  __               
//  ||     // \\   // \\  || \\     // \\  || || ||    || \\    // \\ ||\ ||               
//  ||    ((   )) ((   )) ||_//    ((   )) \\ // ||==  ||_//    ||=|| ||\\||               
//  ||__|  \\_//   \\_//  ||        \\_//   \V/  ||___ || \\    || || || \||               
                                                                                        
//       ___   ____     __  ____   ___ ______ //  __     __ __  ___  __    __ __  ____  __ 
//      // \\  || ))    || ||     //   | || |    (( \    || || // \\ ||    || || ||    (( \
//     ((   )) ||=)     || ||==  ((      ||       \\     \\ // ||=|| ||    || || ||==   \\ 
//      \\_//  ||_)) |__|| ||___  \\__   ||      \_))     \V/  || || ||__| \\_// ||___ \_))

function loopOverValues(object) {
  // create a loop which iterates over the input object
  for (var key in object) {
      var value = object[key];
      console.log(value);
  }
    // log current value to the console
}

loopOverValues({a: 1, b: 2, c: 3});
// console output:
  // 1
  // 2
  // 3

loopOverValues({make: 'Ford', model: 'T', year: 1913});
// console output:
  // Ford
  // T
  // 1913


  ███╗   ██╗███████╗███████╗████████╗███████╗██████╗     ██╗      ██████╗  ██████╗ ██████╗ ███████╗
████╗  ██║██╔════╝██╔════╝╚══██╔══╝██╔════╝██╔══██╗    ██║     ██╔═══██╗██╔═══██╗██╔══██╗██╔════╝
██╔██╗ ██║█████╗  ███████╗   ██║   █████╗  ██║  ██║    ██║     ██║   ██║██║   ██║██████╔╝███████╗
██║╚██╗██║██╔══╝  ╚════██║   ██║   ██╔══╝  ██║  ██║    ██║     ██║   ██║██║   ██║██╔═══╝ ╚════██║
██║ ╚████║███████╗███████║   ██║   ███████╗██████╔╝    ███████╗╚██████╔╝╚██████╔╝██║     ███████║
╚═╝  ╚═══╝╚══════╝╚══════╝   ╚═╝   ╚══════╝╚═════╝     ╚══════╝ ╚═════╝  ╚═════╝ ╚═╝     ╚══════╝
                                                                                                 

 __  __  ____  __  ______  ____ ____       ____   ___   ____     __      ___     ___   ____ 
 ||\ || ||    (( \ | || | ||    || \\     ||     // \\  || \\    ||     // \\   // \\  || \\
 ||\\|| ||==   \\    ||   ||==  ||  ))    ||==  ((   )) ||_//    ||    ((   )) ((   )) ||_//
 || \|| ||___ \_))   ||   ||___ ||_//     ||     \\_//  || \\    ||__|  \\_//   \\_//  ||   
                                                                                            

 For loop over an array of arrays

 function loopAnArrayOfArrays(arrayOfArrays) {
  // create a loop which iterates over the input array
  for (i = 0; i < arrayOfArrays.length; i++);
  var innerArray = arrayOfArrays[i];
  for (j = 0; j < innerArray.length; j++) {
      console.log(innerArray[j]);
    }
  }
}
 
    // create an inner loop which iterates over current inner array
      // log current element to the console

 loopAnArrayOfArrays([ ['a', 'b', 'c'], ['d', 'e', 'f'] ]);
// console output:
  // a
  // b
  // c
  // d
  // e
  // f

loopAnArrayOfArrays([ [1, 2], [3, 4], [5], [6, 7, 8] ]);
// console output:
  // 1
  // 2
  // 3
  // 4
  // 5
  // 6
  // 7
  // 8

   __  __  ____  __  ______  ____ ____       ____   ___   ____   __ __  __    __      ___     ___   ____ 
 ||\ || ||    (( \ | || | ||    || \\     ||     // \\  || \\  || ||\ ||    ||     // \\   // \\  || \\
 ||\\|| ||==   \\    ||   ||==  ||  ))    ||==  ((   )) ||_//  || ||\\||    ||    ((   )) ((   )) ||_//
 || \|| ||___ \_))   ||   ||___ ||_//     ||     \\_//  || \\  || || \||    ||__|  \\_//   \\_//  ||   
                                                                                                       

 For-in loop over an object of objects

 function loopAnObjectOfObjects(nestedObject) {
  // create a loop which iterates over the input object
 // create an inner loop which iterates over current inner object
// log current value to the consol
for (var key in nestedObject) {
    for (var innerKey in nestedObject[key]) {
        console.log(nestedObject[key][innerKey]);
    }
}
}

loopAnObjectOfObjects({ a: {a: 1, b: 2}, b: {a: 5, b: 6} });
// console output:
  // 1
  // 2
  // 5
  // 6

loopAnObjectOfObjects({ structures: {queue: true, stack: false}, plantLife: {tree: 'leaves'}, letters: {apple: 'a', bag: 'b', cats: 'c'} });
// console output:
  // true
  // false
  // leaves
  // a
  // b
  // c

   __  __  ____  __  ______  ____ ____      ___  ___ __ _   _  ____ ____      __      ___     ___   ____ 
 ||\ || ||    (( \ | || | ||    || \\     ||\\//|| || \\ // ||    || \\     ||     // \\   // \\  || \\
 ||\\|| ||==   \\    ||   ||==  ||  ))    || \/ || ||  )X(  ||==  ||  ))    ||    ((   )) ((   )) ||_//
 || \|| ||___ \_))   ||   ||___ ||_//     ||    || || // \\ ||___ ||_//     ||__|  \\_//   \\_//  ||   
                                                                                                       

Loop over an array of objects

function loopAnArrayOfObjects(arrayOfObjects) {
    for (i = 0; i < arrayOfObjects.length; i++) {
        innerObj = arrayOfObjects[i];
        for (var key in innerObj) {
            console.log(innerObj[key]);
        }
    }
}

 loopAnArrayOfObjects([{a: 1, b: 2}, {z: 5, y: 6}, {q: 14} ]);
// console output:
  // 1
  // 2
  // 5
  // 6
  // 14

loopAnArrayOfObjects([{queue: false, stack: true}, {fish: 'swims'}, {shirt: 's', pop: 'p', eye: 'e'} ]);
// console output:
  // false
  // true
  // swims
  // s
  // p
  // e

1. Let us consider the case of wanting to loop over an array (or more than one), inside of our looping over an object
2. We can so do using a for loop nested inside of a for-in loop

function loopAnObjectOfArrays(objectOfArrays) {
    for (var key in objectOfArrays) {
       var innerArray = objectOfArrays[key];
       for (var i = 0; i < innerArray.length; i++) {
      var innerKey = objectOfArrays[i];
      console.log(innerArray[i]);
    }
  // create a loop which iterates over the input object
  
    
  }
    // create an inner loop which iterates over current inner array
      // log current value to the console
}

loopAnObjectOfArrays({ first: [1, 2, 5], second: [6, 14, 21] });
// console output:
  // 1
  // 2
  // 5
  // 6
  // 14
  // 21

loopAnObjectOfArrays({ third: [false, false], fourth: ['runs'], ninth: ['q', 'l', 'z'] });
// console output:
  // false
  // false
  // runs
  // q
  // l
  // z

  All Combinations using For Loops

1. Let us consider the case of wanting all of the combinations possible between two arrays
2. We can do so by using a nest for loop:

var numbers = [1, 2, 3];
var letters = ['a', 'b', 'c'];

for (var i = 0; i < numbers.length; i++) {
  for (var j = 0; j < letters.length; j++) {
    console.log(numbers[i] + ' ' + letters[j]);
  }
}
We can also do this with variables:

var flavors = ['Vanilla', 'Chocolate', 'Strawberry'];
var toppings = ['Sprinkles', 'Caramel', 'Whipped Cream'];

for (var i = 0; i < flavors.length; i++) {
  for (var j = 0; j < toppings.length; j++) {
    console.log("You can have " + flavors[i] + " with " + toppings[j]);
  }
}

/* for of loop for arrays

function doubleValues (arr) {
  const result = [];
  for (let key of arr) {
    const doubled = key * 2;
    result.push(doubled);
  } 
  return result;
}

doubleValues([1, 2, 3, 4]);


Object.keys() and Object.values() for finding keys and values of the object;


                                                                                          
                                                              
                                                                                  
                                                                                    
                                                                                   
                                                                                                   
                                                                                                               
                                                                                                                        

          
                                                               


                                                                                                         
                                                                                                          
                                                                                                                     
                                                             