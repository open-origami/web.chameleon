# Chameleon API

<p class="lead">Decorator. Model</p>

### Type

  Decorator

### Description

The `@Model` decorator is used to mark a class as a model implementation. A model is a class responsible to interpret model-driven extension. Each model includes two member methods for installing & uninstalling adaptive logic over a component.

### Metadata

The following table summarize the information that the framework register as metadata for the class representing the extension model. Notice that this information is a general overview and it can be enriched with additional data depending on the type of the extension in use. 

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
    <td>Model</td>
  </tr>
</table>

### Examples

The following example shows a code defining an extension model as a decorated class. The class MUST include two member methods named `install` and `uninstall` to define the installing and uninstalling logic. Both methods receive as a parameter the extension instance to be installed. The target component where extension should be installed is recived as a constructor parameter of the model.

```Javascript
import { Extends } from 'origami.chameleon.js'

@Domain class Trait {
  constructor (core) {
  ...
  }

  install (ext) { ...
  }

  uninstall (ext) { ...
  }
}

export { Trait };
```
