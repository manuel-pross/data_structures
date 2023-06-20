import { CustomNode } from "./CustomNode";

export class LinkedList<T> {
  public head: CustomNode<T> | null;
  private size: number;
  public tail: CustomNode<T> | null;

  constructor() {
    this.head = null;
    this.size = 0;
    this.tail = null;
  }

  isEmpty(): boolean {
    return this.size === 0;
  }

  getSize(): number {
    return this.size;
  }

  prepend(value: T): void {
    const newNode = new CustomNode(value);

    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.size++;
  }

  append(value: T): void {
    const newNode = new CustomNode(value);

    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      const curr = this.tail;
      this.tail = newNode;
      if (curr) curr.next = this.tail;
    }

    this.size++;
  }

  insert(value: T, index: number): void {
    if (index > this.getSize() || index < 0) return;

    if (index === 0) {
      this.prepend(value);
      return;
    }

    if (index === this.getSize()) {
      this.append(value);
      return;
    }

    const newNode = new CustomNode(value);
    let prev: CustomNode<T> | null = this.head;
    let currIndex = 1;

    while (currIndex < index) {
      if (prev) prev = prev?.next;
      currIndex++;
    }

    if (!prev) return;

    if (prev.next) {
      newNode.next = prev.next;
      prev.next = newNode;
    }

    this.size++;
  }

  removeValue(value) {
    if(this.isEmpty()) {
	  return null
	}
	
	if(this.head.value === value) {
	  this.head = this.head.next;
	  this.size--;
	  return value;
	}

	let prev = this.head;

	while(prev.next && prev.next.value !== value) {
	  prev = prev.next;
	}

	if(prev.next) {
      let remv = prev.next;
      prev.next = remv.next;
	  this.size--;
	  return value;
	}

	return null;
  }

  search(value) {
    if(this.isEmpty()) {
      return -1;
	}

	let curr: CustomNode<T> | null = this.head;
    let i = 0;    

	while(curr) {
	  if(curr.value === value) {
	  	return i;
	  }

	  curr = curr.next;
	  i++;
	}

	return -1;
  }


  print(): void {
    if (!this.head) {
      console.log("List is empty");
      return;
    }

    let curr: CustomNode<T> | null = this.head;
    let str = "";

    while (curr) {
      str += curr.value + " ";
      curr = curr.next;
    }

    console.log(str);
  }

  reverse(): void {
    let prev: CustomNode<T> | null = null;
	let curr: CustomNode<T> | null = this.head;

	while(curr) {
	  let next = curr?.next;
	  curr.next = prev;
	  prev = curr;
	  curr = next;
	}

	this.head = prev;
  }
}
