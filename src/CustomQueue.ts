type QueueItems<T> = {
  [key: number]: T;
};

export class Queue<T> {
  private items: QueueItems<T>;
  private rear: number;
  private front: number;

  constructor() {
    this.items = {};
    this.rear = 0;
    this.front = 0;
  }

  enqueue(element: T) {
    this.items[this.rear] = element;
    this.rear++;
  }

  dequeue(): T {
    const currentFirst = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return currentFirst;
  }

  isEmpty(): boolean {
    return this.rear - this.front === 0;
  }

  peek(): T | undefined {
    if (!this.isEmpty()) return this.items[this.front];
    else return undefined;
  }

  size(): number {
    return this.rear - this.front;
  }

  print(): void {
    console.log(this.items);
  }
}
