import{n as P}from"./index-ujXdzMY9.js";const c={x:0,y:0};function W(r,t,a){r.beginPath(),r.moveTo(t.x,t.y),r.lineTo(a.x,a.y),r.closePath()}function T(r,t,a){r.fillStyle=a??"rgba(0,0,0,0)",r.fillRect(c.x,c.y,t.width,t.height)}function A(r,t,a,e){a&&(r.globalAlpha=e,r.drawImage(a,c.x,c.y,t.width,t.height),r.globalAlpha=1)}function O(r,t){r.clearRect(c.x,c.y,t.width,t.height)}function v(r){const{container:t,context:a,particle:e,delta:s,colorStyles:i,backgroundMask:n,composite:l,radius:o,opacity:u,shadow:f,transform:h}=r,m=e.getPosition(),x=0,y=e.rotation+(e.pathRotation?e.velocity.angle:x),p={sin:Math.sin(y),cos:Math.cos(y)},w=1,d={a:p.cos*(h.a??w),b:p.sin*(h.b??w),c:-p.sin*(h.c??w),d:p.cos*(h.d??w)};a.setTransform(d.a,d.b,d.c,d.d,m.x,m.y),n&&(a.globalCompositeOperation=l);const D=e.shadowColor;f.enable&&D&&(a.shadowBlur=f.blur,a.shadowColor=P(D),a.shadowOffsetX=f.offset.x,a.shadowOffsetY=f.offset.y),i.fill&&(a.fillStyle=i.fill);const k=0,b=e.strokeWidth??k;a.lineWidth=b,i.stroke&&(a.strokeStyle=i.stroke);const g={container:t,context:a,particle:e,radius:o,opacity:u,delta:s,transformData:d,strokeWidth:b};S(g),C(g),R(g),a.globalCompositeOperation="source-over",a.resetTransform()}function R(r){const{container:t,context:a,particle:e,radius:s,opacity:i,delta:n,transformData:l}=r;if(!e.effect)return;const o=t.effectDrawers.get(e.effect);o&&o.draw({context:a,particle:e,radius:s,opacity:i,delta:n,pixelRatio:t.retina.pixelRatio,transformData:{...l}})}function S(r){const{container:t,context:a,particle:e,radius:s,opacity:i,delta:n,strokeWidth:l,transformData:o}=r,u=0;if(!e.shape)return;const f=t.shapeDrawers.get(e.shape);f&&(a.beginPath(),f.draw({context:a,particle:e,radius:s,opacity:i,delta:n,pixelRatio:t.retina.pixelRatio,transformData:{...o}}),e.shapeClose&&a.closePath(),l>u&&a.stroke(),e.shapeFill&&a.fill())}function C(r){const{container:t,context:a,particle:e,radius:s,opacity:i,delta:n,transformData:l}=r;if(!e.shape)return;const o=t.shapeDrawers.get(e.shape);o!=null&&o.afterDraw&&o.afterDraw({context:a,particle:e,radius:s,opacity:i,delta:n,pixelRatio:t.retina.pixelRatio,transformData:{...l}})}function M(r,t,a){t.draw&&t.draw(r,a)}function B(r,t,a,e){t.drawParticle&&t.drawParticle(r,a,e)}function I(r,t,a){return{h:r.h,s:r.s,l:r.l+(t==="darken"?-1:1)*a}}export{A as a,B as b,O as c,v as d,M as e,I as f,W as g,T as p};
