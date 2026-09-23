const Node = require("./node");

const node1 = new Node(5);
const node2 = new Node(10);
const node3 = new Node(15);
const node4 = new Node(20);
const node5 = new Node(25);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

let current = node1;
let element = 15;
let found = false;

while (current !== null) {
    if (current.value === element) {
        found = true;
        break;
    }

    current = current.next;
}

if (found) {
    console.log("Elemento encontrado");
} else {
    console.log("Elemento no encontrado");
}