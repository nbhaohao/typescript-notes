目录
=================

* [如何直接运行 TS 代码？](#如何直接运行-ts-代码)
* [ts-node 有什么用？](#ts-node-有什么用)
* [Type](#type)
  * [描述](#描述)
  * [为什么要使用](#为什么要使用)
  * [什么时候使用](#什么时候使用)

## 如何直接运行 TS 代码？
我使用 `webstorm` 以及 `Run Configuration for TypeScript` 这个插件。
## ts-node 有什么用？
通常我们要运行 `.ts` 文件的话，需要使用 `typescript` 提供的 `tsc` 命令，将 `.ts` 文件编译成 `.js` 文件，然后再运行，那 `ts-node` 则是将这两步缩减为一步，且不会生成 `.js` 文件，所以我们可以使用 `ts-node index.ts` 来直接执行一个 `.ts` 文件。
## 类型
### 描述
类型可以看作为是一个 **值(value)** 它所拥有的属性及方法的一个简短缩写，比如我们看到 `const a = 'red'`, 我们知道 `red` 是一个 `string` ，所以变量 `a` 可以使用 `length, indexOf, charAt` 之类的属性方法，如果没有类型，那么我们只能把 `a` 所拥有的属性方法从头到尾都列举出来，那样的话就太麻烦了。
### 为什么要使用
`typescript` 做静态分析的时候，可以根据类型来捕捉代码中的错误，例如是否使用了一个类型中不存在的属性或方法。

有了类型，开发者阅读其他人写的代码的时候，可以根据类型大概明白代码所需的参数，或者意义。
### 什么时候使用
任何时候
## 类型声明
### 描述
显式地指定一个变量的类型，例如 `const a:string ='2'`
### 为什么要使用
如果不使用，那么 TypeScript 就失去了意义，因为对于 `any` 这个类型，你可以使用任何属性和方法，TypeScript 都不会产生警告。
### 什么时候使用
* 类型推断要求赋值和声明在同一行，所以当我们先声明 `let a`，再赋值 `a = 2`, 那么 `a` 的类型不是 `number`, 而是 `any`, 所以这个时候需要我们使用类型声明。
* 当一个类型是不能被推断出来的时候。
* 当一个函数返回的类型是 `any` 时，我们需要更加明确返回值的类型的时候，比如 `JSON.parse` 返回值就是 `any` 类型的。
## 类型推断
### 描述
TypeScript 能够分析出变量的类型
### 为什么要使用
如果没有类型推断，我们每声明一个变量，都需要指定类型，这样会让开发很麻烦。
### 什么时候使用
TypeScript 无时无刻不在帮我们进行类型推断。