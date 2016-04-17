// a Node object type (constructor)
var Node = function(data, next){
	this.data = data; //|| null;
	this.next = next; //|| null;
}

// a Linked List object type (constructor)
// The linked list should store its `head` and `tail`.
// `head` and `tail` will both be Nodes.
// given a starter value, create a new list,
var LinkedList = function(data){
	this.head = new Node(data, null);
	this.tail = this.head;
}

// l1 = new LinkedList(4)
// l1.head would be  {data: 4, next: null}
// l1.tail would be {data: 4, next: null}

// The linked list object type should also have methods to:

// `append` a new data node to the end of the list,
LinkedList.prototype.append = function(data){
	var newNode = new Node(data, null);
	// tail -> {data:7 , next:null}
	this.tail.next = newNode;
	this.tail = newNode;
}

// `prepend` a new data node to the start of the list,
// find the `size` of the list,
// given one node, `insert` another node into the list after it
// given one node, `delete` the node after it from the list

// Stretch
// Write a method to detect whether a linked list has a cycle in it.
