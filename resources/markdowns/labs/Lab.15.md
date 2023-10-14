
# Lab 15
## Role Synchronization

In this last Lab we add content to the views. View A will play a video whilst view B present snapshots from it timedly. To sync the contents several roles have been created. Use the Play & Stop buttons to control the video play and let check the results.

[Download]()
     [Run](../../resources/workshops/labs/lab.15)

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

To manage focus according to a mutual exclusion policy, a new role is created. This Role is installed on each view to work as a paired lock. The code is exactly the same to that in the the previous lab.

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

### Create the TSerie Trait

To convert view B in a image sequencer lets create the TSerie Trait. This extensions moves a circular collection of child elements and contribute the component with two control methods to move the index.

- trait.serie.js
- A Trait to manage a collection of child elements.

```code
import { Inspect   } from '../../lib/origami.chameleon.js'
import { Extension } from '../../lib/origami.chameleon.js'
import { Extends   } from '../../lib/origami.chameleon.js'
import { Trait     } from '../../lib/origami.chameleon.traits.js'
import { Override  } from '../../lib/origami.chameleon.traits.js'
import { Utils     } from '../../lib/origami.chameleon.subjects.js'
import { SShow     } from './subject.show.js'


const Slides = 'img'
const Fouc   = 'fouc'

let Install = ext  => core => Inspect (core).extensions.install (ext)
let Show    = core => Utils (core).Effects.Show.on  ()
let Hide    = core => Utils (core).Effects.Show.off ()
let Reveal  = core => core.classList.remove (Fouc)

@Extension (Trait)
class TSerie {

  constructor (core) {
    let slides = [...core.querySelectorAll (Slides)]
    let max    = slides.length
    let idx    = 0

    slides.forEach (Install (SShow))
    slides.forEach (Hide)
    slides.forEach (Reveal)

    this.Show = function ()  { Show (slides[idx])    }
    this.Hide = function ()  { Hide (slides[idx])    }
    this.Inc  = function ()  { idx = (idx + 1) % max }
    this.Dec  = function ()  { idx = (idx - 1) % max }
    this.Set  = function (n) { idx = n % max         }
  }

  previous () {
    this.Hide ()
    this.Dec  ()
    this.Show ()
  }

  next () {
    this.Hide ()
    this.Inc  ()
    this.Show ()
  }

  start () {
    this.Hide ()
    this.Set (0)
    this.Show ()
  }

}

export { TSerie }
export default TSerie
```

### Step Title

To convert view A in a timeline managed video lets create a new Role responsible to emit a Tick event each time the video player achieve a time stamp on the timeline.

- role.tick.js
- A Role to signal each new timestamp

```code
import { Extension } from '../../lib/origami.chameleon.js'
import { Role      } from '../../lib/origami.chameleon.roles.js'
import { State     } from '../../lib/origami.chameleon.roles.js'
import { Begin     } from '../../lib/origami.chameleon.roles.js'
import { Guard     } from '../../lib/origami.chameleon.roles.js'
import { Route     } from '../../lib/origami.chameleon.roles.js'
import { Fire      } from '../helpers/helper.fire.js'


const TStamp = 'timeupdate'
const Tick   = 'tick'
const Wait   = 'wait'
const Signal = 'signal'

const TRef  = '.timeline'
const VRef  = 'video'
const LSep  = ' '
const TSep  = ':'
const { floor } = Math


@Extension (Role)
class RTick {

  constructor (core) {
    let times  = core.querySelector (TRef)
    let video  = core.querySelector (VRef)

    this.cache = []
    this.ctx   = {}
    this.fire  = Fire  (core)
    this.times = TLine (times)
    this.match = Match (this)

    video.addEventListener (TStamp, function () {
      let time = video.currentTime
      this.ctx = { time }
      this.fire (Tick)
    }.bind (this))

  }

  @State
    @Begin
    @Guard (Tick)
    @Route (Wait)
  wait () {
    let ctx  = this.ctx
    let time = ctx.time
    let ok   = this.match (time)

    ok && this.fire (Signal)
  }

}

function TLine (node) {
  let text  = node.textContent
  let times = text.split (LSep)
  let line  = []
  for (let time of times) {
    let [min, sec] = time.split (TSep)
    let iMin  = parseInt (min)
    let iSec  = parseInt (sec)
    let stamp = 60 * iMin + iSec
    stamp && line.push (stamp)
  }
  return line
}

function Match (ext) {
  return function (stamp) {
    let time  = floor (stamp)
    let times = ext.times
    let cache = ext.cache

    let ok = true
    ok = ok &&  times.includes (time)
    ok = ok && !cache.includes (time)
    ok && cache.push (time)

    return ok
  }
}

export { RTick }
export default RTick
```

### Create a RSync Role

The RTick role installed on view A can be used to reactively connect with a new role responsible to move slides managed by TSerie. In this manner a synchronization effect is obtained.

- Step.file.js
- Step file caption

```code
import { Extension } from '../../lib/origami.chameleon.js'
import { Role      } from '../../lib/origami.chameleon.roles.js'
import { State     } from '../../lib/origami.chameleon.roles.js'
import { Begin     } from '../../lib/origami.chameleon.roles.js'
import { Guard     } from '../../lib/origami.chameleon.roles.js'
import { Route     } from '../../lib/origami.chameleon.roles.js'
import { Find      } from '../helpers/helper.find.js'
import { Fire      } from '../helpers/helper.fire.js'


const Ref      = 'ref'
const FocusIn  = 'focusIn'
const FocusOut = 'focusOut'
const Signal   = 'signal'
const Next     = 'next'

@Extension (Role)
class RSync {

  constructor (core) {
    let ref   = core.getAttribute (Ref)
    let peer  = Find (ref)
    let fire  = Fire (core)
    this.core = core

    peer.addEventListener (Signal, function () { fire (Next) })
  }

  @State
    @Begin
    @Guard (Next)
    @Route (Next)
  next () {
    this.core.next ()
  }

}

export { RSync }
export default RSync
```

### Create an Entry Point

In the entry file lets define the two views A & B. As a child in view A include a video player and include a timeline with convenient timestamps. In the view B include needed images working as slides.

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
    <link rel="stylesheet" href="./web/assets/css/extensions/subject.show.css">
    <link rel="stylesheet" href="./web/assets/css/extensions/subject.zoom.css">
    <link rel="stylesheet" href="./web/assets/css/extensions/subject.lean.css">
    <link rel="stylesheet" href="./web/assets/css/extensions/subject.min.css">

    <title>Origami Chameleon Labs</title>
  </head>

  <body>
    <h1>Origami Chameleon Labs</h1>
    <h2>Lab 15. Role Synchronization </h2>
    <p>
      In this last Lab we add content to the views. View A will play a video
      whilst view B present snapshots from it timedly. To sync the contents
      several roles have been created. Use the Play & Stop buttons to control
      the video play and let check the results.
    </p>

    <div class="container">
      <div id="A" ref="#B" class="view" left>
        <div class="timeline">
          0:01  0:10  0:17  0:28  0:37  0:46  0:54  1:04  2:02  2:11
          2:20  2:28  2:35  2:43  2:51  2:59  3:06  3:15  3:24  3:35
          4:00  4:10  4:19  4:27  4:37  4:47  4:59  5:25  5:34  5:43
          5:51  6:14  6:22  6:43  6:50  7:16  7:23  7:32  7:43  7:52
          8:00  8:10  8:20  8:28  8:46  8:56  9:35  9:45  9:52 10:07
         10:18 10:30 10:55 11:07 11:14 11:25 11:32 11:39 11:48 11:58
         12:03 12:10 12:25 12:36 12:46 12:57 13:12 13:18 13:53 13:59
         14:15 14:24 14:36 14:43 14:53 15:02 15:18 15:38 15:44 15:54
         16:03 16:11 16:34 16:42 16:52 16:59 17:05 17:12 17:18 18:09
         18:17 18:55 19:18 19:33
        </div>
        <video>
          <source src="./web/assets/video/video.mp4" type="video/mp4">
        </video>
      </div>
      <div id="B" ref="#A" class="view" right>
        <img class="image fouc" src="./web/assets/img/image.01.png">
        <img class="image fouc" src="./web/assets/img/image.02.png">
        <img class="image fouc" src="./web/assets/img/image.03.png">
        <img class="image fouc" src="./web/assets/img/image.04.png">
        <img class="image fouc" src="./web/assets/img/image.05.png">
        <img class="image fouc" src="./web/assets/img/image.06.png">
        <img class="image fouc" src="./web/assets/img/image.07.png">
        <img class="image fouc" src="./web/assets/img/image.08.png">
        <img class="image fouc" src="./web/assets/img/image.09.png">

        <img class="image fouc" src="./web/assets/img/image.10.png">
        <img class="image fouc" src="./web/assets/img/image.11.png">
        <img class="image fouc" src="./web/assets/img/image.12.png">
        <img class="image fouc" src="./web/assets/img/image.13.png">
        <img class="image fouc" src="./web/assets/img/image.14.png">
        <img class="image fouc" src="./web/assets/img/image.15.png">
        <img class="image fouc" src="./web/assets/img/image.16.png">
        <img class="image fouc" src="./web/assets/img/image.17.png">
        <img class="image fouc" src="./web/assets/img/image.18.png">
        <img class="image fouc" src="./web/assets/img/image.19.png">

        <img class="image fouc" src="./web/assets/img/image.20.png">
        <img class="image fouc" src="./web/assets/img/image.21.png">
        <img class="image fouc" src="./web/assets/img/image.22.png">
        <img class="image fouc" src="./web/assets/img/image.23.png">
        <img class="image fouc" src="./web/assets/img/image.24.png">
        <img class="image fouc" src="./web/assets/img/image.25.png">
        <img class="image fouc" src="./web/assets/img/image.26.png">
        <img class="image fouc" src="./web/assets/img/image.27.png">
        <img class="image fouc" src="./web/assets/img/image.28.png">
        <img class="image fouc" src="./web/assets/img/image.29.png">

        <img class="image fouc" src="./web/assets/img/image.30.png">
        <img class="image fouc" src="./web/assets/img/image.31.png">
        <img class="image fouc" src="./web/assets/img/image.32.png">
        <img class="image fouc" src="./web/assets/img/image.33.png">
        <img class="image fouc" src="./web/assets/img/image.34.png">
        <img class="image fouc" src="./web/assets/img/image.35.png">
        <img class="image fouc" src="./web/assets/img/image.36.png">
        <img class="image fouc" src="./web/assets/img/image.37.png">
        <img class="image fouc" src="./web/assets/img/image.38.png">
        <img class="image fouc" src="./web/assets/img/image.39.png">

        <img class="image fouc" src="./web/assets/img/image.40.png">
        <img class="image fouc" src="./web/assets/img/image.41.png">
        <img class="image fouc" src="./web/assets/img/image.42.png">
        <img class="image fouc" src="./web/assets/img/image.43.png">
        <img class="image fouc" src="./web/assets/img/image.44.png">
        <img class="image fouc" src="./web/assets/img/image.45.png">
        <img class="image fouc" src="./web/assets/img/image.46.png">
        <img class="image fouc" src="./web/assets/img/image.47.png">
        <img class="image fouc" src="./web/assets/img/image.48.png">
        <img class="image fouc" src="./web/assets/img/image.49.png">

        <img class="image fouc" src="./web/assets/img/image.50.png">
        <img class="image fouc" src="./web/assets/img/image.51.png">
        <img class="image fouc" src="./web/assets/img/image.52.png">
        <img class="image fouc" src="./web/assets/img/image.53.png">
        <img class="image fouc" src="./web/assets/img/image.54.png">
        <img class="image fouc" src="./web/assets/img/image.55.png">
        <img class="image fouc" src="./web/assets/img/image.56.png">
        <img class="image fouc" src="./web/assets/img/image.57.png">
        <img class="image fouc" src="./web/assets/img/image.59.png">
        <img class="image fouc" src="./web/assets/img/image.59.png">

        <img class="image fouc" src="./web/assets/img/image.60.png">
        <img class="image fouc" src="./web/assets/img/image.61.png">
        <img class="image fouc" src="./web/assets/img/image.62.png">
        <img class="image fouc" src="./web/assets/img/image.63.png">
        <img class="image fouc" src="./web/assets/img/image.64.png">
        <img class="image fouc" src="./web/assets/img/image.65.png">
        <img class="image fouc" src="./web/assets/img/image.66.png">
        <img class="image fouc" src="./web/assets/img/image.67.png">
        <img class="image fouc" src="./web/assets/img/image.68.png">
        <img class="image fouc" src="./web/assets/img/image.69.png">

        <img class="image fouc" src="./web/assets/img/image.70.png">
        <img class="image fouc" src="./web/assets/img/image.71.png">
        <img class="image fouc" src="./web/assets/img/image.72.png">
        <img class="image fouc" src="./web/assets/img/image.73.png">
        <img class="image fouc" src="./web/assets/img/image.74.png">
        <img class="image fouc" src="./web/assets/img/image.75.png">
        <img class="image fouc" src="./web/assets/img/image.76.png">
        <img class="image fouc" src="./web/assets/img/image.77.png">
        <img class="image fouc" src="./web/assets/img/image.78.png">
        <img class="image fouc" src="./web/assets/img/image.79.png">

        <img class="image fouc" src="./web/assets/img/image.80.png">
        <img class="image fouc" src="./web/assets/img/image.81.png">
        <img class="image fouc" src="./web/assets/img/image.82.png">
        <img class="image fouc" src="./web/assets/img/image.83.png">
        <img class="image fouc" src="./web/assets/img/image.84.png">
        <img class="image fouc" src="./web/assets/img/image.85.png">
        <img class="image fouc" src="./web/assets/img/image.86.png">
        <img class="image fouc" src="./web/assets/img/image.87.png">
        <img class="image fouc" src="./web/assets/img/image.88.png">
        <img class="image fouc" src="./web/assets/img/image.89.png">

        <img class="image fouc" src="./web/assets/img/image.90.png">
        <img class="image fouc" src="./web/assets/img/image.91.png">
        <img class="image fouc" src="./web/assets/img/image.92.png">
        <img class="image fouc" src="./web/assets/img/image.93.png">
        <img class="image fouc" src="./web/assets/img/image.94.png">
      </div>
    </div>

    <div class="container buttons">
      <button id="play" class="button">Play</button>
      <button id="stop" class="button active">Stop</button>
    </div>

    <script type="module" src="./web/code/build/start.js"></script>
  </body>

</html>
```

### Create a Starting Point

And finally, the logic in the starting file install correct extensions on each view and fetch two buttons to work as play & pause controls. Now as video in view A goes forward, images in view B will move from one to the next.

- start.js
- The Starting Point

```code
import { Inspect   } from '../lib/origami.chameleon.js'
import { SZoom     } from './extensions/subject.zoom.js'
import { SLean     } from './extensions/subject.lean.js'
import { RFocus    } from './extensions/role.focus.js'
import { RLock     } from './extensions/role.lock.js'
import { RTick     } from './extensions/role.tick.js'
import { RSync     } from './extensions/role.sync.js'
import { TSerie    } from './extensions/trait.serie.js'


const TYPE   = 'click'
const VIEWS  = '.view'
const VIEWA  = '#A'
const VIEWB  = '#B'
const PLAY   = '#play'
const PAUSE  = '#stop'
const VIDEO  = 'video'
const ACTIVE = 'active'

let views = [...document.querySelectorAll (VIEWS)]
let viewA = document.querySelector (VIEWA)
let viewB = document.querySelector (VIEWB)
let Play  = document.querySelector (PLAY)
let Pause = document.querySelector (PAUSE)
let video = document.querySelector (VIDEO)

views.forEach (function (view) {
  Inspect (view).extensions.install (SZoom)
  Inspect (view).extensions.install (SLean)
  Inspect (view).extensions.install (RFocus)
  Inspect (view).extensions.install (RLock)
})

Inspect (viewA).extensions.install (RTick)
Inspect (viewB).extensions.install (RSync)
Inspect (viewB).extensions.install (TSerie)

Play.addEventListener (TYPE, function () {
  video.play ()
  Play .classList.add    (ACTIVE)
  Stop .classList.remove (ACTIVE)
})

Pause.addEventListener (TYPE, function () {
  video.pause ()
  Stop .classList.add    (ACTIVE)
  Play .classList.remove (ACTIVE)
})

viewB.start ()
```
