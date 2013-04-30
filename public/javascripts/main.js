// Generated by CoffeeScript 1.6.2
/*

	This is the main app script file
*/(function(){var e,t,n,r,i,s,o,u,a,f,l,c,h,p,d,v,m,g,y,b,w,E,S,x,T,N,C,k,L,A,O,M,_,D,P,H,B,j,F,I,q,R,U,z,W,X,V,J,K,Q,G,Y,Z,et,tt,nt,rt,it;p=$("#board"),H=$("#progress"),it=$("#board ul:gt(4) li"),h=$("#board ul:lt(3) li"),q=null,A=null,et=1,G=null,d=null,a=null,f=null,Z=null,b="ABCDEFGHI",t=$("#cover"),r=$("#guide"),e=$("#chat"),i=$("#msg"),o=$("#online"),N=null,w=null,_=21,x=function(){var e,n;return t.fadeIn(100),e=$("#room"),n=$("#roomName"),e.submit($.proxy(function(t){return t.preventDefault(),q=T(n.val()),q||(q="default"),e.remove(),O(),J.emit("initialize room",{room:q})})),e.fadeIn(100).appendTo(t),n.focus()},S=function(){var n,r;return t.fadeIn(100),n=$("#name"),r=$("#playerName"),n.submit($.proxy(function(t){t.preventDefault(),A=T(r.val());if(!A||A.length>7)A="No Name";return n.remove(),g(A),O(),J.emit("player connect",{name:A}),e.fadeIn(100).submit($.proxy(function(e){var t,n;return e.preventDefault(),t=A,n=T(i.val()),n!==""&&n.length<64&&J.emit("add message",{author:t,message:n}),i.val("")}))})),n.fadeIn(100).appendTo(t),r.focus()},k=function(){return e.hide(),x()},C=function(){return I(),c(),S()},E=function(){return I(),v(w),r.fadeOut(100),$("#pieces").show(),G="preparation"},T=function(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\"/g,"&quot;")},O=function(){return t.fadeIn(100),H.show().appendTo(t)},I=function(){return t.fadeOut(100),H.hide()},tt=function(){return $("#board ul li").off("click")},c=function(){return $(".piece").each(function(){var e,t;return t=$(this),e=t.parent(),e.click(function(){var t,n,r,i,s,o,u,a,f,l,c;u=e.attr("id");if(G==="preparation"){if(u===void 0&&!e.hasClass("occupied"))return M(this)}else if(G==="war"){i=u[1],r=u[0],l=r+(parseInt(i)+1),s=b[b.indexOf(r)-1]+i,a=b[b.indexOf(r)+1]+i,n=r+(parseInt(i)-1),c=t=o=f=!1;if($("li#"+l).hasClass("occupied")||i==="8")c=!0;if($("li#"+n).hasClass("occupied")||i==="1")t=!0;if($("li#"+s).hasClass("occupied")||r==="A")o=!0;if($("li#"+a).hasClass("occupied")||r==="I")f=!0;return c&&t&&o&&f?console.log("can't move this piece sorry"):M(this)}})})},nt=function(){return $(".piece").parent().off("click")},s=$("#messages ul"),l=function(e){return $("<li><span class='author'>"+e.author+"</span> : "+e.message+"</li>").prependTo(s)},n=$("#Dash"),r=$("#guide"),v=function(e){var t;return e==="black"?t="#130f30":t="#FFFFE5",n.css("background-color",t),r.css("background-color",t)},u=$("#turn"),g=function(e){return u.html("General "+e)},U=function(e){var t,n,r,i,s,o,u,a,l,c;if(G==="preparation")return e==="black"?h.addClass("legal").each(function(){var e;e=$(this);if(!e.hasClass("occupied"))return e.click(function(){return Q(this)})}):e==="white"?it.addClass("legal").each(function(){var e;e=$(this);if(!e.hasClass("occupied"))return e.click(function(){return Q(this)})}):console.log("unknown color");if(G==="war"){u=f[1],o=f[0],u!=="8"&&(c=o+(parseInt(u)+1),i=$("li#"+c),i.hasClass("occupied")||(i.hasClass("opponent")?i.removeClass("opponentMoved").addClass("challenge"):i.addClass("legal"),i.click(function(){return Q(this)}))),o!=="A"&&(a=b[b.indexOf(o)-1]+u,n=$("li#"+a),n.hasClass("occupied")||(n.hasClass("opponent")?n.removeClass("opponentMoved").addClass("challenge"):n.addClass("legal"),n.click(function(){return Q(this)}))),o!=="I"&&(l=b[b.indexOf(o)+1]+u,r=$("li#"+l),r.hasClass("occupied")||(r.hasClass("opponent")?r.removeClass("opponentMoved").addClass("challenge"):r.addClass("legal"),r.click(function(){return Q(this)})));if(u!=="1"){s=o+(parseInt(u)-1),t=$("li#"+s);if(!t.hasClass("occupied"))return t.hasClass("opponent")?t.removeClass("opponentMoved").addClass("challenge"):t.addClass("legal"),t.click(function(){return Q(this)})}}},j=function(){return $("#board ul li").removeClass("legal challenge ")},B=function(){return $("#board ul li").removeClass("legal")},F=function(){return $("#board ul li").removeClass("lmove opponentMoved")},M=function(e){var t;return t=$(e),a=e,G==="war"&&(f=t.attr("id")),t.addClass("active"),tt(),nt(),U(w)},Q=function(e){var t,n,i,s,o,u,l,h;if(a)return n=$(e),t=$(a),h=t.html(),i=$(h),i.appendTo(n),o=n.attr("id"),G==="preparation"?(o[0]==="F"||o[0]==="G"||o[0]==="H"||o[0]==="I"?i.addClass("hint--left"):i.addClass("hint--right"),s=i.attr("title"),i.removeAttr("title").attr("data-hint",s),t.removeClass("active").fadeOut(100),--_,n.addClass("occupied").off("click"),J.emit("place piece",{cell:o,name:A}),_===0&&($("#pieces").hide(),r.fadeIn(100),O(),J.emit("player ready",{name:A}))):G==="war"&&(l=t.attr("id"),u=$(t.find(".piece img")).attr("alt"),t.removeClass("active occupied").children(".piece").remove(),n.addClass("occupied"),n.hasClass("challenge")?d=!0:d=!1,J.emit("move piece",{crName:A,srcCell:l,destCell:o,piece:u,challenge:d,color:w})),j(),c(),a=null,f=null},D=function(e){return $("li#"+e.cell).addClass("opponent")},rt=function(e){return tt(),nt(),c(),B(),I(),G="war",y(e)},y=function(e){return Z=e.turn,g(e.name),v(Z),Z===w?I():O()},m=function(){return Z==="white"?Z="black":Z==="black"?Z="white":console.log("change_turn error"),J.emit("change turn",{turn:Z})},L=function(e){return F(),$("li#"+e.destCell).addClass("opponentMoved opponent"),$("li#"+e.srcCell).addClass("lmove").removeClass("opponent")},Y=function(e){var t;return t=$("li#"+e.destCell).find(".piece img").attr("alt"),J.emit("challenge end",{challengee:t,ceName:A,destCell:e.destCell,challenger:e.challenger,crName:e.crName,color:w})},R=function(e){var t;t=$("#"+e.destCell),e.tie?(t.find('img[alt="'+e.winner+'"]').parent().remove(),t.removeClass("opponent opponentMoved occupied")):t.find('img[alt="'+e.winner+'"]').length!==0?(t.removeClass("opponent opponentMoved"),P("points",!1)):(t.find('img[alt!="'+e.winner+'"]').parent().remove(),t.removeClass("occupied")),tt(),c();if(e.end)return V(e)},X=function(){var e,t;return t=[],e=$(".piece").each(function(){var e,n;return e=$(this),n={cell:e.parent().attr("id"),piece:e.parent().html()},t.push(n)}),J.emit("show pieces",{remaining_pieces:t})},V=function(e){var n,r,i;return i=e.winnerName,A===e.winnerName?(r="Well played, congratulations!",P("win",!0)):(r="You've been outplayed, sorry.",P("lose",!0)),I(),n="<div id='result'>\n    <img src='/images/GG_logo.png' alt='Game of the Generals Online' title='Game of the Generals Online' />\n    <hr />\n    <h1>General "+i+"<br/>has WON!</h1>\n    <hr />\n    <h2>"+r+"</h2>\n</div>",t.fadeIn(100),$(n).appendTo(t),J.emit("leave room",{room:q})},W=function(e){var t,n,r;n=e.remaining_pieces,r=[];for(t in n)r.push($("li#"+n[t].cell).html(n[t].piece));return r},z=function(){var e;return e="<div id='result'>\n    <img src='/images/GG_logo.png' alt='Game of the Generals Online' title='Game of the Generals Online' />\n    <hr />\n    <h1>Sorry this ROOM is FULL!</h1>\n    <hr />\n    <h2>Refresh the page, then try another Room.</h2>\n</div>",t.fadeIn(100),$(e).appendTo(t)},K=new Audio,P=function(e,t){K.canPlayType("audio/mpeg")?K.src="audio/"+e+".mp3":K.canPlayType("audio/ogg")?K.src="audio/"+e+".ogg":K.src=null,K.loop=t;if(K.src)return K.load(),K.play()},J=io.connect(),J.on("initialize room",function(){return P("title_sound",!0),k()}),J.on("initial connect",function(){return C()}),J.on("player assign",function(e){return N=e.id,w=e.color}),J.on("game start",function(e){return P("",!1),E()}),J.on("war start",function(e){return Z=e.turn,rt(e)}),J.on("change turn",function(e){return y(e)}),J.on("place piece",function(e){return P("move",!1),D(e)}),J.on("move piece",function(e){P("move",!1),L(e);if(!e.end)return m()}),J.on("end game",function(e){return V(e)}),J.on("show remaining",function(){return X()}),J.on("show pieces",function(e){return W(e)}),J.on("challenge start",function(e){return Y(e)}),J.on("challenge complete",function(e){return P("challenge",!1),R(e)}),J.on("add message",function(e){return l(e)}),J.on("full",function(){return I(),z(),J.disconnect()}),J.on("show num online",function(e){return o.html(e.numOnlineMsg)})}).call(this);