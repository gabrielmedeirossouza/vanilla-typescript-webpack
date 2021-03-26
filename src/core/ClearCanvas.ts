import store from '@store/index'

class ClearCanvas {

  private _background: string

  clear(r: number, g: number, b: number) {
    const ctx = store.getContext()
    this._background = `rgb(${r},${g},${b})`

    ctx.beginPath()
    ctx.fillStyle = this._background
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight)
    ctx.closePath()
  }

}

export const clearCanvas = new ClearCanvas().clear
