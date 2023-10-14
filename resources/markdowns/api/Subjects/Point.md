# Chameleon API. Subject Model

<p class="lead">Decorator. Point</p>

### Type

Decorator

### Description

The `@Point` decorator is used to indicate that the marked class is a Subject driven extensible accessible by a certain entry point. An entry point is a DOT separated String representing an entry in a virtual name space. This entry is used to access the subject using the `Utils` helper. For details about how works the Subject Extension Model see the documentation.

### Parameters

This decorator requires, as a mandatory parameter, the entry point where the associated Subject must be registered. The entry point is a DOT separated String similar to object exploring expressions used in JavaScript. See examples for details.  

<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>Entry Point</td>
    <td>String</td>
    <td>The Entry point</td>
  </tr>
</table>

### Metadata

The following table summarize the set of metadata included by the `@Point` decorator. This information is used to guide the installation & uninstallation processes carried out by Chameleon on a specific component.

<table>
  <tr>
    <th>Key</th>
    <th>Description</th>
    <th>Value / Type</th>
  </tr>
  <tr>
    <td>Extension.Subject.Points</td>
    <td>The set of entry points</td>
    <td>[String, ...]</td>
  </tr>
</table>

### Examples

The following example shows a typical use of the `@Point` decorator in a Subject driven extension. As it can be seen, each Subject MUST always include a point decorator and CAN, optionally, use several ones. 

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
