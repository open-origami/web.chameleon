# Lab 01
## A Simple Trait

In this Lab a Trait Driven Extension is created to control the hide effect of a simple view. Click on TShow button to install and uninstall the extension. When installed you can click on the view or hidden area to switch on and switch off effect.

[Download](../../resources/downloads/labs/lab.01.zip)
     [Run](../../resources/workshops/labs/lab.01)


### Create a TShow Trait

Let’s start by defining a simple class with two methods to control component visibility. Mark the class as a Trait driven extension and use the override policy to control name clashing.

 - trait.show.js
 - A Trait to control components visibility

```code
import { Extension } from '../../lib/origami.chameleon.js'
import { Trait     } from '../../lib/origami.chameleon.traits.js'
import { Override  } from '../../lib/origami.chameleon.traits.js'

const On      = true
const Off     = false
const ShowOn  = 'show-on'
const ShowOff = 'show-off'

@Extension (Trait)
class TShow {

 constructor (core) {
   this.core = core
   this.on ()
 }

 @Override
 on () {
   console.log ('[TShow] - On')
   this.core.classList.remove (ShowOff)
   this.core.classList.add    (ShowOn)
   this.core.isOn = On
 }

 @Override
 off () {
   console.log ('[TShow] - Off')
   this.core.classList.remove (ShowOn)
   this.core.classList.add    (ShowOff)
   this.core.isOn = Off
 }

}

export { TShow }
export default TShow
```

### Create an Entry Point

Define a simple html file as a entry point for your project. Just include a div element working as our view component and a button to install & uninstall the Trait on the view.

- index.html
- The entry point for the project

```code
<!DOCTYPE html>
<html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="./web/css/styles.css">
    <link rel="stylesheet" href="./web/css/extensions/trait.show.css">

    <title>Origami Chameleon Labs</title>
  </head>

  <body>
    <h1>Origami Chameleon Labs</h1>
    <h2>Lab 1. A Simple Trait</h2>
    <p>
      In this Lab a Trait Driven Extension is created to control the hide
      effect of a simple view. Click on TShow button to install and uninstall
      the extension. When installed you can click on the view or hidden area
      to switch on and switch off effect.
    </p>

    <div class="container">
      <div class="view">View</div>
    </div>

    <div class="container">
      <button id="Btn" class="button">TShow</button>
    </div>

    <script type="module" src="./web/js/build/start.js"></script>
  </body>

</html>
```

### Create a Starting Point

In the starting point we fetch the button to toggle the installation process. Also fetch the view to check visualization effects when the Trait is installed and a click is done.

- start.js
- The Starting Point

```code
import { Inspect } from '../lib/origami.chameleon.js'
import { TShow   } from './extensions/trait.show.js'

const TYPE   = 'click'
const VIEW   = '.view'
const BTN    = '#Btn'
const ACTIVE = 'active'

let view  = document.querySelector (VIEW)
let Btn   = document.querySelector (BTN)
let Exts  = Inspect (view).extensions
let IShow = false

view.addEventListener (TYPE, function (e) {
  if (IShow) {
    if (view.isOn) view.off ()
    else           view.on  ()
  }
})

Btn.addEventListener (TYPE, function () {
  !IShow && Exts.install   (TShow)
   IShow && Exts.uninstall (TShow)
   IShow = !IShow

   Btn.classList.toggle (ACTIVE)
})
```
