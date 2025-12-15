import React from 'react'
import { Outlet } from 'react-router-dom'

const ChallengeLayout = () => {
  return (
    <div>
      ChallengeLayout 
      <br />
      <Outlet />
    </div>
  )
}

export default ChallengeLayout