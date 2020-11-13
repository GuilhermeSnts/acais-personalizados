module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/sass/colors.sass"
        `
      }
    }
  }
};
