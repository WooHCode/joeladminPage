module.exports = {
  devServer: {
    proxy: {
      "/api/*": {
        target: "http://52.79.168.230:8080",
      },
    },
  },
};
