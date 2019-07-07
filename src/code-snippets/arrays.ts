const names = ["zzh", "hzz", "zhz"];
const names_type: string[] = ["zzh", "hzz", "zhz"];

const namesArray: string[][] = [["zzh"], ["hzz"], ["zhz"]];

// ts 知道从 names 里拿出来的元素是 string.
const name123 = names[0];
console.log(name123.length);

// ts 会阻止往数组中添加不同类型的值
// names.push(1);

names.map((item): string => item);

// 拥有不同类型的数组
const dates: (Date | string)[] = [new Date(), "2011-11-11"];
