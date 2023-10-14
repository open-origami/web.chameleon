function Slides (config) {

  let slides = [...document.querySelectorAll (config.container)]
  let time   = config.time
  let delay  = config.delay

  const SHOW = 'show'
  const HIDE = 'hide'
  const DROP = 'drop'

  function Wait (fn, ms) {
    return function (...args) {
      return new Promise (function (ok, ko) {
        setTimeout (function () {
          let rOut = fn (...args)
          ok (rOut)
        }, ms || 0)
      })
    }
  }

  function CSlides (slides) {

    let idx = 0
    let max = slides.length

    function init () {
      slides.forEach ((slide, i) => { drop (i) })
      show (0)
    }

    function previous () { idx = (idx-1) % max }
    function next     () { idx = (idx+1) % max }

    function show (n) {
      n = n || idx
      slides[n].classList.remove (HIDE)
      slides[n].classList.remove (DROP)
      slides[n].classList.add    (SHOW)

    }
    function hide (n) {
      n = n || idx
      slides[n].classList.remove (SHOW)
      slides[n].classList.remove (DROP)
      slides[n].classList.add    (HIDE)
    }
    function drop (n) {
      n = n || idx
      slides[n].classList.remove (SHOW)
      slides[n].classList.remove (HIDE)
      slides[n].classList.add    (DROP)
    }

    return {
      init,
      previous,
      next,
      show : Wait (show),
      hide : Wait (hide, time),
      drop : Wait (drop, delay),
    }
  }

  let cSlides = CSlides (slides)
  let end = false

  return {

    async start () {
      cSlides.init ()
      await cSlides.show ()
      await cSlides.hide ()
      await cSlides.drop ()
      cSlides.next ()
      if (!end) this.start ()
    },

    async stop () {
      clearInterval (cId)
    }
  }
}
