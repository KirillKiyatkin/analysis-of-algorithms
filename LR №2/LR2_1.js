
data = [18, 15, 5, 6, 2, 18, 11, 16, 6, 18, 17, 4, 14, 18, 0]
data.pop();
const len = data.length

class Node {
    constructor(data) {
        this.data = data;
        this.quantity = 1;
        this.frequency = 1;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }
    insert(data) {
        let newNode = new Node(data);
        newNode.frequency = +(newNode.quantity / len).toFixed(4);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode); // helper method below
        }
    }
    insertNode(node, newNode) {
        if (newNode.data < node.data) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null || node.data === newNode.data) {
                if(node.data === newNode.data){
                    node.quantity++
                    newNode = null;
                }
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
        node.frequency = +(node.quantity / len).toFixed(4);
    }

    inOrderTraverse(node, callback) {
        if (node != null) {
            this.inOrderTraverse(node.left, callback);
            callback(node.data, node.frequency);
            this.inOrderTraverse(node.right, callback);
        }
    }

    output(data, frequency){
        (data < 10)?console.log(` ${data} | ${frequency}`):console.log(`${data} | ${frequency}`)
    }
}

const BST = new BinaryTree();

 data.forEach((element) => {
     BST.insert(element)
 })

BST.inOrderTraverse(BST.root, BST.output)

console.log(BST)
