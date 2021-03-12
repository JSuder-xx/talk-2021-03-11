/**
 * ## Literals As Types
 *
 * TypeScript supports defining singleton sets of string, number, boolean, and
 * even array of string, number, and boolean.
 *
 * [Literal Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types)
 */
module ReadMe3 {}

// num below is typed as a number. It can be any number it wants to be. It has options.
let num: number = 16384;

// If we define types that are "inhabited" by only a single number
type One = 1;
// then values typed as such have no options... well... they have one option.
let one: One = 1;
// one = 3;

type Six = 6;
let six: Six = 6;
// six = 9

// There is nothing special about the name.
// You can just place a literal in a "type position".
let two: 2 = 2;
// two = 2;

// The same thing can be done with strings
// ...even strings with Unicode emojis in them.
type Pancake = "pancake🥞";
let pancake: Pancake = "pancake🥞";
// pancake = "waffle"

// or with booleans
type False = false;
let isJohnSuderCool: False = false;
//isJohnSuderCool = true;

// or with arrays
type FavoriteThings = [
  "Raindrops on Roses🌹",
  "Crisp Apple Strudel",
  "Type Theory"
];
let favoriteThings: FavoriteThings = [
  "Raindrops on Roses🌹",
  "Crisp Apple Strudel",
  "Type Theory",
];
