import React from 'react'

import { AuthUserContext, withFirebase } from '../'

const verification = authUser =>
  authUser &&
  !authUser.emailVerified &&
  authUser.providerData.map(provider => provider.providerId).includes('password')

const withEmailVerification = Component => {
  class WithEmailVerification extends React.Component {
    constructor (props) {
      super(props)

      this.state = { isSent: false }
    }

    handleOnSendEmailVerification = () => {
      this.props.firebase.doSendEmailVerification().then(() => this.setState({ isSent: true }))
    }

    authed = () => (
      <div>
        {this.state.isSent ? (
          <p>
            E-Mail confirmation sent: Check you E-Mails (Spam folder included) for a confirmation
            E-Mail. Refresh this page once you confirmed your E-Mail.
          </p>
        ) : (
          <p>
            Verify your E-Mail: Check you E-Mails (Spam folder included) for a confirmation E-Mail
            or send another confirmation E-Mail.
          </p>
        )}

        <button
          type='button'
          onClick={this.handleOnSendEmailVerification}
          disabled={this.state.isSent}
        >
          Send confirmation E-Mail
        </button>
      </div>
    )

    render () {
      return (
        <AuthUserContext.Consumer>
          {authUser => (verification(authUser) ? this.authed() : <Component {...this.props} />)}
        </AuthUserContext.Consumer>
      )
    }
  }

  return withFirebase(WithEmailVerification)
}

export { withEmailVerification }
