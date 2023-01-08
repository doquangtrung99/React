import { SimpleGrid, HStack } from '@chakra-ui/react'
import { useState } from 'react'
import { HeaderTiktok } from '../component/headertiktok'
import { SideBar } from '../component/sidebar'
const DefaultLayout = ({ children }) => {

    const [theme, setTheme] = useState(false)

    return (
        <SimpleGrid minHeight="100vh" column={1} bg={theme ? 'rgba(18, 18, 18, 1)' : 'white'} color={theme ? 'white' : 'rgba(18, 18, 18, 1)'}>
            <HeaderTiktok
                setTheme={setTheme}
                theme={theme} />
            <HStack justify="center">
                <HStack maxW="1150px" width="100vw" justify="space-between" alignItems="flex-start" >
                    <SideBar theme={theme} />
                    {children}
                </HStack>
            </HStack>
        </SimpleGrid>
    )
}
export default DefaultLayout
