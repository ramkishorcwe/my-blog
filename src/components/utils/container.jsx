import React from 'react'

const Container = (props) => {
  console.log(props)
  return (
    <div >{props.children}</div>
  )
}

export default Container