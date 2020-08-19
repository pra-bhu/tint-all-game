import Cell from "@classes/Cell";

export default interface ICellGraph{
  totalVertices:number
  adjacencyList:Map<Cell,Cell>
  
}