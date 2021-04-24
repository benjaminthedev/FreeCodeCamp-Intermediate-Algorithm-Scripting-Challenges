function sumFibs(num) {
//Create a variable to keep record of the current and previous numbers 
  let a = 0;
  let b = 1;
  //along with the result that will be returned
  let result = 0;
//Use a while loop to make sure we do not go over the number given as parameter.
  while (b <= num) {
    //We use the modulo operand to check if the current number is odd or even. 
    if (b % 2 !== 0) {
    //If it is odd, add it to the result.
      result += b;
    }
    //Complete the Fibonacci circle by rotating getting the next number and swapping values after.
    b += a;
    a = b - a;
  }
    //Return the result.
  return result;
}

// test here
sumFibs(4);







