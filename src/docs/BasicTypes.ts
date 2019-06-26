// 布尔值
const isShow: boolean = true;

// 数字类型，int 和 float 都是 number
const n1: number = 2;
const n2: number = 2.2;

// 字符串
const s1: string = "2";

// Array 有两种写法，用泛型的写法可能更好一些
const list1: number[] = [1, 2, 3];
const list2: Array<number> = [1, 2, 3];

// Tuple 翻译过来叫元祖，表示长度固定，每个元素的类型也固定的数组
const t1: [string, number] = ["1", 2];

// Enum 枚举
enum Color {
  Red,
  Green,
  Blue
}
const red: Color = Color.Red;
console.log(red); // 0
console.log(Color[0]); // Red
// 可以自定义每项的数字
enum CustomColor {
  Red = 5,
  Green = 8,
  Blue = 10
}
console.log(CustomColor.Green); // 8

// any
// 应该尽量避免使用 any 类型，如果使用了 any, 那么几乎和 JS 一样了。
const secret: any = "ok";
try {
  secret.say(); // IDE 没有警告
} catch (e) {
  console.log("no, error");
}

// void
// 比较适合的场景是一个函数没有返回值的时候
function returnUndefined(): void {}

// undefined && null
// 最好把配置项中的 strictNullChecks 设置为 true,
// 如果你开了，52/53 行会报错，没开就不报
const nullValue: null = null;
const undefinedValue: undefined = nullValue; // ❌
const a: string = nullValue; // ❌

// never
// 文档中提到如果一个函数一定会抛异常或者是个无限循环，就可以使用 never
function alwaysThrowError(): never {
  throw new Error(`I don't know`);
}

function loop(): never {
  while (true) {
    console.log("stop it");
  }
}

// Object
// 感觉好像可以被 Class 或者是 Interface 代替
const o1: object = {};

// 类型断言
// 但是有前提，不是说可以随意断言的，比如下面的代码，不能直接断言一个 number 是一个 string.
const nn1: number = 2;
(<string>nn1).split("2"); // ❌
const nn2: any = 2;
(nn2 as string).split("5"); // ✅
