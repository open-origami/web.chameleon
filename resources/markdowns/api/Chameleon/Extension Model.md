# Chameleon API

<p class="lead">Decorator. Extension (Model)</p>

### Type

  Decorator

### Description

The `@Extension` decorator is used to mark a class as a  model-driven adaptive extension. A model-driven adaptive extension is a class specifying some adaptive behavior. The specification is interpreted by the framework and then, it is translated on the fly in a equivalent self-contained extension.

### Parameters

This decorator requires, as a mandatory parameter, the class of the model bound to the specification. That model is used by the framework to properly interpret the specification in order to create a regular extension that can be used in the installation processes.

<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>Extension</td>
    <td>Class</td>
    <td>The model extension class</td>
  </tr>
</table>

### Metadata

The following table summarize the information that the framework register as metadata for the class representing the extension. Notice that this information is a general overview and it can be enriched with additional data depending on the type of the extension in use. 

<table>
  <tr>
    <th>Key</th>
    <th>Description</th>
    <th>Value / Type</th>
  </tr>
  <tr>
    <td>Core.Id</td>
    <td>The class Id</td>
    <td>String</td>
  </tr>
  <tr>
    <td>Core.Family</td>
    <td>The family of the artifact</td>
    <td>Extension</td>
  </tr>
  <tr>
    <td>Extension.Model</td>
    <td>The extension model class</td>
    <td>Class</td>
  </tr>
  <tr>
    <td>Extension.Provider</td>
    <td>The generated regular extension class</td>
    <td>Class</td>
  </tr>
</table>

### Examples

The following example shows a code defining an adaptive extension as a decorated class. The class DO NOT directly include members methods to undertake the installing and uninstalling processes. Instead, it includes adaptive logic to be interpreted as a specification by the model. In this example `Trait` is the selected model.

```Javascript
import { Extends } from 'origami.chameleon.js'
import { Trait   } from 'origami.chameleon.traits.js'

const EXT         = 'ExtX';
const INSTALLED   = `${EXT} successfully installed`;
const UNINSTALLED = `${EXT} successfully uninstalled`;

@Extension (Trait)
class ExtX {
  constructor (core) {
    this.core = core
  }

  toString  () {
    return this.core.toString ()
  }

  toJson  () {
    return JSON.Stringify (this.core)
  }

}

export { ExtX }
```
