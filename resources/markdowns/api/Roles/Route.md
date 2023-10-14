# Chameleon API. Role Model

<p class="lead">Decorator. Route</p>

### Type

Decorator

### Description

The `@Route` decorator is used to indicate that the state of a Role driven extension should be abandoned and move to another state according to the lifecycle specification when some signal arise. For more details, see the Role model in the documentation.

### Parameters

This decorator requires, as a mandatory parameter, the name of the next state to move forward. As an optional second parameter, it requires the expression of the signal to be used to lock the the transition route in the lifecycle. On Web Platform settings a signal is a regular event, both standard or custom one

<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>State</td>
    <td>String</td>
    <td>The next state to move forward</td>
  </tr>
  <tr>
    <td>Signal</td>
    <td>String</td>
    <td>The signal to wait for</td>
  </tr>
</table>

### Metadata

The following table summarize the set of metadata included by the `@Route` decorator. This information is used to move forward the lifecycle according to environmental conditions.

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
    <td>State.routes</td>
    <td>The routes for a state</td>
    <td>[{ guard, to }, ...]</td>
  </tr>
</table>

### Examples

The following example shows typical uses of the `@Route` decorator in a Role driven extension. As it can be seen, it is used to specify a transition rule to move forward the lifecycle when some signal is met. If no signal is specified the transition occurs automatically when the action in current state is executed. Several Guards can be included in the same state. In that situation the lifecycle lock until ANY (the first one) of the guards have been fulfilled.

```Javascript
import { Extension } from 'origami.chameleon.js'
import { Role      } from 'origami.chameleon.roles.js'
import { State     } from 'origami.chameleon.roles.js'
import { Begin     } from 'origami.chameleon.roles.js'
import { End       } from 'origami.chameleon.roles.js'
import { Guard     } from 'origami.chameleon.roles.js'
import { Route     } from 'origami.chameleon.roles.js'

let FX = 'fx', SX = '...'
let FY = 'fy', SY = '...'
let FZ = 'fz', SZ = '...'

@Extension (Role)
class Ext {
  constructor () {
    ...
  }

  @State
    @Begin
    @Guard (SX)
    @Route (FY, SY)
    @Route (FZ, SZ)
  fx () { ... }

  @State
    @Guard (SY)
    @Route (FX, SX)
    @Route (FZ, SZ)
  fy () { ... }

  @State
    @End
    @Guard (SZ)
  fz () { ... }
}
```
