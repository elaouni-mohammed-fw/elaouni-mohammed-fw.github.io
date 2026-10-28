const menu=document.querySelector('#menuBtn');
const nav=document.querySelector('#navbar');
function closeMenu(){menu.classList.remove('open');nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Open menu')}
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.classList.toggle('open',open);nav.classList.toggle('open',open);menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Close menu':'Open menu')});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav.classList.contains('open')){closeMenu();menu.focus()}});
const links=[...nav.querySelectorAll('a')];
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)links.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+entry.target.id))}),{rootMargin:'-15% 0px -55% 0px'});
links.forEach(a=>{const el=document.querySelector(a.getAttribute('href'));if(el)observer.observe(el)});
window.addEventListener('scroll',()=>document.querySelector('header').classList.toggle('scrolled',window.scrollY>20),{passive:true});
const typed=document.querySelector('#typedText');
if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches){const words=['defensive security','threat detection','SOC & Blue Team'];let word=0,index=words[0].length,deleting=true;function tick(){if(deleting){index--;typed.textContent=words[word].slice(0,index);if(index===0){word=(word+1)%words.length;deleting=false;setTimeout(tick,300);return}}else{index++;typed.textContent=words[word].slice(0,index);if(index===words[word].length){deleting=true;setTimeout(tick,1800);return}}setTimeout(tick,deleting?45:85)}setTimeout(tick,2000)}
document.querySelector('#contactForm').addEventListener('submit',e=>{e.preventDefault();const form=e.currentTarget;if(!form.reportValidity())return;const data=new FormData(form);const body='Name: '+data.get('name').trim()+'\nEmail: '+data.get('email').trim()+'\n\n'+data.get('message').trim();document.querySelector('#formNote').textContent='Opening your email app. Your message has not been sent yet. If nothing opens, use the email address below.';window.location.href='mailto:m.elaouni.org@gmail.com?subject='+encodeURIComponent('Portfolio enquiry — '+data.get('name').trim())+'&body='+encodeURIComponent(body)});
document.querySelector('#year').textContent=new Date().getFullYear();
