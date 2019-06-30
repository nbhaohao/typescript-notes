{
  let apps: number = 5;
  let speed: string = "falt";
  let isDog: boolean = false;

  let nullValue: null = null;
  let undefinedValue: undefined = undefined;

  let now: Date = new Date();

  let colors: string[] = ["red", "green", "blue"];
  let numbers: number[] = [1, 2, 3];

  class Car {}

  const car: Car = new Car();

  let point: { x: number; y: number } = {
    x: 10,
    y: 5
  };

  const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
  };

  // 变量初始化和赋值不在同一行的时候
  let a: number;
  a = 2;

  // 当一个函数返回的类型是 any 的时候
  const json = `{"x": 10, "y": 20}`;
  const jsonValue: { x: number; y: number } = JSON.parse(json);

  let customValue = 2;
  // customValue = "4";

  // 不能被推断类型的变量
  let numberArray = [-10, -1, 12, 0];
  let numbersEqualZero: boolean | number = false;
  for (let i = 0; i < numberArray.length; i++) {
    if (numbers[i] === 0) {
      numbersEqualZero = i;
    }
  }
}
