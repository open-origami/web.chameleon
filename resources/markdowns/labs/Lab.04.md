# Lab 04
## Composing Traits

The name collision problems show in the two previous labs can be solved by applying a composition strategy. By applying @After policies, when we install one extension over the previous one, the effects are applied one after the other. Use buttons to install the extensions and click on the view.

[Download](../../resources/downloads/labs/lab.04.zip)
     [Run](../../resources/workshops/labs/lab.04)


### Create a TLean Trait

From code defined in our previous lab use now the After decorator on each method. As a result in case of collision the second installed Trait will be executed after those already on the body component.

- trait.lean.js
- A Trait to create a Lean effect on the view

```code
import { Extension } from '../../lib/origami.chameleon.js'
import { Trait     } from '../../lib/origami.chameleon.traits.js'
import { After     } from '../../lib/origami.chameleon.traits.js'
import { Delay     } from '../helpers/helper.delay.js'

const On      = true
const Off     = false
const LeanOn  = 'lean-on'
const LeanOff = 'lean-off'

@Extension (Trait)
class TLean {

  constructor (core) {
    this.core = core
    this.off ()
  }

  @After
  on (chain) {
    return Delay (function () {
      console.log ('[TLean] - On')
      this.core.classList.remove (LeanOff)
      this.core.classList.add    (LeanOn)
      this.core.isOn = On
    }.bind (this), chain)
  }

  @After
  off (chain) {
    return Delay (function () {
      console.log ('[TLean] - Off')
      this.core.classList.remove (LeanOn)
      this.core.classList.add    (LeanOff)
      this.core.isOn = Off
    }.bind (this), chain)
  }
}

export { TLean }
export default TLean

```

### Create a TZoom Trait

Similarly, using the code of the TZoom defined previously we apply now a After policy over both methods. In this manner, the first installed Trait will be executed normally whilst the second one will be invoked following.  

- trait.zoom.js
- A Trait to create a Zoom effect on the view

```code
import { Extension } from '../../lib/origami.chameleon.js'
import { Trait     } from '../../lib/origami.chameleon.traits.js'
import { After     } from '../../lib/origami.chameleon.traits.js'
import { Delay     } from '../helpers/helper.delay.js'


const On      = true
const Off     = false
const ZoomOn  = 'zoom-on'
const ZoomOff = 'zoom-off'

@Extension (Trait)
class TZoom {

  constructor (core) {
    this.core = core
    this.off ()
  }

  @After
  on (chain) {
    return Delay (function () {
      console.log ('[TZoom] - On')
      this.core.classList.remove (ZoomOff)
      this.core.classList.add    (ZoomOn)
      this.core.isOn = On
    }.bind (this), chain)
  }

  @After
  off (chain) {
    return Delay (function () {
      console.log ('[TZoom] - Off')
      this.core.classList.remove (ZoomOn)
      this.core.classList.add    (ZoomOff)
      this.core.isOn = Off
    }.bind (this), chain)
  }

}

export { TZoom }
export default TZoom
```

### The Delay Helper

To maintain visual fluency, each trait uses a delay function returning a promise. When applying policies in After, the latter trait will receive the promise returned by the former as a parameter. This allows traits composition.

- helper.delay.js
- The Delay helper assist in fluent composition

```code
const Time = 400

function Delay (fn, chain) {

  let pChain = chain || Promise.resolve ()
  let time   = chain && Time || 0

  return pChain.then (function () {
    return new Promise (function (ok) {
      setTimeout (function () {
        fn ()
        ok ()
      }, time)
    })
  })

}

export { Delay }
export default Delay
```


### Create an Entry Point

Define a simple html file as a entry point for your project. Just include a div element working as our view component and two buttons to install & uninstall the Traits on the view.

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
    <link rel="stylesheet" href="./web/assets/css/extensions/trait.zoom.css">
    <link rel="stylesheet" href="./web/assets/css/extensions/trait.lean.css">

    <title>Origami Chameleon Labs</title>
  </head>

  <body>
    <h1>Origami Chameleon Labs</h1>
    <h2>Lab 4. Composing Traits</h2>
    <p>
      The name collision problems show in the two previous labs can be solved
      by applying a composition strategy. By applying @After policies, when we
      install one extension over the previous one, the effects are applied one
      after the other. Use buttons to install the extensions and click on the view.
    </p>

    <div class="container">
      <div class="view">View A</div>
    </div>

    <div class="container">
      <button id="ZBtn" class="button">TZoom</button>
      <button id="LBtn" class="button">TLean</button>
    </div>

    <script type="module" src="./web/code/build/start.js"></script>
  </body>

</html>
```

### Create a Starting Point

In the starting point we fetch the buttons to toggle the installation processes. Also fetch the view to check visualization effects when the Trait is installed and a click is done.

- start.js
- The Starting Point

```code
import { Inspect } from '../lib/origami.chameleon.js'
import { TZoom   } from './extensions/trait.zoom.js'
import { TLean   } from './extensions/trait.lean.js'

const TYPE   = 'click'
const VIEW   = '.view'
const ZBTN   = '#ZBtn'
const LBTN   = '#LBtn'
const ACTIVE = 'active'

let view  = document.querySelector (VIEW)
let ZBtn  = document.querySelector (ZBTN)
let LBtn  = document.querySelector (LBTN)
let Exts  = Inspect (view).extensions
let IZoom = false
let ILean = false

view.addEventListener (TYPE, function (e) {
  if (view.on && view.off) {
    if (view.isOn) view.off ()
    else           view.on  ()
  }
})

ZBtn.addEventListener (TYPE, function () {
  !IZoom && Exts.install   (TZoom)
   IZoom && Exts.uninstall (TZoom)
   IZoom = !IZoom

   ZBtn.classList.toggle (ACTIVE)
})

LBtn.addEventListener (TYPE, function () {
  !ILean && Exts.install   (TLean)
   ILean && Exts.uninstall (TLean)
   ILean = !ILean

   LBtn.classList.toggle (ACTIVE)
})
```
