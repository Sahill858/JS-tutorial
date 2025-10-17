//basic filter

const myNums = [1,2,3,4,5,6,7,8,9,10]
// const newNums = myNums.filter((num)=>{
//     return num>4 
// })
// console.log(newNums)

const newNums = []

// myNums.forEach((num) => {
//     if (num>4){
//         newNums.push(num)
//     }
// } );
// console.log(newNums)



const books = [
    {title:'Book One', genre: 'Fiction',publish:1981,edition:2004},
    {title:'Book Two', genre: 'Non-Fiction',publish:1985,edition:2008},
    {title:'Book Three', genre: 'History',publish:1986,edition:2007},
    {title:'Book Four', genre: 'Non-Fiction',publish:1987,edition:2010},
    {title:'Book Five', genre: 'Science',publish:1988,edition:2014},
    {title:'Book Six', genre: 'Fiction',publish:1989,edition:2010},
    {title:'Book Seven', genre: 'History',publish:1982,edition:1996},
    {title:'Book Eight', genre: 'Fiction',publish:1980,edition:2003},
    {title:'Book Nine', genre: 'Fiction',publish:2000,edition:2001},
]

let userBooks = books.filter((bk)=>bk.genre === 'History')
console.log(userBooks);

userBooks = books.filter( (bk) => { return bk.publish >=2000})
console.log(userBooks);