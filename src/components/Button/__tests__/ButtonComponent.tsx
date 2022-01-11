import { render, screen } from '../../../lib/test-utils'

import ButtonComponent from '../ButtonComponent'

describe('<ButtonComponent />', () => {
    it('should render the component', () => {
        const { container } = render(<ButtonComponent />)

        expect(container.firstChild).toMatchSnapshot()
    })
})
