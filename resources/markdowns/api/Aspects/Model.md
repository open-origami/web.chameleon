# Chameleon API. Aspect Model

<p class="lead">Model. Aspect</p>

### Type

Model

### Description

The `Aspect` model provides to Chameleon the installing & uninstalling logic to create Aspect driven extensions. The framework use this model to interpret Aspect specifications and to apply the proper deployment logic. For more details about how works the Aspect Extension Model see the documentation.

### Metadata

Each `Aspect` extension enrich the metadata space of the component where the extension is installed. That space contains all relevant information required to undertake the installing and uninstalling processes and to manage the extension behaviour during its lifetime. The following table summarize all the metadata. Aspect specific fields are shown in dark.

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
    <td>MExt.aspect.locus</td>
    <td>Where execution is bound</td>
    <td>Object</td>
  </tr>
  <tr>
    <td>MExt.aspect.in</td>
    <td>The incoming features</td>
    <td>Object</td>
  </tr>
  <tr>
    <td>MExt.aspect.out</td>
    <td>The outgoing features</td>
    <td>Object</td>
  </tr>
</table>

### Examples

The following example shows a typical use of the model to define an Aspect driven specification. As it can be seen, the `@Extension` decorator receives the `Aspect` model as a parameter. The contents of the class corresponds to an typical Aspect driven specification.  

```Javascript
import { Extension } from 'origami.chameleon.js'
import { Aspect    } from 'origami.chameleon.aspects.js'
import { Provided  } from 'origami.chameleon.aspects.js'
import { Except    } from 'origami.chameleon.aspects.js'
import { Before    } from 'origami.chameleon.aspects.js'
import { Around    } from 'origami.chameleon.aspects.js'
import { After     } from 'origami.chameleon.aspects.js'

let FX = 'fx'
let FY = 'fy'

@Extension (Aspect)
class Ext {
  constructor () {
    ...
  }

  @Provided (FX) providedFx (x) { ... }
  @Except   (FX) exceptFx   (x) { ... }
  @Before   (FX) beforeFx   (x) { ... }
  @Around   (FX) aroundFx   (x) { ... }
  @After    (FX) afterFx    (x) { ... }

  @Provided (FY) providedFy (x) { ... }
  @Except   (FY) exceptFy   (x) { ... }
  @Before   (FY) beforeFy   (x) { ... }
  @Around   (FY) aroundFy   (x) { ... }
  @After    (FY) afterFy    (x) { ... }
}
```
