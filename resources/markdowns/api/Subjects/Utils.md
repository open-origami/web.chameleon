# Chameleon API. Subject Model

<p class="lead">Helper. Utils</p>

### Type

  Helper

### Description

The `Utils` helper is used to provide access to the space of Subjects installed over a component. User can make use of this helper to get the object representing the subject and access its methods and properties.

### Parameters

This assistant requires two mandatory parameters provided as consecutive evaluation phases. The first one refers to the target component where Subject was installed. The second one is the entry point defined on the Subject body that was used to register it during the installation phase.

<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>Component</td>
    <td>Class | Object</td>
    <td>The target component</td>
  </tr>
  <tr>
    <td>Point</td>
    <td>String</td>
    <td>The entry point</td>
  </tr>
</table>


### Examples

The following example shows the definition of a typical subject where the `@Point` decorator is used to define two different entry points to access that Subject.

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

By using the `Inspect` helper provided by Chameleon, we are able to install this subject in different components. Then the `Utils` helper in the subject model can be used to get access of that subject in a simple and straightforward way. Notice how the JS expression to access the subject from the `Utils` helper corresponds to one of the entry point defined in the subject.    

```Javascript
import { Inspect } from 'origami.chameleon.js'
import { Utils   } from 'origami.chameleon.subjects.js'
import { Ext     } from '...'
import { CoreX   } from '...'
import { CoreY   } from '...'

Inspect (CoreX).extensions.install (Ext)
Inspect (CoreY).extensions.install (Ext)

let SXA = Utils (CoreX).commons.Ext.A
let SXB = Utils (CoreX).commons.Ext.B
let SYA = Utils (CoreX).commons.Ext.A
let SYB = Utils (CoreX).commons.Ext.B

console.assert (SXA === SXB)
console.assert (SYA === SYB)
```
