export default function Sound() {
  const bgForestAudio = new Audio('/audios/forest.mp3')
  const bgRainAudio = new Audio('/audios/rain.mp3')
  const bgCoffeeShopAudio = new Audio('/audios/coffeeShop.mp3')
  const bgFireplaceAudio = new Audio('/audios/fireplace.mp3')

  const buttonPressAudio = new Audio(
    'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true'
  )

  const kitchenTimer = new Audio(
    'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true'
  )

  bgForestAudio.loop = true
  bgRainAudio.loop = true
  bgCoffeeShopAudio.loop = true
  bgFireplaceAudio.loop = true

  function pressButton() {
    buttonPressAudio.play()
  }

  function timeEnd() {
    kitchenTimer.play()
  }

  return {
    bgForestAudio,
    bgRainAudio,
    bgCoffeeShopAudio,
    bgFireplaceAudio,
    pressButton,
    timeEnd
  }
}
