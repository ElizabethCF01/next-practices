import Layout from "./components/Layout"
import { getAllCharactersData } from '../lib/character'
import CharacterList from "./components/CharacterList"

const Character = ({allCharactersData}) => {
    return (
        <Layout>
            <div className='contaner text-center'>
                <div >
                    <CharacterList allCharacters={allCharactersData.results} />
                </div>
            </div>
        </Layout>
    )
}

export async function getStaticProps (){
    const allCharactersData = await getAllCharactersData()
    return {
      props: {
         allCharactersData
      }
    }
  }
export default Character