import { Extension } from '../../lib/origami.chameleon.js'
import { Role      } from '../../lib/origami.chameleon.roles.js'
import { State     } from '../../lib/origami.chameleon.roles.js'
import { Begin     } from '../../lib/origami.chameleon.roles.js'
import { Guard     } from '../../lib/origami.chameleon.roles.js'
import { Route     } from '../../lib/origami.chameleon.roles.js'
import { Fire      } from '../helpers/helper.fire.js'


const TStamp = 'timeupdate'
const Tick   = 'tick'
const Wait   = 'wait'
const Signal = 'signal'

const TRef  = '.timeline'
const VRef  = 'video'
const LSep  = ' '
const TSep  = ':'
const { floor } = Math


@Extension (Role)
class RTick {

  constructor (core) {
    let times  = core.querySelector (TRef)
    let video  = core.querySelector (VRef)

    this.cache = []
    this.ctx   = {}
    this.fire  = Fire  (core)
    this.times = TLine (times)
    this.match = Match (this)

    video.addEventListener (TStamp, function () {
      let time = video.currentTime
      this.ctx = { time }
      this.fire (Tick)
    }.bind (this))

  }

  @State
    @Begin
    @Guard (Tick)
    @Route (Wait)
  wait () {
    let ctx  = this.ctx
    let time = ctx.time
    let ok   = this.match (time)

    ok && this.fire (Signal)
  }

}

function TLine (node) {
  let text  = node.textContent
  let times = text.split (LSep)
  let line  = []
  for (let time of times) {
    let [min, sec] = time.split (TSep)
    let iMin  = parseInt (min)
    let iSec  = parseInt (sec)
    let stamp = 60 * iMin + iSec
    stamp && line.push (stamp)
  }
  return line
}

function Match (ext) {
  return function (stamp) {
    let time  = floor (stamp)
    let times = ext.times
    let cache = ext.cache

    let ok = true
    ok = ok &&  times.includes (time)
    ok = ok && !cache.includes (time)
    ok && cache.push (time)

    return ok
  }
}

export { RTick }
export default RTick
