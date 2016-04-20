// Find the winner of an epic Parenthesis battle
// that determines the fate of your code --
// will it work or give an error?!
function battleForCode(parensArr){
  // implement stack with array
  var stack = [];

  // iterate through parensArr
  for (var i=0; i < parensArr.length; i++){
    // push left "("s into stack to wait for matches
    if (parensArr[i] === '('){
      stack.push(parensArr[i]);
    }
    // when a ")" is found...
    else if (parensArr[i] === ')'){
      // if it has a match waiting, pop it out!
      if (stack.length > 0){
        stack.pop();
      }
      // otherwise, we've found a ")" who will never get a hug :(
      else {
        console.log('  unmatched ")"   :(');
        return ')'
      }
    }
  }
  // if we've made it through for loop, we didn't find an unmatched ")"
  // check if there were spare "("s waiting in the stack for a hug
  if (stack.length > 0){
    console.log('  unmatched "("    :(');
    return('(');
  }

  // if we didn't find any unmatched parentheses by now, the code will work!
  return 'tie';
}

sampleRuns = [
    { input: ["(", ")"], expected: 'tie' },     // valid code
    { input: [")", "("], expected: ')' },       // invalid code, ) wins
    { input: ["(", "(", ")"], expected:  '(' },
    { input: ["(", ")", ")"], expected: ')' }
];

sampleRuns.forEach(function(run){
  console.log('Battle! ', run.input);
  var actual = battleForCode(run.input);
  console.log('  expected:', run.expected);
  console.log('  actual:', actual);
  if (actual === run.expected){
    console.log('  Yay!');
  } else {
    console.log('  not working yet');
  }
});
