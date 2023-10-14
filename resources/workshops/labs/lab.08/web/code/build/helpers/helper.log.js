function Log(ext) {
  return {
    info(text) {
      let core = ext.core;
      let id = core.id;
      console.log(`${id} ${text}`);
    }

  };
}

export { Log };
export default Log;