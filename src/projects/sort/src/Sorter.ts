export abstract class Sorter {
  abstract length: number;
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;
  sort(): void {
    const allSortCounts = this.length;
    for (let count = 0; count < allSortCounts; count++) {
      for (
        let itemIndex = 0;
        itemIndex < allSortCounts - 1 - count;
        itemIndex++
      ) {
        const nextIndex = itemIndex + 1;
        if (this.compare(itemIndex, nextIndex)) {
          this.swap(itemIndex, nextIndex);
        }
      }
    }
  }
}
