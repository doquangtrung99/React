import styles from "../../styles/HeaderTiktok.module.scss"
import { SearchIcon } from '@chakra-ui/icons'
import { Box, Spinner } from '@chakra-ui/react'
import Tippy from '@tippyjs/react/headless'
import { useEffect, useState } from 'react'
import axios from 'axios'

const SearchBar = ({ ListItem, RenderItem, theme }) => {
    const [SearchContent, setSearchContent] = useState()
    const [loading, setLoading] = useState(false)
    const [isShow, setIsShow] = useState(false)
    const [data, setData] = useState([])
    const clearData = () => {
        setSearchContent(prev => '')
    }
    const handleisShow = () => {
        setIsShow(!isShow)
    }
    useEffect(() => {
        if (SearchContent) {
            let timer = setTimeout(async () => {
                try {
                    setLoading(prev => true)
                    let APIresults = await axios.get('https://jsonplaceholder.typicode.com/albums/1/photos')
                    if (APIresults && APIresults.data) {
                        setIsShow(prev => true)
                        setLoading(prev => false)
                        setData(APIresults.data)
                    }
                } catch (error) {
                    console.log(error)
                }
            }, 500)
            return () => {
                clearTimeout(timer)
            }
        } else {
            setIsShow(prev => false)
        }
    }, [SearchContent, data.length])

    return (
        <Box display={{ sm: 'none', md: 'block', lg: 'block' }}>
            <Tippy
                visible={isShow}
                content
                interactive
                placement='bottom'
                onClickOutside={() => handleisShow()}
                render={attrs => (
                    <RenderItem
                        theme={theme}
                        className={styles.customscrollbar}
                        value={{ ...attrs }}
                        maxHeight='400px'
                        w="350px"
                        header="Accounts"
                    >
                        {data.map((item, index) => {
                            return (
                                <ListItem key={index}
                                    theme={theme}
                                    width="45px"
                                    height="45px"
                                    p="10px 15px 5px"
                                    avatar={item.thumbnailUrl}
                                    nickName="Trung"
                                    fullName="doquangtrung"
                                />
                            )
                        })}
                    </RenderItem>
                )}
            >
                <Box className={theme === false ? styles['wrapper-search'] : styles['wrapper-search1']}>
                    <input
                        value={SearchContent}
                        spellCheck={false}
                        placeholder='Search accounts and videos'
                        onChange={(e) => {
                            setSearchContent(e.target.value)
                        }}
                    />
                    {loading ?
                        <Spinner
                            speed='0.65s'
                            emptyColor='gray.200'
                            color='blue.500'
                            size='sm'
                            position="absolute"
                            right="70px"
                            top="35%"
                        />
                        :
                        <>
                            {SearchContent ? <Box
                                onClick={() => clearData()}
                                position="absolute"
                                right="70px"
                                top="50%"
                                transform="translateY(-50%)"
                                color="gray"
                                fontSize="14px"
                            >
                                <i className="fas fa-times-circle"></i>
                            </Box>
                                :
                                <>
                                </>
                            }
                        </>
                    }
                    <span className={styles['icon']} ><SearchIcon /></span>
                </Box>
            </Tippy>
        </Box>
    )
}

export default SearchBar