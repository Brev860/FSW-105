const readlineSync = require("readline-sync");


const playerName = readlineSync.question("What is your name");

const startUpGreeting = ` Welcome ${playerName}. As you may remember you volunteered to be cryogenically frozen in 2005. The year now is 2035, 15 years after the COVID-19 plague of 2020. Your choice is stay here in this abandoned government facility and hopefully survive off army rations, or find the key to open the door and see what this world has become in the wake of this tragedy. \n \nWhat will you choose???`;
console.log(startUpGreeting);

let playerAlive = true;
let playerHandStuck = false;
let locateKeyOptions = false;
let playerPanic = false
let foundKey = false
let doorOpen = false
let gotKey = false

  

while(playerAlive == true && playerHandStuck == false && foundKey == false && locateKeyOptions == false && doorOpen == false){
     const playerOptions = readlineSync.keyIn(`Enter you choice of the folloing options: \n 1. Put hand in hole \n 2. Find key \n 3.Open door \n 4. Give up and stay trapped`, {limit: `$<1-4>`});
 if(playerOptions == 1){
    console.log(`YIKES!!! \n ${playerName} your hand is now trapped in the hole`);
    playerHandStuck = true;
    playerPanic = true
} else if (playerOptions == 2){
    console.log(`Where do you what to look for it?`);
    locateKeyOptions = true;   
}else if(playerOptions == 3){
    console.log(`Ah ah ahhhhh ${playerName}!!!!!!! You did say the magic word...No key opening the door...Try again.`)
    playerAlive = true   
} else if (playerOptions == 4){
        console.log(`No one likes a quiter${playerName}!!!!!!! You'll die alone....GAMEOVER!!!!!!!!`)
        playerAlive = false;
}


};

 while(playerHandStuck == true && playerAlive == true){
    const alternativeOption = readlineSync.keyIn(`You have two options:\n 1. Give up(select 1) \n 2. Cut off hand and keep locking for key (select 2)` , {limit: `$<1-2>`})
 if (alternativeOption == 1){
         console.log(`Oh noooo!!!! \n ${playerName} you've bled out before you could cauterize your wound. \n GAME OVER(Wan wan waaaannn!!)`);
         playerAlive = false;
         locateKeyOptions == false;
 } else if (alternativeOption == 2 ){
      console.log(`Wow ${playerName}....looks like you're stuck here....GAME OVER!!!`);
      playerAlive = false;
      locateKeyOptions == false
 }
};

while(locateKeyOptions == true && playerAlive == true && foundKey == false ){
    const playerOptions2 = readlineSync.keyIn(`Where will you look for the key? \n Cafeteria(select 1) \n Laboratory(select 2) \n Security Office(select 3)`, {limit: `$<1-3>}`});
  if (playerOptions2 == 1){
    console.log(`${playerName} you have THE worst luck. You've stumnbled on the security dog turned ferile. You've been over powered and now you're his lunch....GAMEOVER!!!!!"Sit boo boo sit....good boy`);
    playerAlive = false;
 }else if(playerOptions2 == 2){
     console.log(`Clumbsy of you ${playerName} you've knocked over a beeker of highly toxic chemicals which have combine with other chemcials creating a toxic gas that you've breathed in.....GAMEOVER!!!!`);
     playerAlive = false;
 }else if(playerOptions2 == 3){
    console.log(`Score!!!!!! ${playerName} you've located the key in the Security Guards office`);
    foundKey = true;
    gotKey = true;
 }
};



 while (foundKey == true && playerAlive == true && gotKey == true && doorOpen == false){
    const playerOptions3 = readlineSync.keyIn(`Now that you have the key you have to choose the correct exit. \n Which do you want to try: \n Door#1 (select 1) \n Door#2 (select 2) \n Door3# (select 3)`,{limit: `$<1-3>`});
  if(playerOptions3 == 1){
     console.log(`Welp ${playerName} looks like your luck has run out. You've opend the door on the 5th floor with no staircase and have fallen to your death...Yikes!!! GAMEOVER!!!!`);
     playerAlive = false;
 } else if(playerOptions3 == 2){
     console.log(`Sweet sweet FREEDOM!!!! You've unlocked the door and can now begin your search for civilization....Good Luck ${playerName}`);
     doorOpen = true
}else if (playerOptions3 == 3){
    console.log(`Welp ${playerName} looks like your luck has run out. You've been welcomed by a pack of you guest it, more ferile dogs...Bon Appitite.....GAMEOVER`);
    playerAlive = false;
}
 };