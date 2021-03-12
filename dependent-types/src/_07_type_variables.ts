/**
 * ## Type Variables
 * - Now... we break on through to the other side. 🍄🌌
 * - If you've used Generics you have used type arguments to define Generic types
 *   ...which are then instantiated with very specific types ex. List<int>.
 * - We are going to use type variables to create a bridge (=>) that brings values
 *   at the point of application into the type system dimension.
 * - Queue some kind of a time travel or warping sound effect.
 *
 * [Working with Type Variables](https://www.typescriptlang.org/docs/handbook/2/generics.html#working-with-generic-type-variables)
 */
module ReadMe7 {}

// First we start with the plain vanilla that you would expect.
function getNumber(num: number): number {
  return num;
}
// Hover over unknownNum and you will see that it is number. It is "unrefined".
const unknownNum = getNumber(20);

function getNumberT<num extends number>(num: num): num {
  return num;
}
const iSeeYou = getNumberT(33);
const youAreSpecial = getNumberT(19);

function identity<T>(value: T) {
  return value;
}

const evenStrings = identity("fjfjfjfjfjHello!");

const evenArraysOfStrings = identity([
  "hello",
  "how are you",
  "good bye",
] as const);
const firstElement = evenArraysOfStrings[0];
