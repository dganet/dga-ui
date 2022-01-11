import { render, screen } from '../../../lib/test-utils'

import GridComponent from '../GridComponent'

describe('<GridComponent />', () => {
  it('should render the component', () => {
    const { container } = render(<GridComponent />)

    expect(screen.getByRole('heading', { name: /Grid/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
