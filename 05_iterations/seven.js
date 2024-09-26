const nums = [1,2,3,4,5,6,7,8,9,10];

const newnums = nums.map((num) => num + 10);
console.log(newnums);

// chaining - multiple operations 

const newnums2 = nums
                .map((num) => num + 10)
                .map((num) => num + 1);
console.log(newnums2);


const newnums3 = nums
                .map((num) => num + 10)
                .map((num) => num + 1)
                .filter((num) => num > 50);
console.log(newnums3);