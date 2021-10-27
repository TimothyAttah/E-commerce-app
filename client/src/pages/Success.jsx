import React from 'react'
import { useLocation } from 'react-router'

export const Success = () => {
  const location = useLocation()
  return (
    <div>
      <h1>Success!!!</h1>
    </div>
  )
}
