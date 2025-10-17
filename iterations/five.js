const coding = ["js","rb","py","java","cpp"]

    coding.forEach( function(val){
        // console.log(val)
    })
    coding.forEach( (item)=>{
        // console.log(item);
    })

    // function printMe(item){
    //     console.log(item)
    // }

    // coding.forEach(item)

    // coding.forEach((item,index,arr)=>{
    //     console.log(item,index,arr)
    // })


    const myCoding =[
        {
            languageName: "javascript",
            languageFileName:"JS"
        },
        {
            languageName: "java",
            languageFileName:"Java"
        },
        {
            languageName: "Python",
            languageFileName:"Py"
        }
    ]

    myCoding.forEach((item)=>{
        console.log(item.languageName);
    })