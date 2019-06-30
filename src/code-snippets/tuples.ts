const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40
};

const pepsi: [string, boolean, number] = ["brown", true, 40];

// 我们还可以使用 类型别名 来提高可读性
type Drink = [string, boolean, number];
type fuck = string;
const cola: Drink = ["brown", true, 40];
