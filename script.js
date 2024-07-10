function togglemode(){
  const html = document.documentElement
  html.classList.toggle("lightmode")
  const img = document.querySelector('#profile img')
  
  if(html.classList.contains('lightmode')) {
      img.setAttribute("src", "./projeto/assets/avatar-light.png")
  }
  else {
      img.setAttribute("src", "./projeto/assets/avatar_1.png")
  }
}
