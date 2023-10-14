# Chameleon API

<p class="lead">Helper. Inspect</p>

### Type

  Helper

### Description

The `Inspect` helper is a module that provides access to main facilities within the Chameleon framework. It allows to inspect a class or object representing a component in order to apply installation & uninstallation tasks or operate with metadata spaces.

### Parameters

This helper requires, as a mandatory parameter, a class or object representing the component to be inspected. When the parameter is a class, it is interpreted as the artifact for a kind of component. When it is an object, it is interpreted as a component instance


<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>Extension</td>
    <td>Class | Object</td>
    <td>The component class or instance</td>
  </tr>
</table>


### Examples

The following example shows a code where the Inspect helper is used over different kinds of classes and objects. As it is described in other section the helper allows to access the three layers of the extendable component model managed by the framework.

```Javascript
import { Inspect } from 'origami.chameleon.js'
import { CoreX   } from '...'
import { CoreY   } from '...'

let ICoreX = Inspect (CoreX)
let ICoreY = Inspect (CoreY)

let XA = new CoreX ()
let XB = new CoreX ()
let YA = new CoreY ()
let YB = new CoreY ()

let IXA = Inspect (XA)
let IXB = Inspect (XB)
let IYA = Inspect (YA)
let IYB = Inspect (YB)
```
