// ShortsFinder site — minimal JS: sticky nav, mobile menu, scroll reveal, tag cycling, carousel.
// Store URLs: fill in once the apps are live.
const STORE = { ios: '#', android: '#' };
document.querySelectorAll('[data-store]').forEach(a => { a.href = STORE[a.dataset.store]; });

const nav = document.getElementById('nav');
const onScroll = () => nav.classList.toggle('scrolled', scrollY > 8);
addEventListener('scroll', onScroll, { passive: true }); onScroll();

const menuBtn = document.getElementById('menuBtn'), menu = document.getElementById('mobileMenu');
const setMenu = open => {
  menu.classList.toggle('open', open); menuBtn.setAttribute('aria-expanded', open);
  menuBtn.querySelector('use').setAttribute('href', `assets/icons.svg#i-${open ? 'x' : 'menu'}`);
};
menuBtn.addEventListener('click', () => setMenu(!menu.classList.contains('open')));
menu.addEventListener('click', e => { if (e.target.closest('a')) setMenu(false); });

const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
}), { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal, .reveal-ba').forEach(el => io.observe(el));

// Highlight-selection animation: cycle the "AI is looking for" tags.
const tags = [...document.querySelectorAll('#tags span')];
if (tags.length && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  let i = 0;
  setInterval(() => { tags[i].classList.remove('on'); i = (i + 1) % tags.length; tags[i].classList.add('on'); }, 1600);
}

const shots = document.getElementById('shots');
const step = dir => shots.scrollBy({ left: dir * (shots.querySelector('.shot').offsetWidth + 28), behavior: 'smooth' });
document.getElementById('prev').addEventListener('click', () => step(-1));
document.getElementById('next').addEventListener('click', () => step(1));

document.getElementById('year').textContent = new Date().getFullYear();
