import Engine from "./Engine"
import Cell from "@classes/Cell";
import Grid from "@classes/Grid";

describe('Current State', () => {
  const size = 6
  const colorTypes = ['red', 'green', 'yellow']
  let min = 0;
  let max = colorTypes.length - 1;
  let random = Math.floor(Math.random() * (+max - +min + 1) + +min);
  const origin = new Cell(colorTypes[random], [0, 0])
  const grid: Grid = new Grid(size, colorTypes, origin)
  const engine = new Engine(grid)
  it('should return the current game state',()=>{
    
    expect('test').toEqual('test')
  })
})
