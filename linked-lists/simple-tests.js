var SinglyLinkedList = require('./singly-linked-list.js');

/* LinkedList initialization */
var LinkedList = new SinglyLinkedList();
/* We're creating our "base" linkedList */
for (var i=2; i<15; i=i+2){
  LinkedList.append(i);
}


// check insertAtHead method
LinkedList.prepend("Breakfast Burrito");

/* print */
console.log("\nBefore:");
LinkedList.print();
/* Run your functions here */
// Insert functions here to test.
/* Print again to see your results */

// check length method
var length = LinkedList.length();
console.log("  Length: " + length + " (expected 8)");


// check exists method
var foundData = LinkedList.exists(12);
console.log("  Does 12 exist in our list: " + foundData + " (expected true)");


// check indexOf methodd
var indexOfSix = LinkedList.indexOf(6);
console.log("  Index of six: " + indexOfSix + " (expected 3)");


// check insertAt method
LinkedList.insertAt(3, 'Bertha');
console.log("\nInserted Bertha at 3:");
LinkedList.print();

// check delete methodd
LinkedList.delete(10);
console.log("\nDeleted 10:");
LinkedList.print();

// check each method
function accessor(node) {
  console.log("  " + node.data + " has been accessed.")
}
console.log('\nAccessing each node:');
LinkedList.each(accessor);

console.log("\nAfter:");
LinkedList.print();
