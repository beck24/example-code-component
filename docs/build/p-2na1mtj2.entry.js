import{r as e,h as t,g as n,H as r}from"./p-f16d1c19.js";const i=class{constructor(t){e(this,t),this.activeTab="html",this.htmlCode=""}componentDidRender(){const e=this.el.shadowRoot.querySelector(".tab-js slot"),t=this.el.shadowRoot.querySelector(".tab-css slot");e.assignedNodes().length||this.el.shadowRoot.querySelector("button.js").remove(),t.assignedNodes().length||this.el.shadowRoot.querySelector("button.css").remove()}getClass(){let e={"example-code-component":!0};return e[this.activeTab]=!0,e}render(){return t("div",{class:this.getClass()},t("div",{class:"example"},t("slot",{name:"example"})),t("div",{class:"tabs"},t("button",{class:"html",onClick:()=>this.activeTab="html"},"HTML"),t("button",{class:"js",onClick:()=>this.activeTab="js"},"JS"),t("button",{class:"css",onClick:()=>this.activeTab="css"},"CSS")),t("div",{class:"tab tab-html"},t("div",{class:"slot-container"},t("pre",null,t("slot",{name:"html"}))),t("div",{class:"html-output"},this.htmlCode)),t("div",{class:"tab tab-js"},t("slot",{name:"javascript"})),t("div",{class:"tab tab-css"},t("slot",{name:"css"})))}get el(){return n(this)}static get style(){return".example-code-component .tab{display:none;padding:16px;border:1px solid #ccc;background-color:#fcfcfc;color:#000;margin-top:-1px}.example-code-component.css .tab-css,.example-code-component.html .tab-html,.example-code-component.js .tab-js{display:block}.example-code-component button{padding:3px 6px;border:none;outline:none;font:inherit;color:inherit;background:none;border-radius:0;background-color:#ccc;border:1px solid #ccc;border-bottom:0;min-width:100px;cursor:pointer}.example-code-component button:active,.example-code-component button:focus{outline:none}.example-code-component.css button.css,.example-code-component.html button.html,.example-code-component.js button.js{background-color:#fcfcfc}.example-code-component .example{border:1px solid #ccc;background-color:#fcfcfc;padding:16px;margin-bottom:16px}"}},a=class{constructor(t){e(this,t),this.language=""}componentDidRender(){window.Prism||function(){var e,t=function(e){var t=/\blang(?:uage)?-([\w-]+)\b/i,n=0,r={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof i?new i(e.type,r.util.encode(e.content),e.alias):Array.isArray(e)?e.map(r.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++n}),e.__id},clone:function e(t,n){var i,a,s=r.util.type(t);switch(n=n||{},s){case"Object":if(a=r.util.objId(t),n[a])return n[a];for(var o in n[a]=i={},t)t.hasOwnProperty(o)&&(i[o]=e(t[o],n));return i;case"Array":return a=r.util.objId(t),n[a]?n[a]:(n[a]=i=[],t.forEach((function(t,r){i[r]=e(t,n)})),i);default:return t}},currentScript:function(){if("undefined"==typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(a){var e=(/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(a.stack)||[])[1];if(e){var t=document.getElementsByTagName("script");for(var n in t)if(t[n].src==e)return t[n]}return null}}},languages:{extend:function(e,t){var n=r.util.clone(r.languages[e]);for(var i in t)n[i]=t[i];return n},insertBefore:function(e,t,n,i){var a=(i=i||r.languages)[e],s={};for(var o in a)if(a.hasOwnProperty(o)){if(o==t)for(var l in n)n.hasOwnProperty(l)&&(s[l]=n[l]);n.hasOwnProperty(o)||(s[o]=a[o])}var c=i[e];return i[e]=s,r.languages.DFS(r.languages,(function(t,n){n===c&&t!=e&&(this[t]=s)})),s},DFS:function e(t,n,i,a){a=a||{};var s=r.util.objId;for(var o in t)if(t.hasOwnProperty(o)){n.call(t,o,t[o],i||o);var l=t[o],c=r.util.type(l);"Object"!==c||a[s(l)]?"Array"!==c||a[s(l)]||(a[s(l)]=!0,e(l,n,o,a)):(a[s(l)]=!0,e(l,n,null,a))}}},plugins:{},highlightAll:function(e,t){r.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,n){var i={callback:n,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};r.hooks.run("before-highlightall",i);for(var a,s=e.querySelectorAll(i.selector),o=0;a=s[o++];)r.highlightElement(a,!0===t,i.callback)},highlightElement:function(n,i,a){var s=function(e){for(;e&&!t.test(e.className);)e=e.parentNode;return e?(e.className.match(t)||[,"none"])[1].toLowerCase():"none"}(n),o=r.languages[s];n.className=n.className.replace(t,"").replace(/\s+/g," ")+" language-"+s;var l=n.parentNode;l&&"pre"===l.nodeName.toLowerCase()&&(l.className=l.className.replace(t,"").replace(/\s+/g," ")+" language-"+s);var c={element:n,language:s,grammar:o,code:n.textContent};function u(e){c.highlightedCode=e,r.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,r.hooks.run("after-highlight",c),r.hooks.run("complete",c),a&&a.call(c.element)}if(r.hooks.run("before-sanity-check",c),!c.code)return r.hooks.run("complete",c),void(a&&a.call(c.element));if(r.hooks.run("before-highlight",c),c.grammar)if(i&&e.Worker){var f=new Worker(r.filename);f.onmessage=function(e){u(e.data)},f.postMessage(JSON.stringify({language:c.language,code:c.code,immediateClose:!0}))}else u(r.highlight(c.code,c.grammar,c.language));else u(r.util.encode(c.code))},highlight:function(e,t,n){var a={code:e,grammar:t,language:n};return r.hooks.run("before-tokenize",a),a.tokens=r.tokenize(a.code,a.grammar),r.hooks.run("after-tokenize",a),i.stringify(r.util.encode(a.tokens),a.language)},matchGrammar:function(e,t,n,a,s,o,l){for(var c in n)if(n.hasOwnProperty(c)&&n[c]){var u=n[c];u=Array.isArray(u)?u:[u];for(var f=0;f<u.length;++f){if(l&&l==c+","+f)return;var d=u[f],p=d.inside,E=!!d.lookbehind,b=!!d.greedy,T=0,A=d.alias;if(b&&!d.pattern.global){var m=d.pattern.toString().match(/[imsuy]*$/)[0];d.pattern=RegExp(d.pattern.source,m+"g")}d=d.pattern||d;for(var g=a,h=s;g<t.length;h+=t[g].length,++g){var I=t[g];if(t.length>e.length)return;if(!(I instanceof i)){if(b&&g!=t.length-1){if(d.lastIndex=h,!(L=d.exec(e)))break;for(var S=L.index+(E&&L[1]?L[1].length:0),v=L.index+L[0].length,R=g,N=h,O=t.length;R<O&&(N<v||!t[R].type&&!t[R-1].greedy);++R)(N+=t[R].length)<=S&&(++g,h=N);if(t[g]instanceof i)continue;w=R-g,I=e.slice(h,N),L.index-=h}else{d.lastIndex=0;var L=d.exec(I),w=1}if(L){E&&(T=L[1]?L[1].length:0),v=(S=L.index+T)+(L=L[0].slice(T)).length;var y=I.slice(0,S),F=I.slice(v),C=[g,w];y&&(++g,h+=y.length,C.push(y));var D=new i(c,p?r.tokenize(L,p):L,A,L,b);if(C.push(D),F&&C.push(F),Array.prototype.splice.apply(t,C),1!=w&&r.matchGrammar(e,t,n,g,h,!0,c+","+f),o)break}else if(o)break}}}}},tokenize:function(e,t){var n=[e],i=t.rest;if(i){for(var a in i)t[a]=i[a];delete t.rest}return r.matchGrammar(e,n,t,0,0,!1),n},hooks:{all:{},add:function(e,t){var n=r.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=r.hooks.all[e];if(n&&n.length)for(var i,a=0;i=n[a++];)i(t)}},Token:i};function i(e,t,n,r,i){this.type=e,this.content=t,this.alias=n,this.length=0|(r||"").length,this.greedy=!!i}if(e.Prism=r,i.stringify=function(e,t){if("string"==typeof e)return e;if(Array.isArray(e))return e.map((function(e){return i.stringify(e,t)})).join("");var n={type:e.type,content:i.stringify(e.content,t),tag:"span",classes:["token",e.type],attributes:{},language:t};if(e.alias){var a=Array.isArray(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(n.classes,a)}r.hooks.run("wrap",n);var s=Object.keys(n.attributes).map((function(e){return e+'="'+(n.attributes[e]||"").replace(/"/g,"&quot;")+'"'})).join(" ");return"<"+n.tag+' class="'+n.classes.join(" ")+'"'+(s?" "+s:"")+">"+n.content+"</"+n.tag+">"},!e.document)return e.addEventListener&&(r.disableWorkerMessageHandler||e.addEventListener("message",(function(t){var n=JSON.parse(t.data),i=n.language,a=n.immediateClose;e.postMessage(r.highlight(n.code,r.languages[i],i)),a&&e.close()}),!1)),r;var a=r.util.currentScript();if(a&&(r.filename=a.src,a.hasAttribute("data-manual")&&(r.manual=!0)),!r.manual){function s(){r.manual||r.highlightAll()}var o=document.readyState;"loading"===o||"interactive"===o&&a&&a.defer?document.addEventListener("DOMContentLoaded",s):window.requestAnimationFrame?window.requestAnimationFrame(s):window.setTimeout(s,16)}return r}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});"undefined"!=typeof module&&module.exports&&(module.exports=t),"undefined"!=typeof global&&(global.Prism=t),t.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:(?!<!--)[^"'\]]|"[^"]*"|'[^']*'|<!--[\s\S]*?-->)*\]\s*)?>/i,greedy:!0},cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},t.languages.markup.tag.inside["attr-value"].inside.entity=t.languages.markup.entity,t.hooks.add("wrap",(function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))})),Object.defineProperty(t.languages.markup.tag,"addInlined",{value:function(e,n){var r={};r["language-"+n]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:t.languages[n]},r.cdata=/^<!\[CDATA\[|\]\]>$/i;var i={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:r}};i["language-"+n]={pattern:/[\s\S]+/,inside:t.languages[n]};var a={};a[e]={pattern:RegExp("(<__[\\s\\S]*?>)(?:<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\s*|[\\s\\S])*?(?=<\\/__>)".replace(/__/g,e),"i"),lookbehind:!0,greedy:!0,inside:i},t.languages.insertBefore("markup","cdata",a)}}),t.languages.xml=t.languages.extend("markup",{}),t.languages.html=t.languages.markup,t.languages.mathml=t.languages.markup,t.languages.svg=t.languages.markup,function(e){var t=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,inside:{rule:/@[\w-]+/}},url:{pattern:RegExp("url\\((?:"+t.source+"|[^\n\r()]*)\\)","i"),inside:{function:/^url/i,punctuation:/^\(|\)$/}},selector:RegExp("[^{}\\s](?:[^{};\"']|"+t.source+")*?(?=\\s*\\{)"),string:{pattern:t,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var n=e.languages.markup;n&&(n.tag.addInlined("style","css"),e.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:n.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:e.languages.css}},alias:"language-css"}},n.tag))}(t),t.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},t.languages.javascript=t.languages.extend("clike",{"class-name":[t.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:!0},{pattern:/(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,function:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,operator:/--|\+\+|\*\*=?|=>|&&|\|\||[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?[.?]?|[~:]/}),t.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,t.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*(?:$|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,lookbehind:!0,inside:t.languages.javascript},{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,inside:t.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,lookbehind:!0,inside:t.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,lookbehind:!0,inside:t.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),t.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:t.languages.javascript}},string:/[\s\S]+/}}}),t.languages.markup&&t.languages.markup.tag.addInlined("script","javascript"),t.languages.js=t.languages.javascript,function(e){function t(e,t){return"___"+e.toUpperCase()+t+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(n,r,i,a){if(n.language===r){var s=n.tokenStack=[];n.code=n.code.replace(i,(function(e){if("function"==typeof a&&!a(e))return e;for(var i,o=s.length;-1!==n.code.indexOf(i=t(r,o));)++o;return s[o]=e,i})),n.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(n,r){if(n.language===r&&n.tokenStack){n.grammar=e.languages[r];var i=0,a=Object.keys(n.tokenStack);!function s(o){for(var l=0;l<o.length&&!(i>=a.length);l++){var c=o[l];if("string"==typeof c||c.content&&"string"==typeof c.content){var u=a[i],f=n.tokenStack[u],d="string"==typeof c?c:c.content,p=t(r,u),E=d.indexOf(p);if(-1<E){++i;var b=d.substring(0,E),T=new e.Token(r,e.tokenize(f,n.grammar),"language-"+r,f),A=d.substring(E+p.length),m=[];b&&m.push.apply(m,s([b])),m.push(T),A&&m.push.apply(m,s([A])),"string"==typeof c?o.splice.apply(o,[l,1].concat(m)):c.content=m}}else c.content&&s(c.content)}return o}(n.tokens)}}}})}(t),(e=t).languages.handlebars={comment:/\{\{![\s\S]*?\}\}/,delimiter:{pattern:/^\{\{\{?|\}\}\}?$/i,alias:"punctuation"},string:/(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,boolean:/\b(?:true|false)\b/,block:{pattern:/^(\s*~?\s*)[#\/]\S+?(?=\s*~?\s*$|\s)/i,lookbehind:!0,alias:"keyword"},brackets:{pattern:/\[[^\]]+\]/,inside:{punctuation:/\[|\]/,variable:/[\s\S]+/}},punctuation:/[!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~]/,variable:/[^!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~\s]+/},e.hooks.add("before-tokenize",(function(t){e.languages["markup-templating"].buildPlaceholders(t,"handlebars",/\{\{\{[\s\S]+?\}\}\}|\{\{[\s\S]+?\}\}/g)})),e.hooks.add("after-tokenize",(function(t){e.languages["markup-templating"].tokenizePlaceholders(t,"handlebars")})),function(e){e.languages.php=e.languages.extend("clike",{keyword:/\b(?:__halt_compiler|abstract|and|array|as|break|callable|case|catch|class|clone|const|continue|declare|default|die|do|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|eval|exit|extends|final|finally|for|foreach|function|global|goto|if|implements|include|include_once|instanceof|insteadof|interface|isset|list|namespace|new|or|parent|print|private|protected|public|require|require_once|return|static|switch|throw|trait|try|unset|use|var|while|xor|yield)\b/i,boolean:{pattern:/\b(?:false|true)\b/i,alias:"constant"},constant:[/\b[A-Z_][A-Z0-9_]*\b/,/\b(?:null)\b/i],comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,lookbehind:!0}}),e.languages.insertBefore("php","string",{"shell-comment":{pattern:/(^|[^\\])#.*/,lookbehind:!0,alias:"comment"}}),e.languages.insertBefore("php","comment",{delimiter:{pattern:/\?>$|^<\?(?:php(?=\s)|=)?/i,alias:"important"}}),e.languages.insertBefore("php","keyword",{variable:/\$+(?:\w+\b|(?={))/i,package:{pattern:/(\\|namespace\s+|use\s+)[\w\\]+/,lookbehind:!0,inside:{punctuation:/\\/}}}),e.languages.insertBefore("php","operator",{property:{pattern:/(->)[\w]+/,lookbehind:!0}});var t={pattern:/{\$(?:{(?:{[^{}]+}|[^{}]+)}|[^{}])+}|(^|[^\\{])\$+(?:\w+(?:\[.+?]|->\w+)*)/,lookbehind:!0,inside:e.languages.php};e.languages.insertBefore("php","string",{"nowdoc-string":{pattern:/<<<'([^']+)'(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\1;/,greedy:!0,alias:"string",inside:{delimiter:{pattern:/^<<<'[^']+'|[a-z_]\w*;$/i,alias:"symbol",inside:{punctuation:/^<<<'?|[';]$/}}}},"heredoc-string":{pattern:/<<<(?:"([^"]+)"(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\1;|([a-z_]\w*)(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\2;)/i,greedy:!0,alias:"string",inside:{delimiter:{pattern:/^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i,alias:"symbol",inside:{punctuation:/^<<<"?|[";]$/}},interpolation:t}},"single-quoted-string":{pattern:/'(?:\\[\s\S]|[^\\'])*'/,greedy:!0,alias:"string"},"double-quoted-string":{pattern:/"(?:\\[\s\S]|[^\\"])*"/,greedy:!0,alias:"string",inside:{interpolation:t}}}),delete e.languages.php.string,e.hooks.add("before-tokenize",(function(t){/<\?/.test(t.code)&&e.languages["markup-templating"].buildPlaceholders(t,"php",/<\?(?:[^"'/#]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|(?:\/\/|#)(?:[^?\n\r]|\?(?!>))*|\/\*[\s\S]*?(?:\*\/|$))*?(?:\?>|$)/gi)})),e.hooks.add("after-tokenize",(function(t){e.languages["markup-templating"].tokenizePlaceholders(t,"php")}))}(t),t.languages.typescript=t.languages.extend("javascript",{keyword:/\b(?:abstract|as|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|undefined|var|void|while|with|yield)\b/,builtin:/\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/}),t.languages.ts=t.languages.typescript,t.languages.sql={comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,lookbehind:!0},variable:[{pattern:/@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,greedy:!0},/@[\w.$]+/],string:{pattern:/(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,greedy:!0,lookbehind:!0},function:/\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,keyword:/\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:_INSERT|COL)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURNS?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,boolean:/\b(?:TRUE|FALSE|NULL)\b/i,number:/\b0x[\da-f]+\b|\b\d+\.?\d*|\B\.\d+\b/i,operator:/[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|IN|LIKE|NOT|OR|IS|DIV|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,punctuation:/[;[\]()`,.]/},t.languages.scss=t.languages.extend("css",{comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,lookbehind:!0},atrule:{pattern:/@[\w-]+(?:\([^()]+\)|[^(])*?(?=\s+[{;])/,inside:{rule:/@[\w-]+/}},url:/(?:[-a-z]+-)?url(?=\()/i,selector:{pattern:/(?=\S)[^@;{}()]?(?:[^@;{}()]|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}]+[:{][^}]+))/m,inside:{parent:{pattern:/&/,alias:"important"},placeholder:/%[-\w]+/,variable:/\$[-\w]+|#\{\$[-\w]+\}/}},property:{pattern:/(?:[\w-]|\$[-\w]+|#\{\$[-\w]+\})+(?=\s*:)/,inside:{variable:/\$[-\w]+|#\{\$[-\w]+\}/}}}),t.languages.insertBefore("scss","atrule",{keyword:[/@(?:if|else(?: if)?|for|each|while|import|extend|debug|warn|mixin|include|function|return|content)/i,{pattern:/( +)(?:from|through)(?= )/,lookbehind:!0}]}),t.languages.insertBefore("scss","important",{variable:/\$[-\w]+|#\{\$[-\w]+\}/}),t.languages.insertBefore("scss","function",{placeholder:{pattern:/%[-\w]+/,alias:"selector"},statement:{pattern:/\B!(?:default|optional)\b/i,alias:"keyword"},boolean:/\b(?:true|false)\b/,null:{pattern:/\bnull\b/,alias:"keyword"},operator:{pattern:/(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/,lookbehind:!0}}),t.languages.scss.atrule.inside.rest=t.languages.scss,function(e){var t=e.util.clone(e.languages.javascript);e.languages.jsx=e.languages.extend("markup",t),e.languages.jsx.tag.pattern=/<\/?(?:[\w.:-]+\s*(?:\s+(?:[\w.:-]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s{'">=]+|\{(?:\{(?:\{[^}]*\}|[^{}])*\}|[^{}])+\}))?|\{\.{3}[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\}))*\s*\/?)?>/i,e.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/i,e.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">]+)/i,e.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,e.languages.insertBefore("inside","attr-name",{spread:{pattern:/\{\.{3}[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\}/,inside:{punctuation:/\.{3}|[{}.]/,"attr-value":/\w+/}}},e.languages.jsx.tag),e.languages.insertBefore("inside","attr-value",{script:{pattern:/=(?:\{(?:\{(?:\{[^}]*\}|[^}])*\}|[^}])+\})/i,inside:{"script-punctuation":{pattern:/^=(?={)/,alias:"punctuation"},rest:e.languages.jsx},alias:"language-javascript"}},e.languages.jsx.tag);var n=function(e){return e?"string"==typeof e?e:"string"==typeof e.content?e.content:e.content.map(n).join(""):""},r=function(t){for(var i=[],a=0;a<t.length;a++){var s=t[a],o=!1;if("string"!=typeof s&&("tag"===s.type&&s.content[0]&&"tag"===s.content[0].type?"</"===s.content[0].content[0].content?0<i.length&&i[i.length-1].tagName===n(s.content[0].content[1])&&i.pop():"/>"===s.content[s.content.length-1].content||i.push({tagName:n(s.content[0].content[1]),openedBraces:0}):0<i.length&&"punctuation"===s.type&&"{"===s.content?i[i.length-1].openedBraces++:0<i.length&&0<i[i.length-1].openedBraces&&"punctuation"===s.type&&"}"===s.content?i[i.length-1].openedBraces--:o=!0),(o||"string"==typeof s)&&0<i.length&&0===i[i.length-1].openedBraces){var l=n(s);a<t.length-1&&("string"==typeof t[a+1]||"plain-text"===t[a+1].type)&&(l+=n(t[a+1]),t.splice(a+1,1)),0<a&&("string"==typeof t[a-1]||"plain-text"===t[a-1].type)&&(l=n(t[a-1])+l,t.splice(a-1,1),a--),t[a]=new e.Token("plain-text",l,null,l)}s.content&&"string"!=typeof s.content&&r(s.content)}};e.hooks.add("after-tokenize",(function(e){"jsx"!==e.language&&"tsx"!==e.language||r(e.tokens)}))}(t),function(e){e.languages.sass=e.languages.extend("css",{comment:{pattern:/^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t]+.+)*/m,lookbehind:!0}}),e.languages.insertBefore("sass","atrule",{"atrule-line":{pattern:/^(?:[ \t]*)[@+=].+/m,inside:{atrule:/(?:@[\w-]+|[+=])/m}}}),delete e.languages.sass.atrule;var t=/\$[-\w]+|#\{\$[-\w]+\}/,n=[/[+*\/%]|[=!]=|<=?|>=?|\b(?:and|or|not)\b/,{pattern:/(\s+)-(?=\s)/,lookbehind:!0}];e.languages.insertBefore("sass","property",{"variable-line":{pattern:/^[ \t]*\$.+/m,inside:{punctuation:/:/,variable:t,operator:n}},"property-line":{pattern:/^[ \t]*(?:[^:\s]+ *:.*|:[^:\s]+.*)/m,inside:{property:[/[^:\s]+(?=\s*:)/,{pattern:/(:)[^:\s]+/,lookbehind:!0}],punctuation:/:/,variable:t,operator:n,important:e.languages.sass.important}}}),delete e.languages.sass.property,delete e.languages.sass.important,e.languages.insertBefore("sass","punctuation",{selector:{pattern:/([ \t]*)\S(?:,?[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,?[^,\r\n]+)*)*/,lookbehind:!0}})}(t);var n=t.util.clone(t.languages.typescript);t.languages.tsx=t.languages.extend("jsx",n),function(){if("undefined"!=typeof self&&self.Prism&&self.document){var e="line-numbers",n=/\n(?!$)/g,r=function(e){var t=i(e)["white-space"];if("pre-wrap"===t||"pre-line"===t){var r=e.querySelector("code"),a=e.querySelector(".line-numbers-rows"),s=e.querySelector(".line-numbers-sizer"),o=r.textContent.split(n);s||((s=document.createElement("span")).className="line-numbers-sizer",r.appendChild(s)),s.style.display="block",o.forEach((function(e,t){s.textContent=e||"\n";var n=s.getBoundingClientRect().height;a.children[t].style.height=n+"px"})),s.textContent="",s.style.display="none"}},i=function(e){return e?window.getComputedStyle?getComputedStyle(e):e.currentStyle||null:null};window.addEventListener("resize",(function(){Array.prototype.forEach.call(document.querySelectorAll("pre."+e),r)})),t.hooks.add("complete",(function(e){if(e.code){var i=e.element,a=i.parentNode;if(a&&/pre/i.test(a.nodeName)&&!i.querySelector(".line-numbers-rows")){for(var s=!1,o=/(?:^|\s)line-numbers(?:\s|$)/,l=i;l;l=l.parentNode)if(o.test(l.className)){s=!0;break}if(s){i.className=i.className.replace(o," "),o.test(a.className)||(a.className+=" line-numbers");var c,u=e.code.match(n),f=new Array((u?u.length+1:1)+1).join("<span></span>");(c=document.createElement("span")).setAttribute("aria-hidden","true"),c.className="line-numbers-rows",c.innerHTML=f,a.hasAttribute("data-start")&&(a.style.counterReset="linenumber "+(parseInt(a.getAttribute("data-start"),10)-1)),e.element.appendChild(c),r(a),t.hooks.run("line-numbers",e)}}}})),t.hooks.add("line-numbers",(function(e){e.plugins=e.plugins||{},e.plugins.lineNumbers=!0})),t.plugins.lineNumbers={getLine:function(t,n){if("PRE"===t.tagName&&t.classList.contains(e)){var r=t.querySelector(".line-numbers-rows"),i=parseInt(t.getAttribute("data-start"),10)||1,a=i+(r.children.length-1);return n<i&&(n=i),a<n&&(n=a),r.children[n-i]}}}}}(),"undefined"!=typeof self&&self.Prism&&self.document&&t.languages.markup&&(t.plugins.UnescapedMarkup=!0,t.hooks.add("before-highlightall",(function(e){e.selector+=", [class*='lang-'] script[type='text/plain'], [class*='language-'] script[type='text/plain'], script[type='text/plain'][class*='lang-'], script[type='text/plain'][class*='language-']"})),t.hooks.add("before-sanity-check",(function(e){if((e.element.matches||e.element.msMatchesSelector).call(e.element,"script[type='text/plain']")){var t=document.createElement("code");return(n=document.createElement("pre")).className=t.className=e.element.className,e.element.dataset&&Object.keys(e.element.dataset).forEach((function(t){Object.prototype.hasOwnProperty.call(e.element.dataset,t)&&(n.dataset[t]=e.element.dataset[t])})),e.code=e.code.replace(/&lt;\/script(>|&gt;)/gi,"<\/script>"),t.textContent=e.code,n.appendChild(t),e.element.parentNode.replaceChild(n,e.element),void(e.element=t)}var n=e.element.parentNode;!e.code&&n&&"pre"==n.nodeName.toLowerCase()&&e.element.childNodes.length&&"#comment"==e.element.childNodes[0].nodeName&&(e.element.textContent=e.code=e.element.childNodes[0].textContent)}))),function(){var e=Object.assign||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e};function n(t){this.defaults=e({},t)}function r(e){for(var t=0,n=0;n<e.length;++n)e.charCodeAt(n)=="\t".charCodeAt(0)&&(t+=3);return e.length+t}n.prototype={setDefaults:function(t){this.defaults=e(this.defaults,t)},normalize:function(t,n){for(var r in n=e(this.defaults,n)){var i=r.replace(/-(\w)/g,(function(e,t){return t.toUpperCase()}));"normalize"!==r&&"setDefaults"!==i&&n[r]&&this[i]&&(t=this[i].call(this,t,n[r]))}return t},leftTrim:function(e){return e.replace(/^\s+/,"")},rightTrim:function(e){return e.replace(/\s+$/,"")},tabsToSpaces:function(e,t){return t=0|t||4,e.replace(/\t/g,new Array(++t).join(" "))},spacesToTabs:function(e,t){return t=0|t||4,e.replace(RegExp(" {"+t+"}","g"),"\t")},removeTrailing:function(e){return e.replace(/\s*?$/gm,"")},removeInitialLineFeed:function(e){return e.replace(/^(?:\r?\n|\r)/,"")},removeIndent:function(e){var t=e.match(/^[^\S\n\r]*(?=\S)/gm);return t&&t[0].length?(t.sort((function(e,t){return e.length-t.length})),t[0].length?e.replace(RegExp("^"+t[0],"gm"),""):e):e},indent:function(e,t){return e.replace(/^[^\S\n\r]*(?=\S)/gm,new Array(++t).join("\t")+"$&")},breakLines:function(e,t){t=!0===t?80:0|t||80;for(var n=e.split("\n"),i=0;i<n.length;++i)if(!(r(n[i])<=t)){for(var a=n[i].split(/(\s+)/g),s=0,o=0;o<a.length;++o){var l=r(a[o]);t<(s+=l)&&(a[o]="\n"+a[o],s=l)}n[i]=a.join("")}return n.join("\n")}},"undefined"!=typeof module&&module.exports&&(module.exports=n),void 0!==t&&(t.plugins.NormalizeWhitespace=new n({"remove-trailing":!0,"remove-indent":!0,"left-trim":!0,"right-trim":!0}),t.hooks.add("before-sanity-check",(function(e){var n=t.plugins.NormalizeWhitespace;if(!e.settings||!1!==e.settings["whitespace-normalization"])if(e.element&&e.element.parentNode||!e.code){var r=e.element.parentNode,i=/(?:^|\s)no-whitespace-normalization(?:\s|$)/;if(e.code&&r&&"pre"===r.nodeName.toLowerCase()&&!i.test(r.className)&&!i.test(e.element.className)){for(var a=r.childNodes,s="",o="",l=!1,c=0;c<a.length;++c){var u=a[c];u==e.element?l=!0:"#text"===u.nodeName&&(l?o+=u.nodeValue:s+=u.nodeValue,r.removeChild(u),--c)}e.element.children.length&&t.plugins.KeepMarkup?(e.element.innerHTML=n.normalize(s+e.element.innerHTML+o,e.settings),e.code=e.element.textContent):(e.code=s+e.code+o,e.code=n.normalize(e.code,e.settings))}}else e.code=n.normalize(e.code,e.settings)})))}(),function(e,n){void 0!==e&&e.Prism&&e.document&&n.createRange&&(t.plugins.KeepMarkup=!0,t.hooks.add("before-highlight",(function(e){if(e.element.children.length){var t=0,n=[],r=function(e,i){var a={};i||(a.clone=e.cloneNode(!1),a.posOpen=t,n.push(a));for(var s=0,o=e.childNodes.length;s<o;s++){var l=e.childNodes[s];1===l.nodeType?r(l):3===l.nodeType&&(t+=l.data.length)}i||(a.posClose=t)};r(e.element,!0),n&&n.length&&(e.keepMarkup=n)}})),t.hooks.add("after-highlight",(function(e){if(e.keepMarkup&&e.keepMarkup.length){var t=function(e,r){for(var i=0,a=e.childNodes.length;i<a;i++){var s=e.childNodes[i];if(1===s.nodeType){if(!t(s,r))return!1}else 3===s.nodeType&&(!r.nodeStart&&r.pos+s.data.length>r.node.posOpen&&(r.nodeStart=s,r.nodeStartPos=r.node.posOpen-r.pos),r.nodeStart&&r.pos+s.data.length>=r.node.posClose&&(r.nodeEnd=s,r.nodeEndPos=r.node.posClose-r.pos),r.pos+=s.data.length);if(r.nodeStart&&r.nodeEnd){var o=n.createRange();return o.setStart(r.nodeStart,r.nodeStartPos),o.setEnd(r.nodeEnd,r.nodeEndPos),r.node.clone.appendChild(o.extractContents()),o.insertNode(r.node.clone),o.detach(),!1}}return!0};e.keepMarkup.forEach((function(n){t(e.element,{node:n,pos:0})})),e.highlightedCode=e.element.innerHTML}})))}(self,document),function(){if("undefined"!=typeof self&&self.Prism&&self.document){var e=/(?:^|\s)match-braces(?:\s|$)/,n=/(?:^|\s)brace-hover(?:\s|$)/,r=/(?:^|\s)brace-selected(?:\s|$)/,i=/(?:^|\s)no-brace-hover(?:\s|$)/,a=/(?:^|\s)no-brace-select(?:\s|$)/,s={"(":")","[":"]","{":"}"},o={"(":"brace-round","[":"brace-square","{":"brace-curly"},l=0,c=/^(pair-\d+-)(open|close)$/;t.hooks.add("complete",(function(t){var n=t.element,i=n.parentElement;if(i&&"PRE"==i.tagName){for(var a=[],c=n;c;c=c.parentElement)if(e.test(c.className)){a.push("(","[","{");break}if(0!=a.length){i.__listenerAdded||(i.addEventListener("mousedown",(function(){var e=i.querySelector("code");Array.prototype.slice.call(e.querySelectorAll(".brace-selected")).forEach((function(e){e.className=e.className.replace(r," ")}))})),Object.defineProperty(i,"__listenerAdded",{value:!0}));var u=Array.prototype.slice.call(n.querySelectorAll("span.token.punctuation")),E=[];a.forEach((function(e){for(var t=s[e],n=o[e],r=[],i=[],a=0;a<u.length;a++){var c=u[a];if(0==c.childElementCount){var b=c.textContent;b===e?(E.push({index:a,open:!0,element:c}),c.className+=" "+n,c.className+=" brace-open",i.push(a)):b===t&&(E.push({index:a,open:!1,element:c}),c.className+=" "+n,c.className+=" brace-close",i.length&&r.push([a,i.pop()]))}}r.forEach((function(e){var t="pair-"+l+++"-",n=u[e[0]],r=u[e[1]];n.id=t+"open",r.id=t+"close",[n,r].forEach((function(e){e.addEventListener("mouseenter",f),e.addEventListener("mouseleave",d),e.addEventListener("click",p)}))}))}));var b=0;E.sort((function(e,t){return e.index-t.index})),E.forEach((function(e){e.open?(e.element.className+=" brace-level-"+(b%12+1),b++):(b=Math.max(0,b-1),e.element.className+=" brace-level-"+(b%12+1))}))}}}))}function u(e){var t=c.exec(e.id);return document.querySelector("#"+t[1]+("open"==t[2]?"close":"open"))}function f(){for(var e=this.parentElement;e;e=e.parentElement)if(i.test(e.className))return;[this,u(this)].forEach((function(e){e.className=(e.className.replace(n," ")+" brace-hover").replace(/\s+/g," ")}))}function d(){[this,u(this)].forEach((function(e){e.className=e.className.replace(n," ")}))}function p(){for(var e=this.parentElement;e;e=e.parentElement)if(a.test(e.className))return;[this,u(this)].forEach((function(e){e.className=(e.className.replace(r," ")+" brace-selected").replace(/\s+/g," ")}))}}()}()}getClass(){let e={"line-numbers":!0,"match-braces":!0};return this.language&&(e[`language-${this.language}`]=!0),e}render(){return t(r,null,t("div",{class:"display"},t("script",{type:"text/plain",class:this.getClass()},t("slot",null))))}get el(){return n(this)}static get style(){return"code[class*=language-],pre[class*=language-]{color:#f8f8f2;background:none;text-shadow:0 1px rgba(0,0,0,.3);font-family:Consolas,Monaco,Andale Mono,Ubuntu Mono,monospace;font-size:1em;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;hyphens:none}pre[class*=language-]{padding:1em;margin:.5em 0;overflow:auto;border-radius:.3em}:not(pre)>code[class*=language-],pre[class*=language-]{background:#272822}:not(pre)>code[class*=language-]{padding:.1em;border-radius:.3em;white-space:normal}.token.cdata,.token.comment,.token.doctype,.token.prolog{color:#708090}.token.punctuation{color:#f8f8f2}.namespace{opacity:.7}.token.constant,.token.deleted,.token.property,.token.symbol,.token.tag{color:#f92672}.token.boolean,.token.number{color:#ae81ff}.token.attr-name,.token.builtin,.token.char,.token.inserted,.token.selector,.token.string{color:#a6e22e}.language-css .token.string,.style .token.string,.token.entity,.token.operator,.token.url,.token.variable{color:#f8f8f2}.token.atrule,.token.attr-value,.token.class-name,.token.function{color:#e6db74}.token.keyword{color:#66d9ef}.token.important,.token.regex{color:#fd971f}.token.bold,.token.important{font-weight:700}.token.italic{font-style:italic}.token.entity{cursor:help}pre[class*=language-].line-numbers{position:relative;padding-left:3.8em;counter-reset:linenumber}pre[class*=language-].line-numbers>code{position:relative;white-space:inherit}.line-numbers .line-numbers-rows{position:absolute;pointer-events:none;top:0;font-size:100%;left:-3.8em;width:3em;letter-spacing:-1px;border-right:1px solid #999;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.line-numbers-rows>span{pointer-events:none;display:block;counter-increment:linenumber}.line-numbers-rows>span:before{content:counter(linenumber);color:#999;display:block;padding-right:.8em;text-align:right}[class*=lang-] script[type=\"text/plain\"],[class*=language-] script[type=\"text/plain\"],script[type=\"text/plain\"][class*=lang-],script[type=\"text/plain\"][class*=language-]{display:block;font:100% Consolas,Monaco,monospace;white-space:pre;overflow:auto}.token.punctuation.brace-hover,.token.punctuation.brace-selected{outline:1px solid}.rainbow-braces .token.punctuation.brace-level-1,.rainbow-braces .token.punctuation.brace-level-5,.rainbow-braces .token.punctuation.brace-level-9{color:#e50;opacity:1}.rainbow-braces .token.punctuation.brace-level-2,.rainbow-braces .token.punctuation.brace-level-6,.rainbow-braces .token.punctuation.brace-level-10{color:#0b3;opacity:1}.rainbow-braces .token.punctuation.brace-level-3,.rainbow-braces .token.punctuation.brace-level-7,.rainbow-braces .token.punctuation.brace-level-11{color:#26f;opacity:1}.rainbow-braces .token.punctuation.brace-level-4,.rainbow-braces .token.punctuation.brace-level-8,.rainbow-braces .token.punctuation.brace-level-12{color:#e0e;opacity:1}"}};export{i as example_code,a as pretty_code};