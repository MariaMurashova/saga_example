function* generator(param) {
  yield '11111' + param;
  yield 'twoooooo' + param;
  yield 'threeeeee' + param;
}

const gen = generator(); // "Generator { }"

console.log(gen.next(5));
console.log(gen.next(6));
console.log(gen.next(7));
console.log(gen.next(8));
console.log(gen.next(9));

