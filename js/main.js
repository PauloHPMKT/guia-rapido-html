const btnCallForm = document.querySelector('#call-form')
const formToast = document.querySelector('.form-toast')

function callForm() {
    formToast.classList.add('open')
}

function removeToast(e) {
    const formContainer = e.target

    formContainer.classList.remove('open')
}

btnCallForm.addEventListener('click', callForm)
formToast.addEventListener('click', removeToast)


//====================================================================
const year = document.querySelector('#year')

const currentYear = new Date().getFullYear()

year.innerHTML = currentYear
