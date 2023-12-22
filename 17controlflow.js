//same as other language
//if
//else
//else if
//switch
const day=5;
switch (day) {
         case 1:
        console.log("Sunday")
        break;
    
        case 2:
        console.log("monday")
        break;
        case 3:
        console.log("tuesday")
        break;
        case 4:
        console.log("wednesday")
        break;
        case 5:
        console.log("thursday")
        break;
        case 6:
        console.log("friday")
        break;
        case 7:
        console.log("saturday")
        break;


    default:
        console.log("Default case match")
        break;
}
//falsy values
// false,0,-0,"",BigInt 0n,null,undefined,NaN

//truthy values
// "0",'false'," ",[],{},function(){}


//nullish collison operator

// first value will be assign when you don't want to take null value

let k=5 ?? 15
console.log(k)

k=null ?? 16 //use when you take data from data base 
console.log(k)

k = null ?? 10 ?? 20

console.log(k)

//terniary operator

const price =100
price <=80 ? console.log("less than 80") : console.log(" grater than 80")

 
 