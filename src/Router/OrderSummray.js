import React from 'react'
import {useNavigate} from 'react-router-dom'

function OrderSummray() {
    const navigate = useNavigate()
  return (
    <>
    <h1>Order Confim</h1>
    <button onClick={()=> navigate('/')} >Go Back</button>

    </>
  )
}

export default OrderSummray
