var _dec, _dec2, _class, _class2;

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

import { Extension } from '../../lib/origami.chameleon.js';
import { Aspect } from '../../lib/origami.chameleon.aspects.js';
import { Around } from '../../lib/origami.chameleon.aspects.js';
const OnOff = '(on|off)';
let AGuard = (_dec = Extension(Aspect), _dec2 = Around(OnOff), _dec(_class = (_class2 = class AGuard {
  constructor(core) {}

  check(fn, ...args) {
    let ok = !!window.active;
    if (ok) fn(...args);
  }

}, (_applyDecoratedDescriptor(_class2.prototype, "check", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "check"), _class2.prototype)), _class2)) || _class);
export { AGuard };
export default AGuard;