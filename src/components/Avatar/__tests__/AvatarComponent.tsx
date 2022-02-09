import { render, screen } from '../../../lib/test-utils'

import AvatarComponent from '../AvatarComponent'

describe('<AvatarComponent />', () => {
  it('should render the component', () => {
    const { container } = render(<AvatarComponent />)

    expect(screen.getByRole('heading', { name: /Avatar/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
