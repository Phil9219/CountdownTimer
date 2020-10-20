// export function Countdown() {
export function Countdown(timeLeft) {
  const container = document.createElement("div");

  // container.innerText = "0";
  container.innerText = timeLeft;

  const intervalId = setInterval(() => {
    timeLeft--;
    container.innerText = timeLeft;
    if (timeLeft === 0) {
      clearInterval(intervalId);
    }
  }, 1000);
  return container;
}

//     if (container.innerText === "0") {
//       clearInterval(intervalId);
//     } else {
//       container.innerText = container.innerText - 1;
//     }
//   }, 1000);
//   return container;
// }
