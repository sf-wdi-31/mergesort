// SETUP
var q = [
  { name: 'banana',  price: .29 },
  { name: 'smoothie', price: 4.00 },
  { name: 'car', price: 10000 }
];


function calculateTotal(itemQueue){
  var total = 0;
  var count = 1;
  var firstItem = itemQueue.shift();
  while (firstItem !== undefined){
    if (count % 15 === 0){
      total += firstItem.price * 0.7;
    } else if (count % 5 === 0){
      total += firstItem.price * 0.8;
    } else if (count % 3 === 0){
      total += firstItem.price * 0.9;
    } else {
      total += firstItem.price;
    }
    count++;
    firstItem = itemQueue.shift();
  }
  return total;
}


console.log('calculating total for\n', q);
console.log('total is', calculateTotal(q));


// // QUEUE data structure version 

// function Queue(){}
// // steal a few array methods
// Queue.prototype.enqueue = Array.prototype.push;
// Queue.prototype.dequeue = Array.prototype.shift;
//
// var q = new Queue();
// q.enqueue({ name: 'banana',  price: .29 });
// q.enqueue({ name: 'smoothie', price: 4.00 });
// q.enqueue({ name: 'car', price: 10000 });
//
//
// function calculateTotal(itemQueue){
//   var total = 0;
//   var count = 1;
//   var firstItem = itemQueue.dequeue();
//   while (firstItem !== undefined){
//     if (count % 15 === 0){
//       total += firstItem.price * 0.7;
//     } else if (count % 5 === 0){
//       total += firstItem.price * 0.8;
//     } else if (count % 3 === 0){
//       total += firstItem.price * 0.9;
//     } else {
//       total += firstItem.price;
//     }
//     count++;
//     firstItem = itemQueue.dequeue();
//   }
//   return total;
// }
//
//
//
// console.log('calculating total for\n', q);
// console.log('total is', calculateTotal(q));
