export default interface ICell {
  index: [number, number]
  color: string
  setColor(color:string): void
  setIndex(index:[number, number]): void
}