import { Box, HStack } from '@chakra-ui/react'
import 'react-tooltip/dist/react-tooltip.css';
import SearchBar from './SearchBar'
import ContentRightHeader from './ContentRightHeader'
import images from '../../images'
import ListItem from './ListItem'
import RenderItem from './RenderItem'
const HeaderTiktok = ({ setTheme, theme }) => {
    const handleCheck = () => {
        setTheme(prev => !prev)
    }

    return (
        <HStack
            justify="space-around"
            boxShadow={!theme ? "0px 1px 1px rgb(0 0 0 / 12%)" : "0px 1px 1px rgb(255 255 255 / 12%)"}
            position="sticky"
            top="0"
            bg={!theme ? "white" : "rgba(18, 18, 18, 1)"}
            zIndex="9999"
        >
            <HStack
                w="100%"
                justify="space-between"
                p="5px 0"
                maxW="1150px" >
                <Box cursor="pointer">
                    {!theme ? images.tiktok : images.tiktokdarkmode}
                </Box>
                <SearchBar ListItem={ListItem} RenderItem={RenderItem} theme={theme} />
                <ContentRightHeader
                    handleCheck={handleCheck}
                    images={images}
                    ListItem={ListItem} RenderItem={RenderItem}
                    theme={theme}
                />
            </HStack>
        </HStack >

    )
}

export default HeaderTiktok