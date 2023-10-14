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
