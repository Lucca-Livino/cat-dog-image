import './style.css'

const opcoes = document.querySelector<HTMLSelectElement>('#opcoes')!
const img = document.querySelector<HTMLImageElement>('#img')!
const selecionar = document.querySelector<HTMLInputElement>('#selecionar')!;


async function executar() {
    if (opcoes.value == "gato") {
        const gato = await selecionarGato()
        img.src = gato[0].url
    }

    if (opcoes.value == "cachorro")  {
        const cachorro = await selecionarCachorro()
        img.src = cachorro.message
    }

}

selecionar.addEventListener('click', (event) => {
    event.preventDefault()
    executar()
})

executar()


async function selecionarCachorro() {
    const cachorro = await fetch('https://dog.ceo/api/breeds/image/random')
    if (!cachorro.ok) {
        console.error('Erro ao buscar Cachorro')
        return {}
    }
    
    return cachorro.json()
}

async function selecionarGato() {
    const gato = await fetch('https://api.thecatapi.com/v1/images/search')
    if (!gato.ok) {
        console.error('Erro ao buscar Gato')
        return {}
    }
    return gato.json()
}