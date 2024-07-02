import React from 'react'

function Search(props) {
  return (
    <form action="" className='searchContainer'>
        <input type="text" role='search'  onChange={(e)=>props.setSearch(e.target.value)} placeholder='Search Items' value={props.search} id='serach' className='
        search'/>
    </form>
  )
}

export default Search