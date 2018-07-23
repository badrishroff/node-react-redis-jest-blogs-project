//node myfile.js


const pendingTimers = [];
const pendingOSTasks = [];
const pendingOperations = [];

//new timers, tasks, operations are recorded from myFile running
myFile.runContents();

function shouldContinue() {
  //1. any pending settimeout, setinterval, setimmediate ?

  //2. any pending operating system tasks ? (like server listening to server port)

  //3. any pending long running operations ? (like fs module)

  return pendingTimers.length || pendingOSTasks.length || pendingOperations.length;
}

//entire body executes in one 'tick'
while (shouldContinue()) {
  //1. node looks at pending timers and sees if any functions are ready to be called.


  //2. node looks at pending os taks and peding operations and calls relevant callbacks


  //3. pause execution. Continue when..
  // - a new pending os task is done 
  //-a new pending operation is done
  //- a timer is about to complete.

  //4. look at pending timers. call any setimmediate

  //5. handle any close events
}



//exit back to terminal