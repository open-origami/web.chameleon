import { Extension } from '../../lib/origami.chameleon.js'
import { Role      } from '../../lib/origami.chameleon.roles.js'
import { State     } from '../../lib/origami.chameleon.roles.js'
import { Begin     } from '../../lib/origami.chameleon.roles.js'
import { Guard     } from '../../lib/origami.chameleon.roles.js'
import { Route     } from '../../lib/origami.chameleon.roles.js'
import { Find      } from '../helpers/helper.find.js'
import { Fire      } from '../helpers/helper.fire.js'


const Ref      = 'ref'
const FocusIn  = 'focusIn'
const FocusOut = 'focusOut'
const Signal   = 'signal'
const Next     = 'next'

@Extension (Role)
class RSync {

  constructor (core) {
    let ref   = core.getAttribute (Ref)
    let peer  = Find (ref)
    let fire  = Fire (core)
    this.core = core

    peer.addEventListener (Signal, function () { fire (Next) })
  }

  @State
    @Begin
    @Guard (Next)
    @Route (Next)
  next () {
    this.core.next ()
  }

}

export { RSync }
export default RSync
