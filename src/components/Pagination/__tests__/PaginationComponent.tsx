import { render, screen } from '../../../lib/test-utils'

import PaginationComponent from '../PaginationComponent'

describe('<PaginationComponent />', () => {
  it('should render the component', () => {
    const { container } = render(<PaginationComponent />)

    expect(screen.getByRole('heading', { name: /Pagination/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
