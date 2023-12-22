const myNumbers=[1,2,3,4,5,6,7,8,9,10]
// const newNums=myNumbers.map((num)=> num += 10)


//chainpassing
const newNums=myNumbers
            .map((num)=> num *10)
            .map((num)=>num+1)
            .filter((num)=>num>=40)

console.log(newNums)

const total=myNumbers.reduce((acc,curr)=> acc+curr,0)
console.log(total)