**Components II**
_using asynchronous JavaScript and Promises_

[TK Link](https://learn.lambdaschool.com/web2/module/recd6kDKS6eMapSRq#prepare)
[Lecture Notes](https://www.notion.so/Components-II-34ce039f4a2a43659bc3330754850bdd)

- _Asynchroous Code_
  - async code is code that is not run instantly in line
  - the code out be waiting for something to happen (event?) or waiting for data to be returned form a server
  - Example:
    - `setTimeout( () => {console.log('Hello!');}, 1000);` //asynch, waits 1 second to run
    - `console.log('Over here!');` //runs imediately
- There are multiple ways to approach asynchronous code -two are:
  - `async/await` and `Promises`
- _Promises_

  - Promises are a design patern used for handlilng async code in JS
  - Promises are used instead of multiple nested callbacks - avoiding "callback hell"
  - Promisces are not used frequently in frontend development, but it's important to understand how they work adn how to deal with them
  - Promisces are used for requesting data from web servers
  - Two methods used for handling Promises:
    - `.then()`
    - `.catch()`
  - For transfering data from our app and a web server we'll use `Promise Library`
  - From MDN:
    " A Promise is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action’s eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future."
  - A Promise can exist in one of three states:
    - `Pending`
    - `Fulfilled`
    - `Rejected`
  - If the Promise succeeds, it will return the value as a parameter into a callback passed into `.then()`
  - If the Promise fails, the callback passed into the `.catch()` runs, taking an error as an argument

- _HTTP_
  - We'll be requesting data from servers using HTTP and a library called `axios`
  - HTTP - HyperTextTransferProtocol
    - CRUD - Create, Read, Update, Delete
    - HTTP Methods provide a common language to let the server know what we want to perform
    - GET Request - asking the server for information by specifying a URL that points to the desired resource
    - POST Request - used to aske server to create a new resource
    - PUT Request - asking server to chaneg a specific resource
    - Delete Request - asking server to delete data
    - HTTP Status Codes are used to indicate if a request has been successful or not and why
  - axios
    _ axios is a JS library used for sending HTTP requests to servers
    _ axios is not nescessary, but makes it much easier
    _ [axios Documentation](https://github.com/axios/axiosn)
    _ [<script src="https://unpkg.com/axios/dist/axios.min.js"></script>](<script src="https://unpkg.com/axios/dist/axios.min.js"></script>)
   * 
   ````function buttonCreator(buttonTitle){
    let newButton = document.createElement('button');
    newButton.textContent = buttonTitle;
    newButton.classList.add('button');
    
    return newButton;
}

   axios.get('http://fakeserver.com/data')
    .then( response => {
        // Remember response is an object, response.data is an array.
        response.data.forEach( item => {
            let button = buttonCreator(item);
            parent.appendChild(button);
        })
    })
    .catch( error => {
        console.log("Error:", err);
    })
````


