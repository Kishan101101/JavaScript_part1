const user={
    username:"kishan",
    price:999,

    welcomemessage:function(){
        console.log(`${this.username},welcome to my website`)
    //   console.log(this)
  
    }

}
// user.welcomemessage()
// user.username="nikhil"
// user.welcomemessage()
//console.log(this) //{}not refer anything



// note browser ke andar global object window object hai

// function chai(){
//    let username="kishan"
//   //console.log(this.username)//it does not work in the function it is working only in OBJECt

// }
// chai()

//ARROW FUNCTION DECLARATION AND THIS KEY WORD USES
const chai = () =>{
     let username='kishan'
     console.log(this.username)//not working here referencing null pbject
}
// chai()
const add = (num1,num2) => {
    return num1+num2
}
console.log(add(2,3))

//second method implicit declaration
const add1=(n1,n2) =>  (n1+n2)
console.log(add1(2,3))


//in arrow function declaration if use parathesis then you have not to use return statement but if you us
// curly braces then you have to use return statment


//the case when  you have to return a object through a arrow function


const myfun =() => ({username:"nikhil"})
console.log(myfun())


