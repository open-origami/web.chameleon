# Chameleon API. Role Model

<p class="lead">Decorator. State</p>

### Type

Decorator

### Description

The `@State` decorator is used to indicate that the state of a Role driven extension should be considered as a valid state within the lifecycle specification. This decorator MUST precede any other Role decorator in each member method.

### Metadata

The following table summarize the set of metadata included by the `@State` decorator. This information is used to move forward the lifecycle according to environmental conditions.

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
    <td>State.key</td>
    <td>The name of the state</td>
    <td>String</td>
  </tr>
  <tr>
    <td>State.begin</td>
    <td>True if the state is initial</td>
    <td>false</td>
  </tr>
  <tr>
    <td>State.end</td>
    <td>True if the state is final</td>
    <td>false</td>
  </tr>
  <tr>
    <td>State.guards</td>
    <td>The guards for a state</td>
    <td>[]</td>
  </tr>
  <tr>
    <td>State.routes</td>
    <td>The routes for a state</td>
    <td>[]</td>
  </tr>
  <tr>
    <td>State.action</td>
    <td>The target method</td>
    <td>Function</td>
  </tr>
</table>

### Examples

The following example shows the typical use of the `@State` decorator in a Role driven extension. As it can be seen, it is used to mark a member method as a valid state in the lifecycle specification

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
