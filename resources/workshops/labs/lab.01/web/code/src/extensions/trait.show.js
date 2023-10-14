import { Extension } from '../../lib/origami.chameleon.js'
import { Trait     } from '../../lib/origami.chameleon.traits.js'
import { Override  } from '../../lib/origami.chameleon.traits.js'


const On      = true
const Off     = false
const ShowOn  = 'show-on'
const ShowOff = 'show-off'

@Extension (Trait)
class TShow {

  constructor (core) {
    this.core = core
    this.on ()
  }

  @Override
  on () {
    console.log ('[TShow] - On')
    this.core.classList.remove (ShowOff)
    this.core.classList.add    (ShowOn)
    this.core.isOn = On
  }

  @Override
  off () {
    console.log ('[TShow] - Off')
    this.core.classList.remove (ShowOn)
    this.core.classList.add    (ShowOff)
    this.core.isOn = Off
  }

}

export { TShow }
export default TShow
