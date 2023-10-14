# Chameleon API. Role Model

<p class="lead">Decorator. End</p>

### Type

Decorator

### Description

The `@End` decorator is used to indicate that the state of a Role driven extension should be considered as one of the finalizers in the lifecycle specification. For more details, see the Role model in the documentation.

### Metadata

The following table summarize the set of metadata included by the `@End` decorator. This information is used to move forward the lifecycle according to environmental conditions.

<table>
  <tr>
    <th>Key</th>
    <th>Description</th>
    <th>Type</th>
  </tr>
  <tr>
    <td>Extension.Role.States</td>
    <td>The collection of states</td>
    <td>[State, ...]</td>
  </tr>
  <tr>
    <td>State.end</td>
    <td>True if the state is final</td>
    <td>true</td>
  </tr>
</table>

### Examples

The following example shows a typical use of the `@End` decorator in a Role driven extension. As it can be seen, it is used to mark the method as one of the finalizers states in the lifecycle.

```Javascript
import { Extension } from 'origami.chameleon.js'
import { Role      } from 'origami.chameleon.roles.js'
import { State     } from 'origami.chameleon.roles.js'
import { Begin     } from 'origami.chameleon.roles.js'
import { End       } from 'origami.chameleon.roles.js'
import { Guard     } from 'origami.chameleon.roles.js'
import { Route     } from 'origami.chameleon.roles.js'

let FX = 'fx'
let FY = 'fy'
let FZ = 'fz'

@Extension (Role)
class Ext {
  constructor () {
    ...
  }

  @State
    @Begin
    @Guard (SX)
    @Route (SY, FY)
    @Route (SZ, FZ)
  fx () { ... }

  @State
    @Guard (SY)
    @Route (SX, FX)
    @Route (SZ, FZ)
  fy () { ... }

  @State
    @End
    @Guard (SZ)
  fz () { ... }
}
```