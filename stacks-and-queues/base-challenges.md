# Stacks and Queues - Base Challenges

Super stuck? [Solutions available](./solutions/base-solutions.md).

### Thinking with Stacks

1. Draw a stack after each of the following operations:

  * PUSH 0
  * POP
  * PUSH 2
  * PUSH 4
  * PUSH 6
  * POP
  * PUSH 8

1. Stacks and queues are often implemented with linked lists. Think about how you'd use a linked list to make a stack.  Where will you put the "top" of the stack? How would you add something to the top the stack? How would you take something off?


1. It's also pretty natural to use arrays for stacks given the built-in methods we have access to in JavaScript.  So, let's think of arrays.  Where would you put the "top" of the stack? How would you add something to the top the stack? How would you take something off?


1. **Stretch:** How would you implement a stack with a fixed-size array?

### Thinking with Queues

1.  Draw a queue after each of the following operations:

  * ENQUEUE 0
  * DEQUEUE
  * ENQUEUE 2
  * ENQUEUE 4
  * ENQUEUE 6
  * DEQUEUE
  * ENQUEUE 8


1. How would you implement a queue **with an array**? Where would you decide the front of the queue would be? How would you `enqueue` something to the end of the queue? How would you `dequeue` something from the front of the queue?
 

1. How would you implement a queue **with a linked list**? Where would you decide the front of the queue would be? How would you `enqueue` something to the end of the queue? How would you `dequeue` something from the front of the queue?


1. **Stretch:** How would you implement a queue with a fixed-size array?

###Design Decisions

Would you use a stack or a queue to...

1. ... print out a list of instructions that must be done in order?

1. ... allow a user to undo changes to a document, one by one?

1. ... let users create playlists and play back the songs?

1. ... display *only* the 10 most recent messages a user posted, in the order they were posted?


### Going Deeper with Stacks

1. **The Call Stack**

 Most programming languages rely on something called the "call stack," especially for recursion. The call stack keeps track of function calls that are in the process of executing.  When a function is called, it's `push`ed onto the call stack. When the function returns, it's `pop`ed off of the stack.
 
 Here's a recursive `factorial` function:
 
 ```js
 function factorial(num){
   if (num > 1){
     return num * factorial(num-1);
   } else if (num === 1 || num === 0){
     return 1;
   } else {
     console.log("can't do factorial of this number!");
     return undefined;
   }
 }
 
 factorial(3);
 // => 6
 ```
 
 Write out the full call stack for `factorial(3)` at each step in the function's execution.


1. **Stretch:** Try out [this stack challenge](stacks-challenge.md), an epic battle for correct code!

### Going Longer with Queues

1. **Message Queues**

 Queues are often used to create "buffers" that temporarily store data from one part of a program until another part of a program can process the data. This is common with asynchronous data transfer, or mismatches between how often data is sent and how often it can be processed.
 
 We'll think of a scenario where diners order food faster than the chefs can cook it.  
 
 Describe how you would use a queue help the chef keep track of meals to make.  What should the chef do when the queue is empty?

1. **Stretch:** Try out [this queue challenge](queues-challenge.md) to calculate the total price of a purchase. 
