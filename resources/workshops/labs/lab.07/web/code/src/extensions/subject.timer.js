import { Inspect   } from '../../lib/origami.chameleon.js'
import { Extension } from '../../lib/origami.chameleon.js'
import { Utils     } from '../../lib/origami.chameleon.subjects.js'
import { Subject   } from '../../lib/origami.chameleon.subjects.js'
import { Point     } from '../../lib/origami.chameleon.subjects.js'


const SPoint     = 'Timer'
const EPoint     = 'Effects'
const Extensions = 'Core.Extensions.Installed'
const { floor  } = Math
const { random } = Math
const Delay      = 2000

@Extension (Subject)
@Point     (SPoint)
class STimer {

  constructor (core) {
    this.core = core
    this.isOn = true
    this.start ()
  }

  async start () {
    let ext
    while (this.isOn) {
      let exts = Exts (this.core)
      let next = await Next (exts, ext)
      ext && ext.off ()
      ext = next
      ext && ext.on ()
    }
  }

  stop () {
    this.isOn = false
  }

}

function Exts (core) {
  return function () {
    let isEPoint = Point => Point.startsWith (EPoint)
    let Registry = Inspect (core).registry
    let Exts     = Registry.get (Extensions) || []
    let fExts    = []
    for (let Ext of Exts) {
      if (Ext.subject) {
        let points = Ext.subject.points
        let ext    = Ext.provider.ext
        let match  = points.some (isEPoint)
        match && fExts.push (ext)
      }
    }
    return fExts
  }
}

function Next (iExts, ext) {
  return new Promise (function (ok) {
    let id = setInterval (function () {
      let exts = iExts ()
      let max  = exts.length
      let idx  = floor (max * random ())
      let sExt = exts [idx]

      if (sExt !== ext) {
        clearInterval (id)
        ok (sExt)
      }
    }, Delay)
  })
}

export { STimer }
export default STimer
