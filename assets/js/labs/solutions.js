function Solutions (config) {

  const SOURCE  = '.solution'
  const TARGET  = '.editor .code'
  const ACTION  = '.resolve'
  const TAP     = 'click'
  const SOLVED  = 'solved'
  const MS      = 300

  let source  = config.source || SOURCE
  let target  = config.target || TARGET
  let action  = config.action || ACTION

  async function copy (event) {
    let here   = event.target
    let parent = here.parentNode
    let sNode  = parent.querySelector (source)
    let tNode  = parent.querySelector (target)

    tNode.classList.add (SOLVED)
    setTimeout (function () {
      tNode.textContent = sNode.textContent
    }, MS)
  }

  function init () {
    let actions = document.querySelectorAll (action)
    for (let action of actions) {
      action.addEventListener (TAP, copy)
    }
  }

  return { init }

}
