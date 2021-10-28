document.addEventListener('DOMContentLoaded', function () {
    addBurgerMenuHandler()

    popupHandler()

    addFormsSendHandler()

    addSameHeight()

    addPhoneMasks()

    openBenefitStructure()

    addSlider()

})

function openBenefitStructure() {
    let allElements = document.querySelectorAll('.benefit-structure__element')
    allElements.forEach((currentElement) => {
        currentElement.querySelector(".benefit-structure__element-row").addEventListener("click", evt => {
            currentElement.querySelector('.benefit-structure__img').classList.toggle("active")
            currentElement.querySelector(".benefit-structure__text").classList.toggle("active")
        })
    })
}

function addBurgerMenuHandler() {
    let burgerMenu = document.querySelector('.burger-menu'),
        menu = document.querySelector('.header-menu')
    burgerMenu.addEventListener('click', () => {
        burgerMenu.classList.toggle('active')
        menu.classList.toggle('active')
        if (menu.classList.contains('active')) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
    })

    menu.querySelectorAll('.header-element').forEach(menuItem => {
        menuItem.addEventListener('click', () => {
            if (menu.classList.contains('active')) {
                burgerMenu.classList.remove('active')
                menu.classList.remove('active')
                document.body.style.overflow = ''
            }
        })
    })
}

function popupHandler() {
    let formBtns = document.querySelectorAll(".header-menu-btn"),
        popup = document.querySelector(".wrapper__popup"),
        closePopupBtn = popup.querySelector('.popup__close'),
        allFormBtn = document.querySelectorAll('.complex-element__btn')

    closePopupBtn.addEventListener('click', () => {
        popup.classList.remove('active')
        document.body.style.overflow = ''
    })

    formBtns.forEach(formBtn => {
        formBtn.addEventListener("click", () => {
            popup.classList.add("active")
            document.body.style.overflow = 'hidden'
        })
    })

    allFormBtn.forEach(formButton => {
        formButton.addEventListener('click', () => {
            popup.classList.add('active')
            document.body.style.overflow = 'hidden'
        })
    })
}

function addFormsSendHandler() {
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', event => {
            formSend(event, form)
        })
    })
}

async function formSend(e, form) {
    e.preventDefault()

    let error = formValidate(form),
        formData = new FormData(form)

    if (error === 0) {
        let response = await fetch('sendmail.php', {
            method: 'POST',
            body: formData
        })
        if (response.ok) {
            let btnText = form.querySelector('button').textContent
            form.querySelector('button').textContent = 'Отправлено'
            setTimeout(function () {
                form.reset()
                form.querySelector('button').textContent = btnText
            }, 1500)
        } else {
            form.querySelector('button').classList.add('error')
            form.querySelector('button').textContent = 'Что-то пошло не так...'
        }
    } else {
        console.log('error in form')
    }

}

function formValidate(form) {
    let error,
        formInputs = form.querySelectorAll('input')

    formInputs.forEach(formInput => {
        if (formInput.required) {
            error = 0
        } else {
            error = 1
        }
    })
    return error
}

function addSameHeight() {
    if (document.querySelector('.complexes-row') !== null) {
        let allCards = document.querySelectorAll('.complex-element__text-part')

        allCards.forEach(card=>{
            let imgHeight = card.parentElement.querySelector('.complex-element__img-wrapper').getBoundingClientRect().height
            card.style.height = `calc(100% - ${imgHeight}px)`
        })
    }
}

function addPhoneMasks() {
    let inputPhones = document.querySelectorAll('input[type=tel]');
    let maskOptions = {
        mask: '+{7}(000)000-00-00'
    };
    inputPhones.forEach(inputPhone => {
        let mask = IMask(inputPhone, maskOptions);
    })
}

function addSlider() {
    $(document).ready(function () {
        $(".slider").slick({
            dots: true,
            slidesToShow:3,
            variableWidth:true,
            adaptiveHeight:true,
            centerMode:true
        });
    });
}