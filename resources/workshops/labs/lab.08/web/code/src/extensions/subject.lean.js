import { Extension } from '../../lib/origami.chameleon.js'
import { Extends   } from '../../lib/origami.chameleon.js'
import { Subject   } from '../../lib/origami.chameleon.subjects.js'
import { Point     } from '../../lib/origami.chameleon.subjects.js'
import { MLog      } from './mixin.log.js'
import { MGuard    } from './mixin.guard.js'


const On      = true
const Off     = false
const LeanOn  = 'lean-on'
const LeanOff = 'lean-off'
const SPoint  = 'Effects.Lean'

@Extension (Subject)
  @Point   (SPoint)
  @Extends (MLog)
  @Extends (MGuard)
class SLean {

  constructor (core) {
    this.core = core
  }

  on () {
    if (this.check ()) {
      this.log ('[SLean] - On')
      this.core.classList.remove (LeanOff)
      this.core.classList.add    (LeanOn)
      this.isOn = On
    }
  }

  off () {
    if (this.check ()) {
      this.log ('[SLean] - Off')
      this.core.classList.remove (LeanOn)
      this.core.classList.add    (LeanOff)
      this.isOn = Off
    }
  }

}

export { SLean }
export default SLean
