# Overview

[JSON Schema](https://json-schema.org/) is to JSON as XML Schema is to XML. Crazy right? 🤡

There are validators, schema generators (to/from static classes, XML, etc.), and automatic GUI generators. See [implementations](https://json-schema.org/implementations.html) for a list
of implementations for different languages that supports JSON Schema.

## VS Code Support

VS Code is an open source code editor available on Linux, Windows, and Mac.
[VS Code](https://code.visualstudio.com/docs/languages/json) has beauitful support for
validating JSON documents using JSON Schema.

- In this talk we are going to simply use the $schema property to explicitly validate a
  JSON file using a schema.
- Schemas can be pulled from online locations. See [JSON Schema Store](https://www.schemastore.org/json/)
  for a list of 333 (at the time of this writing) online schemas. You could get lucky ☘️ and discover
  your file format is already supported.
- However, you can configure VS Code to automatically validate JSON files which match a [glob pattern](<https://en.wikipedia.org/wiki/Glob_(programming)>)
  with a schema. See this [YouTube Video](https://www.youtube.com/watch?v=nrXDVxkwE9Q)

## Web GUI Generators

Some generators will produce a user interface with nothing more than a schema

- https://json-editor.github.io/json-editor/

Others use a supplementary UX schema which adds layout information

- https://ui-schema.bemit.codes/examples
- https://jsonforms.io/

## Not All Rainbows 🌈 and Unicorns 🦄

- There are different versions of the specification.
- Support for exotic features may be inconsistent between tooling.
- Evaluate the set of features you intend to use against selected tools/platforms.
