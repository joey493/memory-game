import { useReducer, createContext } from 'react'
import AppReducer, {types} from './reducer'
import cardsArr from './data'

const InitialState = {
  cards: cardsArr,
  playing: false,
  flippedCards: [],
  tries: 0,
}

// create global context 
export const GlobalContext = createContext(InitialState)


// provider
const GlobalProvider = ({children}) => {
  const [state, dispatch] = useReducer(AppReducer, InitialState)
  const { cards, playing, flippedCards ,tries } = state
  const { START_PLAY, FLIP_CARD, NOT_EQUAL, CLEAR_SELECTED, WRONG_TRY } = types

  // start the game
  const startPlay = () => dispatch({
    type: START_PLAY,
  })
  // flip onClick
  const flipCard = (id) => dispatch({
    type: FLIP_CARD,
    payload: id
  })
  // flip back & increment tries if wrong
  const flipBack = (id) => dispatch({
    type: NOT_EQUAL,
    payload: id
  })
  const wrongOne = ()  => dispatch({
    type: WRONG_TRY
  })
  // clear flipped cards after matching 
  const clearSelected = () => dispatch({
    type: CLEAR_SELECTED,
  })
  return (
    <GlobalContext.Provider value={{
      // state values
      cards,
      playing,
      flippedCards,
      tries,
      // actions
      startPlay,
      flipCard,
      flipBack,
      clearSelected,
      wrongOne,
    }}>
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalProvider
