/**
 * Navbar
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'

// UI
import { Navbar } from './'
import Readme from './README.md'

// Data
import { NAVIGATION } from './__mocks__/links'
import SVG from './__resources__/tailwise-logo.svg'

storiesOf('Molecules/Navbar', module)

  .addParameters({
    readme: {
      sidebar: Readme
    }
  })

  .add('Default', () =>
    <Navbar
      brand={SVG}
      links={NAVIGATION}
    />
  )
