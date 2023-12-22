function addtwonumber(a,b){
    return a+b;
}
const res=addtwonumber(5,6)
// console.log(res)

function loginuser(username){
    if(username)
    return`${username} just logged in`
   else
   {
    console.log("please enter a valid username")
    return;
   }
}
// console.log(loginuser(""))

// if you don't know how many parameters then use this method
//here rest operator and spread operator is same
function calculateCartPrice(...num1){
    return num1
}
// console.log(calculateCartPrice(200,400,500,2000))


const user={
    username: "kishan",
    price:199
}
function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
    
}

// handleobject(user) //first method
handleobject({
    username:"nikhil",
    price:399
})   //second method



//passing arraY AS PARAMETER
const myarray=[2,3,6,8,9]
function handlearray(anyarray){
  console.log(anyarray)
}
handlearray(myarray)



