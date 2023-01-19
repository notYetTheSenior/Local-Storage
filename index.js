import './index.css'

console.log(localStorage.getItem('k'))
const cookieContent = document.querySelector('.cookie-consent')
if ((localStorage.getItem('first')) !== null) {
  cookieContent.style.display = 'none'
}
localStorage.setItem('first', 'one')
const button = document.querySelector('.cookie-consent__button')
button.addEventListener('click', (event) => {
  cookieContent.style.display = 'none'
})