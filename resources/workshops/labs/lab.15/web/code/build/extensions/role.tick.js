var _dec, _dec2, _dec3, _class, _class2;

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

import { Extension } from '../../lib/origami.chameleon.js';
import { Role } from '../../lib/origami.chameleon.roles.js';
import { State } from '../../lib/origami.chameleon.roles.js';
import { Begin } from '../../lib/origami.chameleon.roles.js';
import { Guard } from '../../lib/origami.chameleon.roles.js';
import { Route } from '../../lib/origami.chameleon.roles.js';
import { Fire } from '../helpers/helper.fire.js';
const TStamp = 'timeupdate';
const Tick = 'tick';
const Wait = 'wait';
const Signal = 'signal';
const TRef = '.timeline';
const VRef = 'video';
const LSep = ' ';
const TSep = ':';
const {
  floor
} = Math;
let RTick = (_dec = Extension(Role), _dec2 = Guard(Tick), _dec3 = Route(Wait), _dec(_class = (_class2 = class RTick {
  constructor(core) {
    let times = core.querySelector(TRef);
    let video = core.querySelector(VRef);
    this.cache = [];
    this.ctx = {};
    this.fire = Fire(core);
    this.times = TLine(times);
    this.match = Match(this);
    video.addEventListener(TStamp, function () {
      let time = video.currentTime;
      this.ctx = {
        time
      };
      this.fire(Tick);
    }.bind(this));
  }

  wait() {
    let ctx = this.ctx;
    let time = ctx.time;
    let ok = this.match(time);
    ok && this.fire(Signal);
  }

}, (_applyDecoratedDescriptor(_class2.prototype, "wait", [State, Begin, _dec2, _dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "wait"), _class2.prototype)), _class2)) || _class);

function TLine(node) {
  let text = node.textContent;
  let times = text.split(LSep);
  let line = [];

  for (let time of times) {
    let [min, sec] = time.split(TSep);
    let iMin = parseInt(min);
    let iSec = parseInt(sec);
    let stamp = 60 * iMin + iSec;
    stamp && line.push(stamp);
  }

  return line;
}

function Match(ext) {
  return function (stamp) {
    let time = floor(stamp);
    let times = ext.times;
    let cache = ext.cache;
    let ok = true;
    ok = ok && times.includes(time);
    ok = ok && !cache.includes(time);
    ok && cache.push(time);
    return ok;
  };
}

export { RTick };
export default RTick;