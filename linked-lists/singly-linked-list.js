/* Node */
var Node = function(data, next){
  this.data = data || null;
  this.next = next || null;
}


/* Singly Linked List */
function List() {
  this.head = null;
  this.tail = null;
}

/*  List methods */
List.prototype = {

  /*
    Method: append
    Adds a Node to the END of the List
  */
  append: function(data) {
    // if linkedList is empty
    if(this.head === null) {
      // create the head (start) node
      this.head = new Node(data, null);
      // tail (end) also becomes the head node
      this.tail = this.head;

    // else linkedList isn't empty
    } else {
      // give the current tail a new node as its next
      this.tail.next = new Node(data, null);
      // mark the new node as the end of the list
      this.tail = this.tail.next;
    }
  },

  /*
    Method: print
    Traverse the list. For each node, append the current node's data to
    a master list of all data, including head and tail
  */
  print: function() {
    var listString = 'Head -> ';
    // start tracking a 'current' Node, beginning with the head
    var current = this.head;
    // while the 'current' Node isn't null
    while(current !== null) {
      // print out the 'current' Node's data
      listString += current.data + ' -> ';
      // assign our 'current' Node's next to be 'current' (increment!)
      current = current.next;
    }
    console.log(listString +'Tail');
  },

  /*
    Method: prepend
    Insert a new Node at the head of the list.
  */
  prepend: function(data) {
    // YOUR CODE HERE
  },

  /*
    Method: length
    Traverse the list. Return the amount of Nodes in the list.
  */
 length: function() {
    // YOUR CODE HERE
 },


  /*
    Method: exists
    Traverse the list. If a Node with the data passed in exists, then return
    true. If not, return false
  */
  exists: function(data) {
    // YOUR CODE HERE
  },

  /*
    Method: each
    Traverse the list. For each Node, call the callback function on that Node.
    Example: callback(current);
  */
  each: function(callback) {
    // YOUR CODE HERE
  },

  /*
    Method: indexOf
    Traverse the list. If a Node with the data passed is found, return an
     index (integer) of that Node's location.
     If there's no Node with the desired data, return -1.
  */
  indexOf: function(data) {
    // YOUR CODE HERE
  },

  /*
    Method: dataFrom
    Traverse the list to the ith position and return the corresponding data.
    If there is no ith position, return undefined.
  */
  dataFrom: function(i) {
    // YOUR CODE HERE
  },

  /*
      Method: insertAt
      Traverse the List.  Find the ith Node in the list and insert a new Node
       after it.  You must preserve the list structure!
  */
  insertAt: function(i, data){
    // YOUR CODE HERE
  },

  /*
    Method: delete
    Traverse the list, find the node with the corresponding data,
    and remove that node. List must still be fully intact after
    you remove the node!
  */
  delete: function(data) {
    // YOUR CODE HERE
  }
}

// export for testing
module.exports = List;
