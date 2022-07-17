# Assignment 2
## Theory :

### 1. Why do we use functions in JavaScript?
>In JavaScript, a function allows you to define a block of code, give it a name and then execute it as many times as you want. A JavaScript function can be defined using function keyword.
```js
function prod(a,b){
    let v=a*b;
    return v
}
```
### 2. What is Function Invocation?
>The code inside a function is not executed when the function is defined.
The code inside a function is executed when the function is invoked.
```javascript
function multiply(a, b) {
  return a * b;
}
multiply(10, 2);    // Called the function multiply here
```

### 3. Does a function behave like an object in Javascript? Prove it by an example.
>In JavaScript, functions are called function objects because they are objects. Just like objects, functions have properties and methods, they can be stored in a variable or an array, and be passed as arguments to other functions.
```js
function greet() {
    console.log("Greetings!!");
}
console.log(typeof greet);               // => function
console.log(greet instanceof Object);    // => true
```

### 4. What are Events in Javascript?
>JavaScript's interaction with HTML is handled through events that occur when the user or the browser manipulates a page. When the page loads, it is called an event. When the user clicks a button, that click too is an event.

### 5. What is a string?
>A string is a sequence of one or more characters that may consist of letters, numbers, or symbols. Strings in JavaScript are primitive data types and immutable, which means they are unchanging.
```js
let strings1 = "hello";
let strings2 = "world";
```

### 6. What is an array? Is it static or dynamic in Javascript?
>In JavaScript, array is a single variable that is used to store different elements. It is often used when we want to store list of elements and access them by a single variable.
In JavaScript arrays are dynamic in nature.
```js
// Initializing while declaring
var arr = [ "red", "blue", "green", "blue", 1 ,2 ,3];
```

### 7. Difference between Map and Set?
>A Set is a collection dataset that needs to be composed of unique values,where a Map is when you have pairs of associated data when we map the keys to the value in other ways we can access any element from the Map with a unique key (like in an array we can access any element with it's index). Whereas, in a Set, we have to iterate over all the items in the set to extract a particular element.

### 8. Difference between Array and Map?
>The difference between an Array and Map is that Array is the collection of elements that can be of any datatype and can be acceesed using its index whereas a map is collection of key-value pair and can only be accessed using its key only.

### 9. What are array methods? List a few names?
>Array methods are the oprations on array for particular task.
Some methods of an array are map(), filter(), reduce(), sort(), reverse(), etc.


### 10. In how many ways can we traverse through an array in Javascript?
>There are multiple ways one can iterate over an array in Javascript.  
  - Using for loop.
  - Using while loop.
  - using forEach method.
  - Using every method.
  - Using map.

## Programs

### 1 .Reverse an array
```js
const arr = [1,2,3,4,5,6]
console.log(arr.reverse());
```

### 2. Explain the properties of the join array method function via program?
```js
const arr = [1, 2, 3, 4, 5]
console.log(arr.join()) // Output :- 1,2,3,4,5
console.log(arr.join(' - ')) // Output :- 1 - 2 - 3 - 4 - 5
console.log(arr.join(',')) // Output :- 1,2,3,4,5
```

### 3. Show all the values of an array in a html webpage using DOM and forEach method?
```js
const arr = [1, 2, 3, 4, 5]
arr.forEach(item => document.getElementById("arrValues").innerText += item)
```

### 4. Merge to sets in javascript?
```js
const set1 = new Set([1, 2])
console.log(set1)
const set2 = new Set(["Hello", "Everybody"])
console.log(set2)
const set3 = new Set([...set1, ...set2])
console.log(set3)
```
