jQuery(document).ready((function(s){var e,a,n=2500,t=3800,d=t-3e3,l=50,r=150,o=500,c=o+800,h=800,p=1500;function u(s){var i=w(s);if(s.parents(".cd-headline").hasClass("type")){var e=s.parent(".cd-words-wrapper");e.addClass("selected").removeClass("waiting"),setTimeout((function(){e.removeClass("selected"),s.removeClass("is-visible").addClass("is-hidden").children("i").removeClass("in").addClass("out")}),o),setTimeout((function(){f(i,r)}),c)}else if(s.parents(".cd-headline").hasClass("letters")){var a=s.children("i").length>=i.children("i").length;C(s.find("i").eq(0),s,a,l),m(i.find("i").eq(0),i,a,l)}else s.parents(".cd-headline").hasClass("clip")?s.parents(".cd-words-wrapper").animate({width:"2px"},h,(function(){v(s,i),f(i)})):s.parents(".cd-headline").hasClass("loading-bar")?(s.parents(".cd-words-wrapper").removeClass("is-loading"),v(s,i),setTimeout((function(){u(i)}),t),setTimeout((function(){s.parents(".cd-words-wrapper").addClass("is-loading")}),d)):(v(s,i),setTimeout((function(){u(i)}),n))}function f(s,i){s.parents(".cd-headline").hasClass("type")?(m(s.find("i").eq(0),s,!1,i),s.addClass("is-visible").removeClass("is-hidden")):s.parents(".cd-headline").hasClass("clip")&&s.parents(".cd-words-wrapper").animate({width:s.width()+10},h,(function(){setTimeout((function(){u(s)}),p)}))}function C(i,e,a,t){if(i.removeClass("in").addClass("out"),i.is(":last-child")?a&&setTimeout((function(){u(w(e))}),n):setTimeout((function(){C(i.next(),e,a,t)}),t),i.is(":last-child")&&s("html").hasClass("no-csstransitions")){var d=w(e);v(e,d)}}function m(s,i,e,a){s.addClass("in").removeClass("out"),s.is(":last-child")?(i.parents(".cd-headline").hasClass("type")&&setTimeout((function(){i.parents(".cd-words-wrapper").addClass("waiting")}),200),e||setTimeout((function(){u(i)}),n)):setTimeout((function(){m(s.next(),i,e,a)}),a)}function w(s){return s.is(":last-child")?s.parent().children().eq(0):s.next()}function v(s,i){s.removeClass("is-visible").addClass("is-hidden"),i.removeClass("is-hidden").addClass("is-visible")}s(".cd-headline.letters").find("b").each((function(){var e=s(this),a=e.text().split(""),n=e.hasClass("is-visible");for(i in a)e.parents(".rotate-2").length>0&&(a[i]="<em>"+a[i]+"</em>"),a[i]=n?'<i class="in">'+a[i]+"</i>":"<i>"+a[i]+"</i>";var t=a.join("");e.html(t).css("opacity",1)})),e=s(".cd-headline"),a=n,e.each((function(){var i=s(this);if(i.hasClass("loading-bar"))a=t,setTimeout((function(){i.find(".cd-words-wrapper").addClass("is-loading")}),d);else if(i.hasClass("clip")){var e=i.find(".cd-words-wrapper"),n=e.width()+10;e.css("width",n)}else if(!i.hasClass("type")){var l=i.find(".cd-words-wrapper b"),r=0;l.each((function(){var i=s(this).width();i>r&&(r=i)})),i.find(".cd-words-wrapper").css("width",r)}setTimeout((function(){u(i.find(".is-visible").eq(0))}),a)}))}));