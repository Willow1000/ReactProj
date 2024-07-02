import React from 'react'

function Footer(props) {
  return (
    <footer>
        <span>{props.count} {props.count!==1?'items':"item"}</span>
    </footer>
  )
}

Footer.defaultProps={
    count:0
}
export default Footer