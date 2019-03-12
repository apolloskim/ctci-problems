function loopDetection(listNode) {
    // first approach: create a hash. As I traverse the list, first check if a node is already in the hash.
    // if it exists in the hash table, then return that node. If not, store that node in the hash table.
    // O(n) time and O(n) space. 
    // Also, the assumption is that each node is distinguished by its value, which may not necessarily be true.

    let nodeEncounters = {};

    while(listNode) {
        if (nodeEncounters[listNode.value]) {
            return listNode;
        } else {
            nodeEncounters[listNode.value] = true;
        }
        listNode = listNode.next;
    }
    return -1;
}

function loopDetectionOptimized(listNode) {
    // this approach uses two pointers: fastRunner and SlowRunner. 
    // fastRunner takes two steps while slowRunner takes one step.
    // If there is a loop, the fastRunner and slowRunner will eventually collide. 
    // if there is a list of k nodes before the start of a loop, then by the time the slowRunner
    // reaches the beginning of the loop the fastRunner will have already been in the loop. 
    // since fastRunner takes double the steps as slowRunner when slowRunner reaches the beginning of 
    // the loop the fastRunner will have taken k steps inside the loop. 
    // fastRunner is LOOPLENGTH - k steps behind the slowRunner. 
    // since fastRunner takes two steps when slowRunner is taking one, the distance between fastRunner
    // and slowRunner is decreased by one. Therefore, it will take LOOPLENGTH - k times for the fastRunner
    // and slowRunner to collide. Since the slowRunner began at the start of the loop and made
    // LOOPLENGTH - k steps, it is behind the start of the loop by k steps. But k is also the distance
    // between the head of the list and the start of the loop. So, we can assign the fastRunner 
    // (or slowRunner) to point to the head of the list, and have both pointers (one pointing to the head
    // and the other pointing to the collided node) take k steps. 
    // Then, both pointers will be pointing to the same node--namely, the node that is the start of a loop.
    // Returning that node will solve this problem. 

    
}