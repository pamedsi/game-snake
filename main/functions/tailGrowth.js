import { coordinates } from '../assets/indexes.js'
import { bunnyFinder } from './bunnyFinder.js'

export function tailGrowth(game) {
  let { grid } = game
  let tail = game.score
  const bunnyCoordinates = bunnyFinder(grid)
  const bunnyLine = bunnyCoordinates[0]
  const bunnyColumn = bunnyCoordinates[1]

  grid = grid.split('')
  grid[coordinates[bunnyLine][bunnyColumn]] = '⬛'
  grid[coordinates[bunnyLine][bunnyColumn + 1]] = 'B'
  grid = grid.join('')

  return { grid, score, state: game.state }
}
