const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/login', { //주소를 변수 처라 하면서 크로스 오리진
      target: 'http://192.168.0.118:8080',
      changeOrigin: true,
    }),
  );
  app.use(
    createProxyMiddleware('/joinMember', { //주소를 변수 처라 하면서 크로스 오리진
      target: 'http://192.168.0.118:8080',
      changeOrigin: true,
    }),
  );
  app.use(
    createProxyMiddleware('/api/v1/foodworks/account', { //주소를 변수 처라 하면서 크로스 오리진
      target: 'http://192.168.0.118:8080',
      changeOrigin: true,
    }),
  ); 
  // app.use(
  //   createProxyMiddleware('/user/mailCheck', {
  //     target: 'http://192.168.0.118:8080',
  //     changeOrigin: true,
  //   }),
  // );
};


// module.exports = function (app) {
//   app.use(
//      createProxyMiddleware('/signup1', {
//       target: 'http://192.168.0.3:8081',
//       changeOrigin: true,
//    }),
//   );
// };

