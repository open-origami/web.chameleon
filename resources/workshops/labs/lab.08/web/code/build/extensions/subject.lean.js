var _dec, _dec2, _dec3, _dec4, _class;

import { Extension } from '../../lib/origami.chameleon.js';
import { Extends } from '../../lib/origami.chameleon.js';
import { Subject } from '../../lib/origami.chameleon.subjects.js';
import { Point } from '../../lib/origami.chameleon.subjects.js';
import { MLog } from './mixin.log.js';
import { MGuard } from './mixin.guard.js';
const On = true;
const Off = false;
const LeanOn = 'lean-on';
const LeanOff = 'lean-off';
const SPoint = 'Effects.Lean';
let SLean = (_dec = Extension(Subject), _dec2 = Point(SPoint), _dec3 = Extends(MLog), _dec4 = Extends(MGuard), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class SLean {
  constructor(core) {
    this.core = core;
  }

  on() {
    if (this.check()) {
      this.log('[SLean] - On');
      this.core.classList.remove(LeanOff);
      this.core.classList.add(LeanOn);
      this.isOn = On;
    }
  }

  off() {
    if (this.check()) {
      this.log('[SLean] - Off');
      this.core.classList.remove(LeanOn);
      this.core.classList.add(LeanOff);
      this.isOn = Off;
    }
  }

}) || _class) || _class) || _class) || _class);
export { SLean };
export default SLean;