import React from 'react'
import {Button} from './Button'

export default{
    title: 'atomo/Boton',
    component: Button,
    args: {
        children: 'boton',
        isDisabled: false,
    },
    argTypes: {
        children: { control: 'text' },
        type: { control: 'text' },
    }
}
export const Default = () => <Button/>
export const Primary = () => <Button type="primary">Primary</Button>
export const Secondary = () => <Button type="secondary">Secondary</Button>
export const IsDisabled = () => <Button type="primary" isDisabled = {true}>Disabled</Button>
