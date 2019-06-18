(function() {
  var Session = (function() {
    var HOST_URL = window.location.href;
    var IMPERSONATED_KEY = 'vtex-impersonated-customer-email'

    Session.prototype.setParameter = function(key, value, options) {
      console.warn('`vtexjs.session.setParameter` is deprecated. Please use `vtexjs.session.setSessionParams` instead.')

      options = options || {};

      var autoRefresh = options.autoRefresh == null ? true : options.autoRefresh;

      if (key === IMPERSONATED_KEY) {
        if (value) {
          setCookie(key, value, 1);
        } else {
          deleteCookie(key);
        }
      }

      var params = {};

      if (key) {
        params[key] = { value: value };
      }

      var request = Session.prototype.setSessionParams(params);

      if (autoRefresh) {
        request = request.done(function() {
          window.location.reload();
        });
      }

      return request;
    }

    Session.prototype.setSessionParams = function(params) {
      var params = params || {};

      if (params[IMPERSONATED_KEY]) {
        var param = params[IMPERSONATED_KEY];
        if (param && param.value) {
          setCookie(IMPERSONATED_KEY, param.value, 1);
        } else {
          deleteCookie(IMPERSONATED_KEY);
        }
      }

      return $.ajax({
        type: 'POST',
        contentType: 'application/json',
        dataType: 'json',
        url: '/api/sessions/',
        data: JSON.stringify({
          public: params
        })
      });
    }

    Session.prototype.getSession = function(options) {
      options = options || {}
      var items = options.items ? options.items : '*';

      return $.ajax({
        type: 'GET',
        url: '/api/sessions/?items=' + items,
        contentType: 'application/json',
        dataType: 'json'
      })
    }

    Session.prototype.getSegment = function(options) {
      options = options || {}

      return $.ajax({
        type: 'GET',
        url: '/api/segments/',
        contentType: 'application/json',
        dataType: 'json'
      })
    }
  });

  window.vtexjs = window.vtexjs || {};
  window.vtexjs.session = new Session();

  $(document).ready(function () {
    vtexjs.session.setSessionParams().done(function() {
      $(window).trigger('https://consul.vteximg.com.br/api/sessions/files/session.done');
    });
    
    $(window).on('authenticatedUser.vtexid', function() {
      vtexjs.session.setSessionParams().done(function() {
        $(window).trigger('https://consul.vteximg.com.br/api/sessions/files/session.done');
      });
    })
  });

  function setCookie(key, value, expireDays) {
    key = key.replace(/[^#$&+\^`|]/g, encodeURIComponent);
    key = key.replace(/\(/g, '%28').replace(/\)/g, '%29');
    value = (value + '').replace(/[^!#$&-+\--:<-\[\]-~]/g, encodeURIComponent)

    var cookieString = key + '=' + value;

    if (expireDays) {
      var expireDate = new Date();
      expireDate.setDate(expireDate.getDate() + expireDays);
      cookieString += '; expires=' + expireDate.toUTCString()
    }

    cookieString += '; path=/'

    document.cookie = cookieString;
  }

  function deleteCookie(name) {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/;';
  }

}).call(this);