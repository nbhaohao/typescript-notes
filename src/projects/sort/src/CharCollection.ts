import { Sorter } from "./Sorter";

export class CharCollection extends Sorter {
  constructor(public data: string) {
    super();
  }

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    const lowerLeftChar = this.data[leftIndex].toLowerCase();
    const lowerRightChar = this.data[rightIndex].toLowerCase();
    return lowerLeftChar > lowerRightChar;
  }

  swap(leftIndex: number, rightIndex: number): void {
    const tempArray = this.data.split("");
    [tempArray[leftIndex], tempArray[rightIndex]] = [
      tempArray[rightIndex],
      tempArray[leftIndex]
    ];
    this.data = tempArray.join("");
  }
}
