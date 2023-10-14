# Lab 11
## Aspect & Provided Interception

An Aspect based approach can also be used with provided interception to implement the same access permission feature obtained in the previous Lab. The AGuard works as a required condition to activate each effects. Use the button to control the execution.

[Download](../../resources/downloads/labs/lab.11.zip)
     [Run](../../resources/workshops/labs/lab.11)

### Create the SLean Subject

Create a class with two methods to control lean effect. The code is exactly the same to that in the previous lab. Use the Subject extension model and assign a namespace to it with the Point decorator.

- subject.lean.js
- A Subject to create a Lean effect on the view

```code
import { Extension } from '../../lib/origami.chameleon.js'
import { Extends   } from '../../lib/origami.chameleon.js'
import { Subject   } from '../../lib/origami.chameleon.subjects.js'
import { Point     } from '../../lib/origami.chameleon.subjects.js'
import { AGuard    } from './aspect.guard.js'
import { ALog      } from './aspect.log.js'


const On      = true
const Off     = false
const LeanOn  = 'lean-on'
const LeanOff = 'lean-off'
const SPoint  = 'Effects.Lean'
const Name    = '[SLean]'

@Extension (Subject)
  @Point   (SPoint)
  @Extends (AGuard)
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
import { AGuard    } from './aspect.guard.js'
import { ALog      } from './aspect.log.js'

const On      = true
const Off     = false
const ZoomOn  = 'zoom-on'
const ZoomOff = 'zoom-off'
const SPoint  = 'Effects.Zoom'
const Name    = '[SZoom]'

@Extension (Subject)
  @Point   (SPoint)
  @Extends (AGuard)
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
import { AGuard    } from './aspect.guard.js'
import { ALog      } from './aspect.log.js'


const On      = true
const Off     = false
const MinOn   = 'min-on'
const MinOff  = 'min-off'
const SPoint  = 'Effects.Min'
const Name    = ' [SMin]'

@Extension (Subject)
  @Point   (SPoint)
  @Extends (AGuard)
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

### Create the STimer Subject

To randomly select subject controlled effects one more subject must be created. The STimer extension defines two methods to start & stop effects execution. The code is exactly the same to that in the previous lab.

- subject.timer.js
- A Subject to control random effect activation

```code
import { Inspect   } from '../../lib/origami.chameleon.js'
import { Extension } from '../../lib/origami.chameleon.js'
import { Utils     } from '../../lib/origami.chameleon.subjects.js'
import { Subject   } from '../../lib/origami.chameleon.subjects.js'
import { Point     } from '../../lib/origami.chameleon.subjects.js'


const SPoint     = 'Timer'
const EPoint     = 'Effects'
const Extensions = 'Core.Extensions.Installed'
const { floor  } = Math
const { random } = Math
const Delay      = 2000

@Extension (Subject)
@Point     (SPoint)
class STimer {

  constructor (core) {
    this.core = core
    this.isOn = true
    this.start ()
  }

  async start () {
    let ext
    while (this.isOn) {
      let exts = Exts (this.core)
      let next = await Next (exts, ext)
      ext && ext.off ()
      ext = next
      ext && ext.on ()
    }
  }

  stop () {
    this.isOn = false
  }

}

function Exts (core) {
  return function () {
    let isEPoint = Point => Point.startsWith (EPoint)
    let Registry = Inspect (core).registry
    let Exts     = Registry.get (Extensions) || []
    let fExts    = []
    for (let Ext of Exts) {
      if (Ext.subject) {
        let points = Ext.subject.points
        let ext    = Ext.provider.ext
        let match  = points.some (isEPoint)
        match && fExts.push (ext)
      }
    }
    return fExts
  }
}

function Next (iExts, ext) {
  return new Promise (function (ok) {
    let id = setInterval (function () {
      let exts = iExts ()
      let max  = exts.length
      let idx  = floor (max * random ())
      let sExt = exts [idx]

      if (sExt !== ext) {
        clearInterval (id)
        ok (sExt)
      }
    }, Delay)
  })
}

export { STimer }
export default STimer
```

### Create the ALog Aspect

The ALog aspect is installed over the other extensions to provide log feature. It is applied by interception before each method execution. The code is exactly the same to that in the previous lab.

- aspect.log.js
- An Aspect to manage trace logic

```code
import { Extension } from '../../lib/origami.chameleon.js'
import { Aspect    } from '../../lib/origami.chameleon.aspects.js'
import { Before    } from '../../lib/origami.chameleon.aspects.js'
import { Log       } from '../helpers/helper.log.js'

const OnOff = '(on|off)'

@Extension (Aspect)
class ALog {

  constructor (core) {
    this.core = core
  }

  @Before (OnOff)
  log (...args) {
    let Cls  = this
    let text = args.pop ()

    Log (Cls).info (text)
  }

}

export { ALog }
export default ALog
```

### Create the AGuard Aspect

A new Aspect based extension can be defined to control effects activation. As we aim to conditionally launch effects activation instead of use the around policy it better to use the provided policy.

- aspect.guard.js
- A Aspect to control effects activation

```code
import { Extension } from '../../lib/origami.chameleon.js'
import { Aspect    } from '../../lib/origami.chameleon.aspects.js'
import { Provided  } from '../../lib/origami.chameleon.aspects.js'


const OnOff = '(on|off)'

@Extension (Aspect)
class AGuard {

  constructor (core) {}

  @Provided (OnOff)
  check () {
    return !!window.active
  }

}

export { AGuard }
export default AGuard
```

### Create an Entry Point

Define a simple html file as a entry point for your project. Just include a div element working as our view component and a button to include the control of effects activation.

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
    <h2>Lab 11. Aspect & Provided Interception</h2>
    <p>
      An Aspect based approach can also be used with provided interception to
      implement the same access permission feature obtained in the previous Lab.
      The AGuard works as a required condition to activate each effects. Use the
      button to control the execution.
    </p>

    <div class="container">
      <div id="A" class="view">View A</div>
    </div>

    <div class="container">
      <button id="lock" class="button">Start</button>
    </div>

    <script type="module" src="./web/code/build/start.js"></script>
  </body>

</html>
```

### Create a Starting Point

In the starting file all Subject based extensions are firstly installed. The Lock button is fetched to toggle environmental conditions allowing or denying effects activation.

- start.js
- The Starting Point

```code
import { Inspect } from '../lib/origami.chameleon.js'
import { SZoom   } from './extensions/subject.zoom.js'
import { SLean   } from './extensions/subject.lean.js'
import { SMin    } from './extensions/subject.min.js'
import { STimer  } from './extensions/subject.timer.js'


const TYPE   = 'click'
const VIEW   = '.view'
const LOCK   = '#lock'
const STOP   = 'Stop'
const START  = 'Start'
const ACTIVE = 'active'

window.active = false

let view  = document.querySelector (VIEW)
let Lock  = document.querySelector (LOCK)
let Exts  = Inspect (view).extensions

Exts.install (SZoom)
Exts.install (SLean)
Exts.install (SMin)
Exts.install (STimer)

Lock.addEventListener (TYPE, function () {
   window.active = !window.active
   window.active && (Lock.textContent = STOP)
  !window.active && (Lock.textContent = START)
  Lock.classList.toggle (ACTIVE)
})
```
