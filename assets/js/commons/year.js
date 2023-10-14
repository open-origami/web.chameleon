function Year (config) {

  let { container } = config
  let { ref       } = config

  let eContainer = document.querySelector (container) || body
  let targets    = eContainer.querySelectorAll (ref)
  let date       = new Date ()
  let year       = date.getFullYear ()

  for (let target of [...targets]) {
    target.innerHTML = year
  }
}
