/**
 * ## Overloading
 *
 * - Consider overloading on type.
 * - With method overloading method implementation is chosen at **compile-time**
 *   by differentiating on the **type** seen by the compiler at the call-site.
 * - As opposed to overriding wherein the method implementation is chosen at **run-time**.
 */
module ReadMe {}

class Circle {
  constructor(public readonly radius: number) {}
}

class Rectangle {
  constructor(public readonly width: number, public readonly height: number) {}
}

class Triangle {
  constructor(public readonly base: number, public readonly height: number) {}
}

// Observe the string literals in **type** positions. This is
// actually the same thing as overloading with **int** or **string**
// just using the singleton types represented by each literal.
function getShape(choice: "circle", value: number): Circle;
function getShape(choice: "rectangle", value: number): Rectangle;
function getShape(choice: "triangle", value: number): Triangle;
// Don't worry about the quirkyness of TypeScript overloading.
// [Function Overloads](https://www.typescriptlang.org/docs/handbook/2/functions.html#function-overloads)
function getShape(
  choice: "circle" | "rectangle" | "triangle",
  value: number
): Circle | Rectangle | Triangle {
  switch (choice) {
    case "circle":
      return new Circle(value);
    case "rectangle":
      return new Rectangle(value, value);
    case "triangle":
      return new Triangle(value, value);
  }
}

const secondShape = getShape("triangle", 30);

//const shapeWithString = getShape("x" as string, 50);
