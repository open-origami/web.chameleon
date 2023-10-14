# Chameleon API

<p class="lead">Helper. Inspect.Registry</p>

### Type

  Helper

### Description

The `Registry` helper is responsible to manage the collection of information stored in a metadata space. A registry provides a set of member methods to create, read, update and remove metadata. Internally any metadata space is arranged as a JavaScript object. Hence, to access any key it is enough to use a valid expression typically used to explore a data structure Nevertheless, that expression should be provided as parameters of type String or Interpolation Template. See Examples below.    

### Methods

This helper provides several methods to operate with information stored in a metadata space. The following table describe each method and their required parameters.

<table>
  <tr>
    <th>Name</th>
    <th>Parameters</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>get</td>
    <td>[String key]</td>
    <td>Returns metadata in a key</td>
  </tr>
  <tr>
    <td>set</td>
    <td>String key, Any value</td>
    <td>Sets metadata in a key</td>
  </tr>
  <tr>
    <td>add</td>
    <td>String key, Any value</td>
    <td>Adds metadata in a array-key</td>
  </tr>
  <tr>
    <td>keys</td>
    <td></td>
    <td>Returns the set of keys</td>
  </tr>
  <tr>
    <td>has</td>
    <td>String key</td>
    <td>Check if a key is contained</td>
  </tr>
  <tr>
    <td>remove</td>
    <td>String key, [Any e]</td>
    <td>Removes e on key or key</td>
  </tr>
  </tr>
    <tr>
    <td>remove</td>
    <td></td>
    <td>Removes all the metadata</td>
  </tr>
  <tr>
    <td>Hooks.get</td>
    <td>Function hn (String k, Any e) </td>
    <td>Binds hn as a GET hook</td>
  </tr>
  <tr>
    <td>Hooks.set</td>
    <td>Function hn (String k, Any e) </td>
    <td>Binds hn as a SET hook</td>
  </tr>
  <tr>
    <td>Hooks.set</td>
    <td>Function hn (String k, Any e) </td>
    <td>Binds hn as a REMOVE hook</td>
  </tr>
  <tr>
    <td>Hooks.not.get</td>
    <td>Function hn (String k, Any e) </td>
    <td>Unbinds hn as a GET hook</td>
  </tr>
  <tr>
    <td>Hooks.not.set</td>
    <td>Function hn (String k, Any e) </td>
    <td>Unbinds hn as a SET hook</td>
  </tr>
  <tr>
    <td>Hooks.not.set</td>
    <td>Function hn (String k, Any e) </td>
    <td>Unbinds hn as a REMOVE hook</td>
  </tr>
</table>


### Examples

The following code show typical use examples to operate with the metadata record. This listing do not correspond to any particular logic. It is included only for illustrative purposes. Notice how to access records within the metadata space it is used String or Interpolated String keys imitating JavaScript Object expressions.

```Javascript
import { Inspect } from 'origami.chameleon.js'
import { CoreX   } from '...'
import { CoreY   } from '...'

const Prefix = 'Commons';

let RCoreX = Inspect (CoreX).Registry
let RCoreY = Inspect (CoreY).Registry

RCoreX.get (`${Prefix}.Services.logger`)
RCoreX.get (`${Prefix}.Services.logs[1].id`)
RCoreX.get (`${Prefix}.Services.logs[2].id`)
RCoreY.set (`${Prefix}.Services.logger`, {})
RCoreY.add (`${Prefix}.Services.logs`, {...})
RCoreY.add (`${Prefix}.Services.logs`, {...})
```
