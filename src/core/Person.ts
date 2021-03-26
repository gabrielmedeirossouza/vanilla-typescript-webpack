import store from '@store/index'

interface Vector {
  x: number,
  y: number
}

class Person {

  private _position: Vector
  private _size: number
  private _color: string

  constructor(
    position: Vector,
    size: number,
    color: Array<number>
  ) {
    this._position = position
    this._size = size
    this._color = `rgb(${color})`
    this.createPerson()
  }

  private createPerson() {
    const ctx = store.getContext()

    ctx.beginPath()
    ctx.fillStyle = this._color
    ctx.arc(this._position.x, this._position.y, this._size, 0, 2 * Math.PI, false)
    ctx.fill()
    ctx.closePath()

  }

}

export default Person
