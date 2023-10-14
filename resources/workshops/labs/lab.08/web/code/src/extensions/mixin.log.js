import { Extension } from '../../lib/origami.chameleon.js'
import { Mixin     } from '../../lib/origami.chameleon.mixins.js'
import { Log       } from '../helpers/helper.log.js'


@Extension (Mixin)
class MLog {

  constructor (core) {}

  log (text) {
    Log (this).info (text)
  }

}

export { MLog }
export default MLog
