import Grid from "@classes/Grid";
import Cell from "@classes/Cell";

export default class Engine {
  currentGrid:Grid
  currentState:Array<Array<Cell>>
  origin:Cell
  colorTypes:Array<string>
  proximityColorMap:Map<string,Array<Cell|null>>
  constructor(grid:Grid) {
    this.currentGrid = grid
    this.currentState = grid.getGrid()
    this.origin = grid.getOrigin()
    this.colorTypes = grid.getColorTypes()
    this.proximityColorMap = new Map()
  }
  /* 
  ->Identify origin
  ->Set current state : (lineA)
  ->Build a AdjacencyList for each cell in currentState with the adjacent tiles in NEWS direction
  ->Identify highest colorType (maxAssociatedColor) associated with the current State
  ->Modify the currentState with the maxAssociatedColor.
  ->Loop to lineA

   */
  //Load the set Grid and origin
  initiateGame(grid:Grid){
    //Array of cells painted with current color
    let paintedCells:Cell[] = [this.origin] 
    //Cells at the border of painted area
    let borderCells:Cell[] = [this.origin]
    //adding the first cell to the adjacencyList by default to be origin
    for(let color in this.colorTypes){
      this.proximityColorMap.set(color,[])
    }
    console.log(this.proximityColorMap)
    

    

    this.addAdjacencyList()
    
  }

  getDirectedCell(direction:string,[x,y]:[number,number]){
    const size:number = this.currentState.length
    switch (direction){
      case 'N': //North
        return (x > 0 ) && this.currentState[x-1][y]
      case 'E':
        return (y < size) && this.currentState[x][y+1]
      case 'W':
        return (y>0) && this.currentState[x][y-1]
      case 'S':
        return (x < size) && this.currentState[x+1][y]
    }
  }

  addAdjacencyList():void{
    
  }
}