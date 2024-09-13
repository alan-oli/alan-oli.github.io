const links = document.querySelectorAll('.contato-items a')

const sgvIcons = document.querySelectorAll('.contato-icon')

const linksHeader = document.querySelectorAll('.link-items')

links.forEach((link, indice) => {
    link.addEventListener('mouseenter', () => {
    
        sgvIcons[indice].style.fill = verificaLinkContent(link.textContent)
    })

    sgvIcons[indice].addEventListener('mouseenter', () => {
        sgvIcons[indice].style.fill = verificaLinkContent(link.textContent)

        sgvIcons[indice].addEventListener('mouseleave', () => {
            sgvIcons[indice].style.fill = 'white'
        })
    })

    link.addEventListener('mouseleave', () => {
        sgvIcons[indice].style.fill = 'white'
    })
})


document.querySelector('.barra-perfil').addEventListener('click', ()=> {

    const aside = document.getElementById('borda-lateral')

    document.querySelector('section').style.filter = 'blur(2px)'
    document.querySelector('header').style.filter = 'blur(2px)'
    document.querySelector('footer').style.filter = 'blur(2px)'

    aside.style.animation = 'slideAside 1s ease forwards'

    document.querySelector('body').style.overflow = 'hidden'

    document.querySelectorAll('section').forEach(section => section.addEventListener('click', addEventSection))

})

document.querySelector('.lateral-direito-icon').addEventListener('click', () => {

    const barraDireita = document.querySelector('.lateral-direito')

    document.querySelectorAll('section').forEach(section => section.removeEventListener('click', addEventSection))
    

    document.querySelector('section').style.filter = 'blur(2px)'
    document.querySelector('footer').style.filter = 'blur(2px)'

    barraDireita.style.animation = 'showBordaDireita 1s ease forwards'

    document.querySelector('body').style.overflow = 'hidden'

    document.querySelector('.close-lateral-direito').addEventListener('click', () => {

        document.querySelector('section').style.filter = 'none'
        document.querySelector('footer').style.filter = 'none'

        barraDireita.style.animation = 'esconderBordaDireita 2.5s ease forwards'

        document.querySelector('body').style.overflowY = 'auto'

    })

})


document.querySelector('.imagem-perfil').addEventListener('click', () => {
    const divContainer = document.createElement('div')
    const divImg = document.createElement('div')

    divContainer.id = 'container-img'

    divImg.id = 'img-from-container'

    divContainer.append(divImg)

    document.querySelector('body').append(divContainer)
    document.querySelector('section').style.filter = 'blur(2px)'

    divContainer.addEventListener('click', () => {
        divContainer.remove()
        document.querySelector('section').style.filter = 'none'
    })

    document.querySelector('body').addEventListener('keydown', (ev) => {
        if(ev.key === 'Escape') {
            divContainer.remove()
        }
    })
})



linksHeader.forEach((link) => {

    link.addEventListener('click', () => {

        if (!link.classList.contains('selected')) {

            linksHeader.forEach(link => link.classList.remove('selected'))

            link.classList.add('selected')

        }

    })

})


function verificaLinkContent(text) {

    switch(text) {
        case 'github/alan-oli':
            return '#6d3197'
        case 'in/alan-oli':
            return '#3077bc'       
        case 'alangdev@hotmail.com':
            return '#0a74c7'
    }

}

function addEventSection() {

    const aside = document.getElementById('borda-lateral')

    document.querySelector('section').style.filter = 'none'
    document.querySelector('header').style.filter = 'none'
    document.querySelector('footer').style.filter = 'none'

    aside.style.animation = 'esconder 2s ease forwards'

    document.querySelector('body').style.overflowY = 'auto'

}