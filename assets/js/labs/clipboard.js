function Clipboard (config) {

  const TAP   = 'click'
  const COPY  = 'copy'
  const BOARD = '.clipboard'
  const MIN  = 0
  const MAX  = 99999

  let ref    = config.container
  let text   = config.text
  let action = config.action

  function copy (container) {
    let node  = container.querySelector (text)
    let board = container.querySelector (BOARD)
    let code  = node.textContent
    board.value = code

    board.select ()
    board.setSelectionRange (MIN, MAX)
    document.execCommand (COPY)
  }

  function init () {
    let containers = document.querySelectorAll (ref)
    for (let container of containers) {
      let btn = container.querySelector (action)
      btn && btn.addEventListener (TAP, function () {
        copy (container)
      })
    }
  }

  return { init }
}
