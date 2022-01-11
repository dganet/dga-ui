import React from 'react'
import CardComponent from '../Card/CardComponent'

import { Grid, Col, Row } from './GridComponent'

export default {
    title: 'GridComponent',
    component: Grid
}

export const Default = () => (
    <Grid>
        <Row>
            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                <CardComponent cardType="border">asdfasdf</CardComponent>
            </Col>
        </Row>
        <Row>
            <Col xs={12} sm={12} md={12} lg={7} xl={4}>
                <CardComponent cardType="border">Col 1/3</CardComponent>
            </Col>
            <Col xs={12} sm={12} md={12} lg={3} xl={4}>
                <CardComponent cardType="border">Col 2/3</CardComponent>
            </Col>
            <Col xs={12} sm={12} md={12} lg={3} xl={4}>
                <CardComponent cardType="border">Col 3/3</CardComponent>
            </Col>
        </Row>
        <Row centralize>
            <Col xs={12} sm={12} md={12} lg={3} xl={4}>
                <CardComponent cardType="border">
                    <input type="text" />
                </CardComponent>
            </Col>
        </Row>
    </Grid>
)
