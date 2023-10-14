# Lab 06
## Subject Coordination

This Lab defines the STimer Subject to orchestrate the activation of visual effects supplied by the Subjects created in previous labs. Use the buttons to choose which Subjects to install and observe how they are activated randomly along the time.


[Download](../../resources/downloads/labs/lab.06.zip)
     [Run](../../resources/workshops/labs/lab.06)

### Create the SLean Subject

Create a class with two methods to control lean effect. The code is exactly the same to that in the previous lab. Use the Subject extension model and assign a namespace to it with the Point decorator.

- subject.lean.js
- A Subject to create a Lean effect on the view

```code
import { Extension } from '../../lib/origami.chameleon.js'
import { Subject   } from '../../lib/origami.chameleon.subjects.js'
import { Point     } from '../../lib/origami.chameleon.subjects.js'


const On      = true
const Off     = false
const LeanOn  = 'lean-on'
const LeanOff = 'lean-off'
const SPoint  = 'Effects.Lean'

@Extension (Subject)
@Point     (SPoint)
class SLean {

  constructor (core) {
    this.core = core
    this.off ()
  }

  on () {
    console.log ('[SLean] - On')
    this.core.classList.remove (LeanOff)
    this.core.classList.add    (LeanOn)
    this.isOn = On
  }

  off () {
    console.log ('[SLean] - Off')
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
import { Subject   } from '../../lib/origami.chameleon.subjects.js'
import { Point     } from '../../lib/origami.chameleon.subjects.js'


const On      = true
const Off     = false
const ZoomOn  = 'zoom-on'
const ZoomOff = 'zoom-off'
const SPoint  = 'Effects.Zoom'

@Extension (Subject)
@Point     (SPoint)
class SZoom {

  constructor (core) {
    this.core = core
    this.off ()
  }

  on () {
    console.log ('[SZoom] - On')
    this.core.classList.remove (ZoomOff)
    this.core.classList.add    (ZoomOn)
    this.isOn = On
  }

  off () {
    console.log ('[SZoom] - Off')
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
import { Subject   } from '../../lib/origami.chameleon.subjects.js'
import { Point     } from '../../lib/origami.chameleon.subjects.js'


const On      = true
const Off     = false
const MinOn   = 'min-on'
const MinOff  = 'min-off'
const SPoint  = 'Effects.Min'

@Extension (Subject)
@Point     (SPoint)
class SMin {

  constructor (core) {
    this.core = core
    this.off ()
  }

  on () {
    console.log (' [SMin] - On')
    this.core.classList.remove (MinOff)
    this.core.classList.add    (MinOn)
    this.isOn = On
  }

  off () {
    console.log (' [SMin] - Off')
    this.core.classList.remove (MinOn)
    this.core.classList.add    (MinOff)
    this.isOn = Off
  }

}

export { SMin }
export default SMin
```

### Create the STimer Subject

To randomly select subject controlled effects one more subject must be created. The STimer extension defines two methods to start & stop effects execution applied to intervals of 5 seconds.

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


### Create an Entry Point

Define a simple html file as a entry point for your project. Just include a div element working as our view component and needed buttons to control the effects on the view.

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
    <h2>Lab 6. Subject Coordination</h2>
    <p>
      This Lab defines the STimer Subject to orchestrate along the time the
      activation of visual effects supplied by the Subjects created in previous
      labs. Use the buttons to choose which Subjects to install and observe how
      they are activated randomly along the time.
    </p>

    <div class="container">
      <div class="view">View A</div>
    </div>

    <div class="container">
      <button class="button" data-ext="SZoom">SZoom</button>
      <button class="button" data-ext="SLean">SLean</button>
      <button class="button" data-ext="SMin">SMin</button>
    </div>

    <script type="module" src="./web/code/build/start.js"></script>
  </body>

</html>
```

### Create a Starting Point

In the starting file we fetch all the buttons to toggle installation process of effect subjects. In addition the STimer Subject is installed and started by default to activate effects timedly.

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
const BTNS   = '.button'
const ACTIVE = 'active'

let view    = document.querySelector    (VIEW)
let Btns    = document.querySelectorAll (BTNS)
let Exts    = Inspect (view).extensions
let Subject = { SZoom, SLean, SMin }
let Install = {};

[...Btns].forEach (function (btn) {

  btn.addEventListener (TYPE, function (e) {
    let Key = btn.dataset.ext
    let Ext = Subject[Key]
    !Install[Key] && Exts.install   (Ext)
     Install[Key] && Exts.uninstall (Ext)
     Install[Key] = !Install[Key]

     btn.classList.toggle (ACTIVE)
  })

})

Exts.install (STimer)
```
