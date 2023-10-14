var _dec, _dec2, _dec3, _class, _class2;

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

import { Extension } from '../../lib/origami.chameleon.js';
import { Role } from '../../lib/origami.chameleon.roles.js';
import { State } from '../../lib/origami.chameleon.roles.js';
import { Begin } from '../../lib/origami.chameleon.roles.js';
import { Guard } from '../../lib/origami.chameleon.roles.js';
import { Route } from '../../lib/origami.chameleon.roles.js';
import { Find } from '../helpers/helper.find.js';
import { Fire } from '../helpers/helper.fire.js';
const Ref = 'ref';
const FocusIn = 'focusIn';
const FocusOut = 'focusOut';
const Signal = 'signal';
const Next = 'next';
let RSync = (_dec = Extension(Role), _dec2 = Guard(Next), _dec3 = Route(Next), _dec(_class = (_class2 = class RSync {
  constructor(core) {
    let ref = core.getAttribute(Ref);
    let peer = Find(ref);
    let fire = Fire(core);
    this.core = core;
    peer.addEventListener(Signal, function () {
      fire(Next);
    });
  }

  next() {
    this.core.next();
  }

}, (_applyDecoratedDescriptor(_class2.prototype, "next", [State, Begin, _dec2, _dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "next"), _class2.prototype)), _class2)) || _class);
export { RSync };
export default RSync;