var _dec, _dec2, _dec3, _class;

import { Extension } from '../../lib/origami.chameleon.js';
import { Extends } from '../../lib/origami.chameleon.js';
import { Subject } from '../../lib/origami.chameleon.subjects.js';
import { Point } from '../../lib/origami.chameleon.subjects.js';
import { MLog } from './mixin.log.js';
const On = true;
const Off = false;
const ZoomOn = 'zoom-on';
const ZoomOff = 'zoom-off';
const SPoint = 'Effects.Zoom';
let SZoom = (_dec = Extension(Subject), _dec2 = Point(SPoint), _dec3 = Extends(MLog), _dec(_class = _dec2(_class = _dec3(_class = class SZoom {
  constructor(core) {
    this.core = core;
  }

  on() {
    this.log('[SZoom] - On');
    this.core.classList.remove(ZoomOff);
    this.core.classList.add(ZoomOn);
    this.isOn = On;
  }

  off() {
    this.log('[SZoom] - Off');
    this.core.classList.remove(ZoomOn);
    this.core.classList.add(ZoomOff);
    this.isOn = Off;
  }

}) || _class) || _class) || _class);
export { SZoom };
export default SZoom;
