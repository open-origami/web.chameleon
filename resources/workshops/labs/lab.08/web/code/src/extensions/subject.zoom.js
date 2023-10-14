import { Extension } from '../../lib/origami.chameleon.js'
import { Extends   } from '../../lib/origami.chameleon.js'
import { Subject   } from '../../lib/origami.chameleon.subjects.js'
import { Point     } from '../../lib/origami.chameleon.subjects.js'
import { MLog      } from './mixin.log.js'
import { MGuard    } from './mixin.guard.js'


const On      = true
const Off     = false
const ZoomOn  = 'zoom-on'
const ZoomOff = 'zoom-off'
const SPoint  = 'Effects.Zoom'

@Extension (Subject)
  @Point   (SPoint)
  @Extends (MLog)
  @Extends (MGuard)
class SZoom {

  constructor (core) {
    this.core = core
  }

  on () {
    if (this.check ()) {
      this.log ('[SZoom] - On')
      this.core.classList.remove (ZoomOff)
      this.core.classList.add    (ZoomOn)
      this.isOn = On
    }
  }

  off () {
    if (this.check ()) {
      this.log ('[SZoom] - Off')
      this.core.classList.remove (ZoomOn)
      this.core.classList.add    (ZoomOff)
      this.isOn = Off
    }
  }

}

export { SZoom }
export default SZoom
