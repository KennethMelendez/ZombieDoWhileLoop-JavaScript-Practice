
let zombies = 0;
let totalAmountOfZombies = 64;
let amountOfStepsTaken = 0;
do{
  amountOfStepsTaken++;
  zombies++;
  console.log("OH MY GOD A ZOMBIE!!!!!! wait ..theres.." + zombies + " zombies?!?");
  console.log("*Takes " + amountOfStepsTaken + " steps");

}while(zombies < totalAmountOfZombies);

console.log("I survived!!!!");
