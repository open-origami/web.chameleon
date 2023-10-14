import { Extension } from '../../lib/origami.chameleon.js'
import { Role      } from '../../lib/origami.chameleon.roles.js'
import { State     } from '../../lib/origami.chameleon.roles.js'
import { Begin     } from '../../lib/origami.chameleon.roles.js'
import { Route     } from '../../lib/origami.chameleon.roles.js'
import { Utils     } from '../../lib/origami.chameleon.subjects.js'


const FocusIn  = 'focusIn'
const FocusOut = 'focusOut'
const Lock     = 'lock'
const Unlock   = 'unlock'

@Extension (Role)
class RFocus {

  constructor (core) {
    this.focusIn  = Utils (core).Effects.Zoom
    this.focusOut = Utils (core).Effects.Lean
  }

  @State
    @Route (FocusOut, Unlock)
  focusIn () {
    this.focusIn.on ()
    this.focusOut.off ()
  }

  @State
    @Begin
    @Route (FocusIn, Lock)
  focusOut () {
    this.focusIn.off ()
    this.focusOut.on ()
  }

}

export { RFocus }
export default RFocus
