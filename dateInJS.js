let myDate = new Date()
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())
// console.log(typeof myDate)

let myCreatedDate = new Date("01-14-2025")
console.log(myCreatedDate.toLocaleDateString())

let myTimeStamp = Date.now()
console.log(Math.floor(Date.now()/1000))


let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth()+1)
console.log(newDate.getDate())

newDate.toLocaleDateString('default',{
    weekday: "long"
}
)