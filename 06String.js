const name="kishan"
const repocount=50;
// console.log(name+repocount+"values");

//interpolation
console.log(`Hello my name is  ${name} and my repo count is ${repocount}`);
const gamename = new String("the wonder of himalaya")
console.log(gamename.length);
console.log(gamename[5]);
console.log(gamename.charAt(5));
console.log(gamename.__proto__);
console.log(gamename.toUpperCase());


console.log(gamename.substring(0,5))//last value not included


 const anotherString=gamename.slice(-8,5)//  not working in my device
 console.log(anotherString)

 const newString="    kishan       ";
 console.log(newString)
 console.log(newString.trim());



 const url ="https://kishan.com/kishan%20yadav"
 console.log(url.replace('%20','--'))
console.log(url.includes('kishan'))

console.log(gamename.split(" "));





