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

document.querySelector('.imagem-perfil').addEventListener('click', () => {
    const divContainer = document.createElement('div')
    const divImg = document.createElement('div')

    divContainer.id = 'container-img'

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
        case 'alang_oli':
            return '#e9477e'
        case 'alang.oliveira':
            return '#086dff'          
        case 'alangdev@hotmail.com':
            return '#0a74c7'
    }

}

