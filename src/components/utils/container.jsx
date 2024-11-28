import React from 'react'

const Container = (props) => {
  console.log(props)
  return (
    <div style={{ width: '100%', minHeight: '80vh', backgroundColor: props.theme ? 'white' : 'black', color: props.theme ? 'black' : 'white' }}>{props.children}</div>
  )
}

export default Container