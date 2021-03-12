# Overview

A _gentle_ introduction to dependent types using TypeScript for the purpose of

- building better APIs in TypeScript
- introducing programming language theory concepts that are making their way into many mainstream languages in the near future
- having fun.

Please read the chapters under /src in order.

## Getting Started

This demonstration uses TypeScript which means that we are going to have to ensure that the property TypeScript dependency has been loaded.

- Please create a new Terminal Window (Ctrl+Shift+` on Windows).
- Navigate into dependent-types

```bash
cd dependent-types
```

- assuming that you already have [NodeJS installed](https://nodejs.org/en/download/) and from the dependent-types folder

```bash
npm install
```

- That is it. You should now have the necessary version of TypeScript installed and are ready to rock and roll 🎸 with the presentation.

## Topics

- Lays the foundation for thinking of Types as Sets.
- Begins with a simple thought experiment around single case enumerations as a vehicle for understanding singleton types (unit types).
- Introduces TypeScripts unusual ability to make singleton types for what appear to be string, number, and boolean literal values.
- Visits familiar ground to most developers by considering method/function overloading.
- Introduces the type union operator to construct a new type from two existing types.
- Demonstrates the wonder of bringing values into type space through type variables.
- Shows some basic type computations i.e. types that calculate other types.
- Then moves on to practical examples in API building
  - Statically typed URL routing.
  - String validations **at compile time**
  - Fluent builders with protections and grammar.
