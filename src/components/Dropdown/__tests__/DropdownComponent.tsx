import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

import { fireEvent, render } from '../../../lib/test-utils'
import DropdownComponent from '../DropdownComponent'
import { DropdownItem } from '../DropdownComponent.types'

describe('<DropdownComponent />', () => {
    it('should render the component', () => {
        const { container } = render(
            <DropdownComponent
                selectedItem={{} as DropdownItem}
                setSelectedItem={() => {}}
                title="Componente Teste"
                items={[
                    {
                        id: 1,
                        value: 'Testando 123...'
                    }
                ]}
            />
        )

        expect(container.firstChild).toMatchSnapshot()
    })

    it('should be able to click on component', () => {
        const itemValue = 'Testando 123...'

        const { container, getByTitle, getByText } = render(
            <DropdownComponent
                selectedItem={{} as DropdownItem}
                setSelectedItem={() => {}}
                title="Componente Teste"
                items={[
                    {
                        id: 1,
                        value: itemValue
                    }
                ]}
            />
        )

        const arrowDown = getByTitle('arrow-down')
        const dropdownOption = getByText(itemValue)

        expect(arrowDown).toBeInTheDocument()

        fireEvent.click(dropdownOption)

        expect(arrowDown).not.toBeInTheDocument()

        expect(container.firstChild).toMatchSnapshot()
    })
})
