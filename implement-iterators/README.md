# Interview Prep - Iterators

Today you'll be implementing iterator functions on the whiteboard in groups of three. Since there are three problems, each group member should take a turn "driving" for one problem with the other two as support ("navigators").

**Note:** DO NOT use any built-in iterator functions. You will often be asked in interviews to implement well-known methods like this from scratch as problem-solving exercises.

## Problems

1. Write a function called `myEach` that takes in an array and a callback function. `myEach` should iterate through all elements in the array and call the callback function with these parameters: the current element, the current index, and the array itself. `myEach` should return `undefined`.  See [`forEach`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach).

  <details><summary>click for example...</summary>
  Example Inputs:
  ```js
  var words = ['apple', 'banana', 'cherry'];
  var logAsList = function(element, index, arr){
    console.log(index + '. ' + element);
  }
  ```

  Example Use:
  ```js
  myEach(words, logAsList);
  // console.logs:
    // 1. apple
    // 2. banana
    // 3. cherry
  ```
  </details>

2. Write a function called `myMap` that takes in an array and a callback function. `myMap` should iterate through all elments in the array and call the callback function with these parameters: the current element, the current index, and the array itself. `myMap` should return a new array containing the results of the callback calls. See [`map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map).

  <details><summary>click for example...</summary>
  Example Inputs:
  ```js
  var numbers = [1, 4, 9];
  var timesTwo = function(element, index, arr){
    return element*2;
  }
  ```

  Example Use:
  ```js
  var result = myMap(numbers, timesTwo);
  // result is [2, 8, 18]; numbers is still [1, 4, 9]
  ```
  </details>

3. Write a function called `myFilter` that takes in an array and a callback function. The callback function will have the following parameters: the current element, the current index, and the array itself. The callback function will return `true` or `false`. `myFilter` should return a new array containing all the elements for which the callback function returned `true`. See [`filter`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter).

  <details><summary>click for example...</summary>
  Example Inputs:
  ```js
  var numbers = [1, 4, 9, 16];
  var isEven = function(element, index, arr){
    return element % 2 === 0;
  }
  ```

  Example Use:
  ```js
  var result = myFilter(numbers, isEven);
  // newArr is [4, 16]; numbers is still [1, 4, 9, 16]
  ```
  </details>

## Whiteboarding Strategy

* Use pseudo-code before writing any syntactically correct code on the board.
* Write down inputs that you'll use to test the function, and write what the output should be (you can use the examples above).
* Still on the whiteboard, walk through what your function will do when called on the test input.  
* Only when you have pseudo-code, test input, and expected output should you write syntactially correct code to implement the body of the function.  
* Once you're confident in your syntax, test again. 
