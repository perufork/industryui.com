/**
 * Icon
 */

// React
import React from 'react'

// Storybook
import { withKnobs } from '@storybook/addon-knobs'
import { Wrapper } from 'decorators'

// UI
import { IconStacked } from 'root'
import Readme from '../README.md'

export default {
  title: 'Atoms/Icon/Stacked',
  component: IconStacked,
  decorators: [Wrapper, withKnobs],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => <IconStacked icon='envelope' />
