
# Lab 14
## Role Coordination

In the previous lab RFocus was applied on both views to get an autonomous focus management. In this lab the RLock role is created to coordinate the views in such manner that when a view gains the focus, the other loses it and vice versa. Click on the views to verify the effect.

[Download](../../resources/downloads/labs/lab.14.zip)
     [Run](../../resources/workshops/labs/lab.14)

### Create the SLean Subject

Create a class with two methods to control lean effect. The code is exactly the same to that in the the previous lab. Use the Subject extension model and assign a namespace to it with the Point decorator.

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

Create a class with two methods to control zoom effect. The code is exactly the same to that in the the previous lab. Use the Subject extension model and assign a namespace to it with the Point decorator.

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

Create now a class with two methods to control min effect. The code is exactly the same to that in the the previous lab. Use the Subject extension model and assign a namespace to it with the Point decorator.

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

Create a Role to manage the focus. Once installed each click makes the view takes and lost the focus alternatively. The code is exactly the same to that in the the previous lab.

- role.focus.js
- A Role to manage the focus

```code
import { Extension } from '../../lib/origami.chameleon.js'
import { Role      } from '../../lib/origami.chameleon.roles.js'
import { State     } from '../../lib/origami.chameleon.roles.js'
import { Begin     } from '../../lib/origami.chameleon.roles.js'
import { Route     } from '../../lib/origami.chameleon.roles.js'
import { Utils     } from '../../lib/origami.chameleon.subjects.js'


const FocusIn  = 'focusIn'
const FocusOut = 'focusOut'
const Lock     = 'lock'
const Unlock   = 'unlock'

@Extension (Role)
class RFocus {

  constructor (core) {
    this.focusIn  = Utils (core).Effects.Zoom
    this.focusOut = Utils (core).Effects.Lean
  }

  @State
    @Route (FocusOut, Unlock)
  focusIn () {
    this.focusIn.on ()
    this.focusOut.off ()
  }

  @State
    @Begin
    @Route (FocusIn, Lock)
  focusOut () {
    this.focusIn.off ()
    this.focusOut.on ()
  }

}

export { RFocus }
export default RFocus
```

### Create a RLock Role

To manage focus according to a mutual exclusion policy, a new role is created. This Role is installed on each view to work as a paired lock guaranteeing this behaviors.

- role.lock.js
- A Role to coordinate paired views

```code
import { Extension } from '../../lib/origami.chameleon.js'
import { Role      } from '../../lib/origami.chameleon.roles.js'
import { State     } from '../../lib/origami.chameleon.roles.js'
import { Begin     } from '../../lib/origami.chameleon.roles.js'
import { Route     } from '../../lib/origami.chameleon.roles.js'
import { Utils     } from '../../lib/origami.chameleon.subjects.js'
import { Fire      } from '../helpers/helper.fire.js'
import { Find      } from '../helpers/helper.find.js'


const Tap      = 'click'
const Lock     = 'lock'
const Unlock   = 'unlock'
const Require  = 'require'
const Release  = 'release'
const Ref      = 'ref'

@Extension (Role)
class RLock {

  constructor (core) {
    let ref   = core.getAttribute (Ref)
    let peer  = Find (ref)
    let fire  = Fire (core)
    this.fire = fire

    peer.addEventListener (Require, function () { fire (Unlock) })
    peer.addEventListener (Release, function () { fire (Lock)   })
  }

  @State
    @Begin
    @Route (Lock, Tap)
  init () {
  }

  @State
    @Route (Unlock, Tap)
    @Route (Unlock, Unlock)
  lock () {
    this.fire (Require)
    this.fire (Lock)
  }

  @State
    @Route (Lock, Tap)
    @Route (Lock, Lock)
  unlock () {
    this.fire (Release)
    this.fire (Unlock)
  }

}

export { RLock }
export default RLock
```


### Create an Entry Point

Define a simple html file as a entry point for your project. In this case include two views with differentiated ids. No buttons are needed as the interaction is undertaken directly on the view.

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
    <h2>Lab 14. Role Coordination </h2>
    <p>
      In the previous lab RFocus was applied on both views to get an autonomus
      focus management. In this lab the RLock role is created to coordinate the
      views in such manner that when a view gains the focus, the other loses
      it and vice versa. Click on the views to verify the effect.
    </p>

    <div class="container">
      <div id="A" ref="#B" class="view" left>View A</div>
      <div id="B" ref="#A" class="view" right>View B</div>
    </div>

    <script type="module" src="./web/code/build/start.js"></script>
  </body>

</html>
```

### Create a Starting Point

The logic in the starting file is quite simple. In this case all Subject based extensions used to control visual effects are installed over any view included in the entry file.

- start.js
- The Starting Point

```code
import { Inspect } from '../lib/origami.chameleon.js'
import { SZoom   } from './extensions/subject.zoom.js'
import { SLean   } from './extensions/subject.lean.js'
import { SMin    } from './extensions/subject.min.js'
import { RFocus  } from './extensions/role.focus.js'
import { RLock   } from './extensions/role.lock.js'

let views = document.querySelectorAll ('.view');

[...views].forEach (function (view) {
  Inspect (view).extensions.install (SZoom)
  Inspect (view).extensions.install (SLean)
  Inspect (view).extensions.install (RFocus)
  Inspect (view).extensions.install (RLock)
})
```
