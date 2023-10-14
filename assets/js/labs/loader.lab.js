function Loader (config) {

  const OK       = 200
  const DIV      = 'div'
  const TITLE    = 'h1'
  const SUBTITLE = 'h2'
  const SUMMARY  = 'p'
  const DLINK    = 'a'
  const RLINK    = 'a + a'
  const TSTEP    = 'h3'
  const ISTEP    = 'h3 + p'
  const FSTEP    = 'li'
  const CSTEP    = '.language-code'
  const SSTEP    = '.language-solution'
  const STEP     = '.step'
  const HEAD     = '.head'
  const NHEAD    = '.head .number'
  const TAP      = 'click'
  const DOWNLOAD = '.download'
  const RUN      = '.run'


  let ref      = config.container
  let template = config.template
  let base     = config.base
  let main     = config.default
  let error    = config.error
  let mdIt     = {
    html        : true,
    linkify     : true,
    typographer : true
  }

  function getPath (base, resource) {
    return `${base}/${resource}`
  }

  function Parser (html) {
    let doc = document.createElement (DIV)
    doc.innerHTML = html
    return doc
  }

  function Process (html) {
    let parser    = Parser (html)
    let title     = parser.querySelector    (TITLE).textContent
    let subtitle  = parser.querySelector (SUBTITLE).textContent
    let summary   = parser.querySelector  (SUMMARY).textContent
    let dLink     = parser.querySelector    (DLINK).getAttribute ('href')
    let rLink     = parser.querySelector    (RLINK).getAttribute ('href')
    let tStep     = parser.querySelectorAll (TSTEP)
    let iStep     = parser.querySelectorAll (ISTEP)
    let fStep     = parser.querySelectorAll (FSTEP)
    let cStep     = parser.querySelectorAll (CSTEP)

    let sTemplate = document.querySelector (template)

    createHeader (title, subtitle ,summary)

    let max = tStep.length
    let idx = 0
    while (idx < max) {
      createStep (sTemplate, {
        index        : idx+1,
        title        : tStep[idx]    .textContent,
        instructions : iStep[idx]    .textContent,
        file         : fStep[2*idx]  .textContent,
        caption      : fStep[2*idx+1].textContent,
        code         : cStep[idx]    .textContent,
      })
      idx++
    }

    let number = document.querySelector (NHEAD)
    let dBtn   = document.querySelector (DOWNLOAD)
    let rBtn   = document.querySelector (RUN)
    dBtn && dBtn.addEventListener (TAP, open (dLink))
    rBtn && rBtn.addEventListener (TAP, open (rLink))
    number.textContent = 1
  }

  function open (url) {
    return function (e) {
      e.preventDefault ()
      window.open(url, "_blank");

      let action = event.target.dataset.action
      let label  = location.hash.substring (1)

      window.ga && ga ('send', 'event', {
        eventCategory : 'Labs',
        eventAction   : action,
        eventLabel    : label
      })
    }
  }

  function createHeader (title, subtitle, description) {
    let container = document.querySelector (ref)
    let tNode = container.querySelector ('.title')
    let sNode = container.querySelector ('.subtitle')
    let dNode = container.querySelector ('.description')

    tNode.textContent = title
    sNode.textContent = subtitle
    dNode.textContent = description
  }

  function createStep (template, step) {
    let content = template.content
    let nNode   = content.querySelector ('.number')
    let tNode   = content.querySelector ('.instructions .title')
    let iNode   = content.querySelector ('.instructions .description')
    let fNode   = content.querySelector ('.workspace .title')
    let cNode   = content.querySelector ('.workspace .caption')
    let eNode   = content.querySelector ('.workspace .editor .code')
    let sNode   = content.querySelector ('.workspace .solution')

    nNode.textContent = step.index + 1
    tNode.textContent = step.title
    iNode.textContent = step.instructions
    fNode.textContent = step.file
    cNode.textContent = step.caption
    eNode.textContent = step.code
    sNode.textContent = step.solution

    let container = document.querySelector (ref)
    let clone     = document.importNode (content, true)

    container.appendChild (clone)
  }

  async function render (path) {
    let response = await fetch (path)
    if (response.status === OK) {
      let text = await response.text ()
      let html = markdownit (mdIt).render (text)
      Process (html)
    }
    else window.location.href = error

    return response
  }


  function pageChanged () {
    let page    = window.page
    window.page = location.hash
    return !page || page !== window.page
  }

  function sendPage () {
    let path     = location.pathname
    let resource = location.hash
    let change   = pageChanged ()
    let page     = path + resource

    if (change && window.ga) ga('send', 'pageview', page)
  }

  function load (key) {
    sendPage ()
      let resource = key || main
      let path     = getPath (base, resource)
      let content  = render (path)
    return content
  }

  return { load }

}
