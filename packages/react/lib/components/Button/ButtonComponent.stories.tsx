import React, { Children } from 'react'
import { Story, Meta } from '@storybook/react'
import { useArgs } from '@storybook/client-api'
import { ButtonComponent } from './ButtonComponent'
import { ButtonProps } from './ButtonComponent.types'
import { FaTrashAlt } from 'react-icons/fa'

export default {
  title: 'Button',
  component: ButtonComponent,
  args: {
    buttonSize: 'large',
    buttonType: 'primary',
    disabled: false,
    onlyIcon: false
  },
  argTypes: {
    disabled: {
      control: 'boolean'
    },
    buttonSize: {
      control: { type: 'select', options: ['large', 'medium', 'small'] }
    },
    buttonType: {
      control: {
        type: 'select',
        options: [
          'primary',
          'secondary',
          'destructive',
          'destructiveSecondary',
          'white'
        ]
      }
    },
    icon: {
      control: false
    },
    onlyIcon: {
      control: { type: 'boolean' }
    }
  }
}

const Template: Story<ButtonProps> = args => {
  return <ButtonComponent {...args}>Button</ButtonComponent>
}

export const Primary = Template.bind({})
export const OnlyIcon = Template.bind({})

OnlyIcon.args = {
  icon: FaTrashAlt,
  onlyIcon: true
}

export const Disabled = Template.bind({
  args: {
    disabled: true
  }
})
