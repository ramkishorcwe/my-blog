import React from 'react'

const Container = (children) => {
  console.log(children)
  return (
    <div style={{ width: '90%' }}>{children}</div>
  )
}

export default Container