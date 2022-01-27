import { render, fireEvent } from '../../../lib/test-utils'

import { TabComponent, TabPanel } from '../TabComponent'

describe('<TabComponent />', () => {
    it('Should render the component', () => {
        const { container } = render(
            <TabComponent titles={['teste1', 'teste2']}>
                <TabPanel index={0}>Tab1</TabPanel>
                <TabPanel index={1}>Tab2</TabPanel>
            </TabComponent>
        )

        expect(container.firstChild).toMatchSnapshot()
    })

    it('Should render the component with invalid children', () => {
        const { container } = render(
            <TabComponent titles={[]}>Lorem</TabComponent>
        )

        expect(container.firstChild).toMatchSnapshot()
    })

    it('Should be able to render 1 tabs and click in one tab', () => {
        const { getByTestId } = render(
            <TabComponent titles={['teste1']}>
                <TabPanel index={0}>Tab1</TabPanel>
                <TabPanel index={0}>Tab1</TabPanel>
            </TabComponent>
        )

        const tab = getByTestId('tabCell')
        fireEvent.click(tab)

        expect(tab).toMatchSnapshot()
    })
})
