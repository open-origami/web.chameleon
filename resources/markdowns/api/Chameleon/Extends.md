# Chameleon API

<p class="lead">Decorator. Extends</p>

### Type

Decorator

### Description

The `@Extends` decorator is used to indicate, in a declarative way, the extension to be installed on the class in order to cause effect over all the instances created by the constructor. This decorator can be used multiple times for extending the class with several extensions.

### Parameters

This decorator requires, as a mandatory parameter, the class of the extension to be applied by the installing process. This class can correspond to a self-contained extension or a model-driven one.

<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>Extension</td>
    <td>Class</td>
    <td>The extension to be applied</td>
  </tr>
</table>


### Metadata

The following table summarize the set of metadata included by the `@Extends` decorator once de adaptive process has finished. Notice that this information is a general overview and it can be enriched with additional metadata depending on extension model in use.

<table>
  <tr>
    <th>Key</th>
    <th>Description</th>
    <th>Value / Type</th>
  </tr>
  <tr>
    <td>Core.Extensions.Installed</td>
    <td>The extension`s metadata</td>
    <td>[MExt, ...]</td>
  </tr>
  <tr>
    <td>MExt.class</td>
    <td>The extension class</td>
    <td>class Ext {}</td>
  </tr>
  <tr>
    <td>MExt.ext</td>
    <td>The extension context</td>
    <td> {} instanceof Ext</td>
  </tr>
  <tr>
    <td>MExt.isOn</td>
    <td>Active status Checker </td>
    <td>Function</td>
  </tr>
  <tr>
    <td>MExt.on</td>
    <td>Switch On Command</td>
    <td>Function</td>
  </tr>
  <tr>
    <td>MExt.off</td>
    <td>Switch Off Command</td>
    <td>Function</td>
  </tr>
</table>

### Examples

The following example shows a typical use of the `@Extends` decorator. It is supplied by Chameleon to allow the specification of extensions at design time to be installed at runtime on class loading.

```Javascript
import { Component } from 'origami.chameleon.js'
import { ExtX } from '...'
import { ExtY } from '...'

@Component
  @Extends (ExtX)
  @Extends (ExtY)
class Core {
  constructor () {
    ...
  }

  fx (x) { ... }
  fy (x) { ... }
}
```
