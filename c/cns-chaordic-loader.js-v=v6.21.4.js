//Insert loader.js
(function insertLoader() {
	var script = document.createElement('script');
	script.setAttribute('data-module', 'vtex');
	script.setAttribute('data-apikey', 'consul');
	script.setAttribute('data-initialize', 'false');
	script.setAttribute('async', 'async');
	script.setAttribute('defer', 'defer');
	script.src = 'loader.js'/*tpa=https://static.chaordicsystems.com/static/loader.js*/;
	document.getElementsByTagName('head')[0].appendChild(script);
})();
//END: Insert loader.js
//Insert autocomplete plugin
function insertAutocomplete() {
	var script = document.createElement('script');
	script.setAttribute('async', 'async');
	script.src = 'neemu_plugin.js'/*tpa=https://scripts.neemu.com/consul/neemu_plugin.js*/;
	document.getElementsByTagName('head')[0].appendChild(script);
	//Remove default autocomplete
	var autocomplete = document.getElementById('autocomplete-search');
	if (autocomplete) {
		autocomplete.parentNode.removeChild(autocomplete);
	}
}
//END: Insert autocomplete plugin

//Redirect search form
(function() {
	var a = 30;
	(function d() {
		var c = document.getElementsByClassName('form-search')[0],
			b = c && c.getElementsByClassName('text-search')[0];
		a--;
		b ? (/vtexcommercestable/.test(window.location.href) || insertAutocomplete(), c.action = 'https://busca.consul.com.br/busca', b.name = 'q', window.location.hostname.match('vtexcommercestable') && (b = document.createElement('input'), b.type = 'hidden', b.name = 'vtexcommercestable', b.value = 1, c.insertBefore(b, c.firstChild)), /vtexcommercestable/.test(window.location.href) && (b = c.cloneNode(!0),
		c.parentNode.replaceChild(b, c))) : 0 < a && setTimeout(d, 100);
	})();
})();
//END: Redirect search form