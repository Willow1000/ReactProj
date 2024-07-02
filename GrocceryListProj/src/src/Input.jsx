import React from 'react'
import {FaPlus} from 'react-icons/fa'
function Input(props) {
  
 
  return (
    <form className='addInput' >
        <article className='inputAdd'>
            <input type="text" className='name' required  placeholder='Add Name of Item' onInput={(e)=>{
             props.handleName(e)
            }} value={props.newName} title='Item Name'/>
            <input type="number" required className='quantity' min={1} placeholder='Add Quantity' onInput={(e)=>[
              props.handleQuantity(e)
            ]} value={props.newQuantity} title='Quantity'/>
            <select name="" id="" required onChange={(e)=>props.handleUnits(e)} value={props.newUnits} title='Units'>
              <option value="">Select Units</option>
              <option value="Kg">Kg</option>
              <option value="Ltr">Litres</option>
              <option value="Oz">Oz</option>
              <option value="Pkts">Pkt</option>
              <option value="Dozen">Dozen</option>
              <option value="Tray">Tray</option>
            </select>
        </article>
        <button onClick={(e)=>{
            e.preventDefault()
            props.handleNewItem()
        }} title='Add Item To List'><FaPlus/></button>
    </form>
  )
}

export default Input
