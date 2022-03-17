import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

import { StyledCard } from '../styles/Cards.styled'


function Card({id, fliped, children}) {
  const {flipCard, playing} = useContext(GlobalContext)

  const handleClick = () => {
    if (!playing) return;
    flipCard(id)
  }
  
  return (
    <StyledCard flip={fliped}>
      <div className="front" onClick={handleClick}>{'</>'}</div>
      <div className="back">{children}</div>
    </StyledCard>

  )
}

export default Card
