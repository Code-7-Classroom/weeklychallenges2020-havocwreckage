
//medium
var nums = [2, 7, 11, 15, 9];
var target = 9;

for (var i = 0; i<nums.length; i++){
  if(nums[i] == target){
      console.log([i] + " = "+target)
  }
  else{
      console.log()
  }
}
var nums = [2, 7, 11, 15, 9];
var target = 1;

for (var i = 0; i<nums.length; i++){
  if(nums[i] == target){
      console.log([i] + " = "+target)
  }
  else{
    console.log(-1)
  }
}
//hard
var amount = 11;
var coins = [1, 2, 5];
var max = Math.max.apply(null,coins);
function totalAmount(total, num){
  return total + num;
}
function equation(){
  var sumTotal = coins.reduce(totalAmount);
  var result = amount - sumTotal;
  console.log("Output = " + result);
  if (max > result){
  console.log("Explanation: "+ coins[0] + " + " + (coins[1] + result) +
  " + " +coins[2] + " = " + amount);
  }
  else{
    console.log(-1);
  }
}
console.log(coins);
console.log("Amount = " + amount);
equation();
