import Router from 'next/router'

const CharacterList = ({allCharacters}) => {
    return (
        <div className='container d-flex flex-row flex-wrap justify-content-center align-items-center'>
            {
                allCharacters.map(character => (
                    <div className='characterCard char-def card col-12 col-xl-5 rounded-3 shadow' 
                    key={character.id} 
                    onClick={e =>
                        Router.push('/characters/[id]', `/characters/${character.id}`)
                    }>
                        <div className='row d-flex justify-content-xl-center align-items-xl-center text-xl-center'>
                        <img src={character.image} className="card-img charImg col-12 col-sm-5" alt="img"/>
                        <div className='card-body col-12 col-sm-7'>
                            <h3 className='card-title'> {character.name}</h3>
                            <p className='card-text'>Status: {character.status}</p>
                            <p className='card-text'>Specie: {character.species}</p>
                            <p className='card-text'>Gender: {character.gender}</p>

                        </div>
                        </div>
                    </div>
                ))
            }
        </div>

    )
}
export default CharacterList