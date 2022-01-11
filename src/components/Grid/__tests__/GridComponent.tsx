import { render, screen } from '../../../lib/test-utils'

import { Col, Grid, Row } from '../GridComponent'

describe('<GridComponent />', () => {
    it('should render the component', () => {
        const { container } = render(
            <Grid>
                <Row>
                    <Col></Col>
                </Row>
            </Grid>
        )

        expect(container.firstChild).toMatchSnapshot()
    })
})
