import { Extension } from '../../lib/origami.chameleon.js'
import { Extends   } from '../../lib/origami.chameleon.js'
import { Subject   } from '../../lib/origami.chameleon.subjects.js'
import { Point     } from '../../lib/origami.chameleon.subjects.js'
import { AGuard    } from './aspect.guard.js'
import { ALog      } from './aspect.log.js'


const On      = true
const Off     = false
const LeanOn  = 'lean-on'
const LeanOff = 'lean-off'
const SPoint  = 'Effects.Lean'
const Name    = '[SLean]'

@Extension (Subject)
  @Point   (SPoint)
  @Extends (AGuard)
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
