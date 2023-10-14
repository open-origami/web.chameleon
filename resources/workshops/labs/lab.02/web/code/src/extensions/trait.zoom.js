import { Extension } from '../../lib/origami.chameleon.js'
import { Trait     } from '../../lib/origami.chameleon.traits.js'
import { Override  } from '../../lib/origami.chameleon.traits.js'


const On      = true
const Off     = false
const ZoomOn  = 'zoom-on'
const ZoomOff = 'zoom-off'

@Extension (Trait)
class TZoom {

  constructor (core) {
    this.core = core
    this.off ()
  }

  @Override
  on () {
    console.log ('[TZoom] - On')
    this.core.classList.remove (ZoomOff)
    this.core.classList.add    (ZoomOn)
    this.core.isOn = On
  }

  @Override
  off () {
    console.log ('[TZoom] - Off')
    this.core.classList.remove (ZoomOn)
    this.core.classList.add    (ZoomOff)
    this.core.isOn = Off
  }

}

export { TZoom }
export default TZoom
