export const types = {
  START_PLAY: 'START_PLAY',
  FLIP_CARD: 'FLIP_CARD',
  CLEAR_SELECTED: 'CLEAR_SELECTED',
  NOT_EQUAL:'NOT_EQUAL',
  WRONG_TRY: 'WRONG_TRY',
}


export default function AppReducer(state = {}, action) {
  switch(action.type) {
    // playing
    case types.START_PLAY:
      return {
        ...state,
        playing: true
      }
    // flip card OnClick
    case types.FLIP_CARD:
      return {
        ...state,
        cards: state.cards.map(card => {
          if (card.id === action.payload) {
            card.matched = true
            return card
          }
          return card
        }),
        flippedCards: [
          ...state.flippedCards,
          ...state.cards.filter(card => card.id === action.payload)
        ]
      }
    // Clear after matching cards
    case types.CLEAR_SELECTED:
      return {
        ...state,
        flippedCards: []
      }
    // flip cards back if not equal
    case types.NOT_EQUAL:
      return {
        ...state,
        cards: state.cards.map(card => {
          if(card.id === action.payload) {
            card.matched = false
            return card
          }
          return card
        }),
      }
    // increment wrong tries if selected cards not equal
    case types.WRONG_TRY:
      return {
        ...state,
        tries: state.tries + 1
      }
    default:
      return state
  }
}