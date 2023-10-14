var _dec, _class;

import { Extension } from '../../lib/origami.chameleon.js';
import { Mixin } from '../../lib/origami.chameleon.mixins.js';
import { Log } from '../helpers/helper.log.js';
let MLog = (_dec = Extension(Mixin), _dec(_class = class MLog {
  constructor(core) {}

  log(text) {
    Log(this).info(text);
  }

}) || _class);
export { MLog };
export default MLog;