import { Extension } from '../../lib/origami.chameleon.js'
import { Aspect    } from '../../lib/origami.chameleon.aspects.js'
import { Around    } from '../../lib/origami.chameleon.aspects.js'


const OnOff = '(on|off)'

@Extension (Aspect)
class AGuard {

  constructor (core) {}

  @Around (OnOff)
  check (fn, ...args) {
    let ok = !!window.active
    if (ok) fn (...args)
  }

}

export { AGuard }
export default AGuard
