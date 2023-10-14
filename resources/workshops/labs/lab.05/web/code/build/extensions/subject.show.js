var _dec, _dec2, _class;

import { Extension } from '../../lib/origami.chameleon.js';
import { Subject } from '../../lib/origami.chameleon.subjects.js';
import { Point } from '../../lib/origami.chameleon.subjects.js';
const On = true;
const Off = false;
const ShowOn = 'show-on';
const ShowOff = 'show-off';
const SPoint = 'Effects.Show';
let SShow = (_dec = Extension(Subject), _dec2 = Point(SPoint), _dec(_class = _dec2(_class = class SShow {
  constructor(core) {
    this.core = core;
    this.on();
  }

  on() {
    console.log('[SShow] - On');
    this.core.classList.remove(ShowOff);
    this.core.classList.add(ShowOn);
    this.isOn = On;
  }

  off() {
    console.log('[SShow] - Off');
    this.core.classList.remove(ShowOn);
    this.core.classList.add(ShowOff);
    this.isOn = Off;
  }

}) || _class) || _class);
export { SShow };
export default SShow;
