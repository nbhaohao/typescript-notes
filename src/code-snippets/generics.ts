// 如果不使用泛型
class ArrayOfNumbers {
  constructor(public collection: Array<number>) {}

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection: Array<string>) {}
  get(index: number): string {
    return this.collection[index];
  }
}

// 使用泛型
class ArrayOfData<T> {
  constructor(public collection: Array<T>) {}
  get(index: number): T {
    return this.collection[index];
  }
}

const arrayOfData = new ArrayOfData<string>(["1"]);

// Functions
function printString(arr: string[]): void {
  arr.forEach(item => {
    console.log(item);
  });
}

function printNumber(arr: number[]): void {
  arr.forEach(item => {
    console.log(item);
  });
}

function printAnyThing<T>(arr: T[]): void {
  arr.forEach(item => {
    console.log(item);
  });
}
printAnyThing<string>(["1", "2", "3"]);

const arrowFunctionPrint = <T>(arr: T[]): void => {
  arr.forEach(item => {
    console.log(item);
  });
};
arrowFunctionPrint<number>([1, 2, 3]);

// 泛型的限制
class Car {
  print() {
    console.log("Car");
  }
}
class House {
  print() {
    console.log("House");
  }
}

interface PrintAble {
  print(): void;
}

const printThing = <T extends PrintAble>(arr: Array<T>): void => {
  arr.forEach(item => {
    item.print(); // (如果 T 不使用 extends 的话就会报错，因为 T 不一定有 print 方法)
  });
};
printThing<House>([new House()]);
