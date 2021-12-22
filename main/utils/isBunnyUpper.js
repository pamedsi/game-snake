import { bunnyFinder } from '../functions/bunnyFinder.js'

export function isBunnyUpper(grid) {
  const bunnyLine = bunnyFinder(grid)[0]

  if (bunnyLine === 0) {
    return true
  } else {
    return false
  }
}
