var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2;

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

import { Extension } from '../../lib/origami.chameleon.js';
import { Role } from '../../lib/origami.chameleon.roles.js';
import { State } from '../../lib/origami.chameleon.roles.js';
import { Begin } from '../../lib/origami.chameleon.roles.js';
import { Route } from '../../lib/origami.chameleon.roles.js';
import { Utils } from '../../lib/origami.chameleon.subjects.js';
import { Fire } from '../helpers/helper.fire.js';
import { Find } from '../helpers/helper.find.js';
const Tap = 'click';
const Lock = 'lock';
const Unlock = 'unlock';
const Require = 'require';
const Release = 'release';
const Ref = 'ref';
let RLock = (_dec = Extension(Role), _dec2 = Route(Lock, Tap), _dec3 = Route(Unlock, Tap), _dec4 = Route(Unlock, Unlock), _dec5 = Route(Lock, Tap), _dec6 = Route(Lock, Lock), _dec(_class = (_class2 = class RLock {
  constructor(core) {
    let ref = core.getAttribute(Ref);
    let peer = Find(ref);
    let fire = Fire(core);
    this.fire = fire;
    peer.addEventListener(Require, function () {
      fire(Unlock);
    });
    peer.addEventListener(Release, function () {
      fire(Lock);
    });
  }

  init() {}

  lock() {
    this.fire(Require);
    this.fire(Lock);
  }

  unlock() {
    this.fire(Release);
    this.fire(Unlock);
  }

}, (_applyDecoratedDescriptor(_class2.prototype, "init", [State, Begin, _dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "init"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "lock", [State, _dec3, _dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "lock"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "unlock", [State, _dec5, _dec6], Object.getOwnPropertyDescriptor(_class2.prototype, "unlock"), _class2.prototype)), _class2)) || _class);
export { RLock };
export default RLock;