/**
 * ## Types are Sets
 * 
 * - The proposition "variable X has type T" means that X holds a value which is a member of the set of T.
 * - The population count (number of members) of a set is called its cardinality.
 * - We can also call the population of a set, or a type, its "_inhabitants_". 
 * - The population size of a set is sometimes
 *   - Small: Enumerations, Boolean
 *   - Large: Int32 (~4 billion)
 *   - ENORMOUS: String, List<T>
 *   - **MEGA GIGANTIC**: Records composed of fields of type Strings and Lists.
 */
module ReadMe1 {}

enum PrimaryColor {
    Red, Green , Blue
}

// Color is one of three possibilities
const color: PrimaryColor = PrimaryColor.Blue; 

