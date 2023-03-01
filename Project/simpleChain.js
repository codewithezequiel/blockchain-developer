// Block Class with a constructor for block
const { SHA256 } = require("crypto-js");

class Block {
  constructor(data) {
    this.height = "";
    this.timeStamp = "";
    this.data = data;
    this.previousHash = "0x";
    this.hash = "";
  }
}

class Blockchain {
  constructor() {
    this.chain = [];
    // modification to include a genesis block
    this.addBlock(new Block("First block in the chain - Genesis Block"))
  }
  addBlock(newBlock) {
      // block height
      newBlock.height = this.chain.length;
      // block timeStamp following the UTC format
      newBlock.timeStamp = new Date().getTime().toString().slice(0,-3);
    // referencing hash of previous block
    if (this.chain.length > 0) {
        newBlock.previousHash = this.chain[this.chain.length-1].hash;
    }
    // block hash generated
    newBlock.hash = SHA256(JSON.stringify(newBlock)).toString();
    this.chain.push(newBlock);
  }

  print() {
    console.log(this.chain);
  }
}

let blockchain = new Blockchain();
blockchain.addBlock(new Block("test block"));
blockchain.addBlock(new Block("another block"))
blockchain.print();
