class listNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
} 

function sumLists(node1, node2, extra) {
    if (!node1 && !node2) {
        return 0;
    } else if (node1 && !node2) {
        let newNode = new listNode(node1.value);
        newNode.next = sumLists(node1.next, node2, 0);
        return newNode;
    } else if (!node1 && node2) {
        let newNode = new listNode(node2.value);
        newNode.next = sumLists(node1, node2.next, 0);
        return newNode;
    } else {
        let sum = node1.value + node2.value + extra;
        let newNode = new listNode(sum % 10);
        newNode.next = sumLists(node1.next, node2.next, Math.floor(sum / 10));
        return newNode;
    }
}