import { render, screen } from '../../../lib/test-utils'

import InputComponent from '../InputComponent'

describe('<InputComponent />', () => {
  it('should render the component', () => {
    const { container } = render(<InputComponent />)

    expect(screen.getByRole('heading', { name: /Input/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
