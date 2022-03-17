import { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../context/GlobalState"

import { IoReloadOutline } from 'react-icons/io5'
import { FaPlay } from 'react-icons/fa'

import { StyledInfo } from "../styles/info.styled"


function Info() {
  const { playing, startPlay, tries, cards, flippedCards } = useContext(GlobalContext)
  const [finished, SetFinished] = useState(false)

  useEffect(() => {
    SetFinished(cards.every(({matched}) => matched === true))
  }, [flippedCards])
  

  const reload = () => {
    window.location.reload()
  }

  return (
    <StyledInfo>
      <p>tries: {tries}</p>
      {playing 
      ? (
        <>
          {finished ? <p>Well Done</p>: <p>playing...</p>}
          <IoReloadOutline onClick={reload} style={{cursor: "pointer"}}/>
        </>
      ) : (
        <>
          <p>hello, friend</p>
          <FaPlay onClick={() => startPlay()} style={{cursor: "pointer"}}/>
        </>
      )}
    </StyledInfo>
  )
}

export default Info