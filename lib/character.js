import fetch from 'isomorphic-fetch'

export async function getAllCharactersData() {
    const res = await fetch("https://rickandmortyapi.com/api/character")
    const data = await res.json()
    return data
}

export async function getCharacterData(id) {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
    const data = await res.json()
    return data
}


