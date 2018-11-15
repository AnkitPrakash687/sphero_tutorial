Suppose if we want to do a task after completing a different task or if we want to perform tasks one after another and not simultaneously.
 
How it was done in the past?

Callbacks:
```html
setTimeout(function() {
  console.log('This runs after 5 seconds');
}, 5000);
console.log('This runs first');
```
But if we want to do things sequentially that is one after another
```html
doThingOne(function() {
  doThingTwo(function() {
    doThingThree(function() {
      doThingFour(function() {
        // What the hell?
      });
    });
  });
});
```
This is called Callback hell.<br>

Then come Promises:<br>
Promises are a very clever nice way to deal with asynchronous code.<br>
A Promise is an object which represents an asynchronous task that will eventually finish. They look like this when used:<br>

```html
function buyCoffee() {
  return new Promise((resolve, reject) => {
    asyncronouslyGetCoffee(function(coffee) {
      resolve(coffee);
    });
  });
}
```
Promises have some other very interesting properties, which allow them to be chained. Lets say we have other functions that return a Promise. We could do this:
```html
buyCoffee()
  .then(function() {
    return drinkCoffee();
  })
  .then(function() {
    return doWork();
  })
  .then(function() {
    return getTired();
  })
  .then(function() {
    return goToSleep();
  })
  .then(function() {
    return wakeUp();
  });

```


Async functions are functions that return promises.<br>
That’s right. This is the reason I took the time to briefly explain Promises, because to really understand Async/Await you need to know how Promises work.

To keep in mind:
•	Async functions are declared by prepending the word async in their declaration async function doAsyncStuff() { ...code }
•	Your code can be paused waiting for an Async Function with await
•	await returns whatever the async function returns when it is done.
•	await can only be used inside an async function.

```html
// Some random async functions that deal with value
async function thingOne() { ... }
async function thingTwo(value) { ... }
async function thingThree(value) { ... }
```
```html
async function doManyThings() {
  var result = await thingOne();
  var resultTwo = await thingTwo(result);
  var finalResult = await thingThree(resultTwo);
  return finalResult;
}
// Call doManyThings()

```

So, to finish I’d like to show a couple of examples of how async/await roughly translates into Promises

```html
// Async/Await version
async function helloAsync() {
  return "hello";
}
// Promises version
function helloAsync() {
  return new Promise(function (resolve) {
    resolve("hello");
  });
}
```

# References

[Rafael Vidaurre](https://medium.com/@rafaelvidaurre?source=post_header_lockup): Truly understanding Async and Await

