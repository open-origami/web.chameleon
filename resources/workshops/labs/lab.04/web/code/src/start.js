import { Inspect } from '../lib/origami.chameleon.js'
import { TZoom   } from './extensions/trait.zoom.js'
import { TLean   } from './extensions/trait.lean.js'


const TYPE   = 'click'
const VIEW   = '.view'
const ZBTN   = '#ZBtn'
const LBTN   = '#LBtn'
const ACTIVE = 'active'

let view  = document.querySelector (VIEW)
let ZBtn  = document.querySelector (ZBTN)
let LBtn  = document.querySelector (LBTN)
let Exts  = Inspect (view).extensions
let IZoom = false
let ILean = false

view.addEventListener (TYPE, function (e) {
  if (view.on && view.off) {
    if (view.isOn) view.off ()
    else           view.on  ()
  }
})

ZBtn.addEventListener (TYPE, function () {
  !IZoom && Exts.install   (TZoom)
   IZoom && Exts.uninstall (TZoom)
   IZoom = !IZoom

   ZBtn.classList.toggle (ACTIVE)
})

LBtn.addEventListener (TYPE, function () {
  !ILean && Exts.install   (TLean)
   ILean && Exts.uninstall (TLean)
   ILean = !ILean

   LBtn.classList.toggle (ACTIVE)
})
