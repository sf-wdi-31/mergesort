# Interview Prep: Stacks

## Conceptual Review

Stacks are "last-in, first-out", meaning the last item pushed to the stack will be the first thing popped off. We can use the `.push` method to add an item to the top of the stack and the `.pop` method to remove an item from the top of the stack. Since we'll be implementing our stack with an array, think back to the array methods `push` and `pop`.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Data_stack.svg/2000px-Data_stack.svg.png" width="400px">

## Challenge: Battle of the Parentheses

Image you have a set of opening and closing parentheses, and you want to check if they're closed up properly. **Examples**:

```js
// everything's closed up
(((())))

// right side has one extra ) without an opening (
()(()))

// left side has two extra ( that don't get closed
((()())(()
```

We can use a stack to perform this check! To make it more interesting, let's gamify the problem...

<img src="http://vignette4.wikia.nocookie.net/seuss/images/9/92/Zax_in_prax.jpg/revision/latest?cb=20130206183730">

> The day before today, One day, making tracks<br>
In the prairie of Prax,<br>
Came a North-Going Zax<br>
And a South-Going Zax.<br>
And it happened that both of them came to a place<br>
Where they bumped. There they stood.<br>
Foot to foot. Face to face.<br>

Imagine our parentheses are playing a war game. There is a team of `(` fighters coming from the left side of the field and a team of `)` fighters coming from the right.  But this is a non-violent game. Every time a fighter on the left side of the battle `(` meets a fighter on the right `)` to form a `()`, they make peace, hug it out, and leave the battle. If every fighter gets a hug, the game is a tie (but everyone wins!).

If any of the fighters can't get a hug, they'll be left on the battlefield. The first side with a fighter left on the battlefield wins.

Note that if the fighters accidentally meet up back to back, they can't hug.  So `)(` isn't a tie, even though the _numbers_ of combatants on each side are even.


**Your challenge is to use a stack data-structure (implemented with an array) to find out the result of the battle.**


Examples

| Input | Output |
| :-- | :-- |
| `['(', ')']`  | tie |
| `[')', '(']` | `)` wins |
| `['(', ')', '(']` | `(` wins |
| `['(', ')', ')']` | `)` wins |

### Specs

* Your function should take in an array of "fighters" and return the winning side's string or the string `"tie"`.
* Your method should iterate through the fighters and use a stack to keep track of fighters on the left vs. fighters on the right
* Don't forget to handle cases where you might try to `pop` from an empty stack.
* <details><summary>**Hint:** when to push and pop</summary> fighters on the left should be pushed onto the stack, and when a fighter on the right comes along, you should pop from the stack.</details>
* <details><summary>**Hint:** figuring out who's left standing...</summary> The contents of your stack will tell you who won.<details>

### How to Get Started

Remember our steps for diagramming a problem...

1. Use pseudo-code to diagram the input and output of your method before writing any code.

2. Come up with at least three examples of test input, and write down the expected output. Your input will be an array, but the format of the elements inside is up to you. **Example formats:**
  * Input: `["(", "(", ")", ")", ")"]` => Output: `")"` (winner!)
  * Input: `["L", "L", "R", "R", "R"]` => Output: `"R"` (winner!)

  *No matter what format you choose, make sure you have at least three examples before you start coding!*

3. Once you have pseudo-code and test input with expected output, you can write code to implement the body of the function.
