var _dec, _dec2, _dec3, _dec4, _class;

import { Extension } from '../../lib/origami.chameleon.js';
import { Extends } from '../../lib/origami.chameleon.js';
import { Subject } from '../../lib/origami.chameleon.subjects.js';
import { Point } from '../../lib/origami.chameleon.subjects.js';
import { AGuard } from './aspect.guard.js';
import { ALog } from './aspect.log.js';
const On = true;
const Off = false;
const ZoomOn = 'zoom-on';
const ZoomOff = 'zoom-off';
const SPoint = 'Effects.Zoom';
const Name = '[SZoom]';
let SZoom = (_dec = Extension(Subject), _dec2 = Point(SPoint), _dec3 = Extends(AGuard), _dec4 = Extends(ALog), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class SZoom {
  constructor(core) {
    this.core = core;
    this.name = Name;
    this.off();
  }

  on() {
    this.core.classList.remove(ZoomOff);
    this.core.classList.add(ZoomOn);
    this.isOn = On;
  }

  off() {
    this.core.classList.remove(ZoomOn);
    this.core.classList.add(ZoomOff);
    this.isOn = Off;
  }

}) || _class) || _class) || _class) || _class);
export { SZoom };
export default SZoom;