// fileTransform.js
module.exports = {
  process(src, filename) {
    return {
      code: `module.exports = ${JSON.stringify(filename)};`,
    };
  },
};
