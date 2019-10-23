"use strict";
/*----------Random Damage Arrow Function----------*/
const randomDamage = () => {
    return Math.floor(Math.random() * 10 + 1);

}


/*----------Choose Option Arrow Function----------*/
const chooseOption = (opt1, opt2) => {
    let randNum = Math.floor(Math.random() * 2);
    return randNum === 0 ? opt1 : opt2;
}


/*----------Attack Player Expression Function----------*/
const attackPlayer = function(health) {
    return health -= randomDamage();
}


/*----------Log Health Arrow Function----------*/
const logHealth = (player, health) =>{
    console.log(`${player} health: ${health}`);
}


/*----------Log Death Arrow Function----------*/
const logDeath = (winner, loser) => {
    console.log(`${winner} defeated ${loser}`);
}


/*----------Is Dead Arrow Function----------*/
const isDead = (health) =>{
    return health <= 0;
}


/*----------Fight Declaration Function----------*/
function fight(player1, player2, player1Health, player2Health){
    while(true){
        let attacker = chooseOption(player1, player2);
        if (attacker === player1) {
            player2Health = attackPlayer(player2Health);
            logHealth(player2, player2Health);
            if(isDead(player2Health)){
                logDeath(player1, player2);
                break;
            }
        } else {
            player1Health = attackPlayer(player1Health);
            logHealth(player1, player1Health);
            if(isDead(player1Health)){
                logDeath(player2, player1);
                break;
            }
        }
    }
}


/*----------The Fight----------*/
fight("Liam", "Abbie", 100, 100);