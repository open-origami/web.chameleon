const Time = 400;

function Delay(fn, chain) {
  let pChain = chain || Promise.resolve();
  let time = chain && Time || 0;
  return pChain.then(function () {
    return new Promise(function (ok) {
      setTimeout(function () {
        fn();
        ok();
      }, time);
    });
  });
}

export { Delay };
export default Delay;
