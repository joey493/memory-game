import {
  IoLogoJavascript,
  IoLogoHtml5
} from 'react-icons/io'

import {
  FaReact,
  FaVuejs,
  FaAngular,
  FaCss3Alt,
  FaBootstrap,
  FaSass,
  FaGithub,
  FaStackOverflow,
  FaPython,
  FaDatabase
} from 'react-icons/fa'

let icons = [
  <FaReact />,  
  <FaVuejs />,  
  <FaAngular />,  
  <FaCss3Alt />,  
  <FaBootstrap />,  
  <FaSass />,  
  <FaGithub />,  
  <FaStackOverflow />,  
  <FaPython />,  
  <FaDatabase />,  
  <IoLogoJavascript />,  
  <IoLogoHtml5 />
]

function generateUID () {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}


const list = (arr) => {
  let arr1 = []
  arr.forEach(ele =>
    arr1.push({
      id: generateUID(),
      name: ele.type.name,
      icon: ele,
      matched: false
    }))

  return arr1
}

export default list([...icons, ...icons])
