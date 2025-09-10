import React, { createContext, useContext, useState, useEffect } from 'react'
import MeApi from '../api/base/me.js'

const SessionContext = createContext(undefined)

export const SessionProvider = ({ children }) => {
  const [me, setMe] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const meApi = new MeApi()

  const fetchMe = async () => {
    setIsLoading(true)
    try {
      const data = await meApi.get()
      console.log('current user data:', data)
      setMe(data)
      setError(null)
    } catch (err) {
      setMe(null)
      setError(err)
    } finally {
      setIsLoading(false)
    }
  }

  const logout = async () => {
    await meApi.post('/logout', { method: 'POST', credentials: 'include' })
    setMe(null)
  }

  useEffect(() => {
    fetchMe()
  }, [])
  
  return (
    <SessionContext.Provider value={{ me, isLoading, error, refetch: fetchMe, logout, meApi }}>
      {children}
    </SessionContext.Provider>
  )
}

export const useSession = () => {
  const context = useContext(SessionContext)
  if (!context) throw new Error('useSession must be used within a SessionProvider')
  return context
}
