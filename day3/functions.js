/* here comes the functions.
    function contains the group of statement that used to perform a specific task. It used to reduce the repition of code to make code clean.
    Outer variables and local variables, a function have local variable that are accessible only inside that function only and it also have global variables which are certinly accessible to function and function can also change there value if applicable.
*/
// Global variable
let message =" Hello Function";

function sendMessage(from="Admin",to="testUser") // accepting parameters , a local copy of parameter is created 
{
    //arguments
    // const sms="this is local"; // local variable
    //  message = "Hello sendMessage"; // This can be changed if not declared as const
    console.log(`hello From ${from} to ${to}`);
}
sendMessage('Json','John'); // information passed here is argument, if not passed parameters recieve undefined by default

/* 22May 2026 */
// A function without return statement return the undefined value.
// find Min value
function min(a,b){
    return (a<b)?a:b;
}
// Power 
function pow(num,pow){
    let reslt = 1;
    for(let i=1;i<=pow;i++)
    {
        reslt *= num;
    }
    return reslt;
} 
console.log(`Which is min from 3,8:${min(9,8)}`)
console.log(`Power of 5 to 3 is: `,pow(5,4));
