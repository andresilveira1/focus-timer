import Controls from './controls.js'
import Timer from './timer.js'
import Events from './events.js'
import Sound from './sounds.js'
import {
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop,
  buttonPlus,
  buttonLess,
  minutesDisplay,
  secondsDisplay,
  defaultButtonForest,
  defaultButtonRain,
  defaultButtonCoffeeshop,
  defaultButtonFireplace,
  focusButtonForest,
  focusButtonRain,
  focusButtonCoffeeshop,
  focusButtonFireplace
} from './elements.js'

const sound = Sound()

let controls = Controls({
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
})

let timer = Timer({ minutesDisplay, secondsDisplay, controls, sound })

Events({
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
})
