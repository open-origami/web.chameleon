# Chameleon API. Aspect Model

<p class="lead">Decorator. Provided</p>

### Type

Decorator

### Description

The `@Provided` decorator is used to indicate that the member method of an Aspect driven extension must contribute to member methods in the target component according to the PROVIDED Policy. For more details, see the PROVIDED policy in the documentation.

### Parameters

This decorator requires, as a mandatory parameter, the regular expression indicating the member methods of the component that must be transformed in the adaptation process. The regular expression is evaluated against the name of each method in the component. If the evaluation is successful then the transformation will be made on that method.

<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>Extension</td>
    <td>String</td>
    <td>The regular expression</td>
  </tr>
</table>

### Metadata

The following table summarize the set of metadata included by the `@Provided` decorator. This information is used to guide the installation & uninstallation processes carried out by Chameleon on a specific component.

<table>
  <tr>
    <th>Key</th>
    <th>Description</th>
    <th>Value / Type</th>
  </tr>
  <tr>
    <td>Extension.Aspect.Hooks</td>
    <td>The collection of hooks</td>
    <td>[Ext, ...]</td>
  </tr>
  <tr>
    <td>Ext.exp</td>
    <td>The regular expression</td>
    <td>String</td>
  </tr>
  <tr>
    <td>Ext.hook</td>
    <td>The type of Hook</td>
    <td>Provided</td>
  </tr>
  <tr>
    <td>Ext.handler</td>
    <td>The extension member method</td>
    <td>Function</td>
  </tr>
</table>

### Examples

The following example shows a typical use of the `@Provided` decorator in an Aspect driven extension. As it can be seen, each method in the extension is marked using this decorator and a regular expression is included to indicate that `fx` method will be contribute to the `fx` method in the target component and the same for the `fy` method.

```Javascript
import { Extension } from 'origami.chameleon.js'
import { Aspect    } from 'origami.chameleon.aspects.js'
import { Provided  } from 'origami.chameleon.aspects.js'

let FX = 'fx'
let FY = 'fy'

@Extension (Aspect)
class Ext {
  constructor () {
    ...
  }

  @Provided (FX) fx (x) { ... }
  @Provided (FY) fy (x) { ... }
}
```
