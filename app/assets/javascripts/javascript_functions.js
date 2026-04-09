// Test file with common ESLint errors

var x = 10;  // no-var: var is not allowed, use let or const
var y = 20;  // no-var: var is not allowed, use let or const

function testFunction() {
  console.log("Hello World")  // semi: missing semicolon

  if (x == 10) {  // eqeqeq: use === instead of ==
    console.log('x is 10');
  }

  var unused = 'this variable is never used';  // no-unused-vars

  eval('console.log("dangerous")');  // no-eval: eval is dangerous

  // no-undef: using undefined variable
  undefinedVariable = 'test';

  // Trailing whitespace on next line
  var trailing = 'has trailing spaces';

  // no-redeclare: redeclaring variable
  var x = 30;

  // Unreachable code
  return true;
  console.log('This will never run');  // no-unreachable
}

// no-empty: empty block statement
if (x > 5) {
}

// Debugger statement left in code
debugger;  // no-debugger

// no-console: console statements in production
console.log('Debug message');

// Inconsistent quotes
var str1 = "double quotes";
var str2 = 'single quotes';

// no-mixed-spaces-and-tabs
function mixedIndentation() {
	  console.log('mixed tabs and spaces');
}

// no-multiple-empty-lines (multiple empty lines below)



// Irregular whitespace
var irregularSpace = 'test';

// Missing radix parameter
var num = parseInt('10');  // radix: missing radix parameter

// no-throw-literal: throwing literal
throw 'error';

// Unnecessary semicolon
var extra = 'test';;  // no-extra-semi

// no-dupe-keys: duplicate keys in object
var obj = {
  key: 'value1',
  key: 'value2'
};

// no-func-assign: reassigning function
function myFunc() {}
myFunc = 'not a function';

// Comparison with NaN
if (x == NaN) {  // use-isnan: use isNaN() instead
  console.log('is NaN');
}
