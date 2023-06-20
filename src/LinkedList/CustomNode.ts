export class CustomNode<T> {
  public value: T;
  public next: CustomNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}
