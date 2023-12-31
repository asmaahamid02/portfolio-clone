const toggleBtn = document.querySelector('.nav-toggle')

const toggle = (e) => {
  const nav = document.querySelector('nav')

  nav.classList.toggle('show-mobile')
}

toggleBtn.addEventListener('click', toggle)
