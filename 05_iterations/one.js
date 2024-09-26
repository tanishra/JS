// for loop

for(let i = 0; i <= 10; i++){
    console.log(i);
}

for(let i = 0;i <= 10; i++){
    if(i == 6){
        console.log("6 is the best number ");
    }
    console.log(i);
}

for(let i = 0;i <= 10;i++){
    console.log(`Outer loop value : ${i}`);
    for(let j = 0;j <= 10;j++){
        // console.log(`Inner loop value : ${j} and outer loop value : ${i}`);
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

const myArray = ["Ironman", "Hulk" , "Captain America", "Thor"];

for(let i = 0;i < myArray.length; i++){
    console.log(myArray[i]);
}


// break and continue

for(let i = 1;i <= 20;i++){
    if(i == 6){
        console.log("Detected 6");
    }
    console.log(`Value of i is ${i}`);
}

for(let i = 1;i<=20;i++){
    if(i == 6){
        console.log("Detected 6");
        continue;
    }
    console.log(`Value of i is ${i}`);
}