import { Inspect } from '../lib/origami.chameleon.js';
import { SZoom } from './extensions/subject.zoom.js';
import { SLean } from './extensions/subject.lean.js';
import { SMin } from './extensions/subject.min.js';
import { STimer } from './extensions/subject.timer.js';
const TYPE = 'click';
const VIEW = '.view';
const BTNS = '.button';
const ACTIVE = 'active';
let view = document.querySelector(VIEW);
let Btns = document.querySelectorAll(BTNS);
let Exts = Inspect(view).extensions;
let Subject = {
  SZoom,
  SLean,
  SMin
};
let Install = {};
[...Btns].forEach(function (btn) {
  btn.addEventListener(TYPE, function (e) {
    let Key = btn.dataset.ext;
    let Ext = Subject[Key];
    !Install[Key] && Exts.install(Ext);
    Install[Key] && Exts.uninstall(Ext);
    Install[Key] = !Install[Key];
    btn.classList.toggle(ACTIVE);
  });
});
Exts.install(STimer);