const { SHA256 } = require("crypto-js");

const data1 = "Blockchain Rock!";
const dataObject = {
  id: 1,
  body: "With Object Works too",
  time: new Date().getTime().toString().slice(0, -3),
};



function generateHash(obj) {
  var objToString = JSON.stringify(obj);
  return SHA256(objToString);
}

console.log(`SHA256 Hash: ${generateHash(data1)}`);
console.log("***********************************");
console.log(`SHA256 Hash: ${generateHash(dataObject)}`);
console.log("***********************************");
