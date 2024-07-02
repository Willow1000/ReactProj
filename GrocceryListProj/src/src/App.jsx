import { useState } from 'react'
import './index.css'
import Header from './Header'
import Footer from './Footer'
import GrocceryList from './GrocceryList'
import Input from './Input'
import Search from './Search'

function App() {
  const [items,setItems] = useState(JSON.parse(localStorage.getItem('modifiedItems'))||
  [
    {
      id: 1,
      name: 'Broccoli',
      quantity: 1,
      units:'kilogram',
      checked: false
    },
    {
      id: 2,
      name: 'Pasta',
      quantity: 1,
      units:'kilogram',
      checked: false
    },
    {
      id: 3,
      name: 'Asparagus',
      quantity: 1,
      units:'kilogram',
      checked: false
    },
    {
      id: 4,
      name: 'Thyme',
      quantity: 1,
      units:'kilogram',
      checked: false
    }
  ])
  const count = Object.keys(items).length
  const handleCheck = (id)=>{
   const modifiedItems = items.map((x)=>{
    x.id===id?x.checked=!x.checked:x.checked=x.checked
    return x
   })
    
   
   
   setItems(modifiedItems) 
   localStorage.setItem("modifiedItems",JSON.stringify(modifiedItems))
  }
  const handleDelete = (id)=>{
    const modifiedItems=items.filter(x=>x.id!==id)
    setItems(modifiedItems)
    localStorage.setItem("modifiedItems",JSON.stringify(modifiedItems))
  }
  const handleQuantityIncrease = (id)=>{
    const modifiedItems = items.map((x)=>{
      x.id===id?x.quantity=x.quantity+1:x.quantity=x.quantity
      return x
     })
      
     
     
     setItems(modifiedItems) 
     localStorage.setItem("modifiedItems",JSON.stringify(modifiedItems))
  }
  const [newName,setNewName] = useState('')
  const [newQuantity,setNewQuantity] = useState(null)
  const [newUnits,setNewUnits] = useState('')
  const handleName = (e)=>{
     setNewName(e.target.value)
     
  }
  const handleQuantity = (e)=>{
    setNewQuantity(e.target.value)
   
  }
  const handleUnits = (e)=>{
    setNewUnits(e.target.value)
  }
  const handleNewItem = ()=>{
    if(newName===''|| newQuantity===null || newUnits==='') {
      alert("Please fill all the available fields") 
    }else{
      const names = items.map(x=>x.name)
      if(names.includes(newName.toUpperCase(newName[0]))){
      alert('The item is already in the list')
      }else{
      const newItem = {
        id: count+1||1,
        name:newName.toUpperCase(newName[0]),
        checked:false,
        units:newUnits,
        quantity:parseInt(newQuantity)
      }
      const modifiedItems = [...items,newItem]
      setItems(modifiedItems)
      setNewName('')
      setNewQuantity('')
      setNewUnits('')
      localStorage.setItem("modifiedItems",JSON.stringify(modifiedItems))
    }
    }
    
    
  }
  const [search,setSearch] = useState('')
  
  return (
    <>
     <Header title='Groccery'/>
     <Input handleName = {handleName} handleQuantity = {handleQuantity} handleNewItem={handleNewItem} newQuantity={newQuantity} newName={newName} handleUnits={handleUnits} newUnits={newUnits}/>
     <Search search={search} setSearch={setSearch} items={items}/>
     <GrocceryList items={items.filter(x=>x.name.includes(search.toUpperCase()))} handleCheck={handleCheck} handleDelete={handleDelete} handleQuantityIncrease={handleQuantityIncrease} title="Groccery"/>
     
     <Footer count={count} /> 
    </>
  )
}

export default App
