import { render, screen } from '../../../lib/test-utils'

import DividerComponent from '../DividerComponent'

describe('<DividerComponent />', () => {
  it('should render the component', () => {
    const { container } = render(<DividerComponent />)

    expect(screen.getByRole('heading', { name: /Divider/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
