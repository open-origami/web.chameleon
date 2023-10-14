# Chameleon API. Subject Model

<p class="lead">Model. Subject</p>

### Type

Model

### Description

The `Subject` model provides to Chameleon the installing & uninstalling logic to create Subject driven extensions. The framework use this model to interpret Subject specifications and to apply the proper deployment logic. For more details about how works the Subject Extension Model see the documentation.

### Metadata

Each `Subject` extension enrich the metadata space of the component where the extension is installed. That space contains all relevant information required to undertake the installing and uninstalling processes and to manage the extension behavior during its lifetime. The following table summarize all the metadata. Subject specific fields are shown in dark.

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
    <td>MExt.subject.locus</td>
    <td>Where execution is bound</td>
    <td>Object</td>
  </tr>
  <tr>
    <td>MExt.subject.points</td>
    <td>The entry points</td>
    <td>[String, ...]</td>
  </tr>
</table>

### Examples

The following example shows a typical use of the model to define an Subject driven specification. As it can be seen, the `@Extension` decorator receives the `Subject` model as a parameter. The contents of the class corresponds to a typical Subject driven specification.  

```Javascript
import { Extension } from 'origami.chameleon.js'
import { Subject   } from 'origami.chameleon.subjects.js'
import { Point     } from 'origami.chameleon.subjects.js'

@Extension (Subject)
  @Point ('Commons.Ext.A')
  @Point ('Commons.Ext.B')
class Ext {
  constructor () {
    ...
  }

  fx (x) { ... }
  fy (x) { ... }
}
```
