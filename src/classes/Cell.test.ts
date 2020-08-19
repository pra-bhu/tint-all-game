import Cell from "./Cell"

describe('Cell construction', () => {
  let color:string = 'red'
  let index:[number,number] = [1,2]
  let cell = new Cell(color,index)
  it(`should create a Cell ${{color,index}}`,()=>{
    expect(cell).toEqual({color,index})
  })
})
