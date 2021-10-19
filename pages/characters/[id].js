import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import { getCharacterData } from '../../lib/character'

const Characters = ({ character }) => {
    const router = useRouter()
    const { id } = router.query
    return (
        <Layout>
            <div className='characterCard char-only card rounded-3 shadow' key={character.id} >
                    <div className='row d-flex'>
                        <img src={character.image} className="card-img img-only col-12 col-md-5" alt="img"/>
                        <div className='card-body col-md-6'>
                            <h3 className='card-title'> {character.name}</h3>
                            <p className='card-text'>Status: {character.status}</p>
                            <p className='card-text'>Specie: {character.species}</p>
                            <p className='card-text'>Gender: {character.gender}</p>
                            <p className='card-text'>Origin: {character.origin.name}</p>
                            <p className='card-text'>Last known location: {character.location.name}</p>
                        </div>
                    </div>
            </div>
        </Layout>
    )
}

export async function getServerSideProps(ctx) {
    const allCharactersData = await getCharacterData(ctx.query.id)
    return {
        props:
        {
            character: allCharactersData
        }
    }
  }

export default Characters