import { VStack, Box } from '@chakra-ui/react'

const RenderItem = ({ value, children, ...rest }) => {

    const moreStyle = {
        fontWeight: rest.fontWeight
    }

    return (
        <VStack
            {...value}
            boxShadow="rgb(0 0 0 / 12%) 0px 2px 12px"
            bg={rest.theme ? "rgb(37, 37, 37)" : "rgb(255, 255, 255)"}
            borderRadius="7px"
            overflowY="auto"
            overflowX="hidden"
            {...rest}
        >
            {
                rest.header && <Box mr="250px" mt={2} fontSize="14px" {...moreStyle} >{rest.header}</Box>
            }
            {children}
        </VStack>
    )

}

export default RenderItem