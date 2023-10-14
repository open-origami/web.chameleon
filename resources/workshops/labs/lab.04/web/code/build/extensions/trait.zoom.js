var _dec, _class, _class2;

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

import { Extension } from '../../lib/origami.chameleon.js';
import { Trait } from '../../lib/origami.chameleon.traits.js';
import { After } from '../../lib/origami.chameleon.traits.js';
import { Delay } from '../helpers/helper.delay.js';
const On = true;
const Off = false;
const ZoomOn = 'zoom-on';
const ZoomOff = 'zoom-off';
let TZoom = (_dec = Extension(Trait), _dec(_class = (_class2 = class TZoom {
  constructor(core) {
    this.core = core;
    this.off();
  }

  on(chain) {
    return Delay(function () {
      console.log('[TZoom] - On');
      this.core.classList.remove(ZoomOff);
      this.core.classList.add(ZoomOn);
      this.core.isOn = On;
    }.bind(this), chain);
  }

  off(chain) {
    return Delay(function () {
      console.log('[TZoom] - Off');
      this.core.classList.remove(ZoomOn);
      this.core.classList.add(ZoomOff);
      this.core.isOn = Off;
    }.bind(this), chain);
  }

}, (_applyDecoratedDescriptor(_class2.prototype, "on", [After], Object.getOwnPropertyDescriptor(_class2.prototype, "on"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "off", [After], Object.getOwnPropertyDescriptor(_class2.prototype, "off"), _class2.prototype)), _class2)) || _class);
export { TZoom };
export default TZoom;