import { render, screen } from '../../../lib/test-utils'

import DropdownmenuComponent from '../DropdownmenuComponent'

describe('<DropdownmenuComponent />', () => {
  it('should render the component', () => {
    const { container } = render(<DropdownmenuComponent />)

    expect(screen.getByRole('heading', { name: /Dropdownmenu/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
