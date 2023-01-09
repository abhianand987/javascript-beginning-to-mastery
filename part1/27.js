// array push pop 

// array shift unshift 

let fruits = ["apple", "mango", "grapes"];
console.log(fruits);
//push adds at last 
fruits.push("banana");    
console.log(fruits);
//pop removes last 
let poppedFruit = fruits.pop();
console.log(fruits);
console.log("popped fruits is", poppedFruit);

//unshift adds at first
fruits.unshift("banana");
fruits.unshift("myfruit");
console.log(fruits);

//shift removes first
let removedFruit = fruits.shift();
console.log(fruits);
console.log("removed fruits is ", removedFruit);
