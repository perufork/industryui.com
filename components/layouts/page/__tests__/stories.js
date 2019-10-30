/**
 * Address
 */

// React
import React from 'react'

// UI
import { Page } from '../'
import Readme from '../README.md'

export default {
  title: 'Layouts/Page',
  component: Page,
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const defaultStory = () => (
  <Page heading='Example page' meta={{ title: 'Example Page' }} strapline='Test Subtitle'>
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
      been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
      galley of type and scrambled it to make a type specimen book. It has survived not only five
      centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It
      was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
      passages, and more recently with desktop publishing software like Aldus PageMaker including
      versions of Lorem Ipsum.
    </p>
  </Page>
)

defaultStory.story = {
  name: 'Default'
}

export const fluidContainer = () => (
  <Page
    heading='Fluid Container page'
    meta={{ title: 'Example Page' }}
    strapline='Test Subtitle'
    fluidContainer
  >
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
      been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
      galley of type and scrambled it to make a type specimen book. It has survived not only five
      centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It
      was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
      passages, and more recently with desktop publishing software like Aldus PageMaker including
      versions of Lorem Ipsum.
    </p>
  </Page>
)