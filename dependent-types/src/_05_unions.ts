/**
 * ## Unions
 *
 * - If types are sets... can we do set-like things with them?
 * - We can make a new type by unioning two types 🧑‍🤝‍🧑 using the | operator.
 *
 * [Union Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types)
 */
module ReadMe5 {}

type TheCount = 1 | 2 | 3;
const oneToThree: TheCount = 3;

type EasyAs = "a" | "b" | "c" | TheCount;
const easyAs: EasyAs = "c";

type MostHatedThings = ["Technical Debt", "Monetary Debt", "Clowns"];
type Superlatives = FavoriteThings | MostHatedThings;
let superlative: Superlatives = ["Technical Debt", "Monetary Debt", "Clowns"];
superlative = ["Raindrops on Roses🌹", "Crisp Apple Strudel", "Type Theory"];
