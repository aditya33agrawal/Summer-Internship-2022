# Assignment 1
### Theory

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
> Call by value means passing value in a function by the actual values (which means the values that are stored on original address, no clones) and call by reference means passing the values in the function through some clone of the original value. (By original value I mean the value that are stored on their address).
Example:  
