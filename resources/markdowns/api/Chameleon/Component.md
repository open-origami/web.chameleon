# Chameleon API

<p class="lead">Decorator. Component</p>

### Type

Decorator

### Description

The `@Component` decorator is used to mark a class as an extendable artifact. Extendable artifacts are those that can be extended by means of an extension mechanism provided by Chameleon. If the `@Component` decorator is omitted from the declaration of a class it will not be allowed to extend the class from the outside. Read the [Developer Guide](doc.html#Development:Overview) for more details.

### Metadata

The following table summarizes the set of metadata included by the `@Component` decorator in the metadata record. This information is linked to the metadata space of the extended component class.

<table>
  <tr>
    <th>Key</th>
    <th>Description</th>
    <th>Value / Type</th>
  </tr>
  <tr>
    <td>Core.Id</td>
    <td>The class Id</td>
    <td>String</td>
  </tr>
  <tr>
    <td>Core.Family</td>
    <td>The family of the artifact</td>
    <td>Component</td>
  </tr>
</table>

### Example

The following example shows a typical use of the `@Component` decorator. It is supplied by Chameleon to allow to mark classes as extensible components. The contents and behavior of the class is not relevant for the purpose of this example.

```Javascript
import { Component } from 'origami.chameleon.js'

@Component
class Core {
  constructor () {
    ...
  }

  fx (x) { ... }
  fy (x) { ... }
}
```
