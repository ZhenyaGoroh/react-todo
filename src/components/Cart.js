import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {addItem,deleteItem} from "../actions/cartAction"
function Cart() {

    const state = useSelector((state)=>state)
    const dispatch = useDispatch()
  return (
    <div>
        <h1>Number of items: {state.numOfItems}</h1>
        <button onClick={()=>dispatch(addItem())}>Add item</button>
        <button disabled={state.numOfItems<1} onClick={()=>{dispatch(deleteItem())}}>Delete item</button>
    </div>
  )
}

export default Cart