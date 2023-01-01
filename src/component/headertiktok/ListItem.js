import { SimpleGrid, HStack, Box, Switch } from '@chakra-ui/react'
const ListItem = ({ avatar, nickName, fullName, icon, content, hasSwitch = false, handleCheck = () => { }, ...rest }) => {

    const styleAvatar = {
        width: rest.width,
        height: rest.height,
        objectFit: 'cover',
        borderRadius: '50%',
    }
    const paddingRightAvatar = {
        pr: rest.pr
    }
    const additionStyle = {
        p: rest.p,
        pl: rest.pl,
    }
    return (
        <SimpleGrid
            column={1}
            w="100%"
            p={content ? "" : 2}
            _hover={{ bg: !rest.theme || rest.theme === undefined ? "rgba(22, 24, 35, .06)" : "rgba(255, 255, 255, 0.04)" }}
            cursor="pointer"
            onClick={rest.onClick}
            {...additionStyle}
        >
            {avatar && !content ?
                <HStack>
                    <Box {...paddingRightAvatar} >
                        <img style={{ ...styleAvatar }} src={avatar} alt="avatar" />
                    </Box>
                    <Box >
                        <Box fontWeight="700" >
                            {nickName}
                        </Box>
                        <Box >
                            {fullName}
                        </Box>
                    </Box>
                </HStack>
                :
                <HStack fontWeight="500">
                    <Box w="30px" fontSize="20px" {...rest}>
                        {icon}
                    </Box>
                    <HStack>
                        <Box >
                            {content}
                        </Box>
                        {hasSwitch &&
                            <Switch
                                size="md"
                                colorScheme="teal"
                                isChecked={rest.theme}
                                onChange={() => handleCheck()} />}
                    </HStack>
                </HStack>
            }
        </SimpleGrid>
    )
}

export default ListItem