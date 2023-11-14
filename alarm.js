let errorCount = 0;
let lastNotificationTime = null;
const ONE_MINUTE = 6000;

const logError = (error) => {
  console.log(`${error} -- appendToLogFile ...`);

  const currentTime = new Date().getTime();
  errorCount++;

  if (
    errorCount > 10 &&
    (!lastNotificationTime || currentTime - lastNotificationTime > ONE_MINUTE)
  ) {
    sendEmailNotification("High error rate detected");

    errorCount = 0; // Reset error count and update last notification time
    lastNotificationTime = currentTime;
  }
};

// Function to send email notification
const sendEmailNotification = (message) => {
  console.log(`Send email:: ${message} in the last minute.`);
};

/***********************Testing pseudo code ***********************/
// Here we simulate more than 10 errors within one minute
for (let i = 0; i < 35; i++) {
  logError("Some error!!!");
}

// Here we simulate it for more than one minute
setTimeout(() => {
  // Simulate more errors after one minute
  for (let i = 0; i < 15; i++) {
    logError("Some error!!!");
  }
}, 61000);
