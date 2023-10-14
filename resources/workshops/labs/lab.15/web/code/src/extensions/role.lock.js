import { Extension } from '../../lib/origami.chameleon.js'
import { Role      } from '../../lib/origami.chameleon.roles.js'
import { State     } from '../../lib/origami.chameleon.roles.js'
import { Begin     } from '../../lib/origami.chameleon.roles.js'
import { Route     } from '../../lib/origami.chameleon.roles.js'
import { Utils     } from '../../lib/origami.chameleon.subjects.js'
import { Fire      } from '../helpers/helper.fire.js'
import { Find      } from '../helpers/helper.find.js'


const Tap      = 'click'
const Lock     = 'lock'
const Unlock   = 'unlock'
const Require  = 'require'
const Release  = 'release'
const Ref      = 'ref'

@Extension (Role)
class RLock {

  constructor (core) {
    let ref   = core.getAttribute (Ref)
    let peer  = Find (ref)
    let fire  = Fire (core)
    this.fire = fire

    peer.addEventListener (Require, function () { fire (Unlock) })
    peer.addEventListener (Release, function () { fire (Lock)   })
  }

  @State
    @Begin
    @Route (Lock, Tap)
  init () {
  }

  @State
    @Route (Unlock, Tap)
    @Route (Unlock, Unlock)
  lock () {
    this.fire (Require)
    this.fire (Lock)
  }

  @State
    @Route (Lock, Tap)
    @Route (Lock, Lock)
  unlock () {
    this.fire (Release)
    this.fire (Unlock)
  }

}

export { RLock }
export default RLock
