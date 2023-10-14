import { Extension } from '../../lib/origami.chameleon.js'
import { Trait     } from '../../lib/origami.chameleon.traits.js'
import { Discard   } from '../../lib/origami.chameleon.traits.js'


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

  @Discard
  on () {
    console.log ('[TLean] - On')
    this.core.classList.remove (LeanOff)
    this.core.classList.add    (LeanOn)
    this.core.isOn = On
  }

  @Discard
  off () {
    console.log ('[TLean] - Off')
    this.core.classList.remove (LeanOn)
    this.core.classList.add    (LeanOff)
    this.core.isOn = Off
  }

}

export { TLean }
export default TLean
