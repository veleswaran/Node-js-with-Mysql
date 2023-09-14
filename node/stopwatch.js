var startTime;
var intervalId;

function startStopwatch() {
  startTime = Date.now();
  intervalId = setInterval(updateStopwatch, 1000); // Update every 100 milliseconds
}

function updateStopwatch() {
  var elapsedTime = Date.now() - startTime;

  var seconds = Math.floor((elapsedTime / 1000) % 60);
  var minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
 

  var stopwatchDisplay = minutes + ":" + seconds ;
  console.log(stopwatchDisplay);
}

function stopStopwatch() {
  clearInterval(intervalId);
}

// Example usage:
startStopwatch(); // Start the stopwatch
setTimeout(stopStopwatch, 5000000); // Stop the stopwatch after 5 seconds (5000 milliseconds)
