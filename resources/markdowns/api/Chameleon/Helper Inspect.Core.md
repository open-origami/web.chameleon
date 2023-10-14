# Chameleon API

<p class="lead">Helper. Inspect.Core</p>

### Type

  Helper

### Description

The `Core` helper is a module responsible to centralize all the low level adaptive primitives defined in Chameleon. For convenience, this layer of the architecture is protected and it is not provided as a public resource. 


### Examples

Maybe in following versions the core adapting capabilities used by Chameleon should be provided as public resources. In this version, this layer is reserved for internal use. This fact responds to a design decision and is not a problem in the use of framrwork.  

```Javascript
import { Inspect } from 'origami.chameleon.js'
import { CoreX   } from '...'
import { CoreY   } from '...'

let ICoreX = Inspect (CoreX)
let ICoreY = Inspect (CoreY)

ICoreX.Core
ICoreY.Core
```
