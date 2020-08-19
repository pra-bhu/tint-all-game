import Cell from "./Cell";

export default class Grid {
  private grid: Array<Array<Cell>>
  
  constructor(private size: number, private colorTypes: Array<string>, private origin: Cell) {
    this.size = size
    this.colorTypes = colorTypes
    this.origin = origin
    this.grid = [[origin]]
    let arr: Cell[][] = []
    let min = 0;
    let max = colorTypes.length - 1;
    for (let i = 0; i < size; i++) {
      let rowCell: Cell[] = []
      for (let j = 0; j < size; j++) {
        let random = Math.floor(Math.random() * (+max - +min + 1) + +min);
        rowCell.push(new Cell(colorTypes[random], [i, j]))
      }
      arr.push(rowCell)
    }
    this.grid = arr
    let [x_origin, y_origin] = origin.index
    this.grid[x_origin][y_origin] = origin
    // console.log(this.grid);
  }

  //To update Grid with the changed Cell
  updateGrid(cell: Cell) {
    let [x, y] = cell.index
    this.grid[x][y] = cell
  }

  getGrid(): Array<Array<Cell>> {
    return this.grid
  }

  getOrigin(): Cell {
    return this.origin
  }

  getColorTypes():Array<string>{
    return this.colorTypes
  }

}