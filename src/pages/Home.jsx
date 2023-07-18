import {useState} from 'react'
import {yellowBeltTechs} from '../assets/yellowBeltTechs.js'
import {orangeBeltTechs} from '../assets/orangeBeltTechs'
import TechniqueCard from '../elements/TechniqueCard'


const Home = () => {
    const [showYellowBeltTechs, setShowYellowBeltTechs] = useState(false)
    const [showOrangeBeltTechs, setShowOrangeBeltTechs] = useState(false)

    console.log('hit')
  return (
    <div>
        <section>
            <h1>Select the belt techniques you would like to view</h1>
            <button onClick={() => setShowYellowBeltTechs(!showYellowBeltTechs)}>{showYellowBeltTechs ? 'Hide yellow belt techniqies' : 'Show yellow belt techniques'}</button>
            <button onClick={() => setShowOrangeBeltTechs(!showOrangeBeltTechs)}>{showOrangeBeltTechs ? 'Hide orange belt techniqies' : 'Show orange belt techniques'}</button>
        </section>
        <main>
            {showYellowBeltTechs && (
                <div>
                    <h1>Yellow Belt Techniques</h1>
                    {yellowBeltTechs.map(tech => {
                        return <TechniqueCard key={'yellow' + tech.id}  tech={tech}/>
                    })}
                </div>
            )}
            {showOrangeBeltTechs && (
                <div>
                    <h1>Orange Belt Techniques</h1>
                    {orangeBeltTechs.map(tech => {
                        return <TechniqueCard key={'orange' + tech.id}  tech={tech}/>
                    })}
                </div>
            )}
        </main>
    </div>
  )
}

export default Home