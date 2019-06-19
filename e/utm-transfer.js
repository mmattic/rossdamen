/** cookie name "ssys_utm" **/
/** returns all keys and values as JSON STRING **/
var vars = {};

function getParameterByName(name, url) {
    if (!url) {
        url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function getUrlVars(url) {
    vars = {};
    var url = url ? url.toString().split('?').pop() : window.location.href;
    url.replace(
	/([^=&]+)=([^&]*)/gi,
	function (m, key, value) {
	    key = unescape(key);
	    if (key && (key.indexOf("cid") >= 0 || key.indexOf("utm_term") >= 0 || key.indexOf("utm_ad") >= 0 || key.indexOf("utm_campaign") >= 0 || key.indexOf("utm_medium") >= 0 || key.indexOf("utm_source") >= 0 || key.indexOf("utm_content") >= 0)) {
	        value = unescape(value);
	        if (key in vars) {
	            if (vars[key] instanceof Array) {
	                vars[key].push(value);
	            } else {
	                vars[key] = [vars[key], value];
	            }
	        } else
	            vars[key] = value;
	    }
	});
    return JSON.stringify(vars);
}


function getCookie(c_name) {
    var c_value = document.cookie;
    var c_start = c_value.indexOf(" " + c_name + "=");
    if (c_start == -1) {
        c_start = c_value.indexOf(c_name + "=");
    }
    if (c_start == -1) {
        c_value = null;
    }
    else {
        c_start = c_value.indexOf("=", c_start) + 1;
        var c_end = c_value.indexOf(";", c_start);
        if (c_end == -1) {
            c_end = c_value.length;
        }
        c_value = unescape(c_value.substring(c_start, c_end));
    }
    if (c_value != null && c_value.indexOf("{", 0) >= 0) {
        return JSON.parse(c_value);   //returns object
    } else {
        return c_value;           // returns string
    }
}

function setCookie(c_name, value, exdays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value = escape(value) + ((exdays == null) ? "" : ";domain=.stratasys.com; path=/; expires=" + exdate.toUTCString());
    document.cookie = c_name + "=" + c_value;
}

function checkCookie() {

    var urlParams = getUrlVars();

    addUtmTermCookie();
    addUtmAdCookie();
    addUtmCampaignCookie();
    addUtmMediumCookie();
    addUtmSourceCookie();
    addUtmContentCookie();
    addCampaignIdCookie();

    var ssys_utm = getCookie("ssys_utm");

    if (ssys_utm != null && ssys_utm != "") {
        return false; // if cookie exists... 
    } else {
        ssys_utm = getUrlVars(); //getUrlVars
        if (ssys_utm == null || ssys_utm == "" || ssys_utm == "{}") {
            // skip
        } else {
            setCookie("ssys_utm", ssys_utm, 1);
        }
    }
    return true;
}


function addCampaignIdCookie() {

    var val = getParameterByName("cid");
    if (val != null) {
        setCookie("cid", val, 1);
        return;
    }

    if (document.getElementById('txtCampaignId') != null && document.getElementById('txtCampaignId').value != null) {
        setCookie("cid", document.getElementById('txtCampaignId').value, 1);
    }
}

function addUtmTermCookie() {

    if (vars != null) {
        var utm_term = vars.utm_term;
        if (utm_term != null) {
            setCookie("utm_term", utm_term, 1)
        }
    }
}

function addUtmAdCookie() {

    if (vars != null) {
        var utm_ad = vars.utm_ad;
        if (utm_ad != null) {
            setCookie("utm_ad", utm_ad, 1)
        }
    }
}

function addUtmCampaignCookie() {

    if (vars != null) {
        var utm_campaign = vars.utm_campaign;
        if (utm_campaign != null) {
            setCookie("utm_campaign", utm_campaign, 1)
        }
    }
}

function addUtmMediumCookie() {

    if (vars != null) {
        var utm_medium = vars.utm_medium;
        if (utm_medium != null) {
            setCookie("utm_medium", utm_medium, 1)
        }
    }
}

function addUtmSourceCookie() {

    if (vars != null) {
        var utm_source = vars.utm_source;
        if (utm_source != null) {
            setCookie("utm_source", utm_source, 1)
        }
    }
}

function addUtmContentCookie() {

    if (vars != null) {
        var utm_content = vars.utm_content;
        if (utm_content != null) {
            setCookie("utm_content", utm_content, 1)
        }
    }
}
