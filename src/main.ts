import { LinkedList } from "./LinkedList/LinkedList";

const linkedList = new LinkedList();
console.log(linkedList.getSize());
console.log(linkedList.isEmpty());

linkedList.insert(10, 0);
linkedList.print();

linkedList.insert(20, 0);
linkedList.print();

linkedList.insert(30, 1);
linkedList.print();

linkedList.insert(40, 2);
linkedList.print();
console.log(linkedList.getSize());

console.log(linkedList.removeValue(40));
linkedList.print();

console.log(linkedList.removeValue(60));
linkedList.print();

console.log(linkedList.search(30));
console.log(linkedList.search(10));

linkedList.reverse();
console.log(linkedList.print());
