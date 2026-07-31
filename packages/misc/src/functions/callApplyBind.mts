export function myFunction(this: { x: number }, a: number, b: number) {
  return this.x + a + b;
}
