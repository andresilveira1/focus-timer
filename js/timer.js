export default function Timer({
  minutesDisplay,
  secondsDisplay,
  controls,
  sound
}) {
  let timerTimeOut
  let minutes = Number(minutesDisplay.textContent)

  function updateDisplay(newMinutes, seconds) {
    newMinutes = newMinutes === undefined ? minutes : newMinutes
    seconds = seconds === undefined ? 0 : seconds
    minutesDisplay.textContent = String(newMinutes).padStart(2, '0')
    secondsDisplay.textContent = String(seconds).padStart(2, '0')
  }

  function reset() {
    updateDisplay(minutes, 0)
    clearTimeout(timerTimeOut)
  }

  function countdown() {
    timerTimeOut = setTimeout(function () {
      let minutes = Number(minutesDisplay.textContent)
      let seconds = Number(secondsDisplay.textContent)

      let isFinished = minutes <= 0 && seconds <= 0
      updateDisplay(minutes, 0)

      if (isFinished) {
        controls.reset()
        updateDisplay()
        sound.timeEnd()
        return
      }

      if (seconds <= 0) {
        seconds = 60
        --minutes
      }

      updateDisplay(minutes, String(seconds - 1))

      countdown()
    }, 1000)
  }

  function updateMinutes(newMinutes) {
    minutes = newMinutes
  }

  function hold() {
    clearTimeout(timerTimeOut)
  }

  function plusFiveMinutes() {
    minutesDisplay.textContent = String(
      Number(minutesDisplay.textContent) + 5
    ).padStart(2, '0')
  }

  function lessFiveMinutes() {
    if (minutesDisplay.textContent >= 5) {
      minutesDisplay.textContent = String(
        Number(minutesDisplay.textContent) - 5
      ).padStart(2, '0')
    }
  }

  return {
    minutesDisplay,
    updateDisplay,
    reset,
    countdown,
    updateMinutes,
    hold,
    plusFiveMinutes,
    lessFiveMinutes
  }
}