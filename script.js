const navbar=document.getElementById('navbar');
window.addEventListener('scroll',()=>navbar.classList.toggle('scrolled',window.scrollY>50));

document.getElementById("toggleDark").addEventListener("click",()=>{
  document.body.classList.toggle("dark-mode");
  const icon=document.querySelector("#toggleDark i");
  if(document.body.classList.contains("dark-mode")){
    icon.classList.replace("fa-moon","fa-sun");
  }else{
    icon.classList.replace("fa-sun","fa-moon");
  }
});

// Scroll reveal animasi
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
    }
  });
},{threshold:0.3});
document.querySelectorAll('.feature-card,.blog-card').forEach(el=>observer.observe(el));

document.querySelector('form').addEventListener('submit',e=>{
  e.preventDefault();
  const email=document.querySelector('input[type="email"]').value;
  alert(`Permintaan demo untuk ${email} telah diterima! Tim Eco RT akan menghubungi Anda.`);
  e.target.reset();
});
