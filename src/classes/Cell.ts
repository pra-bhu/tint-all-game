import ICell from "@typings/ICell";

export default class Cell implements ICell {
  constructor(public color:string,public index:[number,number]) {
    this.color = color
    this.index = index
  }
  setColor(color:string){
    this.color = color
  }
  setIndex(index:[number,number]){
    this.index = index
  }
  getColor(){
    return this.color
  }
  getIndex(){
    return this.index
  }
  
}