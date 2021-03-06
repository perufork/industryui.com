/**
 * Hooks - Use Login
 */

// React
import { useContext, useState } from 'react'

// Next
import Router from 'next/router'

// UI
import { useForm, UserContext } from '../../../'

export const useLogin = (firebase = false) => {
  const initialState = {
    email: '',
    password: '',
    remember: ''
  }

  const [error, setError] = useState(null)

  const { change, form, setForm } = useForm(initialState)
  const { signIn } = useContext(UserContext)

  const submit = e => {
    e.preventDefault()
    const { email, password } = form

    if (firebase) {
      firebase.Auth.handleSignIn('email', email, password)
        .then(authUser => {
          setForm(initialState)
          Router.push('/dashboard')
        })
        .catch(error => {
          setError(error)
        })
    } else {
      signIn('email', email, password, error => error && setError(error))
    }
  }

  return { change, error, form, submit }
}
