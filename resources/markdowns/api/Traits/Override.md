# Chameleon API. Trait Model

<p class="lead">Decorator. Override</p>

### Type

Decorator

### Description

The `@Override` decorator is used to indicate that the member method of a Trait driven extension must contribute to member methods in the target component according to the OVERRIDE Policy. For more details, see the OVERRIDE policy in the documentation.

### Metadata

The following table summarize the set of metadata included by the `@Override` decorator. This information is used to guide the installation & uninstallation processes carried out by Chameleon on a specific component.

<table>
  <tr>
    <th>Key</th>
    <th>Description</th>
    <th>Value / Type</th>
  </tr>
  <tr>
    <td>Extension.Trait.Policies</td>
    <td>The collection of policies</td>
    <td>[Ext, ...]</td>
  </tr>
  <tr>
    <td>Ext.key</td>
    <td>The name of the target method</td>
    <td>String</td>
  </tr>
  <tr>
    <td>Ext.policy</td>
    <td>The type of the Policy</td>
    <td>Override</td>
  </tr>
  <tr>
    <td>Ext.handler</td>
    <td>The target method</td>
    <td>Function</td>
  </tr>
</table>

### Examples

The following example shows a typical use of the `@Override` decorator in a Trait driven extension. As it can be seen, each method in the extension is marked using this decorator. Thus, for all those methods the AFTER Policy will be applied.

```Javascript
import { Extension } from 'origami.chameleon.js'
import { Trait     } from 'origami.chameleon.traits.js'
import { Override  } from 'origami.chameleon.traits.js'

let FX = 'fx'
let FY = 'fy'

@Extension (Trait)
class Ext {
  constructor () {
    ...
  }

  @Override fx (x) { ... }
  @Override fy (x) { ... }
}
```
