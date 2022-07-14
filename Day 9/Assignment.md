# Assignment

## Theory

### 1. What is NodeJS?
>Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.
it is designed to build scalable network applications.

### 2. What is V8 Engine?
>V8 is Google's open-source high performance JavaScript and WebAssembly engine, written in C++. It is used in Chrome and in Node.js, among others. It implements ECMAScript and WebAssembly and runs on Windows 7 or later, macOS 10.12+ and Linux systems that use x64, ARM or MIPS processors. V8 can run standalone and can also be embedded into other C++ applications.

### 3. What is Event Loop in NodeJS?
>Event loop is an endless loop, which waits for tasks, executes them and then sleeps until it receives more tasks. The event loop allows Node.js to perform non-blocking I/O operations despite the fact that JavaScript is single-threaded.

```js
console.log("This is the first statement");

setTimeout(function(){
    console.log("This is the second statement");
}, 1000);

console.log("This is the third statement");
```

### 4. What is the use of tsconfig.json file?
>The tsconfig.json file helps in creating and defining custom configurations for a specific project or for all working directories in typescript. Using it, you can specify the location to save your compiled typescript code.

### 5. What are the modules provided by the fs module?
>The fs module allows user to interact with the file system.  
The fs module provides a lot of functionality for interacting with the file system. Some of the more common functions are:
- writeFile()
- writeFileSync()
- fs.access()
- fs.appendFile()

### 6. What is API?
>API stands for Application Programming Interface. API is a software intermediary that allows two applications to talk to each other. It can be thought of as a contract of service between two applications. This contract defines how the two communicate with each other using requests and responses.

### 7. What is JSON format?
>JSON stands for JavaScript Object Notation. JSON is a lightweight format for storing and transporting data. It is often used when data is sent from a server to a web page. It is "self-describing" and easy to understand. For Example:
```json
{
"employees":[
    {"firstName":"John", "lastName":"Doe"},
    {"firstName":"Anna", "lastName":"Smith"},
    {"firstName":"Peter", "lastName":"Jones"},
]
}
```

### 8. Why we use JSON format for API?
>JSON allowed APIs to represent structured data in a way that simply was a better fit for the conceptual universe that most developers live in.Also Data binding and Data serialization were difficult when using XML-based API.
- it reduces both the number of requests and the amount of data transmitted between clients and servers.
- It also controls which HTTP methods should be used, what HTTP response codes should be returned under specific request, the format of the response body, and the link between resources.

### 9. What is a Framework?
>Frameworks are software that are developed and used by developers to build applications.Software frameworks make life easier for developers by allowing them to take control of the entire software development process, or most of it, from a single platform.


### 10. How an HTTP Communication works?
>HTTP gives users a way to interact with web resources such as HTML files by transmitting hypertext messages between clients and servers. HTTP clients generally use Transmission Control Protocol (TCP) connections to communicate with servers.

  - HTTP utilizes specific request methods in order to perform various tasks. All HTTP servers use the GET and HEAD methods.
  - GET requests a specific resource in its entirety
  - HEAD requests a specific resource without the body content
  - POST adds content, messages, or data to a new page under an existing web resource
  - PUT directly modifies an existing web resource or creates a new URI if need be
  - DELETE gets rid of a specified resource
  - TRACE shows users any changes or additions made to a web resource
  - OPTIONS shows users which HTTP methods are available for a specific URL
  - CONNECT converts the request connection to a transparent TCP/IP tunnel
  - PATCH partially modifies a web resource



### 11. What is Middleware in ExpressJS.
>Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application.
