import { Extension } from '../../lib/origami.chameleon.js'
import { Trait     } from '../../lib/origami.chameleon.traits.js'
import { After     } from '../../lib/origami.chameleon.traits.js'
import { Delay     } from '../helpers/helper.delay.js'


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

  @After
  on (chain) {
    return Delay (function () {
      console.log ('[TZoom] - On')
      this.core.classList.remove (ZoomOff)
      this.core.classList.add    (ZoomOn)
      this.core.isOn = On
    }.bind (this), chain)
  }

  @After
  off (chain) {
    return Delay (function () {
      console.log ('[TZoom] - Off')
      this.core.classList.remove (ZoomOn)
      this.core.classList.add    (ZoomOff)
      this.core.isOn = Off
    }.bind (this), chain)
  }

}

export { TZoom }
export default TZoom
