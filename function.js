// const { use } = require("react")

function sayMyName (){
    console.log("S")
    console.log("a")
    console.log("h")
    console.log("i")
    console.log("l")
}

// sayMyName()
// function addTwoNumbers(number1,number2){
//     console.log(number1+number2)
// }
function addTwoNumbers(number1,number2){
    return number1+number2
}

const result = addTwoNumbers(8,6)
console.log("Result:",result)



function loginUserMessage(username= "Sam"){
    if (!username){
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("sahil")) 
// console.log(loginUserMessage())

function calculateCartPrice(val1,val2,...num1){
    return num1
}

// console.log(calculateCartPrice(200,400,500,2000))
const user = {
    username : "sahil",
    price: 199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user)

// handleObject({
//         username:"Samy",
//         price:256
//     }
// )

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200,400,855,669]))