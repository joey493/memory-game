import { useContext, useEffect } from 'react'
import useShuffle from '../customHooks/useShuffle'

import { GlobalContext } from '../context/GlobalState'

import Card from './Card'

import { CardsHolder } from '../styles/Cards.styled'


function CardsContainer() {
  const { cards, flippedCards, clearSelected, flipBack, wrongOne} = useContext(GlobalContext)
  const shuffledCards = useShuffle([...cards])
  
  useEffect(() => {
    const notEqual = () => flippedCards.map(({id}) => flipBack(id))

    if (flippedCards.length === 2) {
      if (flippedCards[0].name === flippedCards[1].name) {
        clearSelected()
      } else {
        setTimeout(notEqual, 1000)
        wrongOne()
        clearSelected()
      }
    }
    return () => {
      clearTimeout(notEqual)
    }
  }, [flippedCards])
  
  return (
    <CardsHolder>
      {shuffledCards.map((card) => 
        <Card key={card.id} fliped={card.matched} id={card.id}>
          {card.icon}
        </Card>
      )}
    </CardsHolder>
  )
}

export default CardsContainer