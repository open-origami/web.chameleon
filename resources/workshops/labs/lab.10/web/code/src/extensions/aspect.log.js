import { Extension } from '../../lib/origami.chameleon.js'
import { Aspect    } from '../../lib/origami.chameleon.aspects.js'
import { Before    } from '../../lib/origami.chameleon.aspects.js'
import { Log       } from '../helpers/helper.log.js'

const OnOff = '(on|off)'

@Extension (Aspect)
class ALog {

  constructor (core) {
    this.core = core
  }

  @Before (OnOff)
  log (...args) {
    let Cls  = this
    let text = args.pop ()

    Log (Cls).info (text)
  }

}

export { ALog }
export default ALog
