(this["webpackJsonpquote-machine"]=this["webpackJsonpquote-machine"]||[]).push([[0],{12:function(t,e,o){},13:function(t,e,o){"use strict";o.r(e);var n=o(0),a=o.n(n),r=o(2),u=o.n(r),i=o(3),s=o(4),c=o(5),h=o(6),d=(o(12),function(t){Object(h.a)(o,t);var e=Object(c.a)(o);function o(){var t;Object(i.a)(this,o);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={quotes:[{quotes:"Any program is only as good as it is useful",author:"Linus Torvalds",id:0},{quotes:"Focus is a matter of deciding what things you're not going to do.",author:"John Carmack",id:0},{quotes:"We can only see a short distance ahead, but we can see plenty there that needs to be done.",author:"Alan Turing",id:0},{quotes:"A.I began with the ancient wish to forge the gods",author:"Paula Mccorduck",id:0},{quotes:"The future depends on some graduate student who is deeply suspicious of everything I have said.",author:"Geofrey Hinton",id:0}],currentQuote:{},tweetedLink:window.location.href},t.handleQuoteClick=function(){var e=Math.floor(4*Math.random());t.setState({currentQuote:t.state.quotes[e]})},t}return Object(s.a)(o,[{key:"componentDidMount",value:function(){var t=Math.floor(4*Math.random());this.setState({currentQuote:this.state.quotes[t]})}},{key:"render",value:function(){return a.a.createElement("div",{id:"root-container"},a.a.createElement("div",{id:"quote-box"},a.a.createElement("h1",{id:"text"},this.state.currentQuote.quotes),a.a.createElement("h2",{id:"author"}," ",this.state.currentQuote.author),a.a.createElement("div",{id:"buttons-container"},a.a.createElement("button",{id:"new-quote",onClick:this.handleQuoteClick},"New Quote"),a.a.createElement("a",{id:"tweet-quote",href:"https://twitter.com/intent/tweet?&text="+this.state.currentQuote.quotes+" "+this.state.currentQuote.author,target:"_blank",rel:"noopener noreferrer"},a.a.createElement("i",{class:"fab fa-twitter fa-lg twitter"})))))}}]),o}(a.a.Component));u.a.render(a.a.createElement(d,null),document.getElementById("root"))},7:function(t,e,o){t.exports=o(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.323a03e5.chunk.js.map