# Stacks and Queues Base Challenges

### Thinking with Stacks

1. Draw a stack after each of the following operations:

  
  ```
  * start     []
  * PUSH 0    [0]
  * POP       []
  * PUSH 2    [2]
  * PUSH 4    [2, 4]
  * PUSH 6    [2, 4, 6]
  * POP       [2, 4]
  * PUSH 8    [2, 4, 8]
  ```
  

1. Stacks and queues are often implemented with linked lists. Think about how you'd use a linked list to make a stack.  Where will you put the "top" of the stack? How would you add something to the top the stack? How would you take something off?
 
 
 > The "top" could be the head of the linked list. You could use `prepend` to `push` something onto the top. You could `delete` the list's head and return it to `pop`.
 

1. It's also pretty natural to use arrays for stacks given the built-in methods we have access to in JavaScript.  So, let's think of arrays.  Where would you put the "top" of the stack? How would you add something to the top the stack? How would you take something off?

 
 > The "top" could be the end of the array, and you could use array methods `push` and `pop`.  Thanks, JavaScript!
 

1. **Stretch:** How would you implement a stack with a fixed-size array?

### Thinking with Queues

1.  Draw a queue after each of the following operations:

  
    ```
    * start        []
    * ENQUEUE 0    [0]
    * DEQUEUE      []
    * ENQUEUE 2    [2]
    * ENQUEUE 4    [2, 4]
    * ENQUEUE 6    [2, 4, 6]
    * DEQUEUE      [4, 6]
    * ENQUEUE 8    [4, 6, 8]
    ```
  



1. How would you implement a queue **with an array**? Where would you decide the front of the queue would be? How would you `enqueue` something to the end of the queue? How would you `dequeue` something from the front of the queue?

 
 > The "front" could be the beginning of the array.  To enqueue, you'd use JavaScript's handy `push` array method. To dequeue, you could use JavaScript's `shift` method, which removes and returns the first element from an array.
 
 

1. How would you implement a queue **with a linked list**? Where would you decide the front of the queue would be? How would you `enqueue` something to the end of the queue? How would you `dequeue` something from the front of the queue?

 
 > You'd need to store the tail.  The "front" could be the head of the linked list. The "back" could be the tail.  You could enqueue by `append`ing to the tail.  You could dequeue by deleting and returning the head node. 
 

1. **Stretch:** How would you implement a queue with a fixed-size array?

###Design Decisions

Would you use a stack or a queue to...

1. ... print out a list of instructions that must be done in order?

1. ... allow a user to undo changes to a document, one by one?

1. ... let users create playlists and play back the songs?

1. ... display *only* the 10 most recent messages a user posted, in the order they were posted?


### Going Deeper with Stacks

1. **The Call Stack**

 
 Write out the full call stack for `factorial(3)` at each step in the function's execution.
 
 
  
    ```
    * start                         []
    * factorial(3) called           [factorial(3)]
    * facotrial(2) called           [factorial(3), factorial(2)]
    * factorial(1) called           [factorial(3), factorial(2), factorial(1)]
    * factorial(1) returned 1       [factorial(3), factorial(2)]
    * factorial(2) returned 2       [factorial(3)]
    * factorial(3) returned 6       []
    ```
  

1. **Stretch:** See [solution for the stack challenge](solutions/parenthesis-battle.js) (matching parentheses).

### Going Longer with Queues

1. **Message Queues**

 Queues are often used to create "buffers" that temporarily store data from one part of a program until another part of a program can process the data. This is common with asynchronous data transfer, or mismatches between how often data is sent and how often it can be processed.
 
 We'll think of a scenario where diners order food faster than the chefs can cook it.  
 
 Describe how you would use a queue help the chef keep track of meals to make.  What should the chef do when the queue is empty?

1. **Stretch:** See [solutions for the queue challenge](solutions/pricing.js) (calculating the total price of a purchase). 
