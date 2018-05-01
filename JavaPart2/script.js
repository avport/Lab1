// "use strict"; 

// function startGame () {
//     let greeting = prompt ("Would you like to play a game with two players?");

// if (greeting === "yes") {
//     let userHealth = 30; 
//     let grantHealth = 10; 
//     let userName = prompt ("What's your name?");
//     let wins = 0; 
// } else if (greeting === "no") {
//     console.log ("Maybe next time"); 
// }

// function startCombat () {
//     while (grantHealth > 0) {
//         console.log (`${userName} health: ${userHealth}`);
//         console.log (`Grant's Health: ${grantHealth}`);
//         console.log (`Your health is now ${(userHealth -= Math.floor(Math.random() * 2+1))}`);
//         console.log (`Grant's health is now ${(grantHealth -= Math.floor(Math.random() * 2+1))}`);

//         if (grantHealth <=0) {
//                 wins++; 
//                 console.log (`${userName} wins: ${wins}`);
//                 grantHealth = 10; 
//             }

//          if (wins >= 3) {
//             console.log (`Congratulations ${userName}`); 
//            break; 
//         } else if (userHealth <=0) {
//             console.log ("Game over");
//             break; 
//     } 
// }


// }
// }
// startGame ();

//Kevin's fixes
// "use strict"; 

// function startGame () {
//   let greeting = prompt ("Would you like to play a game with two players?");
//   if (greeting === "yes") {
//     let userHealth = 30; 
//     let grantHealth = 10; 
//     let userName = prompt ("What's your name?");
//     let wins = 0; 

//       function startCombat () {
//         while (grantHealth > 0) {
//             console.log (`${userName} health: ${userHealth}`);
//             console.log (`Grant's Health: ${grantHealth}`);
//             console.log (`Your health is now ${(userHealth -= Math.floor(Math.random() * 2+1))}`);
//             console.log (`Grant's health is now ${(grantHealth -= Math.floor(Math.random() * 2+1))}`); 
//             if (grantHealth <=0) {
//                     wins++; 
//                     console.log (`${userName} wins: ${wins}`);
//                     grantHealth = 10; 
//                 }
//             if (wins >= 3) {
//                 console.log (`Congratulations ${userName}`); 
//               break; 
//             } else if (userHealth <=0) {
//                 console.log ("Game over");
//                 break; 
//             }  
//       }
//     } startCombat();
//   } else if (greeting === "no") {     
//     console.log ("Maybe next time"); 
// }
// }
// startGame ();


"use strict";

function startGame() {
    let greeting = prompt("Would you like to play a game with two players?");
    if (greeting === "yes") {
        console.log("Let's play");
        startCombat();
        console.log("Game over");
    } else if (greeting === "no") {
        console.log("Maybe next time");
    }
}

function startCombat() {
    let userName = prompt("enter your name");
    let userHealth = 30;
    let grantHealth = 10;
    let win = 0;
    console.log(`${userName} health: ${userHealth}`);
    console.log(`Grant health: ${grantHealth}`);
    while (win < 3 && userHealth > 0) {
        console.log(`Grant's health is now ${(grantHealth -= getDamage())}`);
        console.log(`${userName} health is now ${(userHealth -= getDamage())}`);
        if (grantHealth <= 0) {
            win++;
            console.log(`${userName} wins ${win}`);
            grantHealth = 10;

            if (quitCombat()) { 
                console.log("Good bye");
                break; 
            }
        }
        if (userHealth <= 0) {
            console.log(`Grant wins. ${userName} loses`);
        }
    }
}

function quitCombat() {
    let attackquit = prompt("Would you like to attack or quit?");
    if (attackquit === "quit") {
        return true;
    } else if (attackquit === "attack") {
        return false;
    } 
}

function getDamage() {
    return Math.floor(Math.random() * 5 + 1)
}

startGame();

// function startCombat () {
//     let userHealth = 30; 
//     let grantHealth = 10; 
//     let wins = 0;
//     let userName = prompt ("What's your name?"); 

// while (grantHealth > 0) { 
//     console.log (`${userName} health: ${userHealth}`);
//     console.log (`Grant's Health: ${grantHealth}`);
//     console.log (`Your health is now ${(userHealth -= getDamage2())}`);
//     console.log (`Grant's health is now ${(grantHealth -= getDamage2())}`); 
// }

// let continuePlay = prompt ("Would you like to keep playing?");
//     wins++; 
// if (continuePlay === "yes") {

//     console.log (wins); 

// }
// }

// getDamage();

// if (grantHealth <=0) {

//     } 
//         } if (continuePlay === "yes") {
//             wins++; 
//             console.log (`${userName} wins: ${wins}`);
//             grantHealth = 10; 
//         }
//     if (wins >= 3) {
//         console.log (`Congratulations ${userName}`); 
//       break; 
//     } else if (userHealth <=0) {
//         console.log ("Game over");
//         break; 
//     }  


//   }