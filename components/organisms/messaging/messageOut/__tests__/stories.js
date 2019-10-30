/**
 * Messaging/MessageOut
 */

// React
import React from 'react'

// UI
import { Message } from '../..'

import Readme from '../README.md'

export default {
  title: 'Organisms/Messaging/MessageOut',
  component: Message,
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const defaultStory = () => (
  <Message content='Test Message' prevType='out' statusText='Delivered' time='12:00' />
)

defaultStory.story = {
  name: 'Default'
}