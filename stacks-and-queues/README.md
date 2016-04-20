#Data Structures: Stacks and Queues

Stacks and queues are two commonly used data structures.

##Stacks

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Data_stack.svg/2000px-Data_stack.svg.png" width="400px" alt="stack image with push and pop">

Stacks as a data structure are a lot like stacks as a physical structure. Think of stacks of dishes or books. We can remove an item from the top of the stack (by `pop`ing), or add an item to the top of the stack (by `push`ing it). While we may be able to Jenga stacks of real world objects, the data structure only allows us to manipulate the top item of the stack.  The `push` and `pop` operations for a stack are both O(1) - constant time. Some stack implementations also allow us to `peek` at the value of the top item without actually `pop`ing it off of the stack.

Stacks are "Last In, First Out" -- the last item pushed on top of a stack will be the first thing popped off of the stack.  

<img src="http://stratton.d11.org/PublishingImages/kid%20with%20pancakes.gif" alt="child defending stack of pancakes using fork and knife" width="400px">

*Little Jim dares you to try and `pop` from his stack of pancakes.*

### Thinking with Stacks

1. Draw a stack after each of the following operations:

  * PUSH 0
  * POP
  * PUSH 2
  * PUSH 4
  * PUSH 6
  * POP
  * PUSH 8

  <details><summary>click for answer</summary>
    * `start     []`
    * `PUSH 0    [0]`
    * `POP       []`
    * `PUSH 2    [2]`
    * `PUSH 4    [2, 4]`
    * `PUSH 6    [2, 4, 6]`
    * `POP       [2, 4]`
    * `PUSH 8    [2, 4, 8]`
  </details>

1. Stacks and queues are often implemented with linked lists. Think about how you'd use a linked list to make a stack.  Where will you put the "top" of the stack? How would you add something to the top the stack? How would you take something off?

1. It's also pretty natural to use arrays for them given the built-in methods we have access to.  So, let's think of arrays.  Where will you put the "top" of the stack? How would you add something to the top the stack? How would you take something off?


##Queues


<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Data_Queue.svg/2000px-Data_Queue.svg.png" width="400px" alt="queue image with enqueue and dequeue">


Queues as a data structure are a lot like queues as a physical structure. This makes more sense with British English, where *queue* means "a line" or "to line up". Think of an orderly line of people waiting to do something. We can remove an item from the front of the queue when its turn comes (by `pop`ing, also known as `dequeue`ing), or add an item to the back of the queue when it joins the line (by `push`ing or `enqueue`ing it). Again, while we may be able to "cut" in line in the real world, the queue data structure only allows us to add to the end of the stack or remove from the beginning.  The `enqueue` and `dequeue` operations for a queue are both O(1) - constant time.  Like with stacks, some implementations of queues also allow us to `peek` at the value of the first item without `dequeue`ing it.

Queues are "First In, First Out" -- the first item enqueued will be the first to move all the way through the line and get dequeued.

<img src="http://www.rioleo.org/images/static/queuesafety.jpg" alt="stick figure demon eats person cutting in line -- from popcoaster.com" width="400px">

### Thinking with Queues

1.  Draw a queue after each of the following operations:

  * ENQUEUE 0
  * DEQUEUE
  * ENQUEUE 2
  * ENQUEUE 4
  * ENQUEUE 6
  * DEQUEUE
  * ENQUEUE 8

  <details><summary>click for answer...</summary>
    * `start      []`
    * `ENQUEUE 0  [0]`
    * `DEQUEUE    []`
    * `ENQUEUE 2  [2]`
    * `ENQUEUE 4  [2, 4]`
    * `ENQUEUE 6  [2, 4, 6]`
    * `DEQUEUE    [4, 6]`
    * `ENQUEUE 8  [4, 6, 8]`
  </details>


1. How would you implement a queue with a linked list? Where would you decide the front of the queue would be? How would you `enqueue` something to the end of the queue? How would you `dequeue` something from the front of the queue?

1. How would you implement a queue with an array? Where would you decide the front of the queue would be? How would you `enqueue` something to the end of the queue? How would you `dequeue` something from the front of the queue?



## Challenges: Design Decisions

Would you use a stack or a queue to...

1. ... print out a list of instructions that must be done in order?

1. ... allow a user to undo changes to a document, one by one?

1. ... let users create playlists and play back the songs?

1. ... display *only* the 10 most recent messages a user posted, in the order they were posted?


## Stretch Challenges

#### Stacks

1. Try out [this stack challenge](stacks-challenge.md), an epic battle for correct code!

2. **The Call Stack**

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

#### Queues

1. Try out [this queue challenge](queues-challenge.md) to calculate the total price of a purchase. 

2. **Message Queues**

Queues are often used to create "buffers" that temporarily store data from one part of a program until another part of a program can process the data. This is common with asynchronous data transfer, or mismatches between how often data is sent and how often it can be processed.

We'll think of a scenario where restaurant diners order food faster than the chefs can cook it.  

Describe how you would use a queue help the chef keep track of meals to make.  What should the chef do when the queue is empty?
