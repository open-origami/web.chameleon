import { Extension } from '../../lib/origami.chameleon.js'
import { Extends   } from '../../lib/origami.chameleon.js'
import { Role      } from '../../lib/origami.chameleon.roles.js'
import { State     } from '../../lib/origami.chameleon.roles.js'
import { Begin     } from '../../lib/origami.chameleon.roles.js'
import { Route     } from '../../lib/origami.chameleon.roles.js'
import { Utils     } from '../../lib/origami.chameleon.subjects.js'


const Tap      = 'click'
const FocusIn  = 'focusIn'
const FocusOut = 'focusOut'
const AttIn    = 'focus-in'
const AttOut   = 'focus-out'

@Extension (Role)
class RFocus {

  constructor (core) {
    let kIn  = core.getAttribute (AttIn)
    let kOut = core.getAttribute (AttOut)
    this.focusIn  = Utils (core).Effects[kIn]
    this.focusOut = Utils (core).Effects[kOut]
  }

  @State
    @Route (FocusOut, Tap)
  focusIn () {
    this.focusIn.on ()
    this.focusOut.off ()
  }

  @State
    @Begin
    @Route (FocusIn, Tap)
  focusOut () {
    this.focusIn.off ()
    this.focusOut.on ()
  }

}

export { RFocus }
export default RFocus
