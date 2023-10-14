# Lab 05
## Orthogonal Subjects

When you use Subjects instead of Traits name collision problems disappears. In this lab, all trait have been reimplemented as Subjects and they have been installed at once with no problems. Use buttons to switch on & switch off effects provided by each one.

[Download](../../resources/downloads/labs/lab.05.zip)
     [Run](../../resources/workshops/labs/lab.05)

### Create the SShow Subject

Create a class with two methods to control visibility. The code is very similar to that in Lab 1. Just that in this case we use the Subject extension model and assign a namespace with the Point decorator.

- subject.show.js
- A Subject to control components visibility

```code
import { Extension } from '../../lib/origami.chameleon.js'
import { Subject   } from '../../lib/origami.chameleon.subjects.js'
import { Point     } from '../../lib/origami.chameleon.subjects.js'

const On      = true
const Off     = false
const ShowOn  = 'show-on'
const ShowOff = 'show-off'
const SPoint  = 'Effects.Show'

@Extension (Subject)
@Point     (SPoint)
class SShow {

  constructor (core) {
    this.core = core
    this.on ()
  }

  on () {
    console.log ('[SShow] - On')
    this.core.classList.remove (ShowOff)
    this.core.classList.add    (ShowOn)
    this.isOn = On
  }

  off () {
    console.log ('[SShow] - Off')
    this.core.classList.remove (ShowOn)
    this.core.classList.add    (ShowOff)
    this.isOn = Off
  }

}

export { SShow }
export default SShow
```

### Create the SLean Subject

Define now the SLean Subject. The process is very similar to the previous one thought as a modification of the TLean code defined in Labs 2 and 3. Remember to define a different access point for each subject.

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

Let’s also adapt code of TZoom to create SZoom. As you can notice code is very similar to previous examples but as in this case no naming conflicts can arise, there is not needed to include collision policies in subjects’ specs.

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

Finally, lets define the opposite effect to that controlled by the SZoom Subject. From the JavaScript perspective the code is very similar to previous ones since all visual effects are defined in CSS resources.

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
    <link rel="stylesheet" href="./web/assets/css/extensions/subject.show.css">
    <link rel="stylesheet" href="./web/assets/css/extensions/subject.zoom.css">
    <link rel="stylesheet" href="./web/assets/css/extensions/subject.lean.css">
    <link rel="stylesheet" href="./web/assets/css/extensions/subject.min.css">

    <title>Origami Chameleon Labs</title>
  </head>

  <body>
    <h1>Origami Chameleon Labs</h1>
    <h2>Lab 5. Ortogonal Subjects</h2>
    <p>
      When you use Subjects instead of Traits name collision problems disappears.
      In this lab, all trait have been reimplemented as Subjects and they have
      been installed at once with no problems. Use buttons to switch on and switch off effects provided by each one.
    </p>

    <div class="container">
      <div class="view">View A</div>
    </div>

    <div class="container">
      <button class="button active" data-point="Show">SShow</button>
      <button class="button" data-point="Zoom">SZoom</button>
      <button class="button" data-point="Lean">SLean</button>
      <button class="button" data-point="Min">SMin</button>
    </div>

    <script type="module" src="./web/code/build/start.js"></script>
  </body>

</html>
```

### Create a Starting Point

As in this case no naming conflicts can take place we can install all the subjects at the beginning. The starting file just prepare toggle behavior over buttons enabling the effects controlled by each subject.

- start.js
- The Starting Point

```code
import { Inspect } from '../lib/origami.chameleon.js'
import { Utils   } from '../lib/origami.chameleon.subjects.js'
import { SShow   } from './extensions/subject.show.js'
import { SZoom   } from './extensions/subject.zoom.js'
import { SLean   } from './extensions/subject.lean.js'
import { SMin    } from './extensions/subject.min.js'

const TYPE   = 'click'
const VIEW   = '.view'
const BTNS   = '.button'
const ACTIVE = 'active'

let view     = document.querySelector    (VIEW)
let Btns     = document.querySelectorAll (BTNS)
let Exts     = Inspect (view).extensions
let Subjects = [
  SShow,
  SZoom,
  SLean,
  SMin
]

Subjects .forEach (Exts.install);
[...Btns].forEach (action);

function action (btn) {
  btn.addEventListener (TYPE, function (e) {
    let Point  = btn.dataset.point
    let Effect = Utils (view).Effects[Point]
    let isOn   = Effect.isOn

    !isOn && Effect.on  ()
     isOn && Effect.off ()

    btn.classList.toggle (ACTIVE)
  })
}

view.addEventListener (TYPE, function (e) {
  Utils (view).Effects.Show.on  ()
  Utils (view).Effects.Zoom.off ()
  Utils (view).Effects.Lean.off ()
  Utils (view).Effects.Min.off ()

  Btns[0].classList.add    (ACTIVE)
  Btns[1].classList.remove (ACTIVE)
  Btns[2].classList.remove (ACTIVE)
  Btns[3].classList.remove (ACTIVE)
})
```
