import React from 'react'
import logo from '../../assets/logo-1.png'

const Logo = ({ src = logo, alt = '...' }) => {
  return (
    <div style={{ width: 48, height: 36 }}>
      <img src={src} alt={alt} style={{ width: '100%', height: '100%' }} />
    </div>
  )
}

export default Logo