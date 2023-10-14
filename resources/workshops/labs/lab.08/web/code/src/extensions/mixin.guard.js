import { Extension } from '../../lib/origami.chameleon.js'
import { Mixin     } from '../../lib/origami.chameleon.mixins.js'
import { Override  } from '../../lib/origami.chameleon.mixins.js'


@Extension (Mixin)
class MGuard {

  constructor (core) {}

  check () {
    return !!window.active
  }

}

export { MGuard }
export default MGuard
