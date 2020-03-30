const readlineSync = require(`readline-sync`);
let warriorsHealth = 20;
let userDead = false
const choices = ["Walk", "Print", "Quit", "Exit"];

const rivalGangsStreet = ["Lords", "Savage Nomads", "Ghetto Brothers", "Savage Spades", "Hawks"];
const rivalGangsSubway = ["Rollers", "Get Fresh Crew", "Harlem Kings", "Sewer Kids", "Whalers"];

const weapons = ["Baseball Bat", "Chains","Gun", "switch blade"];
let weapon = [];
let hitDamage = Math.floor(Math.random(5 - 4) * 12);
let rivalGangsHealth = 20;
let rivalSubway = rivalGangsSubway[Math.floor(Math.random()* rivalGangsSubway.length)];
let checkPoint1 = false;
let checkPoint2 = false;
let checkPoint3 = false;
let checkPoint2A = false;
let checkPoint4 = false
let checkPoint5 = false
let grabWeapon = weapons[Math.floor(Math.random()* weapons.length)];

const playerName = readlineSync.question(`Hey man...you look lost. You're on the wrong side of town. Whats your name?`);

const intro = readlineSync.question(`See ${playerName} I dont know how you got here but you aint safe here. If you don't have any friends here in the Bronx you might not make it out. You and your crew gonna have to boop your way back to Coney Island. \n Press Enter to continue if you got heart sucka!`);


    let proceed = false;
    let gotAway = false;
    let next = false;
     let fight = false;
    const gate = Math.random() * 4;
    
    const choices2 = ["Fight", "Run", "Quit"]
    
    
    const action = readlineSync.keyInSelect(choices, 'What action will you take?')

      if(choices[action] == "Walk" && gate >= 2) {
            console.log(`You've run into ` + rivalSubway + " on the subway platform")
            userDead = false
            fight = true
        }else if(choices[action] == "Walk" && gate <= 1.99999 ){
            console.log(`You've made it to the next subway stop. You've managed to avoid the gangs in the territory....so far.`)
            proceed = true
            checkPoint1 = true
            userDead = false
           gotAway = true
               
        };
           
        
                 while(warriorsHealth > 0 && fight == true && rivalGangsHealth > 0 && userDead == false){
                   const action2 = readlineSync.keyInSelect(choices2, 'Will you run [enter "Run", or will you fight[enter "Fight"]?')
    
                if (choices2[action2] == "Fight" && gate <= 1.99999){
                  hitDamage = Math.floor(Math.random(5 - 4) * 12);
                    console.log(`You were to slow to react ` + rivalSubway + ` got first blood `+ hitDamage)
                   warriorsHealth -= hitDamage 
                   proceed = true
                   checkPoint1 = true
                  }else if(choices2[action2] == "Fight" && gate >= 2){
                    hitDamage = Math.floor(Math.random(5 - 4) * 12);
                      console.log(`You got first blood` + rivalSubway + `wasn't ready for you and got hit with Damage level:` + hitDamage )                   
                      rivalGangsHealth -= hitDamage 
                       proceed = true
                       checkPoint1 = true
                       gotAway = false
                  }else if (choices2[action2] == "Run" && gate <= 1.99999){
                    hitDamage = Math.floor(Math.random(5 - 4) * 12);
                   console.log(`Man your crew is soft. Before you could get to the train ` + rivalSubway + ` jumped you with `+ hitDamage)
                   warriorsHealth -= hitDamage
                   checkPoint1 = true
                   gotAway = false
                      }else if(choices2[action2] == "Run" && gate >= 2){
                      console.log(`You've gotten away...this time...You may not be so lucky next time`)
                        checkPoint1 = true
                        proceed = true
                        rivalGangsHealth = 0
                        userDead = false
                      };
                      
                      while(rivalGangsHealth <=0 && warriorsHealth > 0 && userDead == false && checkPoint1 == true && gotAway == false){
                        const wonFight = readlineSync.question(`You defeated `+ rivalSubway + `. Proceed with your journey [Press Enter]`)
                        checkPoint1 = true
                        proceed = true
                        userDead = false
                        gotAway = true
                    } if(warriorsHealth <=0 && rivalGangsHealth <=0){
                        console.log(`You were defeated by the ` + rivalSubway + ` GAMEOVER!!!!!`)
                        userDead = true
                    } 
                    }; 
        
                    while(warriorsHealth > 0 && proceed == true && checkPoint1 == true && userDead == false && gotAway == true){
                        const checkPointSafe = readlineSync.keyIn(`You and your crew made it to Queens on your long trip home. Look around for anything that may aid in your journey. \n \n 1. Search for weapons \n 2. Keep moving` , {limit: `$<1-2>`})
                 
                             if (checkPointSafe == 1){
                                console.log(`You and your crew found: ` + grabWeapon + `. Enter to continue`)
                               weapon.push(grabWeapon)
                                checkPoint1 = false
                                checkPoint2 = true
                                proceed = true
                                userDead = false
                               }else if(checkPointSafe == 2){
                                   console.log(`No time to  waste searching. You and your crew began making your through Queens.` )
                                   checkPoint1 = false
                                   checkPoint2 = true 
                                   userDead = false 
                                   proceed = true 
                               };
                               
                            };
        
             while(checkPoint2 == true && checkPoint1 == false && warriorsHealth > 0 && userDead == false &&checkPoint2A == false ){

                const action2 = readlineSync.keyInSelect(choices2, 'You made it to your next stop on your way home. You gonna run and hide, or march on and fight your way home? [enter "1"} to keep fighting, or [enter "2"] to run and hide')
         
                     if (choices2[action2] == "Fight" && gate <= 1.99999){
                       hitDamage = Math.floor(Math.random(5 - 4) * 12);
                         console.log(`You ran into the ` + rivalSubway + ` next they got first blood suffering damage level `+ hitDamage)
                        warriorsHealth -= hitDamage 
                        proceed = false
                    
                        userDead = false
                        checkPoint2A = true
                        checkPoint2 = false
                        
                       }else if(choices2[action2] == "Fight" && gate >= 2){
                        
                         hitDamage = Math.floor(Math.random(5 - 4) * 12);
                           console.log(`You ran into ` + rivalSubway + ` but were't ready for you and got hit with Damage level:` + hitDamage )
                           rivalGangsHealth -= hitDamage 
                            proceed = false
                        
                            userDead = false
                            checkPoint2A = true
                            checkPoint2 = false
                       }else if (choices2[action2] == "Run" && gate <= 1.99999){
                      
                         hitDamage = Math.floor(Math.random(5 - 4) * 12);
                        console.log(`Man your crew is soft. Before you could get to the train ` + rivalSubway + ` jumped you with `+ hitDamage)
                        warriorsHealth -= hitDamage
                         proceed = false
                       
                         userDead = false
                         checkPoint2A = true
                         checkPoint2 = false
                        
                           }else if(choices2[action2] == "Run" && gate >= 2){
                           console.log(`You've gotten away...this time...You may not be so lucky next time`)
                           proceed = true
                           checkPoint3= false
                           checkPoint2 = false
                           checkPoint2A = false
                           checkPoint4 = true
                           }
                        };
                           while(checkPoint2 == false && warriorsHealth > 0 && userDead == false && checkPoint2A == true){
                            const action2 = readlineSync.keyInSelect(choices2, 'Will you keep fighting or run? [enter "1"} to keep fighting, or [enter "2"] to run')
                     
                                 if (choices2[action2] == "Fight" && gate <= 1.99999){
                                   hitDamage = Math.floor(Math.random(5 - 4) * 12);
                                     console.log( rivalSubway + ` hit you with Damage Level: `+ hitDamage)
                                    warriorsHealth -= hitDamage 
                                    proceed = false
                                    userDead = false
                                    checkPoint3= true
                                   }else if(choices2[action2] == "Fight" && gate >= 2){
                                     hitDamage = Math.floor(Math.random(5 - 4) * 12);
                                       console.log(`You hit ` + rivalSubway + ` with Damage level:` + hitDamage )
                                       rivalGangsHealth -= hitDamage 
                                        proceed = true
                                        userDead = false
                                        checkPoint3= true
                                   }else if (choices2[action2] == "Run" && gate <= 1.99999){
                                     hitDamage = Math.floor(Math.random(5 - 4) * 12);
                                    console.log(`Man your crew is soft. Before you could get to the away ` + rivalSubway + ` jumped you with `+ hitDamage)
                                    warriorsHealth -= hitDamage
                                     proceed = true
                                     userDead = false
                                     checkPoint3= true
                                     
                                       }else if(choices2[action2] == "Run" && gate >= 2){
                                       console.log(`You've gotten away...this time...You may not be so lucky next time`)
                                       proceed = true
                                       checkPoint4= true
                                       checkPoint3 = false
                    
                                       }
                                    }    
                           
                           while(rivalGangsHealth <=0 && warriorsHealth > 0 && proceed == true && checkPoint3 == true && userDead == false){
                                const wonFight = readlineSync.question(`You defeated `+ rivalSubway + `. Proceed with your journey [Press Enter]`)
                                checkPoint1 = true
                                proceed = true
                                userDead = false
                                gotAway = true
                             if(warriorsHealth <=0 && rivalGangsHealth <=0 && proceed == true && checkPoint3 == true && userDead == false){
                                console.log(`You were defeated by the ` + rivalSubway + ` GAMEOVER!!!!!`)
                                userDead = true
                            } 
                           };
                    
                        

                         while(rivalGangsHealth <=0 && warriorsHealth > 0 && proceed == true && checkPoint3 == false && checkPoint4 == true){
                            
                             const finalBattle = readlineSync.keyInSelect(choices2, 'You surprised us all Warriors. You made it back to Coney Island almost in one piece. But it not over just yet. You have a surprise waiting for you on the shore. [enter "1"} to keep going, or [enter "2"] to quit and find a new home')

                             if (choices2[action2] == "Fight" && gate <= 1.99999){
                                hitDamage = Math.floor(Math.random(5 - 4) * 12);
                                  console.log(`You were to slow to react ` + rivalSubway + ` and got hit with damage level:  `+ hitDamage)
                                 warriorsHealth -= hitDamage 
                                 proceed = false
                                 userDead = false
                                 checkPoint3= true
                                 checkPoint5 = true
                                }else if(choices2[action2] == "Fight" && gate >= 2){
                                  hitDamage = Math.floor(Math.random(5 - 4) * 12);
                                    console.log(`You got first blood` + rivalSubway + `wasn't ready for you and got hit with Damage level:` + hitDamage )
                                    rivalGangsHealth -= hitDamage 
                                     proceed = true
                                     userDead = false
                                     checkPoint3= true
                                     checkPoint5 = true
                                }else if (choices2[action2] == "Run" && gate <= 1.99999){
                                  hitDamage = Math.floor(Math.random(5 - 4) * 12);
                                 console.log(`Man your crew is soft. Before you could get to the away ` + rivalSubway + ` jumped you with `+ hitDamage)
                                 warriorsHealth -= hitDamage
                                  proceed = true
                                  userDead = false
                                  checkPoint3= true
                                  checkPoint5 = true
                                    }else if(choices2[action2] == "Run" && gate >= 2){
                                    console.log(`You've gotten away...this time...You may not be so lucky next time`)
                                    proceed = true
                                    checkPoint5= true
                                    checkPoint3 = false
                 
                                    };
                                
                        
                        while(proceed == true && checkPoint5 == true && userDead == false){

                         if(warriorsHealth > 0 && rivalGangsHealth <= 0){
                             console.log(`You defeated the  `+ rivalSubway + `. After a night of fighting for your life you can finally relax You WIN!!!!!!! `)
                             userDead = true
                         }else if(rivalGangsHealth > 0 && warriorsHealth <= 0){
                             console.log(`You were defeated by `+ rivalSubway + `. GAMEOVER!!!!!!!`)
                             userDead = true
                         }
                     };
                             
                         };
                        
                        