import { render, screen } from '../../../lib/test-utils'

import InputComponent from '../InputComponent'

describe('<InputComponent />', () => {
    it('should render the component', () => {
        const { container } = render(<InputComponent label="test" />)

        expect(container.firstChild).toMatchSnapshot()
    })
})
