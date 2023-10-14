function Loader (config) {

  const OK       = 200
  const DIV      = 'div'
  const TITLE    = 'h1'
  const SUBTITLE = 'h2'
  const SUMMARY  = 'h2 + p'
  const STEP     = 'li:first-child'
  const TIME     = 'li:nth-child(2)'
  const LEVEL    = 'li:last-child'
  const HREF     = 'a'
  const SPC      = ' '
  const SUFIX    = '...'

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
    let titles    = [...parser.querySelectorAll    (TITLE)].map (node => node.textContent)
    let subtitles = [...parser.querySelectorAll (SUBTITLE)].map (node => node.textContent)
    let summaries = [...parser.querySelectorAll  (SUMMARY)].map (node => node.textContent)
    let steps     = [...parser.querySelectorAll     (STEP)].map (node => node.textContent)
    let times     = [...parser.querySelectorAll     (TIME)].map (node => node.textContent)
    let levels    = [...parser.querySelectorAll    (LEVEL)].map (node => node.textContent)
    let hrefs     = [...parser.querySelectorAll     (HREF)].map (node => node.getAttribute ('href'))

    let sTemplate = document.querySelector (template)
    let max = titles.length
    let idx = 0
    while (idx < max) {
      createLab (sTemplate, {
        title       : titles    [idx],
        subtitle    : subtitles [idx],
        description : withEllipsis (summaries [idx], 180),
        steps       : steps     [idx],
        time        : times     [idx],
        level       : levels    [idx],
        href        : hrefs     [idx]
      })
      idx++
    }
  }

  function withEllipsis (text, max) {
    let words  = text.split (SPC)
    let lWords = 0
    let sWords = []
    for (let word of words) {
      let lWord  = word.length
          lWords = lWords + lWord
      if (lWords < max) sWords.push (word)
    }
    let sText = sWords.join (SPC)

    if (lWords > max) return `${sText}${SUFIX}`
    else              return `${sText}`
  }

  function createLab (template, lab) {
    let content = template.content
    let tNode   = content.querySelector ('.lab .title')
    let sNode   = content.querySelector ('.lab .subtitle')
    let dNode   = content.querySelector ('.lab .description')
    let eNode   = content.querySelector ('.lab .steps')
    let iNode   = content.querySelector ('.lab .time')
    let lNode   = content.querySelector ('.lab .level')
    let aNode   = content.querySelector ('.lab .start')

    tNode.textContent = lab.title
    sNode.textContent = lab.subtitle
    dNode.textContent = lab.description
    eNode.textContent = lab.steps
    iNode.textContent = lab.time
    lNode.textContent = lab.level
    aNode.setAttribute ('href', `./lab.html${lab.href}`)

    let container = document.querySelector (ref)
    let clone     = document.importNode (content, true)
    container.appendChild (clone);
  }

  async function render (path) {
    let response = await fetch (path)
    if (response.status === OK) {
      let text = await response.text ()
      let html = markdownit (mdIt).render (text)
      Process (html)
    }
    else window.location.href = error;

    return response
  }

  return {
    load (key) {
      let resource = key || main
      let path     = getPath (base, resource)
      return render (path)
    }
  }

}
