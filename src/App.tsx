import { useState } from 'react'

import MenuCard from './menu-card/menu-card.tsx'
import Order from './order-page/order.tsx'
import Delivery from './delivery/delivery.tsx'

import firstCard from './images/firstCard.svg'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Delivery/>
    {/* <Order totalPrice={55555}/> */}
    {/* <MenuCard image={firstCard} title={'Свежая рыба'}/> */}
    </>
  )
}

export default App
