const timer = (deadline) => {
  console.log(deadline);
  const timeHours = document.getElementById("timer-hours")
  const timeMinutes = document.getElementById("timer-minutes")
  const timeSeconds = document.getElementById("timer-seconds")

  const getTimeRemaining = () => {
  let dateStop = new Date(deadline).getTime()
  let dateNow = new Date().getTime()
  let timeRemaining = (dateStop - dateNow) / 1000
  let hours = Math.floor(timeRemaining / 60 / 60)
  let minutes = Math.floor((timeRemaining / 60) % 60)
  let seconds = Math.floor(timeRemaining % 60)

  if (timeRemaining <= 0) {
      hours = "00";
      minutes = "00";
      seconds = "00";
    } else {

      hours = hours < 10 ? "0" + hours : hours;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
    }
    return {
      hours,
      minutes,
      seconds,
      timeRemaining
    }
    
  }
    const updateClock = () => {
      let getTime = getTimeRemaining()
      
  timeHours.textContent = getTime.hours
  timeMinutes.textContent = getTime.minutes
  timeSeconds.textContent = getTime.seconds
      if(getTime.timeRemaining > 0 ) {
        setTimeout (updateClock, 1000)
      }
    }

  updateClock()


  } 




export default timer;
