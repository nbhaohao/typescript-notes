/*
 * 我们的函数需要一个对象，我们声明对象所需的属性
 * 如果我们传入一个拥有所需属性，但有其他更多的属性的对象时，TS 编译器并没有发出警告
 * 这一点其实我一开始学习的时候也很疑惑，
 * 不过就像我们使用 Array.map(fn), 传入的 fn
 * 我们如果只需要第一个参数的话，我们通常会传入类似 item => {} 的函数
 * 而并不是 (item, index, list) => {} 这样的完整参数列表的函数
 * TypeScript FAQ 也有提到类似的内容
 * https://github.com/Microsoft/TypeScript/wiki/FAQ#why-are-functions-with-fewer-parameters-assignable-to-functions-that-take-more-parameters
 * */
function printLabel(labelObject: { label: string }) {
  console.log(labelObject.label);
}
const labelObj = { label: "hello", name: "zzh" };
printLabel(labelObj);

