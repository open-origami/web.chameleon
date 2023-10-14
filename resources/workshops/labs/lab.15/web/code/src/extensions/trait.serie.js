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
