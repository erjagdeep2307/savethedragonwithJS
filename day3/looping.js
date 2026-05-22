/* Here we are going to checkout basic looping constructs in JS which are available 
    like for , do..while and while. Other looping construct like for..of etc. are going to be used in later.
    I want to categorize them in 3 
    
    Traditional and Conditional Loops
        1.for
        2.while
        3.do..while
    Iterative loops
        1.for..in
        2.for..of
    Array Higher Order Methods
        1.forEach
        2.Map
    */
   // prime number between 0 to 10
   function isPrime(num)
   {
      if (num < 2) return false;
      if (num === 2) return true;
      if (num % 2 === 0) return false;
    //   check if number is divisble by any odd number
      for(let i=3; i*i<=num; i+=2)
      {
        if(num%i === 0) return false;
      }
      return true;
   }
   for(let i=2;i<10;i++)
   {
       isPrime(i) ? console.log(i):"";
   }