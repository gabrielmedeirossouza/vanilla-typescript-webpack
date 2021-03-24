import Person from '@core/Person'

const position_player1 = {
  x: 200,
  y: 400
}

const size_player1 = 30

const color_player1 = [255, 255, 255]

const player1 = new Person(position_player1, size_player1, color_player1)

console.log(player1.position, player1.size, player1.color)
