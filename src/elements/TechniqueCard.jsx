import React from 'react'

const TechniqueCard = ({tech}) => {
    const {name, attack} = tech
  return (
    <div>
        <h2>{name}</h2>
        <p>Attack: {attack}</p>
    </div>
  )
}

export default TechniqueCard