import{_ as t,s as n,o as a,c as i,a as s,t as l}from"./index-ffa608d0.js";const d={computed:{dessinId(){return parseInt(this.$route.params.id)},dessin(){return n.dessins.find(e=>e.id===this.dessinId)}}},r={class:"dessin"},_={class:"row container-fluid m-0"},o=s("div",{class:"col-1"},null,-1),u={class:"col-6 justify-content-center py-4"},h=["src"],g=["src"],m=["src"],y=["src"],p=["src"],f=["src"],k=["src"],v=["src"],x=["src"],B=["src"],D={class:"col-5 pr-5 py-4"},I=["href"];function w(e,S,b,j,E,c){return a(),i("section",r,[s("div",_,[o,s("div",u,[s("img",{src:c.dessin.img,alt:"",class:"py-3"},null,8,h),s("img",{src:c.dessin.gal1,alt:"",class:"py-3"},null,8,g),s("img",{src:c.dessin.gal2,alt:"",class:"py-3"},null,8,m),s("img",{src:c.dessin.gal3,alt:"",class:"py-3"},null,8,y),s("img",{src:c.dessin.gal4,alt:"",class:"py-3"},null,8,p),s("img",{src:c.dessin.gal5,alt:"",class:"py-3"},null,8,f),s("img",{src:c.dessin.gal6,alt:"",class:"py-3"},null,8,k),s("img",{src:c.dessin.gal7,alt:"",class:"py-3"},null,8,v),s("img",{src:c.dessin.gal8,alt:"",class:"py-3"},null,8,x),s("img",{src:c.dessin.gal9,alt:"",class:"py-3"},null,8,B)]),s("div",D,[s("h1",null,l(c.dessin.name),1),s("p",null,l(c.dessin.description),1),s("a",{href:c.dessin.link,target:"blank"},l(c.dessin.link),9,I)])])])}const V=t(d,[["render",w]]);export{V as default};
