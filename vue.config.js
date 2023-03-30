module.exports = {
  devServer: {
    proxy: {
      "^/api": {
        target:
          "http://ec2-52-79-168-230.ap-northeast-2.compute.amazonaws.com:8080",
        changeOrigin: true,
      },
    },
  },
};
