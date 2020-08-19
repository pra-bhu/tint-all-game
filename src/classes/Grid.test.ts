import Cell from "./Cell";
import Grid from "./Grid";

describe('Grid construction', () => {
  const size = 6
  const colorTypes = ['red', 'green', 'yellow']
  let min = 0;
  let max = colorTypes.length - 1;
  let random = Math.floor(Math.random() * (+max - +min + 1) + +min);
  const origin = new Cell(colorTypes[random], [0, 0])
  const grid: Grid = new Grid(size, colorTypes, origin)
  it('should create a new Grid', () => {
    // console.log(grid.getGrid() );
    expect(grid.getGrid().length).toEqual(size)
  })
  it(`should set an origin to ${origin}`,()=>{
    // console.log(grid.origin)
    expect(grid.getOrigin()).toEqual(origin)

  })
})