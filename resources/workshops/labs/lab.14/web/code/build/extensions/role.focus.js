var _dec, _dec2, _dec3, _class, _class2;

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

import { Extension } from '../../lib/origami.chameleon.js';
import { Role } from '../../lib/origami.chameleon.roles.js';
import { State } from '../../lib/origami.chameleon.roles.js';
import { Begin } from '../../lib/origami.chameleon.roles.js';
import { Route } from '../../lib/origami.chameleon.roles.js';
import { Utils } from '../../lib/origami.chameleon.subjects.js';
const FocusIn = 'focusIn';
const FocusOut = 'focusOut';
const Lock = 'lock';
const Unlock = 'unlock';
let RFocus = (_dec = Extension(Role), _dec2 = Route(FocusOut, Unlock), _dec3 = Route(FocusIn, Lock), _dec(_class = (_class2 = class RFocus {
  constructor(core) {
    this.focusIn = Utils(core).Effects.Zoom;
    this.focusOut = Utils(core).Effects.Lean;
  }

  focusIn() {
    this.focusIn.on();
    this.focusOut.off();
  }

  focusOut() {
    this.focusIn.off();
    this.focusOut.on();
  }

}, (_applyDecoratedDescriptor(_class2.prototype, "focusIn", [State, _dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "focusIn"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "focusOut", [State, Begin, _dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "focusOut"), _class2.prototype)), _class2)) || _class);
export { RFocus };
export default RFocus;