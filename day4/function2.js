/* function expressions this is the way of creating function like variables */



//isPrime(34); //will throw an error because cannot be accessed before the expression where it is created.

//function expression
const isPrime = function(num){
    for(let i=2;i<num;i++)
    {
        if( num % i === 0 )
            return false;
    }
    return true;
}; // This semicolon is recomended because every expression end with semicolon (;) 
for(let i=2;i<20;i++)
{
    if(isPrime(i))
        console.log(i);
}
// A function is a value represening an action which is can be stored in a variable can be copied and passed to other function.

// A callback function is a function that is passed to another function as argument and will be called back if neccessary.
/*
    Function created using declaration can be called above the code where it is declared because of initial algorithem of JS where it keep global functions at top.
    But function expression are only became accessible after reaching the expression where it is created.
 */
// Used before the actual declaration 
if(isArmstrong(158)){
    console.log(`158 Number is armstrong`)
}
else{
    console.log(`Not an armstrong`);
}
// Function Declaration
function isArmstrong(num){
    if((typeof num) != 'number') 
    {
        console.error('num is not a number');
        return false;
    }
    let rem=1,sum=0,initialNum = num;
    let len = num.toString().length;
    while(num>0){
        rem = num % 10;
        num = Math.floor(num / 10);
        sum += rem ** len;
    }
    if (sum === initialNum)
        return true;
    else
        return false; 
}