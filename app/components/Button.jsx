// import React from 'react'

// const Button = ({text,children}) => {
//   return (
//     <a href={'#'+text} className="p-2 border border-1 rounded-lg bg-primary hover:bg-secondary">{children}</a>
//   )
// }

// export default Button
import React from 'react'

const Button = (props) => {
  return (
    <a href={'#' + props.text} className="p-2 border border-1 rounded-lg bg-primary hover:bg-secondary">{props.children}</a>
  )
}

export default Button