function State (config) {

  const TAP = 'click'

  let control = document.querySelector (config.control)
  let states  = config.states
  let targets = config.targets.map (document.querySelector.bind(document))

  function setState (state) {
    targets.forEach (e => e.classList.add(state))
  }

  function delState (state) {
    targets.forEach (e => e.classList.remove(state))
  }

  function setOn () {
    delState (states.off)
    setState (states.on)
  }

  function setOff () {
    delState (states.on)
    setState (states.off)
  }

  let isOn = false
  function onOff () {
    isOn = !isOn
    isOn && setOn  ()
   !isOn && setOff ()
  }

  return {
    start () { control.addEventListener    (TAP, onOff) },
    stop  () { control.removeEventListener (TAP, onOff) },

    on  : setOn,
    off : setOff
  }

}
