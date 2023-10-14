import { Inspect } from '../lib/origami.chameleon.js'
import { TShow   } from './extensions/trait.show.js'


const TYPE   = 'click'
const VIEW   = '.view'
const BTN    = '#Btn'
const ACTIVE = 'active'

let view  = document.querySelector (VIEW)
let Btn   = document.querySelector (BTN)
let Exts  = Inspect (view).extensions
let IShow = false

view.addEventListener (TYPE, function (e) {
  if (IShow) {
    if (view.isOn) view.off ()
    else           view.on  ()
  }
})

Btn.addEventListener (TYPE, function () {
  !IShow && Exts.install   (TShow)
   IShow && Exts.uninstall (TShow)
   IShow = !IShow

   Btn.classList.toggle (ACTIVE)
})
