const mainCard = document.getElementById('main-card')
const successCard = document.getElementById('success-card')
const form = document.getElementById('form')
const email = document.getElementById('email')
const dismissBtn = document.getElementById('dismiss-btn')
const emailMsg = document.getElementById('email-msg')

const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

async function wait(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms)
  })
}

async function handleSubmit(event) {
  event.preventDefault()
  const emailGroup = email.closest('.form-group')

  if (!email.value.match(emailRegex)) {
    emailGroup.classList.add('validation-error')
    return
  }
  emailGroup.classList.remove('validation-error')
  emailMsg.textContent = email.value

  mainCard.classList.add('invisible')
  await wait(200)
  mainCard.classList.add('hidden')
  successCard.classList.remove('hidden')
  await wait(200)
  successCard.classList.remove('invisible')
}

async function dismissMessage() {
  successCard.classList.add('invisible')
  await wait(200)
  successCard.classList.add('hidden')
}

form.addEventListener('submit', handleSubmit)
dismissBtn.addEventListener('click', dismissMessage)
