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
    var temp = new Node(data, this.head);
    this.head = temp;
  },

  /*
    Method: length
    Traverse the list. Return the amount of Nodes in the list.
  */
 length: function() {
   var current = this.head;
   var i = 0;
   while(current !== null) {
     i++;
     current = current.next;
   }
   return i;
  },


  /*
    Method: exists
    Traverse the list. If a Node with the data passed in exists, then return
    true. If not, return false
  */
  exists: function(data) {
    // start a current node at the head of the list
    var current = this.head;
    // loops through list until current node === null
    while(current !== null){
        // conditional check for data match
        if(data === current.data){
            return true;
        }
        // increment our node
        current = current.next
    }
    return false;
  },

  /*
    Method: each
    Traverse the list. For each Node, call the callback function on that Node.
    Example: callback(current);
  */
  each: function(callback) {
    var current = this.head;
    while(current !== null) {
      callback(current);
      current = current.next;
    }
  },

  /*
    Method: indexOf
    Traverse the list. If a Node with the data passed is found, return an
     index (integer) of that Node's location.
     If there's no Node with the desired data, return -1.
  */
  indexOf: function(data) {
    var current = this.head;
    var i = 0;
    while(current !== null) {
      if (current.data === data) {
        return i;
      } else {
        current = current.next;
        i++;
      }
    }
    return -1;
  },

  /*
    Method: dataFrom
    Traverse the list to the ith position and return the corresponding data.
    If there is no ith position, return undefined.
  */
  dataFrom: function(i) {
    var current = this.head;
    var index = 0;
    while (current !== null){
      if (index === i){
        return current.data;
      }
      index ++;
      current = current.next;
    }
  },

  /*
      Method: insertAt
      Traverse the List.  Find the ith Node in the list and insert a new Node
       after it.  You must preserve the list structure!
  */
  insertAt: function(i, data){
    var previousNode;
    var newNode = new Node (data, null);
    var current = this.head;
    var index = 0;
    if(i > this.length() + 1){
      return "index out of range";
    }
    if(i === 0){
      this.prepend(data);
    }
    while(current !== null){
      if(index === i - 1){
        newNode.next = current.next;
        current.next = newNode;
        if(i === this.length() - 1){
          this.tail = newNode;
        }
        return "inserted";
      }
      index++;
      current = current.next;
    }
  },

  /*
    Method: delete
    Traverse the list, find the node with the corresponding data,
    and remove that node. List must still be fully intact after
    you remove the node!
  */
  delete: function(data) {
    if (this.head.data === data){
      this.head = this.head.next;
      return;
    }
    var previous = null;
    var current = this.head;
    while (current !== null){
      if (current.data === data){
        previous.next = current.next;
        return;
      }
      previous = current;
      current = current.next;
    }
  }
}

// export for testing
module.exports = List;
