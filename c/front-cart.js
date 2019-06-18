(function() {
  var configuration;

  configuration = {
    paths: {
      'cart': '//io.vtex.com.br/front.cart/1.3.7/',
      'flight': '//io.vtex.com.br/front-libs/flight/1.1.4-vtex/'
    },
    pluginPath: '//io.vtex.com.br/front-libs/curl/0.8.10-vtex.2/plugin/'
  };

  if (vtex.curl.configuration) {
    _.extend(vtex.curl.configuration.paths, configuration.paths);
  } else {
    vtex.curl.configuration = configuration;
  }

}).call(this);
