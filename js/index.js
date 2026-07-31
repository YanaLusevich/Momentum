const time = document.querySelector('.time'),
      dateElement = document.querySelector('.date'),
      greeting = document.querySelector('.greeting'),
      nameInput = document.querySelector('.name'),
      body = document.querySelector('body'),
      prev = document.querySelector('.slide-prev'),
      next = document.querySelector('.slide-next')
    

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

function getTimeOfDay() {
    const date = new Date()
    const hour = date.getHours()

    if(hour >= 6 && hour < 12) {
        return 'morning'
    } else if (hour >= 12 && hour < 18) {
        return 'afternoon'
    } else if (hour >= 18 && hour < 24) {
        return 'evening'
    } else {
        return 'night'
    }
    
}

function showGreeting() {
    const greetingText = getTimeOfDay()
    greeting.textContent = `Good ${greetingText}`
    
}
showGreeting()
setInterval(showGreeting, 60000)


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

// Slider

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let currentImage = getRandomInt(1, 20)



function setBg() {
    const timeOfDay = getTimeOfDay()
    const imageNumber = String(currentImage).padStart(2, '0');
    const imagePath = `./assets/img/${timeOfDay}/${imageNumber}.jpg`
    const img = new Image()
    img.src = imagePath

    img.onload = () => {
        body.style.backgroundImage = 
        `url('${imagePath}')`
    }
}
setBg()

function getSlidePrev() {

    prev.addEventListener("click", () => {

        currentImage--

        if(currentImage < 1) {
            currentImage = 20
        }
        setBg()  
    })
}
getSlidePrev()

function getSlideNext() {

    next.addEventListener("click", () => {

        currentImage++

        if(currentImage > 20) {
            currentImage = 1
        }
    setBg()  
    })
}
getSlideNext()