import Cell from "@classes/Cell";

export default interface IGrid{
  size:number
  colorTypes: Array<string>
  origin: Cell
  grid : Array<Array<Cell>>
}