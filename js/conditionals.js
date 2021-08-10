// __  ____     __  ______  ___  ______  ____ ___  ___  ____ __  __ ______
// || ||       (( \ | || | // \\ | || | ||    ||\\//|| ||    ||\ || | || |
// || ||==      \\    ||   ||=||   ||   ||==  || \/ || ||==  ||\\||   ||  
// || ||       \_))   ||   || ||   ||   ||___ ||    || ||___ || \||   ||  
                                                                       

/*function isItUndefined(param) {
    // if param is defined (or not undefined)
    if (param !== undefined) {
        return 'Input is defined';
    }
    
    }  // return 'Input is defined'

    var result1 = isItUndefined('anything');
    console.log('should log "Input is defined":', result1);
    
    var result2 = isItUndefined();
    console.log('Should log undefined, because function returned nothing:', result2); */

    // __  ____     __  ______  ___  ______  ____ ___  ___  ____ __  __ ______     
    // || ||       (( \ | || | // \\ | || | ||    ||\\//|| ||    ||\ || | || |     
    // || ||==      \\    ||   ||=||   ||   ||==  || \/ || ||==  ||\\||   ||       
    // || ||       \_))   ||   || ||   ||   ||___ ||    || ||___ || \||   ||       
                                                                                
    //    __    __ __ ______ __  __    __  __ __ __ ___  ___ ____   ____ ____   __ 
    //    ||    || || | || | ||  ||    ||\ || || || ||\\//|| || )) ||    || \\ (( \
    //    \\ /\ // ||   ||   ||==||    ||\\|| || || || \/ || ||=)  ||==  ||_//  \\ 
    //     \V/\V/  ||   ||   ||  ||    || \|| \\_// ||    || ||_)) ||___ || \\ \_))
    
    /*function fewerApples(apples, oranges) {
        // if there are fewer apples than oranges
        if (apples < oranges) {
            return 'There are fewer apples than oranges';
        }
          // return 'There are fewer apples than oranges'
      }

        var result1 = fewerApples(4, 7);
        console.log('should log "There are fewer apples than oranges":', result1);

        var result2 = fewerApples(19, 12);
        console.log('Should log undefined, because function returned nothing:', result2); */

        // __  ____     __  ______  ___  ______  ____ ___  ___  ____ __  __ ______    
        // || ||       (( \ | || | // \\ | || | ||    ||\\//|| ||    ||\ || | || |    
        // || ||==      \\    ||   ||=||   ||   ||==  || \/ || ||==  ||\\||   ||      
        // || ||       \_))   ||   || ||   ||   ||___ ||    || ||___ || \||   ||      
                                                                                   
        //    __    __ __ ______ __  __     ___      __  ______ ____  __ __  __   ___ 
        //    ||    || || | || | ||  ||    // \\    (( \ | || | || \\ || ||\ ||  // \\
        //    \\ /\ // ||   ||   ||==||    ||=||     \\    ||   ||_// || ||\\|| (( ___
        //     \V/\V/  ||   ||   ||  ||    || ||    \_))   ||   || \\ || || \||  \\_||
                                                                                   

        /*function validLengthPassword(password) {
            // if password length is greater than 4 and less than 15
            if (password.length > 4 && password.length < 15) {
                return 'Password length is valid';
            }
            // return 'Password length is valid'
          }

            var result1 = validLengthPassword('passwordyfurdy');
            console.log('should log "Password length is valid":', result1);

            var result2 = validLengthPassword('pass');
            console.log('Should log undefined, because function returned nothing:', result2);*/

            // __  ____     __  ______  ___  ______  ____ ___  ___  ____ __  __ ______     
            // || ||       (( \ | || | // \\ | || | ||    ||\\//|| ||    ||\ || | || |     
            // || ||==      \\    ||   ||=||   ||   ||==  || \/ || ||==  ||\\||   ||       
            // || ||       \_))   ||   || ||   ||   ||___ ||    || ||___ || \||   ||       
                                                                                        
            //    __    __ __ ______ __  __     ___  __  __     ___  ____  ____   ___  _  _
            //    ||    || || | || | ||  ||    // \\ ||\ ||    // \\ || \\ || \\ // \\ \\//
            //    \\ /\ // ||   ||   ||==||    ||=|| ||\\||    ||=|| ||_// ||_// ||=||  )/ 
            //     \V/\V/  ||   ||   ||  ||    || || || \||    || || || \\ || \\ || || //  

            /*function findAgent(agentList, agentToSearchFor) {
                // if agentToSearchFor is present within agentList
                if (agentList.indexOf(agentToSearchFor) > -1) {
                    return agentToSearchFor + ' is present within Agent list';
                }
                  // return '{agentToSearchFor} is present within Agent list'
              }

            var result1 = findAgent(['001', '005', '007', '009'], '007');
            console.log('should log "007 is present within Agent list":', result1);

            var result2 = findAgent(['tiny', 'teeny', 'eeny', 'meany'], 'teeny');
            console.log('should log "teeny is present within Agent list":', result2); */

            // __  ____     __  ______  ___  ______  ____ ___  ___  ____ __  __ ______            
            // || ||       (( \ | || | // \\ | || | ||    ||\\//|| ||    ||\ || | || |            
            // || ||==      \\    ||   ||=||   ||   ||==  || \/ || ||==  ||\\||   ||              
            // || ||       \_))   ||   || ||   ||   ||___ ||    || ||___ || \||   ||              
                                                                                               
            // __    __ __ ______ __  __     ___  __  __      ___   ____     __  ____   ___ ______
            // ||    || || | || | ||  ||    // \\ ||\ ||     // \\  || ))    || ||     //   | || |
            // \\ /\ // ||   ||   ||==||    ||=|| ||\\||    ((   )) ||=)     || ||==  ((      ||  
            //  \V/\V/  ||   ||   ||  ||    || || || \||     \\_//  ||_)) |__|| ||___  \\__   ||  

            /*function generateReportSummary(reportTotals, teamName) {
                var teamTotal = reportTotals[teamName];
                 if (teamTotal > 5) {
                   return teamName + ' has surpassed goal with ' + teamTotal + ' reports';
               }
           }

            var result1 = generateReportSummary({a_team: 12, b_team: 7, c_team: 0}, 'b_team');
            console.log('should log "b_team has surpassed goal with 7 reports":', result1);

            var result2 = generateReportSummary({blue: 18, red: 8, green: 12}, 'blue');
            console.log('should log "blue has surpassed goal with 18 reports":', result2);*/

            // __  ____     ____ __     __   ____     __  ______  ___  ______  ____ ___  ___  ____ __  __ ______
            // || ||       ||    ||    (( \ ||       (( \ | || | // \\ | || | ||    ||\\//|| ||    ||\ || | || |
            // || ||==     ||==  ||     \\  ||==      \\    ||   ||=||   ||   ||==  || \/ || ||==  ||\\||   ||  
            // || ||       ||___ ||__| \_)) ||___    \_))   ||   || ||   ||   ||___ ||    || ||___ || \||   ||  
                                                                                                             
            //     ____ _   _  ___  ___  ___ ____  __     ____  __                                              
            //    ||    \\ // // \\ ||\\//|| || \\ ||    ||    (( \                                             
            //    ||==   )X(  ||=|| || \/ || ||_// ||    ||==   \\                                              
            //    ||___ // \\ || || ||    || ||    ||__| ||___ \_)) 
            
            
            // __    __ __ ______ __  __    __  __ __ __ ___  ___ ____   ____ ____   __ 
            // ||    || || | || | ||  ||    ||\ || || || ||\\//|| || )) ||    || \\ (( \
            // \\ /\ // ||   ||   ||==||    ||\\|| || || || \/ || ||=)  ||==  ||_//  \\ 
            //  \V/\V/  ||   ||   ||  ||    || \|| \\_// ||    || ||_)) ||___ || \\ \_))

            /*// change values of dogs/cats to see 'else' condition
            var dogs = 9;
            var cats = 8;

            if (dogs > 8 && cats < 9) {
            console.log('number of cats and dogs is acceptable');
            } else {
            console.log('number of cats or dogs is not acceptable');
            } */

            /*function balancePets(dogs, cats) {
                // if there are more than 8 dogs and fewer than 9 cats
                  // return 'number of cats and dogs is acceptable'
                // otherwise
                  // return 'number of cats or dogs is not acceptable'
                  if (dogs > 8 && cats < 9) {
                      return 'number of cats and dogs is acceptable';
                  } else {
                      return 'number of cats or dogs is not acceptable';
                  }
              }

            var result1 = balancePets(9, 8);
            console.log('should log "number of cats and dogs is acceptable":', result1);

            var result2 = balancePets(7, 12);
            console.log('should log "number of cats or dogs is not acceptable":', result2);*/

            // __    __ __ ______ __  __     __  ______ ____  __ __  __   ___   __ 
            // ||    || || | || | ||  ||    (( \ | || | || \\ || ||\ ||  // \\ (( \
            // \\ /\ // ||   ||   ||==||     \\    ||   ||_// || ||\\|| (( ___  \\ 
            //  \V/\V/  ||   ||   ||  ||    \_))   ||   || \\ || || \||  \\_|| \_))

            /*// change to a shorter password to see 'else' condition
            var password = 'pa$$wordIsLongEnough';

            if (password.length > 8) {
            console.log('Password is long enough');
            } else {
            console.log('Please enter a password of at least 9 characters');
            } */

            /*function passwordLongEnough(password) {
                // if password length is greater than 8
                  // return 'Password is long enough'
                // otherwise
                  // return 'Please enter a password of at least 9 characters'
                  if (password.length > 8) {
                      return 'Password is long enough';
                  } else {
                      return 'Please enter a password of at least 9 characters';
                  }
              }

            var result1 = passwordLongEnough('passafassaword');
            console.log('should log "Password is long enough":', result1);

            var result2 = passwordLongEnough('wordpass');
            console.log('Should log "Please enter a password of at least 9 characters":', result2);*/

            // __    __ __ ______ __  __     ___  __  __     ___  ____  ____   ___  _  _
            // ||    || || | || | ||  ||    // \\ ||\ ||    // \\ || \\ || \\ // \\ \\//
            // \\ /\ // ||   ||   ||==||    ||=|| ||\\||    ||=|| ||_// ||_// ||=||  )/ 
            //  \V/\V/  ||   ||   ||  ||    || || || \||    || || || \\ || \\ || || //  

            /*var ingredientsList = ['flour', 'sugar', 'eggs'];
            // change to ingredient not in list to see 'else' condition
            var ingredientInQuestion = 'sugar'

            if (ingredientsList.indexOf(ingredientInQuestion) > -1 ) {
            console.log(ingredientInQuestion + ' is on the list');
            } else {
            console.log(ingredientInQuestion + ' is not on the list');
            } */

            /*function findIngredient(ingredientList, ingredientToSearchFor) {
                // if ingredientToSearchFor is present within ingredientList
                  // return '{ingredientToSearchFor} is on the list'
                // otherwise
                  // return '{ingredientToSearchFor} is not on the list'
                  if (ingredientList.indexOf(ingredientToSearchFor) > -1) {
                      return ingredientToSearchFor + ' is on the list';
                  } else {
                      return ingredientToSearchFor + ' is not on the list';
                  }
              }

            var result1 = findIngredient(['flour', 'butter', 'sugar', 'eggs'], 'sugar');
            console.log('should log "sugar is on the list":', result1);

            var result2 = findIngredient(['milk', 'cereal', 'fruit'], 'pop-tarts');
            console.log('should log "pop-tarts is not on the list":', result2);*/


            // __    __ __ ______ __  __     ___  __  __      ___   ____     __  ____   ___ ______
            // ||    || || | || | ||  ||    // \\ ||\ ||     // \\  || ))    || ||     //   | || |
            // \\ /\ // ||   ||   ||==||    ||=|| ||\\||    ((   )) ||=)     || ||==  ((      ||  
            //  \V/\V/  ||   ||   ||  ||    || || || \||     \\_//  ||_)) |__|| ||___  \\__   || 
            
            /*// change the values to see 'else' condition
            var fruitTotals = {bananas: 4, strawberries: 12};

            if (fruitTotals.bananas > 3 && fruitTotals.strawberries > 10) {
            console.log('We have enough fruit, with ' + fruitTotals.bananas + ' bananas, and ' + fruitTotals.strawberries + ' strawberries');
            } else {
            console.log('We do not have enough of both fruits');
            } */

            /*function measureRequiredFruit(fruitTotals) {
                // if there are more than 3 bananas and more than 10 strawberries
                  // return 'We have enough fruit, with {totalBananas} bananas, and {totalStrawberries} strawberries'
                // otherwise
                  // return 'We do not have enough of both fruits'
                  var totalBananas = fruitTotals.bananas;
                  var totalStrawberries = fruitTotals.strawberries;
                  if (totalBananas > 3 && totalStrawberries > 10) {
                      return 'We have enough fruit, with ' + totalBananas + ' bananas, and ' + totalStrawberries + ' strawberries';
                  } else {
                    return 'We do not have enough of both fruits';  
                  }
              }

            var result1 = measureRequiredFruit({bananas: 4, strawberries: 12});
            console.log('should log "We have enough fruit, with 4 bananas, and 12 strawberries":', result1);

            var result2 = measureRequiredFruit({bananas: 5, strawberries: 15});
            console.log('should log "We have enough fruit, with 5 bananas, and 15 strawberries":', result2);*/

            // __  ____     ____ __     __   ____     __  ______  ___  ______  ____ ___  ___  ____ __  __ ______   
            // || ||       ||    ||    (( \ ||       (( \ | || | // \\ | || | ||    ||\\//|| ||    ||\ || | || |   
            // || ||==     ||==  ||     \\  ||==      \\    ||   ||=||   ||   ||==  || \/ || ||==  ||\\||   ||     
            // || ||       ||___ ||__| \_)) ||___    \_))   ||   || ||   ||   ||___ ||    || ||___ || \||   ||     
                                                                                                                
            // __    __ __ ______ __  __    ______ ____  __ __ ______ __  __ _  _   ____  ___  __     __  _  _     
            // ||    || || | || | ||  ||    | || | || \\ || || | || | ||  || \\//  ||    // \\ ||    (( \ \\//     
            // \\ /\ // ||   ||   ||==||      ||   ||_// || ||   ||   ||==||  )/   ||==  ||=|| ||     \\   )/      
            //  \V/\V/  ||   ||   ||  ||      ||   || \\ \\_//   ||   ||  || //    ||    || || ||__| \_)) //   
            
            /*function isItTruthy(param) {
                // if param is truthy
                  // return 'Input is truthy'
                // otherwise
                  // return 'Input is falsy'
                  if (param) {
                      return 'Input is truthy';
                  } else {
                     return 'Input is falsy'; 
                  }
              }

            var result1 = isItTruthy('anything');
            console.log('should log "Input is truthy":', result1);

            var result2 = isItTruthy();
            console.log('should log "Input is falsy":', result2);

            var result3 = isItTruthy("");
            console.log('should log "Input is falsy":', result3);

            var result4 = isItTruthy(false);
            console.log('should log "Input is falsy":', result4);*/

            // __  ____     ____ __     __   ____    __  ____     __  ______  ___  ______  ____ ___  ___  ____ __  __ ______
            // || ||       ||    ||    (( \ ||       || ||       (( \ | || | // \\ | || | ||    ||\\//|| ||    ||\ || | || |
            // || ||==     ||==  ||     \\  ||==     || ||==      \\    ||   ||=||   ||   ||==  || \/ || ||==  ||\\||   ||  
            // || ||       ||___ ||__| \_)) ||___    || ||       \_))   ||   || ||   ||   ||___ ||    || ||___ || \||   ||  
                                                                                                                         
            //     ____ _   _  ___  ___  ___ ____  __     ____  __                                                          
            //    ||    \\ // // \\ ||\\//|| || \\ ||    ||    (( \                                                         
            //    ||==   )X(  ||=|| || \/ || ||_// ||    ||==   \\                                                          
            //    ||___ // \\ || || ||    || ||    ||__| ||___ \_))
            
           /* 1. Guessing rock/paper/scissors choice

            // change to 'paper' or 'scissors' to see other choices
            var choice = 'rock';

            if (choice === 'rock') {
            console.log('Player 1 chose ' + choice);
            } else if (choice === 'paper') {
            console.log('Player 1 chose ' + choice);
            } else if (choice === 'scissors') {
            console.log('Player 1 chose ' + choice);
            } else {
            console.log('Player 1 has chosen poorly!');
            }


            2. Finding the right size T-Shirt
            var shirtWidth = 25;

            if (shirtWidth >= 20 && shirtWidth < 30) {
            console.log('You should select a size S');
            } else if (shirtWidth >= 30 && shirtWidth < 40) {
            console.log('You should select a size M');
            } else if (shirtWidth >= 40 && shirtWidth < 50) {
            console.log('You should select a size L');
            } else {
            console.log('You should select a different shirt');
            }


            3. Deciding what you need for a recipe
            var recipeMinimums = {
            tomatoes: 3,
            onions: 7
            };

            var stockTomatoes = 5;
            var stockOnions = 8;

            var excessTomatoes = stockTomatoes - recipeMinimums.tomatoes;
            var excessOnions = stockOnions - recipeMinimums.onions;

            if (stockTomatoes < recipeMinimums.tomatoes && stockOnions < recipeMinimums.onions) {
            console.log('We need more tomatoes and more onions.');
            } else if (stockTomatoes < recipeMinimums.tomatoes && stockOnions >= recipeMinimums.onions) {
            console.log('We need more tomatoes, but have enough onions.');
            } else if (stockTomatoes >= recipeMinimums.tomatoes && stockOnions < recipeMinimums.onions) {
            console.log('We have enough tomatoes, but need more onions.');
            } else {
            console.log('We have enough tomatoes and onions. There will be ' + excessTomatoes + ' extra tomato, and ' + excessOnions + ' extra onion.');
            }

             
//                ___   ___   __  __ __ __  ____ ____  ______     __    ___   ___  
//   //    // \\  ||\ || || || ||    || \\ | || |    (( \  //    // \\  || \\ ||   
//  ((    ((   )) ||\\|| \\ // ||==  ||_//   ||       \\  ((    ((   )) ||_// ||== 
//   \\__  \\_//  || \||  \V/  ||___ || \\   ||      \_))  \\__  \\_//  || \\ ||___
                                                                                
//     ______   ___        ___  ____   ___  ____    ____                           
//     | || |  // \\      // \\ || \\ // \\ || \\  ||                              
//       ||   ((   ))    (( ___ ||_// ||=|| ||  )) ||==                            
//       ||    \\_//      \\_|| || \\ || || ||_//  ||___  

function convertScoreToGrade(score) {
  if (score > 100 || score < 0) {
      return 'INVALID SCORE';
  } else if (score < 60) {
      return 'F';
  } else if (score < 70) {
      return 'D';
  } else if (score < 80) {
      return 'C';
  } else if (score < 90) {
      return 'B';
  } else {
      return 'A';
  }
}

var output = convertScoreToGrade(91);
console.log(output); // --> 'A'*/

// ██████╗ ██████╗ ███╗   ██╗██████╗ ██╗████████╗██╗ ██████╗ ███╗   ██╗ █████╗ ██╗         
// ██╔════╝██╔═══██╗████╗  ██║██╔══██╗██║╚══██╔══╝██║██╔═══██╗████╗  ██║██╔══██╗██║         
// ██║     ██║   ██║██╔██╗ ██║██║  ██║██║   ██║   ██║██║   ██║██╔██╗ ██║███████║██║         
// ██║     ██║   ██║██║╚██╗██║██║  ██║██║   ██║   ██║██║   ██║██║╚██╗██║██╔══██║██║         
// ╚██████╗╚██████╔╝██║ ╚████║██████╔╝██║   ██║   ██║╚██████╔╝██║ ╚████║██║  ██║███████╗    
//  ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝╚═════╝ ╚═╝   ╚═╝   ╚═╝ ╚═════╝ ╚═╝  ╚═══╝╚═╝  ╚═╝╚══════╝    
                                                                                         
//  ██████╗ ██████╗ ███████╗██████╗  █████╗ ████████╗ ██████╗ ██████╗     ██████╗           
// ██╔═══██╗██╔══██╗██╔════╝██╔══██╗██╔══██╗╚══██╔══╝██╔═══██╗██╔══██╗    ╚════██╗          
// ██║   ██║██████╔╝█████╗  ██████╔╝███████║   ██║   ██║   ██║██████╔╝      ▄███╔╝          
// ██║   ██║██╔═══╝ ██╔══╝  ██╔══██╗██╔══██║   ██║   ██║   ██║██╔══██╗      ▀▀══╝           
// ╚██████╔╝██║     ███████╗██║  ██║██║  ██║   ██║   ╚██████╔╝██║  ██║      ██╗             
//  ╚═════╝ ╚═╝     ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝    ╚═════╝ ╚═╝  ╚═╝      ╚═╝            

/*
The syntax is:
let result = condition ? value1 : value2;
let accessAllowed = (age > 18) ? true : false;

if (age < 3) {
  message = 'Hi, baby!';
} else if (age < 18) {
  message = 'Hello!';
} else if (age < 100) {
  message = 'Greetings!';
} else {
  message = 'What an unusual age!';
}

the above will look like this:

let age = prompt('age?', 18);
let message = (age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';
alert( message );
                                                                                         
                                                                                
                                                                                                                         


                                                                                                                            
                                                                                               
                                                                                     

                                                                                


                                                                                     
                                                                                                             

                                                                                               
                                                                                        


