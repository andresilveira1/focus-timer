export default function Controls({
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
  defaultButtonForest,
  defaultButtonRain,
  defaultButtonCoffeeshop,
  defaultButtonFireplace,
  focusButtonForest,
  focusButtonRain,
  focusButtonCoffeeshop,
  focusButtonFireplace,
  sound
}) {
  function playTimer() {
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
    buttonSet.classList.add('hide')
    buttonStop.classList.remove('hide')
  }

  function pauseTimer() {
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
  }

  function getMinutes() {
    let newMinutes = prompt('Quantos minutos?')

    if (isNaN(newMinutes)) {
      alert('Digite apenas números')
      return
    }

    if (!newMinutes) {
      return false
    }

    return newMinutes
  }

  function removeFocus() {
    focusButtonForest.classList.add('hide')
    defaultButtonForest.classList.remove('hide')

    focusButtonRain.classList.add('hide')
    defaultButtonRain.classList.remove('hide')

    focusButtonCoffeeshop.classList.add('hide')
    defaultButtonCoffeeshop.classList.remove('hide')

    focusButtonFireplace.classList.add('hide')
    defaultButtonFireplace.classList.remove('hide')
  }

  function playForest() {
    defaultButtonForest.classList.add('hide')
    focusButtonForest.classList.remove('hide')
  }

  function playRain() {
    defaultButtonRain.classList.add('hide')
    focusButtonRain.classList.remove('hide')
  }

  function playCoffeeshop() {
    defaultButtonCoffeeshop.classList.add('hide')
    focusButtonCoffeeshop.classList.remove('hide')
  }

  function playFireplace() {
    defaultButtonFireplace.classList.add('hide')
    focusButtonFireplace.classList.remove('hide')
  }

  function pauseForest() {
    focusButtonForest.classList.add('hide')
    defaultButtonForest.classList.remove('hide')
  }

  function pauseRain() {
    focusButtonRain.classList.add('hide')
    defaultButtonRain.classList.remove('hide')
  }

  function pauseCoffeeshop() {
    focusButtonCoffeeshop.classList.add('hide')
    defaultButtonCoffeeshop.classList.remove('hide')
  }

  function pauseFireplace() {
    focusButtonFireplace.classList.add('hide')
    defaultButtonFireplace.classList.remove('hide')
  }

  function audioPause() {
    sound.bgForestAudio.pause()
    sound.bgRainAudio.pause()
    sound.bgCoffeeShopAudio.pause()
    sound.bgFireplaceAudio.pause()
  }

  function reset() {
    buttonPause.classList.add('hide')
    buttonStop.classList.add('hide')
    buttonPlay.classList.remove('hide')
    buttonSet.classList.remove('hide')
  }

  return {
    playTimer,
    pauseTimer,
    getMinutes,
    removeFocus,
    playForest,
    playRain,
    playCoffeeshop,
    playFireplace,
    pauseForest,
    pauseRain,
    pauseCoffeeshop,
    pauseFireplace,
    audioPause,
    reset
  }
}
