import React from 'react'
import { FaTrashAlt,FaPlus } from "react-icons/fa"
function GrocceryList(props) {
  if(props.items.length)  {
    return (
    
        <section>
            {props.items.map(x=>(
                <article key={x.id}>
                    <section className='input'>
                        <form action="
                        ">
                            <input type="checkbox" checked={x.checked} onChange={()=>props.handleCheck(x.id)}/>
                        </form>
                        <article className="info">
                            <span onDoubleClick={()=>props.handleCheck(x.id)}>{x.name}</span>
                            <span>{x.quantity}</span>
                            <span>{x.units}</span>
                        </article>
                    </section>
                    <section className='buttons'>
                        <button className='plus' onClick={()=>props.handleQuantityIncrease(x.id)}><FaPlus/></button>
                        <button className='trash' onClick={()=>props.handleDelete(x.id)}><FaTrashAlt/></button>
                    </section>
                </article>
            ))}
        </section>
        
      )
  }else{
    return(
        <h2 style={
            {
                textAlign: 'center',
            }
        }>Your {props.title} list is empty</h2>
    )
  }
  
}
GrocceryList.defaultProps={
    items:[{
        id: 1,
        name:'item1',
        count:null,
        checked:false
    }]
}
export default GrocceryList