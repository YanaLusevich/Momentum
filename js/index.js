const time = document.querySelector('.time'),
      dateElement = document.querySelector('.date'),
      greeting = document.querySelector('.greeting'),
      nameInput = document.querySelector('.name')
    

// TIME and DATE

function showTime() {
    const date = new Date()
    time.textContent = date.toLocaleTimeString()
    setTimeout(showTime, 1000)
}
showTime()

function showDate() {
    const date = new Date()
    const options = {
        month: "long",
        day: "numeric",
        weekday: "long",
    }

    dateElement.textContent = date.toLocaleDateString("en-US", options)
    setTimeout(showDate, 1000)
}
showDate()

// Greeting
let greetingText

function timeOfDay() {
    const date = new Date()
    const hour = date.getHours()

    if(hour >= 5 && hour < 12) {
        greetingText = 'morning'
    } else if (hour >= 12 && hour < 17) {
        greetingText = 'afternoon'
    } else if (hour >= 17 && hour < 22) {
        greetingText = 'evening'
    } else if (hour >= 22 && hour < 5) {
        greetingText = 'night'
    }
}

timeOfDay()

function showGreeting() {

        greeting.textContent = `Good ${greetingText}`
        console.log(greetingText)
    
}
showGreeting()

// Local Storage

function setLocalStorage() {
    localStorage.setItem("name", nameInput.value)
}
window.addEventListener("beforeunload", setLocalStorage)

function getLocalStorage() {
    const nameFromLS = localStorage.getItem("name")

    if (nameFromLS !== null) {
        nameInput.value = nameFromLS
    }
}
window.addEventListener("load", getLocalStorage)