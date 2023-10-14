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