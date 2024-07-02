import React from 'react'

function Header(props) {
  return (
    <header>
        <span>{props.title}</span>
    </header>
  )
}

Header.defaultProps = {
    title:'Title'
}
export default Header