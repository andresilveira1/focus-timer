export default function Events({
  sound,
  controls,
  timer,
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop,
  buttonPlus,
  buttonLess,
  defaultButtonForest,
  defaultButtonRain,
  defaultButtonCoffeeshop,
  defaultButtonFireplace,
  focusButtonForest,
  focusButtonRain,
  focusButtonCoffeeshop,
  focusButtonFireplace
}) {
  buttonPlay.addEventListener('click', function () {
    controls.playTimer()
    timer.countdown()
    sound.pressButton()
  })

  buttonPause.addEventListener('click', function () {
    controls.pauseTimer()
    timer.hold()
    sound.pressButton()
  })

  buttonSet.addEventListener('click', function () {
    sound.pressButton()
    let newMinutes = controls.getMinutes()

    if (!newMinutes) {
      timer.reset()
      return
    }

    timer.updateDisplay(newMinutes, 0)
    timer.updateMinutes(newMinutes)
  })

  buttonStop.addEventListener('click', function () {
    timer.reset()
    controls.reset()
    sound.pressButton()
  })

  buttonPlus.addEventListener('click', function () {
    timer.plusFiveMinutes()
    sound.pressButton()
  })

  buttonLess.addEventListener('click', function () {
    timer.lessFiveMinutes()
    sound.pressButton()
  })

  defaultButtonForest.addEventListener('click', function () {
    controls.removeFocus()
    controls.playForest()
    controls.audioPause()
    sound.bgForestAudio.play()
  })

  focusButtonForest.addEventListener('click', function () {
    controls.pauseForest()
    sound.bgForestAudio.pause()
  })

  defaultButtonRain.addEventListener('click', function () {
    controls.removeFocus()
    controls.playRain()
    controls.audioPause()
    sound.bgRainAudio.play()
  })

  focusButtonRain.addEventListener('click', function () {
    controls.pauseRain()
    sound.bgRainAudio.pause()
  })

  defaultButtonCoffeeshop.addEventListener('click', function () {
    controls.removeFocus()
    controls.playCoffeeshop()
    controls.audioPause()
    sound.bgCoffeeShopAudio.play()
  })

  focusButtonCoffeeshop.addEventListener('click', function () {
    controls.pauseCoffeeshop()
    sound.bgCoffeeShopAudio.pause()
  })

  defaultButtonFireplace.addEventListener('click', function () {
    controls.removeFocus()
    controls.playFireplace()
    controls.audioPause()
    sound.bgFireplaceAudio.play()
  })

  focusButtonFireplace.addEventListener('click', function () {
    controls.pauseFireplace()
    sound.bgFireplaceAudio.pause()
  })
}
