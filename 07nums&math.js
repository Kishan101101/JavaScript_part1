const score=400

//strictly define datatype
const balance=new Number(100.3456)
console.log(balance)
// console.log(typeof(Number));  it is function
 
console.log(balance.toString().length)

console.log(balance.toFixed(2));
console.log(balance.toPrecision(3));
const hundresds=100000000000
console.log(hundresds.toLocaleString('en-IN'))



//++++++++++++++++Maths+++++++++
console.log(Math);

console.log(Math.pow(2,5));
console.log(Math.abs(-5));
console.log(Math.sqrt(64));
console.log(Math.round(2.5));
console.log(Math.min(7,3));
console.log(Math.max(3,4,1,9,23));



//random function it's value always comes between 0,1
console.log(Math.random());
console.log((Math.random()*10) +1);
console.log((Math.random()*10) +1);


const min = 10
const max = 20
console.log(Math.floor( Math.random()*(max -min +1)) + min)
console.log(Math.floor( Math.random()*(max -min +1)) + min)
console.log(Math.floor( Math.random()*(max -min +1)) + min)
console.log(Math.floor( Math.random()*(max -min +1)) + min)
console.log(Math.floor( Math.random()*(max -min +1)) + min)

