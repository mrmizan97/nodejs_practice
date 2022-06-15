const fs = require("fs");
const testObj = {
  name: "mr user",
  email: "user@gmail.com",
  address: {
    city: "Mirpur, Dhaka",
    country: "Bd",
  },
};
const data=JSON.stringify(testObj)
// write file
// fs.writeFile('test.json',data,(err)=>{
//     if (err)return console.log(err);
//      {
//         console.log('test.json file written.')
//     }
// })
// read file
fs.readFile("test.json",(err,data)=>{
    if (err) {
        console.log(err)
    }
    console.log(JSON.parse(data));
})
