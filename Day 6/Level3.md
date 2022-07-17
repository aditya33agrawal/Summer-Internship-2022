# Assignment 3

## Theory

### 1. Explain as much as you know about objects in javascript? (A long answer expected).
>JavaScript object is a non-primitive data-type that allows you to store multiple collections of data.Objects can be created using the Object() constructor or the object initializer / literal syntax.<br>
The syntax to declare an object is:
```js
const object_name = {
   key1: value1,
   key2: value2
}
```
Here, an object object_name is defined. Each member of an object is a key: value pair separated by commas and enclosed in curly braces {}.
For example
```javascript
// object creation
const person = {
    name: 'John',
    age: 20
};
console.log(typeof person); // object
```
It can also be defined in onle line as:
```javascript
const person = { name: 'John', age: 20 };
```
Here, name and age are keys, and John and 20 are values respectively.
In JavaScript, "key: value" pairs are called properties. We can access the value of a property by using its key.

### 2. Read the code and  make a “class” based alternative to given vector template.
```js
class Vector {
	constructor () {
		this.x = 0
		this.y = 0
	}
	set setX(x) {
		this.x = x
	}
	set setY(y) {
		this.y = y
	}
	create(x, y) {
		let obj = Object.create(this)
		obj.setX = x
		obj.setY = y
		return obj
	}
}
let vec1 = new Vector()
console.log(vec1.create(1, 2))
// Output:- Vector { x: 1, y: 2 }
```
### 3. Do you think javascript is the language of the future?
Yes, Javascript is the language of the future. The advantage of JavaScript is that it's native to the web, and the web is everywhere. There are lots of frameworks and libraries developed with JavaScript: jQuery, Node, Angular, React, and much more. We will definitely see a lot more JavaScript apps in the near future.

## Programs :

### 1. Write code implementations of arr methods
>let the array be arr=[1,2,3,4,5]
- forEach:-
```javascript
const arr[1,2,3,4,5]
arr.forEach(item=>console.log(item))
//output :-
//1 \n 2 \n 3 \n 4 \n 5
```
 map
```javascript
const arr = [1, 2, 3, 4, 5]
console.log(arr.map(num => num))
// Output :-
//[ 1, 2, 3, 4, 5 ]
```
- filter
```javascript
const arr = [1, 2, 3, 4, 5]
console.log(arr.filter(num => ((num % 2) == 0)))
// Output :-
//[ 2, 4 ]
```
- reduce
```javascript
const arr = [1, 2, 3, 4, 5]
console.log(arr.reduce((prev, inits) => prev+inits, 0))
// Output :-
// 15
```
- includes
```javascript
const arr = [1, 2, 3, 4, 5]
console.log(arr.includes(3))
// Output :-
// true
```
- some
```javascript
const arr = [1, 2, 3, 4, 5]
console.log(arr.some(element => element % 2 === 0))
// Output :-
// true
```
- every
```javascript
const arr = [1, 2, 3, 4, 5]
console.log(arr.filter(num => ((num % 2) == 0)))
// Output :-
// [ 2, 4 ]
```

## 2. Simple Array Implementation

```js
const arr = [1, 2, 3, 4, 5, 6]
console.log(arr)
// Output:-
// [1, 2, 3, 4, 5, 6]
```
## 3. To do list task
```js
let ToDo = []
let Completed = []
//add
function add(title) {
	if(title === "") return -1
    const id = Math.floor(Math.random() * 10)
	const task = {
		id,
		'task': title
	}
	ToDo.push(task)
	return id
}
//remove
function remove(id) {
	let result = false
	ToDo.forEach(item => {
		if(id in item) {
			result = true
			const idx = ToDo.indexOf(item)
			ToDo.splice(idx, idx+1)
		}
	})
	return result
}
//update
function update(id, title) {
	let result = false
	ToDo.forEach(item => {
		if(id in item) {
			result = true
			item.task = title
		}
	})
	return result
}
//markascomplete
function markAsCompleted(id) {
	let result = false
	ToDo.forEach(item => {
		if(id in item) {
			result = true
			const idx = ToDo.indexOf(item)
			const task = ToDo.splice(idx, idx+1)
			Completed.push(task)
		}
	})
	return result
}
```
