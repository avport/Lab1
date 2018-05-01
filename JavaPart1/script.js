"use strict";

let greeting = prompt("Would you like to play a game with two players?");


if (greeting === "yes") {
    let userHealth = 30;
    let grantHealth = 10;
    let userName = prompt("What's your name?");
    let wins = 0;
    while (grantHealth > 0) {
        console.log(`${userName} health: ${userHealth}`);
        console.log(`Grant's Health: ${grantHealth}`);
        console.log(`Your health is now ${(userHealth -= Math.floor(Math.random() * 2+1))}`);
        console.log(`Grant's health is now ${(grantHealth -= Math.floor(Math.random() * 2+1))}`);

        if (grantHealth <= 0) {
            wins++;
            console.log(`${userName} wins: ${wins}`);
            grantHealth = 10;
        }

        if (wins >= 3) {
            console.log(`Congratulations ${userName}`);
            break;
        } else if (userHealth <= 0) {
            console.log("Game over");
            break;
        }
    }

} else if (greeting === "no") {
    console.log("Maybe next time");
}







let greeting = prompt("Would you like to play a game with two players?");


if (greeting === "yes") {
    let userHealth = 40;
    let grantHealth = 10;
    let userName = prompt("What's your name?");
    let wins = 0;
    while (grantHealth > 0) {
        console.log(`${userName} health: ${userHealth}`);
        console.log(`Grant's Health: ${grantHealth}`);
        console.log(`Your health is now ${(userHealth -= Math.floor(Math.random() * 2+1))}`);
        console.log(`Grant's health is now ${(grantHealth -= Math.floor(Math.random() * 2+1))}`);

        if (wins >= 3) {
            console.log(`Congratulations ${userName}`);
            break;
        } else if (userHealth <= 0) {
            console.log("Game over");
            break;
        } else if (grantHealth <= 0) {
            wins++;
            console.log(`${userName} wins: ${wins}`);
            grantHealth = 10;
        }
    }
} else if (greeting === "no") {
    console.log("Maybe next time");
}


let greeting = prompt("Would you like to play?");
if (greeting === "yes") {
    console.log("Let's play");
    let userName = prompt("enter your name");
    let userHealth = 30;
    let grantHealth = 10;
    let win = 0;
    console.log(`${userName} health: ${userHealth}`);
    console.log(`Grant health: ${grantHealth}`);
    while (win < 3 && userHealth > 0) {
        console.log(`Grant's health is now ${(grantHealth -= Math.floor(Math.random() * 2 + 1))}`);
        console.log(`${userName} health is now ${(userHealth -= Math.floor(Math.random() * 2 + 1))}`);
        if (grantHealth <= 0) {
            win++;
            console.log(`${userName} wins ${win}`);
            grantHealth = 10;
        }
        if (userHealth <= 0) {
            console.log(`Grant wins. ${userName} looses`);
        }
    }
    console.log("Game over");

} else {
    console.log("maybe another time");
}