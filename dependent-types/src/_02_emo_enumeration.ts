/**
 * ## Singletons
 * 
 * We start with a thought experiment
 *  
 * > What if a type has only a single element? 
 * > In that case there can be no ambiguity ❓ about which element you mean. 
 * > There can be only one. Think Highlander. ⚔️
 * 
 * Types of a single value (singleton sets) are unit types.  
 */
module ReadMe2 {}

/** An Enumeration with a single lonely value. 😞 */
enum Julian { 
    Julian 
}

// We have NO choice but to choose Julian. It's just Julian in this set.
const julian: Julian = Julian.Julian;