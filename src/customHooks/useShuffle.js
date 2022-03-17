import { useEffect, useState } from 'react'

export default function useShuffle(arr) {
  const [icons, setIcons] = useState([])

  useEffect(() => {
    for(let i = 0; i < arr.length; i++) {
      const temp =  Math.floor(Math.random() * arr.length);
      [arr[temp], arr[i]] = [arr[i], arr[temp]]
    }
    setIcons(arr)
  }, [])
  
  return icons
}
