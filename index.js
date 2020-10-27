/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(time){

  const tHour = parseInt(time.split(':')[0])

  if (tHour < 12) {
    return "Good Morning"
  } else if (tHour > 12 && tHour < 17){
    return "Good Afternoon"
  } else {
    return 'Good Evening'
  }
}

/* Write your implementation of displayMessage() */
const greeting = document.getElementById('greeting')

function displayMessage(string){
  greeting.innerText = string
}