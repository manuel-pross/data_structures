type QueueItems<T> = {
  [key: number]: T;
};

export class CircularQueue<T> {
  private items: T[] | null[];
  private rear: number;
  private front: number;
  private capacity: number;
  private currentLength: number;

  constructor(capacity: number) {
    this.items = Array(capacity);
    this.capacity = capacity;
    this.currentLength = 0;
    this.rear = -1;
    this.front = -1;
  }

  isFull(): boolean {
    return this.capacity === this.currentLength;
  }

  isEmpty(): boolean {
    return this.currentLength === 0;
  }

  enQueue(element: T): void {
    if (this.isFull()) {
      return;
    }

    this.rear = (this.rear + 1) % this.capacity;
    this.items[this.rear] = element;
    this.currentLength++;

    if (this.front === -1) {
      this.front = this.rear;
    }
  }

  dequeue(): T | null {
    if (this.isEmpty()) {
      return null;
    }
    const item = this.items[this.front];

    this.items[this.front] = null;
    this.front = (this.front + 1) % this.capacity;
    this.currentLength--;

    if (this.isEmpty()) {
      this.front = -1;
      this.rear = -1;
    }

    return item;
  }

  peek(): T | null {
    if (this.isEmpty()) return null;

    return this.items[this.front];
  }

  print(): void {
    if (this.isEmpty()) {
      console.log("Queue is empty ");
      return;
    }

    let i: number;
    let str = "";
    for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
      str += this.items[i] + " ";
    }
    str += this.items[i];
    console.log(str);
  }
}
