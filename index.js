// Code your solutions in this file
function printBadges(arr){
  for (let i = 0; i < arr.length; i++) {
       console.log(`Welcome ${arr[i]}! You are employee #${[i+1]}.`);
   }

   return arr;
}

function tailsNeverFails(){
  
    return Math.random() >= 0.5;
}
 
while (tailsNeverFails()) {
    console.log(`You got ${tailsNeverFails().count} in a row`);

}