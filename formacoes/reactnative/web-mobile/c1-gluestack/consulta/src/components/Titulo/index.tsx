import { Text } from '@gluestack-ui/themed'

import {ReactNode} from 'react'

interface TituloProps {
    children: ReactNode
}
export function Titulo({children, ...rest}: TituloProps) {
    return (
        <Text
            alignSelf='center'
            fontSize='$2xl'
            fontWeight='bold'
            color='$coolGray500'
            mt={10}
            {...rest}
        >
            {children}
        </Text>
    )
}