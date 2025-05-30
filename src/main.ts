import './style.css'

const formulario = document.querySelector<HTMLFormElement>("#formulario")!
const selecionar = document.querySelector<HTMLInputElement>("#selecionar")!
const img = document.querySelector<HTMLDivElement>('#img')!


async function selecionarGato(){
  const result = await fetch("https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1")
  const body = await result.json()

  img.innerHTML = `
    <div>
    <p>teste</p>
    <img src="${body.url}" alt="">
    </div>
  `

}
