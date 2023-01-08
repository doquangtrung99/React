import { useState } from 'react'
import { Box, Button, Flex } from '@chakra-ui/react'
import { Tooltip } from 'react-tooltip'
import { TriangleUpIcon, ArrowBackIcon } from '@chakra-ui/icons'
import Tippy from '@tippyjs/react/headless'


const ContentRightHeader = ({ handleCheck, images, ListItem, RenderItem, theme }) => {

    const dataItem = [
        {
            icon: images.profile,
            content: 'View profile'
        },
        {
            icon: images.camera,
            content: 'LIVE studio'
        },
        {
            icon: images.settings,
            content: 'Settings'
        },
        {
            icon: images.language,
            content: 'English',
            children: {
                title: 'Language',
                data:
                    [
                        {
                            code: 'en',
                            content: 'English',
                        },
                        {
                            code: 'vi',
                            content: 'Tiếng Việt'
                        }

                    ]
            }
        },
        {
            icon: images.question,
            content: 'Feedback and help'
        },
        {
            icon: images.keyboard,
            content: 'Keyboard shortcuts'
        },
        {
            icon: images.darkmode,
            content: 'Dark mode'
        },
        {
            icon: images.logout,
            content: 'Logout'
        }
    ]

    const [history, setHistory] = useState([{ data: dataItem }])

    const current = history[history.length - 1]

    const CSS1 = {
        w: "250px",
        textAlign: 'center',
        position: 'relative',
        p: '15px 0'
    }



    return (
        <Box
            display="flex"
            justifyContent="flex-start"
            alignItems="center"
            fontSize="17px"

        >
            <Button
                bg={theme ? "rgba(255, 255, 255, .08)" : "transparent"}
                border="1px solid"
                borderColor="rgba(22, 24, 35, 0.12)"
                w="110px"
                _hover={{ bg: !theme ? "rgba(22, 24, 35, .03)" : "rgba(255, 255, 255, .04)" }}
                mr={5}
                borderRadius="1px"
                size="sm"
                pt={4}
                pb={4}
                fontSize="17px"
            >
                <Box mr={3} mt={1} >
                    {images.plus}
                </Box>
                Upload
            </Button>
            <Box
                id="message"
                data-tooltip-content="Messages"
                data-tooltip-place="bottom"
                cursor="pointer"
                mr={5}
            >
                {images.message}
                <Tooltip style={{ borderRadius: '6px' }} anchorId="message" className="message" />
            </Box>
            <Box
                id="inbox"
                data-tooltip-content="Inbox"
                mr={5} data-tooltip-place="bottom"
                position="relative"
                cursor="pointer">
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    position="absolute"
                    bg="rgb(254, 44, 85)"
                    h="22px"
                    w="23px"
                    color="white"
                    fontWeight="bold"
                    borderRadius="50%"
                    textAlign="center"
                    transform="translate(50%,-50%)"
                >
                    5
                </Box>
                {images.inbox}
                <Tooltip style={{ borderRadius: '6px' }} anchorId="inbox" />
            </Box>
            <Tippy
                onHidden={() => { history.length !== 1 && setHistory(prev => prev.slice(0, 1)) }}
                interactive
                delay={[0, 500]}
                placement="bottom-end"
                render={() => {
                    return (
                        <>
                            <TriangleUpIcon
                                fontSize="20px"
                                position="absolute"
                                zIndex="9999"
                                color={!theme ? "rgba(255, 255, 255, 1)" : "rgb(37, 37, 37)"}
                                transform="translate(227px,-75%)"
                            />
                            <RenderItem {...CSS1} theme={theme}>
                                {history.length > 1 &&
                                    <Flex mt="-8px" w="100%">
                                        <Box ml={10} mr={5} cursor="pointer" fontSize="24px" mb={1} onClick={() => {
                                            setHistory(prev => prev.slice(0, history.length - 1))
                                        }}>
                                            <ArrowBackIcon />
                                        </Box>
                                        <Box fontWeight="bold" pt={2}>
                                            {current.title}
                                        </Box>
                                    </Flex>
                                }
                                {current.data.map((item, index) => {
                                    if (item.content === 'Dark mode') {
                                        return <ListItem theme={theme} key={index} icon={item.icon} ml="20px" content={item.content} hasSwitch handleCheck={handleCheck} />
                                    }
                                    return (
                                        <ListItem theme={theme} key={index} icon={item.icon} ml="20px" content={item.content} onClick={() => {
                                            if (item.children) {
                                                setHistory(prev => [...prev, { ...item.children }])
                                            }
                                        }}
                                        />
                                    )
                                })}
                            </RenderItem>
                        </>
                    )
                }}
            >
                <Box mr={5} fontSize="24" cursor="pointer">{images.profile}</Box>
            </Tippy>
        </Box>
    )
}

export default ContentRightHeader