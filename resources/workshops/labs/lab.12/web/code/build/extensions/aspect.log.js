var _dec, _dec2, _class, _class2;

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

import { Extension } from '../../lib/origami.chameleon.js';
import { Aspect } from '../../lib/origami.chameleon.aspects.js';
import { Before } from '../../lib/origami.chameleon.aspects.js';
import { Log } from '../helpers/helper.log.js';
const OnOff = '(on|off)';
let ALog = (_dec = Extension(Aspect), _dec2 = Before(OnOff), _dec(_class = (_class2 = class ALog {
  constructor(core) {
    this.core = core;
  }

  log(...args) {
    let Cls = this;
    let text = args.pop();
    Log(Cls).info(text);
  }

}, (_applyDecoratedDescriptor(_class2.prototype, "log", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "log"), _class2.prototype)), _class2)) || _class);
export { ALog };
export default ALog;