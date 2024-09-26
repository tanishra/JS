// for each

const coding = ["C++", "Java","Python", "Javascript"];

coding.forEach(function (item){
    console.log(i);
})

coding.forEach( (item) => {
    console.log(item)
})

function printMe(item){
    console.log(item);
}

coding.forEach(printMe);

coding.forEach((item,index,arr) => {
    console.log(item,index,arr);
})

const mycoding = [
    {
        langaugeName : "Javascript",
        fileName : 'js'
    },

    {
        languageName : "Java",
        fileName : "java"
    },

    {
        langaugeName: "Python",
        fileName : "py"
    }
]

mycoding.forEach( (item) => {
    console.log(item.langaugeName);
})