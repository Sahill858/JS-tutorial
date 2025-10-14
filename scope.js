// const { use } = require("react")

let a = 300
if (true){  //Block Scope
    let a = 10
    const b = 20
    var c = 30
    console.log("Inner: ",a)
}

// Global Scope

console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "Sahil"

    function two(){
        const website = "youtube"
        console.log(username)    
    }
    // console.log(website)
    two()
}

// one()

if (true){
    const username = "Sahil"
    if (username === "Sahil") {
    const website = " youtube"
    console.log(username+website)
    }
    // console.log(website)
}
// console.log(username)

function addone(num){
    return num + 1
}

console.log(addone(5))

const addTwo = function(num) {
    return num + 2
}

console.log(addTwo(5))