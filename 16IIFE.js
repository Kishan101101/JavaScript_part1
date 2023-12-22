//IMMEDIATELY INVOKED FUNCTION EXPRESSION
(function myfun()//named IIFE
{
    console.log(`DB connected`);
})();//here semicolon is important because iife does not know when  execution end
( () =>{
    console.log(`DB2 coonected`);
})();//arrow function as iife


//passing parameter in DB
((name) =>{
    console.log(`DB connected two ${name}`)
})("kishan"); 