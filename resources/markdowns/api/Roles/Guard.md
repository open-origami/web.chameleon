# Chameleon API. Role Model

<p class="lead">Decorator. Guard</p>

### Type

Decorator

### Description

The `@Guard` decorator is used to indicate that the action for a state of a Role driven extension should not be executed by pausing the lifecycle until some signal arise. For more details, see the Role model in the documentation.

### Parameters

This decorator requires, as a mandatory parameter, the expression of the signal to be used to lock the lifecycle. On Web Platform settings a signal is a regular event, both standard or custom one.

<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>Signal</td>
    <td>String</td>
    <td>The signal to wait for</td>
  </tr>
</table>


### Metadata

The following table summarize the set of metadata included by the `@Guad` decorator. This information is used to move forward the lifecycle according to environmental conditions.

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
    <td>State.guards</td>
    <td>The guards for a state</td>
    <td>[String, ...]</td>
  </tr>
</table>

### Examples

The following example shows typical uses of the `@Guard` decorator in a Role driven extension. As it can be seen, it is used to specify the guarded condition locked the lifecycle waiting for a signal. Several Guards can be included in the same state. In that situation the lifecycle lock until ALL guards have been fulfilled.

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
