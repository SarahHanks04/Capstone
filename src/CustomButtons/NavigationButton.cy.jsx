import React from 'react'
import NavigationButton from './NavigationButton'

describe('<NavigationButton />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<NavigationButton />)
  })
})