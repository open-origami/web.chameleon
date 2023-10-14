# Chameleon API

<p class="lead">Helper. Inspect.Extensions</p>

### Type

  Helper

### Description

The `Extensions` helper is responsible to manage the installing & uninstalling process on components. This helpers just provides both methods to explicitly invoke those processes. They are also automatically called when the framework process a `@Extends` decorator on an extendable component. 

### Methods

This helper provides two methods to carry out the installation and uninstallation of adaptive extensions over target components. The following table summarize the syntax of both of them.

<table>
  <tr>
    <th>Name</th>
    <th>Parameters</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>install</td>
    <td>[Class ext]</td>
    <td>Install an extension on a component</td>
  </tr>
  <tr>
    <td>uninstall</td>
    <td>[Class ext]</td>
    <td>Uninstall an extension from a component</td>
  </tr>
</table>


### Examples

The following code show examples where several extensions are installed and uninstalled from a target component. The example does not responds to a specific login and only has illustrative purposes.

```Javascript
import { Inspect      } from 'origami.chameleon.js'
import { ExtX, ExtY   } from '...'
import { CoreA, CoreB } from '...'

let ICoreA = Inspect (CoreX).Extensions
let ICoreB = Inspect (CoreY).Extensions

ICoreA.install   (ExtX)
ICoreA.install   (ExtY)
ICoreB.uninstall (ExtX)
ICoreB.uninstall (ExtY)
```
