function Loader (config) {

  const OK      = 200
  const RCODE   = 'pre code'
  const CCODE   = 'code'
  const ACTIVE  = 'active'
  const CONTENT = 'content'

  let ref   = config.container
  let base  = config.base
  let main  = config.default
  let error = config.error
  let mdIt  = {
    html        : true,
    linkify     : true,
    typographer : true
  }

  function getPath (base, resource) {
    return `${base}/${resource}`
  }

  function Highlight (container) {
    let codes = container.querySelectorAll (RCODE)
    for (let code of codes) {
      let parent  = code.parentNode
      let classes = parent.classList
      classes.add (CCODE)
    }
  }

  function isContent (container) {
    return container.classList.contains (CONTENT)
  }

  async function render (container, path) {
    let response = await fetch (path)
    if (response.status === OK) {
      isContent (container) && container.classList.remove (ACTIVE)
        let text = await response.text ()
        let html = markdownit (mdIt).render (text)
        container.innerHTML = html
        Highlight (container)
        window.scrollTo (0, 0)
      isContent (container) && container.classList.add (ACTIVE)
    }
    else {
      //window.location.href = error;
    }

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

  async function load (key) {
    sendPage ()
      let container = document.querySelector (ref)
      let resource  = key || main
      let path      = getPath (base, resource)
      let content   = await render (container, path)
    return content
  }

  return { load }

}
