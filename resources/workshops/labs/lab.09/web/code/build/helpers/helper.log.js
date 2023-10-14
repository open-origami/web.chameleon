function Log(ext) {
  return {
    info(text) {
      let core = ext.core;
      let cls = core.name;
      let id = core.core.id;
      console.log(`${id} ${cls} - ${text}`);
    }

  };
}

export { Log };
export default Log;