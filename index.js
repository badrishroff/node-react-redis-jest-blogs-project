// iam a child, iam going to act as server.
const express = require('express');
const crypto = require('crypto');
const app = express();
const Worker = require('webworker-threads').Worker;

app.get('/', (req, res) => {
  // crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
  //   res.send("hii there");
  // });

  //1. within the worker function, we will not able to access closure scope.
  //the contents in the worker will be stringified and completely thrown into different  -
  //part of computer
  //2. Arrow function will not be used, as the it refers to the closure context.
  //we need the reference of current function.
  const worker = new Worker(function () {
    this.onmessage = function () {
      let counter = 0;
      while (counter < 1e9) {
        counter++;
      }
      postMessage(counter);
    }
  });

  worker.onmessage = function (message) {
    console.log(message.data);
    res.send('' + message.data);
  }

  worker.postMessage();
});

app.get('/fast', (req, res) => {
  res.send("this is fast!!");
});

app.listen(3000);