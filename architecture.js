const { error } = require("console");
const fs=require("fs");
console.log("1");
//<<<<<<--non blocking--->>>>>
// fs.readFile("./contact.txt","utf-8",
//     (error,res)=>
//     {
//         console.log(res);
//     }
// );

console.log("2");



//<<<<<--blocking--->>>>
const file =fs.readFileSync("./contact.txt" ,"utf-8")
{
    console.log(file);
}

console.log("atharva");