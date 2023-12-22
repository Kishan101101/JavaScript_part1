// let a=10
// const b=20
// var c=30

let a=300//global scope
if(true){
    let a=10//only in the innere scope
    const b=20
    var c=30
}
// console.log(a)  // a is not define
// console.log(b)  //b is not define
//console.log(c) //but c will be print because it does not follow scope of the variable

function one(){
    const username="kishan"
    function two(){
        const rollno=65
        console.log(username);
    }
    // console.log(rollno)

two()// if you not call it you are not able to access inner items


}
one()//roll no is not define for one because it is in the two

if(true)
{
    const username="kishan"
    if(username=="kishan")
    {
        const brothername="nikhil"
        console.log(username+brothername)
    }
//  console.log(brothername)  parent can't access his child values
}
// console.log(username)//out of scope

//+++++++++++++++++++++++inresting++++++++++++++++++++++
console.log(add(4))
function add(num){
    return num+1
}
//second method for declaring a function

// console.log(add1(4)) it does not work
const add1=function(num){
    return num+2
}

console.log(add1(4)) 



