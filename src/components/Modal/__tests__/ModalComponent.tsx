import { render, screen } from '../../../lib/test-utils'

import ModalComponent from '../ModalComponent'

describe('<ModalComponent />', () => {
    it('should render the component', () => {
        let isOpen = true
        const { container } = render(
            <ModalComponent
                title=""
                isOpen={isOpen}
                handleClose={() => (isOpen = false)}
            >
                Teste
            </ModalComponent>
        )

        expect(container.firstChild).toMatchSnapshot()
    })
})
