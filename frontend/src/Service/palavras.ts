async function findAllPalavras(){
    const data = await fetch("http://localhost:8080/jogos/palavras");

    if(!data.ok){
        throw new Error(`Requisição mal sucedida ${data.status}`)
    }

    return await data.json()
}

async function findPalavrasRandomLimit(num: number){
    const data = await fetch(`http://localhost:8080/jogos/palavrasRandomLimit/${num}`)

    if(!data.ok){
        throw new Error(`Requisição mal sucedida ${data.status}`)
    }

    return await data.json()
}

async function jogoDaMemoria(num: number){
    const data = await fetch(`http://localhost:8080/jogos/jogoDaMemoria/${num}`)

    if(!data.ok){
        throw new Error(`Requisição mal sucedida ${data.status}`)
    }

    return await data.json()
}

export const JogosService = {
    findAllPalavras,
    findPalavrasRandomLimit,
    jogoDaMemoria,
}