# Chameleon API

<p class="lead">Decorator. Extension (Regular)</p>

### Type

  Decorator

### Description

The `@Extension` decorator is used to mark a class a regular adaptive extension. A regular adaptive extension is a class with two member methods for installing & uninstalling adaptive logic over a component.

### Metadata

The following table summarize the information that the framework register as metadata for the class representing the extension. Notice that this information is a general overview and it can be enriched with additional data depending on the type of the extension in use.

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
    <td>Extension</td>
  </tr>
</table>

### Examples

The following example shows a code defining an adaptive extension as a decorated class. The class MUST include two member methods named `install` and `uninstall` to define the installing and uninstalling logic. Other members can be added as coding strategies.

```Javascript
import { Extension } from 'origami.chameleon.js'

const EXT         = 'ExtX';
const INSTALLED   = `${EXT} successfully installed`;
const UNINSTALLED = `${EXT} successfully uninstalled`;

@Extension
class ExtX {
  constructor (core) {
  }

  install ()   {
    logger.info (INSTALLED);
  }
  uninstall () {
    logger.info (UNINSTALLED);
   }
}
```
