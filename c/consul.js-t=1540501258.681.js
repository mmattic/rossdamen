(function(){
    var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification);
  if(!isSafari){

      function now(){
        return (new Date()).getTime();
      };

      var targets=[{"paths": [[["/agitador-original-326006145/", 1000]], [["/chamine-superior-original-w10638548/", 1000]]], "dates": "[false,false,false,false,false,true,false]", "h": "", "cb": "dataLayer.push({\r\n\tevent: \"generic-event-trigger\",\r\n\tcategory: \"Chat\",\r\n\taction: \"Abrir Chat\",\r\n\tlabel: \"-\"\r\n});\r\n\r\nfunction __rightNowChatActive(site) {\r\n\t\r\n\tvar flyoutDOM = document.querySelector('#rightNowChat');\r\n\t\r\n\t\r\n\tif (!flyoutDOM && (typeof window.chatOpen === 'undefined' && ( !window.chatOpen || window.chatOpen.closed ) ) ) {\r\n\t\r\n\t\tvar buttonBuy = document.querySelector('#BuyButton > a');\r\n\t\r\n\t\tvar css = document.createElement(\"style\");\r\n\t\tcss.type = \"text/css\";\r\n\r\n\t\tvar styles_rules = [];\r\n\t\tstyles_rules.push(\"#onlineSupportFlyout {\");\r\n\t\tstyles_rules.push(\"position: fixed;\");\r\n\t\tstyles_rules.push(\"bottom: 0;\");\r\n\t\tstyles_rules.push(\"right: 0;\");\r\n\t\tstyles_rules.push(\"margin-right: 20px;\");\r\n\t\tstyles_rules.push(\"width: 251px;\");\r\n\t\tstyles_rules.push(\"height: 256px;\");\r\n\t\tstyles_rules.push(\"background-color: #f8f8f8;\");\r\n\t\tstyles_rules.push(\"box-sizing: border-box;\");\r\n\t\tstyles_rules.push(\"z-index: 9999;\");\r\n\t\tstyles_rules.push(\"transition: all 0.4s ease;\");\r\n\t\tstyles_rules.push(\"}\");\r\n\r\n                styles_rules.push(\"#onlineSupportFlyout:not(.-open) {\");\r\n\t\tstyles_rules.push(\"height: 39px;\");\r\n\t\tstyles_rules.push(\"}\");\r\n\r\n\t\tif ( buttonBuy != null ){\r\n\t\t\tstyles_rules.push(\"@media(max-width: 768px) {\");\r\n\t\t\tstyles_rules.push(\"#onlineSupportFlyout:not(.-open) {\");\r\n\t\t\tstyles_rules.push(\"height: 93px;\");\t\r\n\t\t\tstyles_rules.push(\"}\");\r\n                \tstyles_rules.push(\"#onlineSupportFlyout {\");\r\n\t\t\tstyles_rules.push(\"z-index: 9990;\");\r\n\t\t\tstyles_rules.push(\"height: 286px;\");\r\n\t\t\tstyles_rules.push(\"}\");\r\n\t\t\tstyles_rules.push(\"}\");\r\n               }\r\n\r\n\t\tstyles_rules.push(\"@media(min-width: 720px) {\");\r\n\t\tstyles_rules.push(\"#onlineSupportFlyout {\");\r\n\t\tstyles_rules.push(\"margin-right: 20px;\");\r\n\t\tstyles_rules.push(\"width: 251px;\");\r\n\t\tstyles_rules.push(\"height: 256px;\");\r\n\t\tstyles_rules.push(\"}\");\r\n\t\tstyles_rules.push(\"}\");\r\n\t\t\r\n\t\tstyles_rules.push(\"@media(max-width: 420px) {\");\r\n\t\tstyles_rules.push(\"#onlineSupportFlyout {\");\r\n\t\tstyles_rules.push(\"margin-right: 0px;\");\r\n\t\tstyles_rules.push(\"bottom: 0;\");\r\n\t\tstyles_rules.push(\"width: 100%;\");\r\n\t\tstyles_rules.push(\"}\");\r\n\t\tstyles_rules.push(\"}\");\r\n\r\n\t\tcss.innerHTML = styles_rules.join('');\r\n\r\n\t\tdocument.head.appendChild(css);\r\n\r\n\t\tvar div = document.createElement('div');\r\n\r\n\t\tdiv.id = \"onlineSupportFlyout\";\r\n\t\tdiv.classList.toggle(\"-open\");\r\n\r\n\t\tvar span = document.createElement('span');\r\n\t\tspan.style.zIndex = \"9999\";\r\n\t\tspan.style.position = \"relative\";\r\n\t\tspan.style.cursor = \"pointer\";\r\n\t\tspan.style.display = \"block\";\r\n\t\tspan.style.paddingLeft = \"20px\";\r\n\t\tspan.style.width = \"100%\";\r\n\t\tspan.style.height = \"39px\";\r\n\t\tspan.style.backgroundColor = \"#9aca3c\";\r\n\t\tspan.style.color = \"white\";\r\n\t\tspan.style.font= \"16px proxima, Geneva, sans-serif\";\r\n\t\tspan.style.fontWeight = \"bold\";\r\n\t\tspan.style.lineHeight = \"41px\";\r\n\t\tspan.style.boxSizing = \"border-box\";\r\n\t\tspan.innerHTML = \"AJUDA ONLINE\";\r\n\r\n\t\tvar spanMinimize = document.createElement('span');\r\n\t\tspanMinimize.id = \"chatminimize\";\r\n\t\tspanMinimize.style.position = \"absolute\";\r\n\t\tspanMinimize.style.top = \"3px\";\r\n\t\tspanMinimize.style.right = \"45px\";\r\n\t\tspanMinimize.style.font= \"30px proxima, Geneva, sans-serif\";\r\n\t\tspanMinimize.style.fontWeight = \"bold\";\r\n\t\tspanMinimize.style.fill = \"white\";\r\n\t\tspanMinimize.innerHTML = '-';\r\n\r\n\t\tvar spanClose = document.createElement('span');\r\n\t\tspanClose.id = \"chatclose\";\r\n\t\tspanClose.style.position = \"absolute\";\r\n\t\tspanClose.style.top = \"6px\";\r\n\t\tspanClose.style.right = \"15px\";\r\n\t\tspanClose.style.font= \"25px proxima, Geneva, sans-serif\";\r\n\t\tspanClose.style.fontWeight = \"bold\";\r\n\t\tspanClose.style.fill = \"white\";\r\n\t\tspanClose.innerHTML = '<svg width=\"13\" height=\"13\" viewBox=\"0 0 1792 1792\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1490 1322q0 40-28 68l-136 136q-28 28-68 28t-68-28l-294-294-294 294q-28 28-68 28t-68-28l-136-136q-28-28-28-68t28-68l294-294-294-294q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 294 294-294q28-28 68-28t68 28l136 136q28 28 28 68t-28 68l-294 294 294 294q28 28 28 68z\"/></svg>';\r\n\r\n\t\tvar content = document.createElement('div');\r\n\t\tcontent.id = \"onlineSupportFlyout_content\";\r\n\t\tcontent.style.padding = \"20px 20px 44px\";\r\n\t\tcontent.style.height = \"calc(100% - 39px)\";\r\n\t\tcontent.style.border = \"none\";\r\n\t\tcontent.style.zIndex = \"9998\";\r\n\t\tcontent.style.font= \"14px proxima, Geneva, sans-serif\";\r\n\t\tcontent.style.color = \"#333\";\r\n\t\tcontent.style.border = \"1px solid #e5e5e5\";\r\n\r\n\t\tvar actionButton = document.createElement('a');\r\n\t\tactionButton.id = \"call_chat\";\r\n\t\tactionButton.href = \"#\";\r\n\t\tactionButton.style.display = \"block\";\r\n\t\tactionButton.style.padding = \"10px\";\r\n\t\tactionButton.style.width = \"100%\";\r\n\t\tactionButton.style.textAlign = \"center\";\r\n\t\tactionButton.style.textDecoration = \"none\";\r\n\t\tactionButton.style.font = \"16px proxima, Geneva, sans-serif\";\r\n\t\tactionButton.style.fontWeight = \"700\";\r\n                actionButton.style.borderRadius = \"30px\"\r\n\t\tactionButton.style.color = \"#9aca3c\";\r\n\t\tactionButton.style.border = \"2px solid #9aca3c\";\r\n\t\tactionButton.style.boxSizing = \"border-box\";\r\n\t\tactionButton.innerHTML = \"Iniciar Chat\";\r\n\r\n\t\tspan.appendChild(spanMinimize);\r\n\t\tspan.appendChild(spanClose);\r\n\t\tdiv.appendChild(span);\r\n\t\tdiv.appendChild(content);\r\n\t\tcontent.innerHTML += \"<p style='margin-top:8px;margin-bottom:36px'>Ol\u00e1, est\u00e1 em d\u00favida em qual \u00e9 a pe\u00e7a certa para o seu produto? Podemos te ajudar.</p>\";\r\n\t\tcontent.appendChild(actionButton);\r\n\r\n\t\tdocument.body.appendChild(div);\r\n\t\t\r\n\t\tvar inputs = document.querySelectorAll('input');\r\n\t\t\r\n\t\tif ( buttonBuy != null ){\r\n\t\t\tbuttonBuy.style.zIndex = \"9999\";\r\n\t\t}\r\n\t\t\r\n\t\tdocument.querySelector('#chatminimize').addEventListener('click', function() {\r\n\t\t\tminimizePreChat();\r\n\t\t});\r\n\t\t\r\n\t\tdocument.querySelector('#chatclose').addEventListener('click', function() {\r\n\t\t\tremovePreChat();\r\n\t\t});\r\n\t\r\n\r\n\t\tdocument.querySelector('#call_chat').addEventListener('click', function() {\r\n\t\t\tremovePreChat();\r\n\t\t\tchat();\r\n\t\t});\r\n\t\t\r\n\t\tfunction chat(e) {\r\n            var url = \"https://\" + __site + \".custhelp.com/app/chat/chat_launch_fishing?active_chat=1&assunto=comprar_pecas\";\r\n\t\t\tchatOpen = window.open(url, \"Ajuda_online\",'height=600,width=350');\r\n\t\t}\r\n\t\t\r\n\t\tfunction minimizePreChat(){\r\n\t\t\tvar onlineSupportFlyout = document.querySelector('#onlineSupportFlyout');\r\n\t\t\tonlineSupportFlyout.classList.toggle(\"-open\");\r\n\t\t}\r\n\t\t\r\n\t\tfunction removePreChat(){\r\n\t\t\tvar mainDiv = document.querySelector('#onlineSupportFlyout');\r\n\t\t\tmainDiv.parentNode.removeChild(mainDiv);\r\n\t\t}\r\n\t}\r\n}\r\nvar __site = 'consul';\r\n__rightNowChatActive(__site);\r\nif(window.innerWidth <= 768){\r\ndocument.getElementById(\"chatminimize\").click();\r\n}", "id": 2, "once": false}];

      var starttime=now();
      var locationpath=location.href.replace(/^https?:\/\/[^\/]*\//,"/");
      var hist=localStorage.autobots||"[]";
      var reachedtargets=sessionStorage.targets||"[]";

      hist=JSON.parse(hist);
      hist.push([locationpath,'p',0]);
      reachedtargets=JSON.parse(reachedtargets);

      // Convert all step paths to RegExps.
      for(var i=0;i<targets.length;i++){
        for(var j=0;j<targets[i].paths.length;j++){
          targets[i].paths[j]=targets[i].paths[j].map(function(p){
            return [new RegExp(p[0]),p[1]];
          });
        }
      }

      // Filter paths which last step is not this page 
      for(var i=0;i<targets.length;i++){
        targets[i].paths=targets[i].paths.filter(function(target){
          return target[target.length-1][0].test(locationpath);
        });
      }

      // Filter targets already reached on this session and empty targets
      // or is disabled by date and time rules
      targets=targets.filter(function(target){
        if(target.once && reachedtargets.indexOf(reachedtargets.id)>-1){
            return false;
        }
        try{target.dates=JSON.parse(target.dates);}catch(e){}
        if(target.dates){
          var d=new Date();
          var wd=d.getDay();
          if(typeof target.dates[wd]=='boolean'){
            return target.dates[wd];
          }
          var dt=("0"+d.getHours()).substr(-2)+":"+("0"+d.getMinutes()).substr(-2)
          return (dt >= target.dates[wd][0]) && (dt <= target.dates[wd][1]);
        }
        return target.paths.length;
      });

      // Remove old autobots history itens
      while(hist.length>100){
        hist.shift();
      }

      // Navigation monitor
      function up(){

        // Update history
        hist[hist.length-1][2]=now()-starttime;
        localStorage.autobots=JSON.stringify(hist);

        // For each target
        for(var i=0;i<targets.length;i++){

          var target=targets[i];

          // Temporarily clone its paths
          var paths=[];
          for(var j=0;j<target.paths.length;j++){
            paths.push(target.paths[j].slice());
          }

          // For each path
          for(var pi=0;pi<paths.length;pi++){
              // Test if is it reached
              for(var j=0;j<hist.length;j++){
                if(paths[pi][0][0].test(hist[j][0]) && paths[pi][0][1]<=hist[j][2]){

                  paths[pi].shift();

                  // Is this the last path on this pathway? Target reached.
                  if(paths[pi].length==0){

                    reachedtargets.push(targets[i].id);
                    sessionStorage.targets=JSON.stringify(reachedtargets);

                    if(targets[i].h){
                        // Insert target HTML
                        document.body.insertAdjacentHTML('beforeend',targets[i].h);
                    }

                    if(targets[i].cb){
                        // Execute target action
                        eval(targets[i].cb);
                    }

                    targets.splice(i,1);
                    break;
                  }

                }
              }

          }
        }
      };

      setInterval(up,100);

  }

})();
