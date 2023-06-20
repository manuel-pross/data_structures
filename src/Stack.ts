export class Stack<T> {
  private items: Array<T>;

  constructor() {
    this.items = [];
  }

  push(element: T): void {
    this.items.push(element);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(): T {
    return this.items[this.items.length - 1];
  }

  isEmpty(): boolean {
    return this.items.length <= 0 ? true : false;
  }

  size(): number {
    return this.items.length;
  }

  print(): void {
    console.log(this.items.toString());
  }
}
