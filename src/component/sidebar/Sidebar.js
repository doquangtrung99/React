import { SimpleGrid, Text, Box, Stack } from '@chakra-ui/react'
import { useState, useCallback } from 'react'
import images from '../../images'
import { ListItem } from '../headertiktok'
import styles from '../../styles/SidebarScrollbar.module.scss'
import { fakeData } from '../dataFake'

const SideBar = ({ theme }) => {
    const [condition, setCondition] = useState(false)
    const SidebarCss = {
        minH: window.innerHeight - 69,
        height: '100px',
        overflowY: "auto"
    }

    const onSeeAll = useCallback(() => {
        setCondition(prev => !condition)
    }, [condition])

    return (
        <SimpleGrid
            column={1}
            className={!theme ? styles.scrollbar : styles.scrollbardarkmode}
            overflowX="hidden"
            position="sticky"
            top="58px"
            {...SidebarCss}
        >
            <Box >
                <Box w="100%" fontSize="18px" fontWeight="650" mt={5} borderBottom="1px" borderColor={!theme ? "rgba(22, 24, 35, .12)" : 'white'} >
                    <ListItem theme={theme} p="2" pl="0" icon={images.darkmode} content="For You" />
                    <ListItem theme={theme} p="2" pl="0" icon={images.profile} content="Following" />
                    <ListItem theme={theme} p="2" pl="0" icon={images.camera} content="LIVE" />
                </Box>
                <Box overflowY="auto">
                    <Stack fontWeight="500" fontSize="14px" minW="335px" mt={2}>
                        <Box>
                            <Text>
                                Suggested accounts
                            </Text>
                        </Box>
                        {fakeData.map((item, index) => {
                            if (!condition && index < 5) {
                                return (
                                    <ListItem
                                        theme={theme}
                                        key={index}
                                        width="30px"
                                        height="30px"
                                        pl="0"
                                        pb="0"
                                        avatar={item.avatar}
                                        nickName={item.nickName}
                                        fullName={item.fullName}
                                    />
                                )
                            } else if (condition) {
                                return (
                                    <ListItem
                                        theme={theme}
                                        key={index}
                                        width="30px"
                                        height="30px"
                                        pl="0"
                                        pb="0"
                                        avatar={item.avatar}
                                        nickName={item.nickName}
                                        fullName={item.fullName}
                                    />
                                )
                            }
                        })}
                    </Stack>

                    {condition ?
                        <Text
                            color="rgb(254, 44, 85)"
                            textAlign="left"
                            fontSize="15px"
                            fontWeight="bold"
                            cursor="pointer"
                            onClick={() => onSeeAll()}>See less</Text>
                        :
                        <Text
                            color="rgb(254, 44, 85)"
                            textAlign="left"
                            fontSize="15px"
                            fontWeight="bold"
                            cursor="pointer"
                            onClick={() => onSeeAll()}>See all</Text>
                    }
                </Box>
            </Box>
        </SimpleGrid>
    )
}

export default SideBar