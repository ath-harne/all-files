const { error } = require("console");
const fs=require("fs");


//<<<<<<<<--writing of a file-->>>>>
const file=fs.writeFileSync("./text.txt","aadi");    //  synchronous  -- we can store it in a variable also
console.log(file);

// fs.writeFile("./text.txt","atharva" ,(error)=>{});      // asynchronous  --- it need to give a call back function




//<<<<<----reading of file------>>>>
// const atharva =fs.readFileSync("./contact.txt" ,"utf-8");
// console.log (atharva );  // synchronous

// fs.readFile("./contact.txt" ,"utf-8" ,  //asynchronous
//     (error,result )=>
//     {
//         if(error)
//         {
//             console.log(error);
//         }

//         else
//         {
//             console.log(result);
//         }
//     }
// );

fs.appendFileSync("text.txt" ,`hello world \n`);