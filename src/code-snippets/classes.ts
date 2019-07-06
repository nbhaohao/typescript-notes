/**
 * private 只能在 class 中访问
 * protected 只能在 class 或者是子类中访问
 * public 默认，在哪里都可以访问
 */
class Person {
  from: string = "China";
  sayAnything(message: string): void {
    console.log(message);
  }
  sayHi(): void {
    this.sayAnything("hi");
  }
}

class Man extends Person {
  // 覆盖原有的方法
  sayHi(): void {
    console.log("Man say Hi");
  }
}

/**
 * 利用 constructor 初始化属性
 * 但是我们存在重复性
 */
class Person_Example {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

/**
 * 下面是一种简化语法的示例
 */
class Person_Example_Two {
  constructor(public name: string) {
    this.name = name;
  }
}

const zzh = new Person();
zzh.sayHi();
zzh.sayAnything("hello");
const xiao_ming = new Man();
xiao_ming.sayHi();
console.log(xiao_ming.from);
