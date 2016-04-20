# Interview Prep: Queue's


A queue just preserves the order in which items arrived into it. This helps model real world problems around waiting in your turn or in line. 

**Challenge: Write a script to do the following with a queue:**

Scenario: you have a store and you're writing a script to help calculate a quick receipt. The one problem is that every 3rd and 5th item a customer buys is on sale. Every 3rd item is `10%` off and every 5th item is `20%` off, but also, an item that is both a 3rd and 5th item is `30%` off.

Your program should run in a loop to prompt a cashier for the names of the item and their price, and then if their are anymore items.

Hint 1: use an object to store the `name` and `price` together and put them on the queue.
Hint 2: an array can be a queue if you just use `shift` and `push` as your `enqueue` and `dequeue` respectively.
