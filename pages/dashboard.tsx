import React, { useEffect } from 'react'
import { LeftBar } from '../sections/LeftBar'
import { Content } from '../sections/Content'
import { useUser } from '../hooks/useUser'
import { useRouter } from 'next/router'

const Dashboard = () => {
  const { auth } = useUser()
  const router = useRouter()

  useEffect(() => {
    auth.user === null && router.push('http://localhost:3000')
  }, [])

  return (
    <div className="inline-flex h-screen w-screen">
      <LeftBar />
      <Content addTitle="Añadir articulo" title="Artículos" />
    </div>
  )
}

export default Dashboard
