interface Vector {
  x: number,
  y: number
}

class Person {

  private _position: Vector
  private _size: number
  private _color: Array<number>

  constructor(
    position: Vector,
    size: number,
    color: Array<number>
  ) {
    this._position = position
    this._size = size
    this._color = color
    this.createPerson()
  }

  private createPerson() {
    console.log(`A circle was drawable on position ${this._position.x}, ${this._position.y} with ${this._size} of size and color equals rgb(${this._color})`)
  }

  get position() {
    return this._position
  }

  get size() {
    return this._size
  }

  get color() {
    return this._color
  }

}

export default Person
