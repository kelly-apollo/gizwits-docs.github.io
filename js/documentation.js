var BODY_BP=1119,HEADER_BP=915+function(e){function a(a,t){var n;e(a).hover(function(){e(window).width()<=HEADER_BP||(n=e(this).find(t+"-wrapper"),n.show())},function(){e(window).width()<=HEADER_BP||(n=e(this).find(t+"-wrapper"),n.hide())}),e(a).click(function(a){e(window).width()>HEADER_BP||(n=e(this).find(t+"-wrapper"),a.stopPropagation(),n.toggle())})}e(function(){a(".levelA",".levelB"),a(".levelB",".levelC")})}(jQuery)+function(e){e(function(){e(".mobile-header .fa").click(function(){e(".menu").toggle(),e(".lang-switch-wrapper").toggle()})})}(jQuery)+function(){var e=-1!==window.location.pathname.indexOf("/en-us/"),a=e?"en-us":"zh-cn";localStorage.setItem("lang",a),"/"===location.pathname&&(location.href=a+"/overview/overview.html")}()+function(e){e(function(){e(".lang-switch").click(function(){location.href="https://gizwitsen.kf5.com/hc/"})})}(jQuery)+function(e){e(function(){var a=location.pathname,t="https://github.com/gizwits-docs/gizwits-docs/edit/master/source"+a.slice(0,a.length-4)+"md";e(".edit-link").attr("href",t)})}(jQuery)+function(e){e(function(){var a=e(".markdown-body").find("h1, h2, h3, h4, h5, h6"),t="<ul>",n=0;a.each(function(){var a=e(this),i=a.prop("tagName").toLowerCase(),o=a.attr("id"),r=a.text();"h1"===i&&(n+=1),a.append(e('<a class="anchor" href="#'+o+'">#</a>')),"h1"!==i&&"h2"!==i||(t+='<li class="'+i+'" data-group="'+n+'"><a href="#'+o+'">'+r+"</a></li>")}),t+="</ul>",e(".navigation").find(".nav").append(t),e(".navigation-inner").append(e('<div class="nav-control" data-show="false">'+("en-us"===localStorage.getItem("lang")?"Show":"展开全部")+"</div>"))}),e(function(){var a,t=e(".nav"),n=t.height();e("body").scrollspy({target:".navigation"}),e(window).scroll(function(){if(!(e(window).width()<=BODY_BP)){var i=e(".nav .active"),o=i.position().top;if(e(".nav:hover").length||(clearTimeout(a),a=setTimeout(function(){o+t.scrollTop()>n?t.animate({scrollTop:o+t.scrollTop()-120}):o-n<376&&t.animate({scrollTop:-o-t.scrollTop()})},200)),!e(".nav-control").data().show){var r=i.data().group;e(".nav > ul > .h2[data-group="+r+"]").show()}}})}),e(function(){e(".nav .h1").click(function(){if(!e(".nav-control").data().show){var a=e(this).data().group;e(".nav > ul > .h2[data-group="+a+"]").show()}})}),e(function(){e(".nav-control").click(function(){var a=e(this),t="en-us"===localStorage.getItem("lang");if(a.data().show){var n=e(".active").data().group;a.text(t?"Show":"展开全部"),a.data("show",!1),e(".nav > ul > .h1[data-group="+n+"]").addClass("active"),e(".nav .h2").removeClass("active").hide()}else a.text(t?"Hide":"折叠全部"),a.data("show",!0),e(".nav .h2").show()})})}(jQuery)+function(e){e(function(){e(".code pre").prepend(e('<i class="fa fa-clipboard fa-lg tooltip" title="'+("zh-cn"===localStorage.getItem("lang")?"复制":"COPY")+'"aria-hidden="true"><i class="tooltiptext">'+("zh-cn"===localStorage.getItem("lang")?"已复制":"COPIED")+"</i></i>")),new Clipboard(".fa-clipboard",{text:function(a){var t=e(a),n="",i=t.find(".tooltiptext");return t.parent().find(".line").each(function(){n+=e(this).text()+"\n"}),i.show(),setTimeout(function(){i.hide()},1e3),n}})})}(jQuery)+function(e){e(function(){e(".markdown-body a").not(".anchor").attr("target")})}(jQuery)+function(){var e={lines:13,length:28,width:14,radius:42,scale:1,corners:1,color:"black",opacity:.25,rotate:0,direction:1,speed:1,trail:60,fps:20,zIndex:2e9,className:"spinner",top:"50%",left:"50%",shadow:!1,hwaccel:!1,position:"absolute"};if("/"===location.pathname){var a=document.getElementsByTagName("body")[0];new Spinner(e).spin(a)}}();$(function(){function e(){var e=document.createElement("div");e.className="modal-scrollbar-measure",$("body").append(e);var a=e.offsetWidth-e.clientWidth;return $("body")[0].removeChild(e),a}function a(){var e=$("#header-search-panel");e.is(":visible")&&(e.removeClass("in"),setTimeout(function(){e.css("display","none"),$("body").removeClass("header-search-open"),$("body").css("padding-right","0"),$(".header").css("padding-right","0"),$("#chatBtn").css("margin-right","0"),$(document).off("click.searchpanel")},300))}var t=e();$(window).on("resize",function(){t=e(),$("#header-search-panel").is(":visible")&&($("body").css("padding-right",t),$(".header").css("padding-right",t),$("#chatBtn").css("margin-right",t))});var n=$(window).height()-250;$("#header-search-result").height(n);var i=[];$.getJSON("/search.json?t=280cf52157e5b212c3a9fe541da429ed",function(e){i=e});var o=$("#header-search-trend"),r=$("#header-search-result"),c=$("#header-search-input");$(".header-search-trend-item").on("click",function(){c.val($(this).data("word")),c.trigger("keyup")}),c.on("keyup",function(e){var a=$(this),t=a.val();if(t){o.addClass("hidden"),r.removeClass("hidden"),$("#header-search-keyword").text(t);var n=t.toLowerCase(),c=new RegExp("("+n+")","gi"),s=i.filter(function(e){if(!e.title||!e.content)return!1;var a=e.content.toLowerCase().indexOf(n);return!!(e.title&&-1!==e.title.toLowerCase().indexOf(n)||e.content&&-1!==a)&&(e.first_occur=-1===a?0:a,!0)}).map(function(e){var a=e.content,t=0;e.first_occur-10>0&&(t=e.first_occur-10),a=a.slice(t,t+100),a=a.replace(c,'<span class="hl">$1</span>');var n="";return n+='<div class="header-search-result-item">\n',n+='<div class="header-search-result-item-title"><a href="'+e.url+'" target="_blank">'+e.title.replace(c,'<span class="hl">$1</span>')+"</a></div>\n",n+='<div class="header-search-result-item-content">'+a+"</div>",n+="</div>"});s=0===s.length?'<div class="header-search-result-empty">未找到相关文档</div>':s.join("\n"),$("#header-search-result-items").html(s)}else o.removeClass("hidden"),r.addClass("hidden")}),$("#header-search-close").click(a),$("#header-search-btn").click(function(){$("#header-search-panel").is(":visible")||(c.val("").trigger("keyup"),$("#header-search-panel").css("display","block"),$("body").addClass("header-search-open"),$("body").css("padding-right",t),$(".header").css("padding-right",t),$("#chatBtn").css("margin-right",t),setTimeout(function(){$("#header-search-panel").one("transitionend",function(){$("#header-search-input").focus(),$(document).on("click.searchpanel",function(e){$(e.target).closest("#header-search-panel").length||a()})}),$("#header-search-panel").addClass("in")},50))})});