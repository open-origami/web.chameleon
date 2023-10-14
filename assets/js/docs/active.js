function Active (config) {

  const BODY   = 'body'
  const LOAD   = 'load'
  const HASH   = 'hashchange'
  const TAP    = 'click'
  const LINKS  = 'a'
  const ACTIVE = 'active'
  const READY  = 'ready'

  const ref   = config.container || BODY
  const link  = config.links     || LINKS

  let container = document.querySelector (ref)
  let links     = ()   => [...container.querySelectorAll (link)]
  let isLink    = link => links ().includes (link)

  function getActive () {
    return links ().find (function (link) {
      return link.parentNode.classList.contains (ACTIVE)
    })
  }

  function setActive (link) {
    removeActive ()
    link.parentNode.classList.add (ACTIVE)
  }

  function removeActive () {
    let link = getActive ()
    if (link) {
      link.parentNode.classList.remove (ACTIVE)
    }
  }

  function onLink (e) {
    let link = e.target
    if (isLink (link)) {
      setActive (link)
    }
  }

  function onLoad () {
    let hash = location.hash
    let link = document.querySelector (`[href="${hash}"]`)
    link && setActive (link)
  }

  function Ready () {
    onLoad ()
    window.dispatchEvent (new Event (READY))
  }

  return {
    start () {
      container.addEventListener (TAP,  onLink)
         window.addEventListener (HASH, onLoad)
         Ready ()
    },

    stop () {
      container.removeEventListener (TAP,  onLink)
         window.removeEventListener (HASH, onLoad)
    }
  }

}
