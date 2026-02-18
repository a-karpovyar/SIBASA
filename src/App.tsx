import { useState } from 'react'

import ProductCardComponent from './menu-card/menu-card.tsx'
import firstCard from './images/firstCard.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ProductCardComponent image={firstCard} title={'Свежая рыба'}/>
    </>
  )
}

export default App
