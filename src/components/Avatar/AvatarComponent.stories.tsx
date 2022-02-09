import React from 'react'

import AvatarComponent from './AvatarComponent'

export default {
    title: 'AvatarComponent',
    component: AvatarComponent,
    argTypes: {
        avatarType: {
            options: ['image', 'letter'],
            control: {
                type: 'select'
            }
        }
    }
}

export const Image = args => <AvatarComponent {...args} />
export const Letter = args => <AvatarComponent {...args} />
