import { Extension } from '../../lib/origami.chameleon.js'
import { Extends   } from '../../lib/origami.chameleon.js'
import { Subject   } from '../../lib/origami.chameleon.subjects.js'
import { Point     } from '../../lib/origami.chameleon.subjects.js'
import { MLog      } from './mixin.log.js'


const On      = true
const Off     = false
const LeanOn  = 'lean-on'
const LeanOff = 'lean-off'
const SPoint  = 'Effects.Lean'

@Extension (Subject)
  @Point   (SPoint)
  @Extends (MLog)
class SLean {

  constructor (core) {
    this.core = core
  }

  on () {
    this.log ('[SLean] - On')
    this.core.classList.remove (LeanOff)
    this.core.classList.add    (LeanOn)
    this.isOn = On
  }

  off () {
    this.log ('[SLean] - Off')
    this.core.classList.remove (LeanOn)
    this.core.classList.add    (LeanOff)
    this.isOn = Off
  }

}

export { SLean }
export default SLean
