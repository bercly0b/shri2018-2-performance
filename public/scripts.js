const e=document.querySelector(".modal__value"),t=document.querySelector(".adjust-bar.adjust-bar_theme_temp");t.oninput=function(){e.innerHTML=this.value>0?"+"+this.value:this.value};const o=document.querySelector(".devices__paginator .paginator__arrow_left"),n=document.querySelector(".devices__paginator .paginator__arrow_right"),c=document.querySelectorAll(".devices__panel").length,r=document.querySelector(".devices"),l=document.querySelector(".devices__paginator");let a,i,u=1;l.classList.toggle("paginator_hide",c<7),n.addEventListener("click",function(){u+=1,o.classList.toggle("paginator__arrow_disabled",1===u),r.scroll({top:0,left:1366,behavior:"smooth"})}),o.addEventListener("click",function(){u>1&&(u-=1,o.classList.toggle("paginator__arrow_disabled",1===u),r.scroll({top:0,left:-1366,behavior:"smooth"}))});let s=.42,d=-.42;const _=26,m=35,g=265,p=function(e){return Math.floor(Math.abs(360*e*1.73+g)/53+26)};function h(e){e>s?e=s:e<d&&(e=d),i=e,a=p(e),document.querySelector(".modal_knob .modal__value").innerHTML="+"+a,document.querySelector(".knob__value").innerHTML="+"+a,document.querySelector(".knob__indicator").style.strokeDasharray=360*i*1.73+g+" 629",document.querySelector(".knob__arrow").style.transform="rotate("+360*i+"deg)"}function f(e){const t=e.getBoundingClientRect();return[t.left+(t.right-t.left)/2,t.top+(t.bottom-t.top)/2]}function y(e,t){const o=f(t);let n,c=[e.clientX,e.clientY];return e.targetTouches&&e.targetTouches[0]&&(c=[e.targetTouches[0].clientX,e.targetTouches[0].clientY]),n=Math.atan2(c[1]-o[1],c[0]-o[0]),n+=Math.PI/2}let q,S=null,v=null;function L(e){e.preventDefault(),e.stopPropagation();const t=y(e,document.querySelector(".knob_center"));q=!0,S=t,v=i}function b(e){q=!1}function k(e){if(!q)return;const t=S;let o=y(e,document.querySelector(".knob_center")),n=o-t;S=o,n<0&&(n+=2*Math.PI),n>Math.PI&&(n-=2*Math.PI);const c=n/Math.PI/2,r=v+c;v=r,h(r)}function E(){const e=document.querySelector(".knob-container");e.addEventListener("mousedown",L),document.addEventListener("mouseup",b),document.addEventListener("mousemove",k),e.addEventListener("touchstart",L),document.addEventListener("touchend",b),document.addEventListener("touchmove",k)}E(),h(0),document.querySelectorAll(".modal_close").forEach(e=>{e.onclick=function(){document.querySelectorAll(".modal").forEach(e=>{e.classList.toggle("modal_open",!1),document.querySelector("body").style.overflow="auto"})}});const w={manual:-10,cold:0,warm:23,hot:30};document.querySelectorAll(".modal__filter-item_temp").forEach(e=>{e.onclick=function(){document.querySelector(".adjust-bar_theme_temp").value=w[this.id],document.querySelector(".modal_temp .modal__value").innerHTML=w[this.id]>0?"+"+w[this.id]:w[this.id]}});const M=function(e){document.querySelector(e).classList.toggle("modal_open",!0),document.querySelector("body").style.overflow="hidden"};document.querySelectorAll(".panel_temp").forEach(e=>{e.onclick=function(){M(".modal_temp")}}),document.querySelectorAll(".panel_lamp").forEach(e=>{e.onclick=function(){M(".modal_light")}}),document.querySelectorAll(".panel_floor").forEach(e=>{e.onclick=function(){M(".modal_knob")}});const A=document.querySelector(".scenarios__paginator .paginator__arrow_left"),T=document.querySelector(".scenarios__paginator .paginator__arrow_right"),P=document.querySelectorAll(".scenarios__panel").length,I=document.querySelectorAll(".scenarios__page").length,H=document.querySelector(".scenarios"),j=document.querySelector(".scenarios__paginator");let x=1;j.classList.toggle("paginator_hide",P<=9),T.addEventListener("click",function(){x<I&&(x+=1,T.classList.toggle("paginator__arrow_disabled",x===I),A.classList.toggle("paginator__arrow_disabled",1===x),H.scroll({top:0,left:645,behavior:"smooth"}))}),A.addEventListener("click",function(){x>1&&(x-=1,T.classList.toggle("paginator__arrow_disabled",x===I),A.classList.toggle("paginator__arrow_disabled",1===x),H.scroll({top:0,left:-645,behavior:"smooth"}))});const D=document.querySelector(".filter__select-button"),X=document.querySelector(".filter__select-button .button__text"),Y=document.querySelectorAll(".filter__select-item"),B=document.querySelector(".filter__select-popup");D.addEventListener("click",function(){B.classList.toggle("filter__select-popup_open")}),Y.forEach(e=>{e.addEventListener("click",function(e){document.querySelector("#"+e.target.dataset.group).checked=!0,Y.forEach(e=>e.classList.toggle("filter__select-item_checked",!1)),e.target.classList.toggle("filter__select-item_checked",!0),B.classList.toggle("filter__select-popup_open",!1),X.innerText=e.target.innerText})}),document.querySelector(".menu__icon").addEventListener("click",function(){document.querySelector(".menu").classList.toggle("menu_open")});