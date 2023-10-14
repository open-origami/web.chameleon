# Chameleon API. Role Model

<p class="lead">Model. Role</p>

### Type

Model

### Description

The `Role` model provides to Chameleon the installing & uninstalling logic to create Role driven extensions. The framework use this model to interpret Role specifications and to apply the proper deployment logic. For more details about how works the Role Extension Model see the documentation.

### Metadata

Each `Role` extension enrich the metadata space of the component where the extension is installed. That space contains all relevant information required to undertake the installing and uninstalling processes and to manage the extension behavior during its lifetime. The following table summarize all the metadata. Role specific fields are shown in dark.

<table>
  <tr class="inherited">
    <th>Key</th>
    <th>Description</th>
    <th>Value / Type</th>
  </tr>
  <tr class="inherited">
    <td>Core.Extensions.Installed</td>
    <td>The extension`s metadata</td>
    <td>[MExt, ...]</td>
  </tr>
  <tr class="inherited">
    <td>MExt.class</td>
    <td>The extension class</td>
    <td>class Ext {}</td>
  </tr>
  <tr class="inherited">
    <td>MExt.ext</td>
    <td>The extension context</td>
    <td> {} instanceof Ext</td>
  </tr>
  <tr class="inherited">
    <td>MExt.isOn</td>
    <td>Active status Checker </td>
    <td>Function</td>
  </tr>
  <tr class="inherited">
    <td>MExt.on</td>
    <td>Switch On Command</td>
    <td>Function</td>
  </tr>
  <tr class="inherited">
    <td>MExt.off</td>
    <td>Switch Off Command</td>
    <td>Function</td>
  </tr>
  <tr>
    <td>MExt.role.locus</td>
    <td>Where execution is bound</td>
    <td>Object</td>
  </tr>
  <tr>
    <td>MExt.role.lCycle</td>
    <td>The Lifecycle model</td>
    <td>Object</td>
  </tr>
  <tr>
    <td>MExt.role.engine</td>
    <td>The Lifecycle engine</td>
    <td>Object</td>
  </tr>
</table>

### Examples

The following example shows a typical use of the model to define a Role driven specification. As it can be seen, the `@Extension` decorator receives the `Role` model as a parameter. The contents of the class corresponds to an typical Role driven specification.  

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
