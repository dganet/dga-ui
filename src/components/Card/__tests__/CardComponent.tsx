import { render, screen } from '../../../lib/test-utils'

import CardComponent from '../CardComponent'

describe('<CardComponent />', () => {
  it('should render the component', () => {
    const { container } = render(<CardComponent />)

    expect(screen.getByRole('heading', { name: /Card/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
