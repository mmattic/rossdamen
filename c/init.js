(function() {
  var lang, loadingFailedMessage, logFns, method, pageLang, _base, _base1, _base2, _i, _len;

  window.vtex || (window.vtex = {});

  (_base = window.vtex).i18n || (_base.i18n = {});

  (_base1 = window.vtex).checkout || (_base1.checkout = {});

  (_base2 = window.vtex).localeUtils || (_base2.localeUtils = {});

  window.console || (window.console = {
    log: function() {},
    warn: function() {},
    error: function() {}
  });

  if (Function.prototype.bind && typeof console === "object" && typeof console.log === "object") {
    logFns = ["log", "info", "warn", "error", "assert", "dir", "clear", "profile", "profileEnd"];
    for (_i = 0, _len = logFns.length; _i < _len; _i++) {
      method = logFns[_i];
      console[method] = Function.prototype.call.bind(console[method], console);
    }
  }

  window.vtex.debug = function(context) {
    var paddedContext;
    if (context == null) {
      context = '';
    }
    if (/vtexlocal|vtexcommercebeta/.test(window.location.host)) {
      paddedContext = context.slice(0, 10) + "          ".split('').splice(0, 10 - context.length).join('');
      return function() {
        return console.log.apply(console, arguments);
      };
    } else {
      return function() {};
    }
  };

  window.dammitIE = (function() {
    var get_internet_explorer_version, is_internet_explorer;
    is_internet_explorer = function() {
      return window.navigator.appName === "Microsoft Internet Explorer";
    };
    get_internet_explorer_version = function() {
      var matches;
      matches = new RegExp(" MSIE ([0-9].[0-9]);").exec(window.navigator.userAgent);
      if ((matches != null) && matches.length > 1) {
        return parseInt(matches[1].replace(".0", ""));
      }
      return true;
    };
    if (is_internet_explorer()) {
      return get_internet_explorer_version();
    }
    return false;
  })();

  if (!window.jQuery) {
    lang = document.getElementsByTagName('html')[0].getAttribute('lang') || 'pt-BR';
    loadingFailedMessage = {
      "pt-BR": "Houve um problema ao carregar a página. Atualizar?",
      "es-AR": "Hubo un problema al cargar la página. Recargar?",
      "en-US": "There was a problem loading the page. Refresh?"
    };
    if (confirm(loadingFailedMessage[lang])) {
      window.location.reload();
    }
  }

  pageLang = $('html').attr('lang');

  if (pageLang != null ? pageLang.match('es-') : void 0) {
    $('html').attr('lang', 'es');
  }

  if (pageLang != null ? pageLang.match('en-') : void 0) {
    $('html').attr('lang', 'en');
  }

  if (pageLang != null ? pageLang.match('fr-') : void 0) {
    $('html').attr('lang', 'fr');
  }

  if (pageLang != null ? pageLang.match('ca-') : void 0) {
    $('html').attr('lang', 'ca');
  }

  if (pageLang != null ? pageLang.match('ro-') : void 0) {
    $('html').attr('lang', 'ro');
  }

  $(function() {
    if (window.dammitIE) {
      return $('body').addClass('ie ie' + window.dammitIE);
    }
  });

}).call(this);
