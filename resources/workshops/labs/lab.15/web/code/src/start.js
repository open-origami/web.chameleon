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
