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
        return node1.value + 10 * sumLists(node1.next, node2, 0);
    } else if (!node1 && node2) {
        return node2.value + 10 * sumLists(node1, node2.next, 0);
    } else {
        let sum = node1.value + node2.value;
        return (sum % 10) + 10 * sumLists(node1.next, node2.next, Math.floor(sum / 10));
    }
}