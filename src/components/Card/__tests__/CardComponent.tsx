import { render, screen } from '../../../lib/test-utils'

import CardComponent from '../CardComponent'

describe('<CardComponent />', () => {
    it('should render the component', () => {
        const { container } = render(
            <CardComponent cardType="border">test</CardComponent>
        )

        expect(container.firstChild).toMatchSnapshot()
    })
})
