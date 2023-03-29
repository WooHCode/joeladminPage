module.exports = {
  devServer: {
    before(app) {
      app.use("/api", function (req, res) {
        const targetUrl =
          "http://ec2-52-79-168-230.ap-northeast-2.compute.amazonaws.com:8080";
        const url = targetUrl + req.originalUrl;
        req.pipe(request(url)).pipe(res);
      });
    },
  },
};
