

function Fire (core) {
  return function (type) {
    let event = new Event (type)
    core.dispatchEvent (event)
  }
}

export { Fire }
export default Fire
