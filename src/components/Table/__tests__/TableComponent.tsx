import { render, screen } from '../../../lib/test-utils'

import TableComponent from '../TableComponent'

describe('<TableComponent />', () => {
  it('should render the component', () => {
    const { container } = render(<TableComponent />)

    expect(screen.getByRole('heading', { name: /Table/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
