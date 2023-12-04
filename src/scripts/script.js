/* ------------------------------- Coloque sua lógica aqui ------------------------------- */
function handleModal(){
  const button = document.querySelector(".header__button")
  const span =document.querySelector(".span__content")
  const modalContainer = document.querySelector("#modalController")

  button.addEventListener('click', function(){
    modalContainer.showModal()

  span.addEventListener('click', function(){
    modalContainer.showModal()
  })

    closeModal()
  })
}
handleModal()

function closeModal(){
  const closeButton = document.querySelector("#modalButton")
  const modalContainer = document.querySelector("#modalController")

  closeButton.addEventListener('click', function(){
    modalContainer.close()
  })

}
handleModal()