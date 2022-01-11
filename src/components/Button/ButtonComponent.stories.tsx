import React from 'react'
import { AiOutlineCheck } from 'react-icons/ai'
import { FaTrashAlt } from 'react-icons/fa'

import ButtonComponent from './ButtonComponent'
import { Grid, Row, Col } from '../Grid/GridComponent'
export default {
    title: 'ButtonComponent',
    component: ButtonComponent
}

export const Primary = () => (
    <Grid colGap={10} rowGap={10}>
        <Row>
            <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                <ButtonComponent buttonType="primary">Primary</ButtonComponent>
            </Col>
            <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                <ButtonComponent buttonType="primary" icon={AiOutlineCheck}>
                    Primary
                </ButtonComponent>
            </Col>
            <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                <ButtonComponent buttonType="primary" icon={AiOutlineCheck} />
            </Col>
        </Row>
        <Row>
            <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                <ButtonComponent buttonSize="medium" buttonType="primary">
                    Primary
                </ButtonComponent>
            </Col>
            <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                <ButtonComponent
                    buttonSize="medium"
                    buttonType="primary"
                    icon={AiOutlineCheck}
                >
                    Primary
                </ButtonComponent>
            </Col>
            <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                <ButtonComponent
                    buttonType="primary"
                    buttonSize="medium"
                    icon={AiOutlineCheck}
                />
            </Col>
        </Row>
        <Row>
            <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                <ButtonComponent buttonSize="small" buttonType="primary">
                    Primary
                </ButtonComponent>
            </Col>
            <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                <ButtonComponent
                    buttonSize="small"
                    buttonType="primary"
                    icon={AiOutlineCheck}
                >
                    Primary
                </ButtonComponent>
            </Col>
            <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                <ButtonComponent
                    buttonSize="small"
                    buttonType="primary"
                    icon={AiOutlineCheck}
                />
            </Col>
        </Row>
    </Grid>
)

export const Secondary = () => (
    <Grid colGap={10} rowGap={10}>
        <Row>
            <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                <ButtonComponent buttonType="secondary">
                    secondary
                </ButtonComponent>
            </Col>
            <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                <ButtonComponent buttonType="secondary" icon={AiOutlineCheck}>
                    secondary
                </ButtonComponent>
            </Col>
            <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                <ButtonComponent buttonType="secondary" icon={AiOutlineCheck} />
            </Col>
        </Row>
        <Row>
            <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                <ButtonComponent buttonSize="medium" buttonType="secondary">
                    secondary
                </ButtonComponent>
            </Col>
            <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                <ButtonComponent
                    buttonSize="medium"
                    buttonType="secondary"
                    icon={AiOutlineCheck}
                >
                    secondary
                </ButtonComponent>
            </Col>
            <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                <ButtonComponent
                    buttonType="secondary"
                    buttonSize="medium"
                    icon={AiOutlineCheck}
                />
            </Col>
        </Row>
        <Row>
            <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                <ButtonComponent buttonSize="small" buttonType="secondary">
                    secondary
                </ButtonComponent>
            </Col>
            <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                <ButtonComponent
                    buttonSize="small"
                    buttonType="secondary"
                    icon={AiOutlineCheck}
                >
                    secondary
                </ButtonComponent>
            </Col>
            <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                <ButtonComponent
                    buttonSize="small"
                    buttonType="secondary"
                    icon={AiOutlineCheck}
                />
            </Col>
        </Row>
    </Grid>
)
export const Destructive = () => (
    <Grid colGap={10} rowGap={10}>
        <Row>
            <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                <ButtonComponent buttonType="destructive">
                    destructive
                </ButtonComponent>
            </Col>
            <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                <ButtonComponent buttonType="destructive" icon={FaTrashAlt}>
                    destructive
                </ButtonComponent>
            </Col>
            <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                <ButtonComponent buttonType="destructive" icon={FaTrashAlt} />
            </Col>
        </Row>
        <Row>
            <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                <ButtonComponent buttonSize="medium" buttonType="destructive">
                    destructive
                </ButtonComponent>
            </Col>
            <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                <ButtonComponent
                    buttonSize="medium"
                    buttonType="destructive"
                    icon={FaTrashAlt}
                >
                    destructive
                </ButtonComponent>
            </Col>
            <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                <ButtonComponent
                    buttonType="destructive"
                    buttonSize="medium"
                    icon={FaTrashAlt}
                />
            </Col>
        </Row>
        <Row>
            <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                <ButtonComponent buttonSize="small" buttonType="destructive">
                    destructive
                </ButtonComponent>
            </Col>
            <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                <ButtonComponent
                    buttonSize="small"
                    buttonType="destructive"
                    icon={FaTrashAlt}
                >
                    destructive
                </ButtonComponent>
            </Col>
            <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                <ButtonComponent
                    buttonSize="small"
                    buttonType="destructive"
                    icon={FaTrashAlt}
                />
            </Col>
        </Row>
    </Grid>
)
export const DestructiveSecondary = () => (
    <Grid colGap={10} rowGap={10}>
        <Row>
            <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                <ButtonComponent buttonType="destructiveSecondary">
                    destructiveSecondary
                </ButtonComponent>
            </Col>
            <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                <ButtonComponent
                    buttonType="destructiveSecondary"
                    icon={FaTrashAlt}
                >
                    destructiveSecondary
                </ButtonComponent>
            </Col>
            <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                <ButtonComponent
                    buttonType="destructiveSecondary"
                    icon={FaTrashAlt}
                />
            </Col>
        </Row>
        <Row>
            <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                <ButtonComponent
                    buttonSize="medium"
                    buttonType="destructiveSecondary"
                >
                    destructiveSecondary
                </ButtonComponent>
            </Col>
            <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                <ButtonComponent
                    buttonSize="medium"
                    buttonType="destructiveSecondary"
                    icon={FaTrashAlt}
                >
                    destructiveSecondary
                </ButtonComponent>
            </Col>
            <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                <ButtonComponent
                    buttonType="destructiveSecondary"
                    buttonSize="medium"
                    icon={FaTrashAlt}
                />
            </Col>
        </Row>
        <Row>
            <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                <ButtonComponent
                    buttonSize="small"
                    buttonType="destructiveSecondary"
                >
                    destructiveSecondary
                </ButtonComponent>
            </Col>
            <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                <ButtonComponent
                    buttonSize="small"
                    buttonType="destructiveSecondary"
                    icon={FaTrashAlt}
                >
                    destructiveSecondary
                </ButtonComponent>
            </Col>
            <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                <ButtonComponent
                    buttonSize="small"
                    buttonType="destructiveSecondary"
                    icon={FaTrashAlt}
                />
            </Col>
        </Row>
    </Grid>
)
export const White = () => (
    <Grid colGap={10} rowGap={10}>
        <Row>
            <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                <ButtonComponent buttonType="white">white</ButtonComponent>
            </Col>
            <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                <ButtonComponent buttonType="white" icon={AiOutlineCheck}>
                    white
                </ButtonComponent>
            </Col>
            <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                <ButtonComponent buttonType="white" icon={AiOutlineCheck} />
            </Col>
        </Row>
        <Row>
            <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                <ButtonComponent buttonSize="medium" buttonType="white">
                    white
                </ButtonComponent>
            </Col>
            <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                <ButtonComponent
                    buttonSize="medium"
                    buttonType="white"
                    icon={AiOutlineCheck}
                >
                    white
                </ButtonComponent>
            </Col>
            <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                <ButtonComponent
                    buttonType="white"
                    buttonSize="medium"
                    icon={AiOutlineCheck}
                />
            </Col>
        </Row>
        <Row>
            <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                <ButtonComponent buttonSize="small" buttonType="white">
                    white
                </ButtonComponent>
            </Col>
            <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                <ButtonComponent
                    buttonSize="small"
                    buttonType="white"
                    icon={AiOutlineCheck}
                >
                    white
                </ButtonComponent>
            </Col>
            <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                <ButtonComponent
                    buttonSize="small"
                    buttonType="white"
                    icon={AiOutlineCheck}
                />
            </Col>
        </Row>
    </Grid>
)
