# Lab 12
## A Simple Role

This Lab creates a Role based extension to redefine focus management. The focus is get and lost alternatively when the view is clicked. Certain configured effects have been applied to visually express the changes. Click on the view to check the results.

[Download](../../resources/downloads/labs/lab.12.zip)
     [Run](../../resources/workshops/labs/lab.12)

### Create the SLean Subject

Create a class with two methods to control lean effect. The code is exactly the same to that in the previous lab. Use the Subject extension model and assign a namespace to it with the Point decorator.

- subject.lean.js
- A Subject to create a Lean effect on the view

```code
import { Extension } from '../../lib/origami.chameleon.js'
import { Extends   } from '../../lib/origami.chameleon.js'
import { Subject   } from '../../lib/origami.chameleon.subjects.js'
import { Point     } from '../../lib/origami.chameleon.subjects.js'
import { ALog      } from './aspect.log.js'


const On      = true
const Off     = false
const LeanOn  = 'lean-on'
const LeanOff = 'lean-off'
const SPoint  = 'Effects.Lean'
const Name    = '[SLean]'

@Extension (Subject)
  @Point   (SPoint)
  @Extends (ALog)
class SLean {

  constructor (core) {
    this.core = core
    this.name = Name
    this.off ()
  }

  on () {
    this.core.classList.remove (LeanOff)
    this.core.classList.add    (LeanOn)
    this.isOn = On
  }

  off () {
    this.core.classList.remove (LeanOn)
    this.core.classList.add    (LeanOff)
    this.isOn = Off
  }

}

export { SLean }
export default SLean
```

### Create the SZoom Subject

Create a class with two methods to control zoom effect. The code is exactly the same to that in the previous lab. Use the Subject extension model and assign a namespace to it with the Point decorator.

- subject.zoom.js
- A Subject to create a Zoom effect on the view

```code
import { Extension } from '../../lib/origami.chameleon.js'
import { Extends   } from '../../lib/origami.chameleon.js'
import { Subject   } from '../../lib/origami.chameleon.subjects.js'
import { Point     } from '../../lib/origami.chameleon.subjects.js'
import { ALog      } from './aspect.log.js'


const On      = true
const Off     = false
const ZoomOn  = 'zoom-on'
const ZoomOff = 'zoom-off'
const SPoint  = 'Effects.Zoom'
const Name    = '[SZoom]'

@Extension (Subject)
  @Point   (SPoint)
  @Extends (ALog)
class SZoom {

  constructor (core) {
    this.core = core
    this.name = Name
    this.off ()
  }

  on () {
    this.core.classList.remove (ZoomOff)
    this.core.classList.add    (ZoomOn)
    this.isOn = On
  }

  off () {
    this.core.classList.remove (ZoomOn)
    this.core.classList.add    (ZoomOff)
    this.isOn = Off
  }

}

export { SZoom }
export default SZoom
```

### Create the SMin Subject

Create now a class with two methods to control min effect. The code is exactly the same to that in the previous lab. Use the Subject extension model and assign a namespace to it with the Point decorator.

- subject.min.js
- A Subject to create a Min effect on the view

```code
import { Extension } from '../../lib/origami.chameleon.js'
import { Extends   } from '../../lib/origami.chameleon.js'
import { Subject   } from '../../lib/origami.chameleon.subjects.js'
import { Point     } from '../../lib/origami.chameleon.subjects.js'
import { ALog      } from './aspect.log.js'


const On      = true
const Off     = false
const MinOn   = 'min-on'
const MinOff  = 'min-off'
const SPoint  = 'Effects.Min'
const Name    = ' [SMin]'

@Extension (Subject)
  @Point   (SPoint)
  @Extends (ALog)
class SMin {

  constructor (core) {
    this.core = core
    this.name = Name
    this.off ()
  }

  on () {
    this.core.classList.remove (MinOff)
    this.core.classList.add    (MinOn)
    this.isOn = On
  }

  off () {
    this.core.classList.remove (MinOn)
    this.core.classList.add    (MinOff)
    this.isOn = Off
  }

}

export { SMin }
export default SMin
```

### Create the RFocus Role

A Role based extension can be defined to control effect activation driven by events. Once this role is installed, each click makes the view takes and lost the focus alternatively.   

- role.focus.js
- A Role to manage focus

```code
import { Extension } from '../../lib/origami.chameleon.js'
import { Extends   } from '../../lib/origami.chameleon.js'
import { Role      } from '../../lib/origami.chameleon.roles.js'
import { State     } from '../../lib/origami.chameleon.roles.js'
import { Begin     } from '../../lib/origami.chameleon.roles.js'
import { Route     } from '../../lib/origami.chameleon.roles.js'
import { Utils     } from '../../lib/origami.chameleon.subjects.js'


const Tap      = 'click'
const FocusIn  = 'focusIn'
const FocusOut = 'focusOut'
const AttIn    = 'focus-in'
const AttOut   = 'focus-out'

@Extension (Role)
class RFocus {

  constructor (core) {
    let kIn  = core.getAttribute (AttIn)
    let kOut = core.getAttribute (AttOut)
    this.focusIn  = Utils (core).Effects[kIn]
    this.focusOut = Utils (core).Effects[kOut]
  }

  @State
    @Route (FocusOut, Tap)
  focusIn () {
    this.focusIn.on ()
    this.focusOut.off ()
  }

  @State
    @Begin
    @Route (FocusIn, Tap)
  focusOut () {
    this.focusIn.off ()
    this.focusOut.on ()
  }

}

export { RFocus }
export default RFocus
```

### Create an Entry Point

Define a simple html file as a entry point for your project. Just include a div element working as our view component. In this case no buttons are needed as the interaction is undertaken directly on the view.

- index.html
- The entry point for the project

```code
<!DOCTYPE html>
<html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="./web/assets/css/styles.css">
    <link rel="stylesheet" href="./web/assets/css/extensions/subject.zoom.css">
    <link rel="stylesheet" href="./web/assets/css/extensions/subject.lean.css">
    <link rel="stylesheet" href="./web/assets/css/extensions/subject.min.css">

    <title>Origami Chameleon Labs</title>
  </head>

  <body>
    <h1>Origami Chameleon Labs</h1>
    <h2>Lab 12. A Simple Role </h2>
    <p>
      This Lab creates a Role based extension to redefine focus management.
      The focus is get and lost alternatively when the view is clicked. Certain
      configured effects have been applied to visually express the changes.
      Click on the view to check the results.
    </p>

    <div class="container">
      <div id="A" class="view" focus-in="Zoom" focus-out="Lean">View A</div>
    </div>

    <script type="module" src="./web/code/build/start.js"></script>
  </body>

</html>
```

### Create a Starting Point

The logic in the starting file is quite simple. Just it is required to install all Subject based extensions used to control visual effects and then the role supporting the interaction over the view.

- start.js
- The Starting Point

```code
import { Inspect } from '../lib/origami.chameleon.js'
import { SZoom   } from './extensions/subject.zoom.js'
import { SLean   } from './extensions/subject.lean.js'
import { SMin    } from './extensions/subject.min.js'
import { RFocus  } from './extensions/role.focus.js'

let view = document.querySelector ('.view')

Inspect (view).extensions.install (SZoom)
Inspect (view).extensions.install (SLean)
Inspect (view).extensions.install (SMin)
Inspect (view).extensions.install (RFocus)
```
