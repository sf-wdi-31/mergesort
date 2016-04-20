# Interview Prep: Queue's


A queue just preserves the order in which items arrived into it. This helps model real world problems around waiting in your turn or in line.

**Challenge: Write a script to do the following with a queue:**

Scenario: you have a store and you're writing a script to help calculate a quick receipt. The one problem is that every 3rd and 5th item a customer buys is on sale. Every 3rd item is `10%` off and every 5th item is `20%` off, but also, an item that is both a 3rd and 5th item is `30%` off.

Your program should take in a list of items, each of which has a name and a price. It should then calculate the total price for the order.

**Do not use iterators**


Example

```js
var itemQueue = [
  {
    name: 'banana',
    price: .29
  },
  {
    name: 'smoothie',
    price: 4.00
  },
  {
    name: 'car',
    price: 10000
  }
];

var total = calculateTotal(itemQueue);
// total is 9004.29
```

<details><summary>Hint: an array can be a queue -- what array methods would you use for your `enqueue` and `dequeue`, respectively?</summary>If index 0 is the front of your queue, `push` and `shift`.  If the end of the array is the front of your queue, `unshift` and `pop`!</details>
