/* Switch Statement is simple jumping statement based on the expression result */
let input = 'Mu';

switch(input){
    case "Add":
        console.log(`Addition `);
        break;
    case "Sub":
        console.log(`Subtraction `);
        break;
    case "Multi": // Case Grouping
    case "Mu":
        console.log(`Multiplication `);
        break;
    case "Div":
        console.log(`Dividition `);
        break;
    case "Rem":
        console.log(`Remainder `);
        break;
    default:
        console.log(`Invalid Operation`);
} 