const links = document.querySelectorAll('.contato-items a')
const sgvIcons = document.querySelectorAll('.contato-icon')

links.forEach((link, indice) => {
    link.addEventListener('mouseenter', () => {
        sgvIcons[indice].style.fill = 'black'

        switch(link.textContent) {
            case 'github/alan-oli':
                sgvIcons[indice].style.fill = '#6d3197'
                break;
            case 'in/alan-oli':
                sgvIcons[indice].style.fill = '#3077bc'
                break;
            case 'alang_oli':
                sgvIcons[indice].style.fill = '#e9477e'
                break; 
            case 'alang.oliveira':
                sgvIcons[indice].style.fill = '#086dff'
                break;            
            case 'alangdev@hotmail.com':
                sgvIcons[indice].style.fill = '#0a74c7'
                break;
        }
    })

    link.addEventListener('mouseleave', () => {
        sgvIcons[indice].style.fill = 'white'
    })
})

document.querySelector('.imagem-perfil').addEventListener('click', () => {
    const divContainer = document.createElement('div')
    const divImg = document.createElement('div')

    divContainer.id = 'container-img'


    divImg.style.background = "url('../assets/img/foto-perfil.jpg') no-repeat center"

    divImg.style.backgroundSize = 'cover'
    divImg.style.zIndex = 3
    divImg.id = 'img-from-container'

    divContainer.append(divImg)

    document.querySelector('body').append(divContainer)
    document.querySelector('aside').style.filter = 'blur(2px)'
    document.querySelector('main').style.filter = 'blur(2px)'

    divContainer.addEventListener('click', () => {
        divContainer.remove()
        document.querySelector('aside').style.filter = 'none'
        document.querySelector('main').style.filter = 'none'
    })

    document.querySelector('body').addEventListener('keydown', (ev) => {
        if(ev.key === 'Escape') {
            divContainer.remove()
            document.querySelector('aside').style.filter = 'none'
            document.querySelector('main').style.filter = 'none'
        }
    })
})

