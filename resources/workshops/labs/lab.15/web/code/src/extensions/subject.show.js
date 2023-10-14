import { Extension } from '../../lib/origami.chameleon.js'
import { Extends   } from '../../lib/origami.chameleon.js'
import { Subject   } from '../../lib/origami.chameleon.subjects.js'
import { Point     } from '../../lib/origami.chameleon.subjects.js'
import { ALog      } from './aspect.log.js'


const On      = true
const Off     = false
const ShowOn  = 'show-on'
const ShowOff = 'show-off'
const SPoint  = 'Effects.Show'
const Name    = '[SShow]'

@Extension (Subject)
  @Point   (SPoint)
  @Extends (ALog)
class SShow {

  constructor (core) {
    this.core = core
    this.name = Name
    this.off ()
  }

  on () {
    this.core.classList.remove (ShowOff)
    this.core.classList.add    (ShowOn)
    this.isOn = On
  }

  off () {
    this.core.classList.remove (ShowOn)
    this.core.classList.add    (ShowOff)
    this.isOn = Off
  }

}

export { SShow }
export default SShow
