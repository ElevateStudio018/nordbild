
let y=0;const h=document.getElementById('hdr');
addEventListener('scroll',()=>{const n=scrollY;h.classList.toggle('hide',n>y&&n>200);y=n});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;e.target.classList.add('on');
 e.target.querySelectorAll('[data-n]').forEach(b=>{const t=+b.dataset.n,s=performance.now();(function f(n){const p=Math.min((n-s)/1600,1);b.textContent=Math.round(t*(1-Math.pow(1-p,3))).toLocaleString('sv-SE');if(p<1)requestAnimationFrame(f)})(s)});
 io.unobserve(e.target)}),{threshold:.15});
document.querySelectorAll('.reveal').forEach(e=>io.observe(e));
document.querySelectorAll('.menu a').forEach(a=>a.onclick=()=>document.getElementById('menu').classList.remove('open'));

document.querySelectorAll('.filters button').forEach(b=>b.onclick=()=>{document.querySelectorAll('.filters button').forEach(x=>x.classList.remove('on'));b.classList.add('on');const f=b.dataset.f;document.querySelectorAll('.pgrid a').forEach(a=>a.style.display=(f==='alla'||a.dataset.c===f)?'':'none')});
const cf=document.querySelector('form.contact');if(cf)cf.onsubmit=e=>{e.preventDefault();cf.innerHTML='<div class="full" style="padding:40px;background:var(--sand)"><h3 style="font-size:30px;font-weight:500;color:var(--green)">Tack för ditt meddelande!</h3><p style="font-size:18px;margin-top:8px">Vi återkommer inom två arbetsdagar.</p></div>'};
