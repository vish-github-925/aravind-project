import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
useNavigate
function ErrorPage() {
  const navigate = useNavigate()
  useEffect(() => {
    navigate("/")
  }, [])
  return (
    <></>
  )
}

export default ErrorPage