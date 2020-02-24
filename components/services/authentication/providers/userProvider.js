/**
 * Authentication - Providers - User
 * Provides context, state and hooks into managing a user
 *
 * @see https://reacttricks.com/sharing-global-data-in-next-with-custom-app-and-usecontext-hook/
 */

// React
import React, { useEffect, useState } from 'react'

// Next
import Router from 'next/router'

// Axios
import axios from 'axios'

// UI
import { decodeToken, UserContext, validateToken } from '../../../'

// Config
import { apiConfig, jwtConfig } from 'config'

export const UserProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(null)
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const bearerToken = window.localStorage.getItem('bearerToken')

    if (bearerToken) {
      try {
        const tokenData = validateToken(bearerToken, jwtConfig)
        if (tokenData.user) {
          setUser(tokenData.user)
        }
      } catch (e) {
        // Invalid token
        window.localStorage.removeItem('bearerToken')
        setAccessToken(null)
        setUser(null)
      }

      setIsLoading(false)
    } else {
      setIsLoading(false)
    }
  }, [])

  const signIn = async (provider, username, password, callback) => {
    let user, token
    try {
      const { data } = await axios.post(`${apiConfig.authURL}/login`, { email: username, password })
      token = data.token
      const tokenData = decodeToken(token)
      user = tokenData.user
    } catch (err) {
      const { error } = err.response.data
      callback(new Error(error))
    }

    const isAuthed = user && token
    if (isAuthed) {
      setUser(user)
      window.localStorage.setItem('bearerToken', token)
      setAccessToken(token)
      Router.push('/dashboard')
    }
  }

  const signOut = () => {
    window.localStorage.removeItem('bearerToken')
    window.localStorage.removeItem('active-notifications')

    setAccessToken(null)
    setUser(null)

    Router.push('/account/sign-in')
  }

  // TODO - remove after converting all pages to new user roles
  const authorise = condition => {
    if (!condition(user)) {
      Router.push('/account/sign-in')
      return false
    }
    return true
  }

  return (
    !isLoading && (
      <UserContext.Provider
        value={{
          accessToken,
          authorise,
          signIn,
          signOut,
          user
        }}
      >
        {children}
      </UserContext.Provider>
    )
  )
}
