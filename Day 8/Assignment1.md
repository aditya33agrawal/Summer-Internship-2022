# Assignment 1

## Theory

### 1. What are the basic data types in TypeScript?
> There are 7 data types in TS: number, string, boolean, null, undefined, void and any.  

### 2. What is Generic data type?
> TypeScript Generics is a tool which provides a way to create reusable components. It creates a component that can work with a variety of data types rather than a single data type. In generics, we need to write a type parameter between the open (<) and close (>) brackets, which makes it strongly typed collections. Generics use a special kind of type variable <T> that denotes types.

### 3. What is type inferring in TS?
> TypeScript infers types of variables when there is no explicit information available in the form of type annotations.  Example :  
```js
  var a = "text"
```
 Since we have not provided any additional information like this is a string, TypeScript infers the type of the variable based on the value assigned to the variable.

### 4. What are the possible ways to define typing for functions?
> There are multiple ways to define typing functions, some of them are:  
- Method Signatures: This is the most straight forward syntax to use.
 ```js
 interface Date {
  toString(): string;
  setTime(time: number): number;
  // ...
}
```
- Function Type Literals: They're typically used in the signature of a higher-order function, that is, a function which accepts functions as parameters or which returns a function.
```js
function greeter(fn: (a: string) => void) {
  fn("Hello, World");
}
function printToConsole(s: string) {
  console.log(s);
}
greeter(printToConsole);
```
- Construct Signatures: TypeScript refers to these as constructors because they usually create a new object. You can write a construct signature by adding the new keyword in front of a call signature:
```js
type SomeConstructor = {
  new (s: string): SomeObject;
};
function fn(ctor: SomeConstructor) {
  return new ctor("hello");
}
```
### 5. How to define Generic type for Classes?
> The generic type parameter is specified in angle brackets after the name of the class. A generic class can have generic fields (member variables) or methods.
```js
class StudentInfo<T, U> {
  private Id: T;
  private Name: U;
  setValue(id: T, mame: U): void {
    this.Id = id;
    this.Name = name;
  }
  display(): void {
    console.log(`Id = ${this.Id}, Name = ${this.Name}`);
  }
}
```

## Program

### Define the types in typescript for the given following JavaScript code.
```js
var todos = [];
function add(name, description) {
  return todos.push({ name: name, description: description, done: false });
}
function remove(index) {
  return todos.splice(index, 1);
}
function list() {
  todos.forEach(function (todo, index) {
    console.log(index + " -" + todo.name);
  });
}
function update(index, name, description) {
  todos[index].name = name;
  todos[index].description = description;
  return todos[index];
}
```

> Solution  

```js
class Entry {
  name: string;
  description: string;
  done: boolean;
}

var todos: Entry[] = [];

function add(name: string, description: string): number {
  return todos.push({
    name: name,
    description: description,
    done: false,
  });
}

function remove(index: number): Entry[] {
  return todos.splice(index, 1);
}

function list(): void {
  todos.forEach(function (todo: Entry, index: number) {
    console.log(index + " - " + todo.name);
  });
}

function update(index: number, name: string, description: string): Entry {
  todos[index].name = name;
  todos[index].description = description;
  return todos[index];
}

console.log(add("Meet a friend", "Go to market"));     
list();       
```
