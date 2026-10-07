(()=>{const h=document.querySelector('.hdr'),n=document.querySelector('.nav'),t=document.querySelector('.menu-tg');
const s=()=>h.classList.toggle('solid',scrollY>40||!document.querySelector('.hero'));s();addEventListener('scroll',s,{passive:true});
t&&t.addEventListener('click',()=>{const o=n.classList.toggle('open');t.setAttribute('aria-expanded',o);document.body.style.overflow=o?'hidden':''});
n&&n.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{n.classList.remove('open');document.body.style.overflow=''}));
const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.12});
document.querySelectorAll('.rv').forEach(el=>io.observe(el));})();
