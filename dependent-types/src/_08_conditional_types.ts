/**
 * ## Type Functions
 *
 * - We've seen that we can make a new type from two other types using |.
 * - We can go even further. We can write conditional logic in the type dimension
 *   to produce new types.
 *
 * [Conditional Types](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html)
 */
module ReadMe8 {}

/**
 * This Successor type takes a type argument which is a number type,
 * and produces a new type where if that number is sufficiently small then
 * it yields the successor.
 */
type Successor<Num extends number> = Num extends 0
  ? 1
  : Num extends 1
  ? 2
  : Num extends 2
  ? 3
  : Num extends 3
  ? 4
  : Num extends 4
  ? 5
  : Num extends 5
  ? 6
  : Num extends 6
  ? 7
  : Num extends 7
  ? 8
  : Num extends 8
  ? 9
  : Num extends 9
  ? 10
  : number;

type SuccessorOf3 = Successor<3>;
type SuccessorOf7 = Successor<7>;

/**
 * There are TWO tricks to this function
 * 1. We are using a type variable to move the value into the type space (from the last slide).
 * 2. Then we are applying our Successor type to that type to produce the final
 *    return type of this function.
 */
function successor<numType extends number>(num: numType): Successor<numType> {
  return (num + 1) as any;
}

const after3 = successor(3);
const after7 = successor(7);
const after99 = successor(99);
