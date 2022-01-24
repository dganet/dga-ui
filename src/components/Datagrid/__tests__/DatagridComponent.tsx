import { render, screen } from '../../../lib/test-utils'

import DatagridComponent from '../DatagridComponent'

describe('<DatagridComponent />', () => {
  it('should render the component', () => {
    const { container } = render(<DatagridComponent />)

    expect(screen.getByRole('heading', { name: /Datagrid/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
