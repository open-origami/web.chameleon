function Router (hn) {

  const HASH     = 'hashchange'
  const HISTORY  = 'popstate'
  const LOAD     = 'load'
  const READY    = 'ready'

  function bind (fn) {
    return function (e) {
      const PATH = ':'
      const HYP  = '-'
      const SPC  = ' '
      const VOID = ''
      const HSH  = '#'
      const SEP  = '/'

      let [path, file] = location.hash.split (PATH)

      if (path && file) {
        let rPath = path.split (HYP).join (SPC)
        let rFile = file.split (HYP).join (SPC)
        let cPath = `${rPath}/${rFile}.md`.split (HSH).join (VOID)
        fn (cPath)
      }
      if (path && !file) {
        let file  = path
        let rFile = file.split (HYP).join (SPC)
        let cPath = `${rFile}.md`.split (HSH).join (VOID)
        fn (cPath)
      }
    }
  }

  window.addEventListener (HASH,     bind (hn))
  window.addEventListener (READY,    bind (hn))
  window.addEventListener (LOAD,     bind (hn))

}
