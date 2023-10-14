# Chameleon API. Trait Model

<p class="lead">Model. Trait</p>

### Type

Model

### Description

The `Trait` model provides to Chameleon the installing & uninstalling logic to create Trait driven extensions. The framework use this model to interpret Trait specifications and to apply the proper deployment logic. For more details about how works the Trait Extension Model see the documentation.

### Metadata

Each `Trait` extension enrich the metadata space of the component where the extension is installed. That space contains all relevant information required to undertake the installing and uninstalling processes and to manage the extension behaviour during its lifetime. The following table summarize all the metadata. Trait specific fields are shown in dark.

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
    <td>MExt.trait.locus</td>
    <td>Where execution is bound</td>
    <td>Object</td>
  </tr>
  <tr>
    <td>MExt.trait.in</td>
    <td>The incomming features</td>
    <td>Object</td>
  </tr>
  <tr>
    <td>MExt.trait.out</td>
    <td>The outgoing features</td>
    <td>Object</td>
  </tr>
</table>

### Examples

The following example shows a typical use of the model to define an Trait driven specification. As it can be seen, the `@Extension` decorator receives the `Trait` model as a parameter. The contents of the class corresponds to a typical Trait driven specification.  

```Javascript
import { Extension } from 'origami.chameleon.js'
import { Trait     } from 'origami.chameleon.traits.js'
import { Before    } from 'origami.chameleon.traits.js'
import { After     } from 'origami.chameleon.traits.js'
import { Override  } from 'origami.chameleon.traits.js'
import { Discard   } from 'origami.chameleon.traits.js'

@Extension (Trait)
class Ext {
  constructor () {
    ...
  }

  @Before   fx (x) { ... }
  @After    fy (x) { ... }
  @Override fz (x) { ... }
  @Discard  fw (x) { ... }
}
```
