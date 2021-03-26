import store from '@store/index'

import { clearCanvas } from '@core/ClearCanvas'
import Person from '@core/Person'

const canvas = document.querySelector('.custom-canvas') as HTMLCanvasElement
canvas.width = window.innerWidth
canvas.height = window.innerHeight

const context = canvas.getContext('2d')

store.setContext(context)

function gameLoop() {
  clearCanvas(220, 220, 220)

  new Person(
    {
      x: 100,
      y: 200
    },
    30,
    [255, 0, 0]
  )

  new Person(
    {
      x: 400,
      y: 200
    },
    30,
    [0, 255, 0]
  )

  window.requestAnimationFrame(gameLoop)
}

window.requestAnimationFrame(gameLoop)
