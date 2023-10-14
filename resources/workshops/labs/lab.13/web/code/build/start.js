import { Inspect } from '../lib/origami.chameleon.js';
import { SZoom } from './extensions/subject.zoom.js';
import { SLean } from './extensions/subject.lean.js';
import { SMin } from './extensions/subject.min.js';
import { RFocus } from './extensions/role.focus.js';
let views = document.querySelectorAll('.view');
[...views].forEach(function (view) {
  Inspect(view).extensions.install(SZoom);
  Inspect(view).extensions.install(SLean);
  Inspect(view).extensions.install(SMin);
  Inspect(view).extensions.install(RFocus);
});