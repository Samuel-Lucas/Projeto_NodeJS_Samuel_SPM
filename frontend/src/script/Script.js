export const exibirCategoria = (e, categoria) => {

    // Exibição de produtos conforme a categoria de produtos escolhida na lista
    let produtos = document.querySelectorAll('div#computadores, div#notebooks, div#videogames, div#acessorios')

    if(categoria == 'todos') {
        for(let i = 0; i < produtos.length; i++) {

            produtos[i].style.display = 'flex'    
        }
    } else {
    
        for(let i = 0; i < produtos.length; i++) {

            if(produtos[i].id == categoria) {
                produtos[i].style.display = 'flex'
            } else {
                produtos[i].style.display = 'none'
            }
        }
    }

    // Destaque na lista de categoria escolhida
    let listas = document.querySelectorAll('#listaCategoria li')

    for (let j = 0; j < listas.length; j++) {
        listas[j].style.backgroundColor = 'white'
        listas[j].style.color = 'black'
    } 

    let lista = e.target
    lista.style.backgroundColor = '#1a75ff'
    lista.style.color = 'white'
}

export const corPreta = event => {
    const el = event.target
    el.style.color = 'black'
}

export const corBranca = event => {
    const el = event.target
    el.style.color = 'white'
}