import { NumbersCollection } from "./NumbersCollection";
import { CharCollection } from "./CharCollection";
import { LinkedList } from "./LinkedList";

const numbersCollection = new NumbersCollection([10, 3, -1]);
numbersCollection.sort();
console.log(numbersCollection.data);
//
const charCollection = new CharCollection("Xbca");
charCollection.sort();
console.log(charCollection.data);

// const linkedList = new LinkedList();
// linkedList.add(500);
// linkedList.add(200);
// linkedList.add(-3);
// linkedList.add(1000);
// const sorter = new Sorter(linkedList);
// sorter.sort();
// linkedList.print();
