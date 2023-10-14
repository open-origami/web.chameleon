var _dec, _dec2, _dec3, _class;

import { Extension } from '../../lib/origami.chameleon.js';
import { Extends } from '../../lib/origami.chameleon.js';
import { Subject } from '../../lib/origami.chameleon.subjects.js';
import { Point } from '../../lib/origami.chameleon.subjects.js';
import { ALog } from './aspect.log.js';
const On = true;
const Off = false;
const LeanOn = 'lean-on';
const LeanOff = 'lean-off';
const SPoint = 'Effects.Lean';
const Name = '[SLean]';
let SLean = (_dec = Extension(Subject), _dec2 = Point(SPoint), _dec3 = Extends(ALog), _dec(_class = _dec2(_class = _dec3(_class = class SLean {
  constructor(core) {
    this.core = core;
    this.name = Name;
    this.off();
  }

  on() {
    this.core.classList.remove(LeanOff);
    this.core.classList.add(LeanOn);
    this.isOn = On;
  }

  off() {
    this.core.classList.remove(LeanOn);
    this.core.classList.add(LeanOff);
    this.isOn = Off;
  }

}) || _class) || _class) || _class);
export { SLean };
export default SLean;