window.addEventListener('scroll',function(){

  let nav = this.document.getElementById("menu");

  if(window.pageYOffset >= 250)
  {
    nav.classList.add('sticky');
  }
  else
  {
    nav.classList.remove('sticky');
  }
});