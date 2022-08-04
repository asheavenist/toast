let toastContainer
function initToast() {
  document.body.insertAdjacentHTML('afterbegin', `<div id="toast-container"></div>`)
  toastContainer = document.querySelector('#toast-container')

}
function generateToast({message, fontColor = '#fffffe', backgroundColor = '#00214d', length = '3s'}) {
  toastContainer.insertAdjacentHTML('afterbegin', `<div class="toast" style="animation-duration: ${length}"><div style="background-color: ${backgroundColor}; color: ${fontColor}">${message}</div></div>`)
  const toast = toastContainer.firstElementChild
  toast.addEventListener('animationend', () => toast.remove())

}
function addElement() {
  let newElem = `<div class='toast'>Hello! I'm toast</div>`;
  let elements = document.getElementById("toast-container");
  elements.insertAdjacentHTML("afterbegin", newElem);
  const toast = elements.firstElementChild
  toast.addEventListener('animationend', () => toast.remove())

}
initToast()
let warningButton = document.getElementById("warning"),
  successButton = document.querySelector(".success"),
  infoButton = document.querySelector(".info")

successButton.addEventListener("click", () => {
  generateToast({
    message: 'You got this, kid!',
    backgroundColor: 'hsl(171 100% 46.1%)',
    fontColor: 'hsl(171 100% 13.1%)',
    length: '5s'
  
  })

})
infoButton.addEventListener('click', () => {
  generateToast({
    message: 'Write this down...',
    backgroundColor: 'hsl(51 97.8% 65.1%)',
    fontColor: 'hsl(51 97.8% 12.1%)',
    length: '8000ms'

  })

})
warningButton.addEventListener('click', () => {
  generateToast({
    message: 'Ya sure about that?',
    backgroundColor: 'hsl(350 100% 66.5%)',
    fontColor: 'hsl(350 100% 13.5%)'
  
  })

})
