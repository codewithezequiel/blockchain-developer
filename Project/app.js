const BlockClass = require("./block");

const block = new BlockClass.Block("Test Block");

// Generating the block hash
block.generateHash().then((result) => {
    console.log(`Block Hash: ${result.hash}`);
    console.log(`Block: ${JSON.stringify(result)}`);
}).catch((error) => {console.log(error)});