import { render, screen } from '../../../lib/test-utils'

import ButtonComponent from '../ButtonComponent'

describe('<ButtonComponent />', () => {
  it('should render the component', () => {
    const { container } = render(<ButtonComponent />)

    expect(screen.getByRole('heading', { name: /Button/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
