# Assignment 1
## Theory:

### 1. What is **JavaScript**?
> Javascript is a text based computer programming language. It is used for both client and server side that allows you to make the web pages easily. JS offers some frameworks to work on which are used world wide majorly.

### 2. What is the difference between b/w **let** and **var**?
> `Var` is used to declare a variable *globally* and `Let` is used to declare a variable *locally* (block-scoped).

### 3. Why do we prefer **const** over **var**?
> When we use `const` the value is fixed and it can't be changed further (it can neither be updated nor re-assigned) but when we use `var` we can change/reassign the value anytime we want (within the scope).

### 4. What is the use of javascript in **web browsers**?
> It is used to create `dynamic` and `interactive` user experience.

### 5. What are **Objects**?
> Objects in javascript are like `containers` which has some *properties* and methods.  
Those properties are in the form of `key:value` form.  
Example:

    const person = {
      name:"Aditya",
      age:"19",
      address:"Jaipur"
    };


### 6. What is an array and how is it **different** from an **Object in Javascript**?
> Array is a single variable used to store different or same kind of elements.  
>>We access an element from array using `index` but in case of object we use `key`.

### 7. What is a **function**?
> A function is a block of code generally used for reducing particular lines of code which is used multiple times.  
It looks like this:  

    function add(a, b) {
      return a+b;
    }

### 8. How can we implement **call by value** and **call by reference** in Javascript?
> Call by reference means passing value in a function by the actual values (which means the values that are stored on original address, no clones) and call by value means passing the values in the function through some clone of the original value. (By original value I mean the value that are stored on their address).

### 9. What are the **primitive data types** in Javascript?
> According to MDN there are 7 primitive data types in javascript: number, boolean, string, null, undefined, symbol and bigint.

### 10. What is **DOM**?
> DOM stands for Document Object Model. It is a programming interface that allows us to create, change, or remove elements from the document (basically it allows us to change basic HTMl through JS without actually changing HTML).

### 11. Why do we **need DOM**?
> It’s absolutely impossible for you to extract the entire HTML of the page, modify the HTML then replace the entire page. But with DOM you can change the entire page directly moreover very easily.


## Programs:

### 1. Average of array nums in Javascript?
```js
    function avg(array) {

        var total = 0;
        var count = 0;

        array.forEach(function(num, index) {
            total += num;
            count++;
        });

        return total / count;
    }

    arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    console.log(avg(arr));
```

### 2. Swap two numbers by reference?
```js
    //let a = prompt('Enter the first variable: ');
    let a = 5;
    //let b = prompt('Enter the second variable: ');
    let b = 6;

    let temp;

    temp = a;
    a = b;
    b = temp;

    console.log(`The value of a after swapping: ${a}`);
    console.log(`The value of b after swapping: ${b}`);  
```

### 3. Print the fibonacci sequence?
```js
    //const num = parseInt(prompt('Enter the number of terms: '));
    let n1 = 0, n2 = 1, nextTerm;

    for (let i = 1; i <= num; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
    }
```

### 4. Sort an array by both ascending and descending order?
- Ascending order :
```js
    const num = [1,2,3,4,5,546,343,6,5,324,657,234,989];  
    num.sort(function(a, b){
      return a-b
    });
```

- Descending order :
```js
    const num = [1,2,3,4,5,546,343,6,5,324,657,234,989];  
    num.sort(function(a, b){
      return b-a
    });
```

### 5. Show a variable value in an HTML webpage using DOM?
```js
    let name = "Aditya";
    document.write(name);
```
