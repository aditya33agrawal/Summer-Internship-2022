# Assignment 4

## Theory

### 1. What are anonymous functions in JavaScript?
> In JavaScript `Anonymous Function` is a function that does not have any name associated with it. Example :
```js
var greet = function () {
    console.log("Welcome to Wisflux Academy!");
};
```
Notice we didn't used the word 'function' in the beginning as we would do while making functions in general.

### 2. Explain Strict comparison and Abstract comparison in javascript?
> The Strict operator looks like ' == ' while Abstract operator look likes ' === '. Both the operators perform different functions and works differently. The `==` operator will *compare for equality* after doing any necessary type conversions. The `===` operator will not do the conversion, so if two values are not the same type `===` will simply return false ( bascially would just compare the data types if they are equal or not ). Example:
```js
"2" == 2   //true  (checked if the values are same)
"2" === 2  //false (checked if the data types are same)
```

### 3. Difference b/w arrow functions and regular functions?
> Arrow functions is a new feature which is introduced in ES6 which enables us to write `concise` functions in JavaScript. Other than that Regular functions created using function declarations or expressions are ‘constructible’ and ‘callable’.  
Example:  
- Normal function
```js
let x = function(){
    console.log(arguments);
};
new x =(1,2,3);
```  
- Arrow function  
```js
let x = ()=> {
    console.log(arguments);
};
new x(1,2,3);
```

### 4. What is Hoisting in JavaScript?
> Hoisting is a process in Javascript which allows functions to be used safely in the code before they are even declared.

### 5. JavaScript is a garbage collected programming language, explain how?
> JavaScript use a form of automatic memory management known as `garbage collection (GC)`. The purpose of a garbage collector is to **monitor memory allocation** and determine when a block of allocated memory is no longer needed and reclaim it. JavaScript automatically allocates memory when objects are created and frees it when they are not used anymore (garbage collection). It is kind of unpredictable what will be stored and what will be erased by JavaScript.

### 6. Explain Shallow copy vs Deep copy in Javascript?
> First look at the example below:  
- The example below shows `Shallow copy` because the ename of the employee as well as newEmployee is changed. This causes data inconsistency and would cause huge errors later on. We didn't wanted to change the ename of employee but it still changed because of the shallow copy.  
- Unlike the shallow copy, `Deep copy` makes a copy of all the members of the old object, allocates separate memory location for the new object and then assigns the copied members to the new object. In this way, both the objects are independent of each other and in case of any modification to either one the other is not affected.  

```js
var employee = {
	eid: "E102",
	ename: "Jack",
	eaddress: "New York",
	salary: 50000
}

console.log("Employee=> ", employee);
var newEmployee = employee;
console.log("New Employee=> ", newEmployee);

console.log("---------After modification----------");
newEmployee.ename = "Beck";
console.log("Employee=> ", employee);         //prints Beck
console.log("New Employee=> ", newEmployee);  //prints Beck
```
### 7. What is Object.freeze?
> The `Object.freeze()` freezes the objects and prevents it from any further changes. Therefore no modifications would be entertained by the object further.  
Example :  
```js   
const obj = {
  num: 33
};  
Object.freeze(obj);  
```


## Program  
### Write a function that generates a random number between two ranges, -100 to 0 and 800 - 900.

```js
functionradomInTwoRange(min1,max1,min2,max2){
  ----------------
  return number
}
```
