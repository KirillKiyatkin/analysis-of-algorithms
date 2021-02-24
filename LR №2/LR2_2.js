const fs = require('fs');
const readline = require('readline');

class Node {
    constructor(dataOfOnePerson) {
        this.number = +dataOfOnePerson[0];
        this.name = dataOfOnePerson[1];
        this.rate = dataOfOnePerson[2];
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(dataOfOnePerson) {
        let newNode = new Node(dataOfOnePerson);

        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.number < node.number) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null ) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    searchByNumber(node, num){
        if (node != null){
            if (node.number === num){
                console.log(node.name)
            }else{
                this.searchByNumber(node.left, num);
                this.searchByNumber(node.right, num);
            }
        }
    }
}

async function processLineByLine() {
    const fileStream = fs.createReadStream('data.txt');

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });

    const BST = new BinaryTree();
    const Tarif = {};
    let dataOfOnePerson;
    for await (const line of rl) {
        console.log(line)
        dataOfOnePerson = line.split(', ')
        BST.insert(dataOfOnePerson)
    }
    console.log(BST)
    BST.searchByNumber(BST.root, 869090327)
}
processLineByLine()

