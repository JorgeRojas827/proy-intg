import React from 'react'
import { LeftBar } from '../sections/LeftBar'
import { Content } from '../sections/Content'

const Dashboard = () => {
  return (
    <div className="inline-flex h-screen w-screen">
      <LeftBar />
      <Content />
    </div>
  )
}

export default Dashboard
