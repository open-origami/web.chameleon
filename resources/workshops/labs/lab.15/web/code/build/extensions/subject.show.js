var _dec, _dec2, _dec3, _class;

import { Extension } from '../../lib/origami.chameleon.js';
import { Extends } from '../../lib/origami.chameleon.js';
import { Subject } from '../../lib/origami.chameleon.subjects.js';
import { Point } from '../../lib/origami.chameleon.subjects.js';
import { ALog } from './aspect.log.js';
const On = true;
const Off = false;
const ShowOn = 'show-on';
const ShowOff = 'show-off';
const SPoint = 'Effects.Show';
const Name = '[SShow]';
let SShow = (_dec = Extension(Subject), _dec2 = Point(SPoint), _dec3 = Extends(ALog), _dec(_class = _dec2(_class = _dec3(_class = class SShow {
  constructor(core) {
    this.core = core;
    this.name = Name;
    this.off();
  }

  on() {
    this.core.classList.remove(ShowOff);
    this.core.classList.add(ShowOn);
    this.isOn = On;
  }

  off() {
    this.core.classList.remove(ShowOn);
    this.core.classList.add(ShowOff);
    this.isOn = Off;
  }

}) || _class) || _class) || _class);
export { SShow };
export default SShow;