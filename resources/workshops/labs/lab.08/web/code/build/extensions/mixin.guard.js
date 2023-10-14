var _dec, _class;

import { Extension } from '../../lib/origami.chameleon.js';
import { Mixin } from '../../lib/origami.chameleon.mixins.js';
import { Override } from '../../lib/origami.chameleon.mixins.js';
let MGuard = (_dec = Extension(Mixin), _dec(_class = class MGuard {
  constructor(core) {}

  check() {
    return !!window.active;
  }

}) || _class);
export { MGuard };
export default MGuard;