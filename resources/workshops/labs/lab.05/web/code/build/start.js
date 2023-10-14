import { Inspect } from '../lib/origami.chameleon.js';
import { Utils } from '../lib/origami.chameleon.subjects.js';
import { SShow } from './extensions/subject.show.js';
import { SZoom } from './extensions/subject.zoom.js';
import { SLean } from './extensions/subject.lean.js';
import { SMin } from './extensions/subject.min.js';
const TYPE = 'click';
const VIEW = '.view';
const BTNS = '.button';
const ACTIVE = 'active';
let view = document.querySelector(VIEW);
let Btns = document.querySelectorAll(BTNS);
let Exts = Inspect(view).extensions;
let Subjects = [SShow, SZoom, SLean, SMin];
Subjects.forEach(Exts.install);
[...Btns].forEach(action);

function action(btn) {
  btn.addEventListener(TYPE, function (e) {
    let Point = btn.dataset.point;
    let Effect = Utils(view).Effects[Point];
    let isOn = Effect.isOn;
    !isOn && Effect.on();
    isOn && Effect.off();
    btn.classList.toggle(ACTIVE);
  });
}

view.addEventListener(TYPE, function (e) {
  Utils(view).Effects.Show.on();
  Utils(view).Effects.Zoom.off();
  Utils(view).Effects.Lean.off();
  Utils(view).Effects.Min.off();
  Btns[0].classList.add(ACTIVE);
  Btns[1].classList.remove(ACTIVE);
  Btns[2].classList.remove(ACTIVE);
  Btns[3].classList.remove(ACTIVE);
});