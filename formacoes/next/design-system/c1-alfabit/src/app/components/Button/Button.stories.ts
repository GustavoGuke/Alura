import { Meta, StoryObj } from "@storybook/react"

import Button,{ ButtonProps } from "./index"

const meta: Meta<ButtonProps> = {

    title: 'Button',
    tags: ['autodocs'], 
    component: Button,
    argTypes: { }
}

export default meta

export const Primary: StoryObj<ButtonProps> = {
    args: {
        children: 'Botão'
    }
}