function Steps (config) {

  const REF       = '.step'
  const ACTIVE    = 'active'
  const DONE      = 'done'
  const TAP       = 'click'
  const BUTTON    = 'button'
  const EDITOR    = '.editor'
  const PREVIOUS  = '.previous'
  const NEXT      = '.next'
  const EDITABLE  = 'contenteditable'
  const DISABLED  = 'disabled'
  const POINTER   = 'pointer'
  const FORBIDDEN = 'not-allowed'
  const SMOOTH    = 'smooth'

  let ref = config.container || REF
  let Idx = 0

  function doActive (n, init) {
    let idx = 0
    for (let step of steps) {
      let editor  = step.querySelector    (EDITOR)
      let buttons = step.querySelectorAll (BUTTON)
      let classes = step.classList

      if (idx == n) classes.add    (ACTIVE)
      if (idx != n) classes.remove (ACTIVE)

      if (idx == n) editor && editor.setAttribute (EDITABLE, true)
      if (idx != n) editor && editor.setAttribute (EDITABLE, false)

      if (idx == n) [...buttons].map (btn => btn.removeAttribute (DISABLED))
      if (idx != n) [...buttons].map (btn => btn.setAttribute (DISABLED, true))

      if (idx == n) [...buttons].map (btn => btn.style.cursor = POINTER)
      if (idx != n) [...buttons].map (btn => btn.style.cursor = FORBIDDEN)

      if (idx < n)  classes.add    (DONE)
      if (idx >= n) classes.remove (DONE)

      idx++
    }

    let box  = steps[n].getBoundingClientRect ()
    let top  = box.top - 20
    let left = box.left
    !init && window.scrollBy ({
      top,
      left,
      behavior : SMOOTH
    })
  }

  function previous () {
    if (Idx > 0) {
      Idx = Idx - 1
      doActive (Idx)
    }
  }

  function next () {
    if (Idx < steps.length-1) {
      Idx = Idx + 1
      doActive (Idx)
    }
  }

  function init () {
    Idx   = 0
    steps = document.querySelectorAll (ref)
    for (let step of steps) {
      let pBtn   = step.querySelector (PREVIOUS)
      let nBtn   = step.querySelector (NEXT)
      let editor = step.querySelector (EDITOR)

      pBtn && pBtn.addEventListener (TAP, previous)
      nBtn && nBtn.addEventListener (TAP, next)
      if (editor) {
        editor.spellcheck = false
        editor.focus ()
        editor.blur  ()
      }
    }
    doActive (Idx, true)
  }

  return {
    init,
    previous,
    next
  }

}
