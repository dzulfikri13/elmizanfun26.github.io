const targetDate = new Date('2026-01-10T07:30:00+07:00');

function updateCountdown(){
  const now = new Date();
  const diff = targetDate - now;
  if(diff <= 0){
    document.getElementById('cd-days').textContent = '0';
    document.getElementById('cd-hours').textContent = '00';
    document.getElementById('cd-mins').textContent = '00';
    document.getElementById('cd-secs').textContent = '00';
    return;
  }
  const days = Math.floor(diff / (1000*60*60*24));
  const hours = Math.floor((diff % (1000*60*60*24)) / (1000*60*60));
  const mins = Math.floor((diff % (1000*60*60)) / (1000*60));
  const secs = Math.floor((diff % (1000*60)) / 1000);
  document.getElementById('cd-days').textContent = days;
  document.getElementById('cd-hours').textContent = String(hours).padStart(2,'0');
  document.getElementById('cd-mins').textContent = String(mins).padStart(2,'0');
  document.getElementById('cd-secs').textContent = String(secs).padStart(2,'0');
}
setInterval(updateCountdown,1000);
updateCountdown();

function updateLocalClock(){
  const now = new Date();
  const t = now.toLocaleTimeString('en-GB',{hour12:false});
  document.getElementById('liveClock').textContent = 'Waktu lokal: ' + t;
}
setInterval(updateLocalClock,1000);
updateLocalClock();

function showSection(id){
  document.querySelectorAll('section.content-panel').forEach(s=>s.classList.remove('active'));
  const el = document.getElementById(id);
  if(el){
    el.classList.add('active');
    el.scrollIntoView({behavior:'smooth', block:'start'});
  }
}

const topBtn = document.getElementById('topBtn');
window.addEventListener('scroll', ()=> {
  if(window.scrollY > 300) topBtn.style.display = 'block';
  else topBtn.style.display = 'none';
});
topBtn.addEventListener('click', ()=> window.scrollTo({top:0, behavior:'smooth'}));

document.addEventListener('DOMContentLoaded', ()=> {
  showSection('juknis');
});
