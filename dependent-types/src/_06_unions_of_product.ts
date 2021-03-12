/**
 * ## Unions of Classes/Records
 * 
 * - So far we have unioned only singletons, but we can union other types such 
 *   as classes and records.
 * - Unions are **closed** or finite sets. 
 */

module ReadMe6 {}

type Shape = 
    | Circle 
    | Rectangle 
    | Triangle 
    // | 4

/**
 * - Many developers who first encounter union think of them as limited when
 *   compared with OO inheritance which can be **open**. 
 * - However, this **closed** nature means that the compiler can verify that
 *   code has covered all cases. 
 * - Checking / casting is a "code smell" in OO code often indicative of a 
 *   less than ideal design, here checking for cases is 100% safe.
 */    
function getArea(shape: Shape): number {
    // Attempting to access a property on shape before verifying
    // what it is gives us nothing.
    if (shape instanceof Circle)
        return shape.radius * shape.radius * Math.PI;
    else if (shape instanceof Rectangle)
        return shape.height * shape.width;
    else
        // observe that in this final branch the compiler knows
        // that shape **MUST** be a Triangle. 
        // If we uncomment the | 4 above then this is no longer the case.
        return shape.base * shape.height / 2;
}
