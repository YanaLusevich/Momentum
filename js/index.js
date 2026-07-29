const time = document.querySelector('.time'),
      dateElement = document.querySelector('.date')
    

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