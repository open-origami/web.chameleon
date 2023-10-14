import { Extension } from '../../lib/origami.chameleon.js'
import { Aspect    } from '../../lib/origami.chameleon.aspects.js'
import { Provided  } from '../../lib/origami.chameleon.aspects.js'


const OnOff = '(on|off)'

@Extension (Aspect)
class AGuard {

  constructor (core) {}

  @Provided (OnOff)
  check () {
    return !!window.active
  }

}

export { AGuard }
export default AGuard
