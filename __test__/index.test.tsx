import { render } from '@testing-library/react'

import Home from '../src/app/page'

describe('<Index />', () => {
  let component: any

  beforeEach(() => {
    component = render(<Home />)
  })

  test('Snapshots', () => {
    const { container } = component
    expect(container).toMatchSnapshot()
  })

  test('Render Home', () => {
    const textsToSearch = ['Home']

    textsToSearch.forEach((text) => {
      component.getByText(text)
    })
  })
})
