let counter = 0;

function incrementCounter() {
  counter++;
  try {
    incrementCounter();
  } catch (err) {
    console.log(err, counter);
  }
}

incrementCounter();

// maximum is 8370 