import { Box, HStack, Avatar, Button, Flex } from '@chakra-ui/react'
import { CheckCircleIcon, AddIcon } from '@chakra-ui/icons'
import { useRef, useEffect, useState } from 'react'
import images from '../../images'
import styles from '../../styles/CustomVerticalInput.module.scss'

const VideoIcons = ({ icon }) => {
    return (
        <Box
            w="48px"
            height="48px"
            borderRadius="50%"
            bg="rgba(255, 255, 255, .12)"
            display="flex"
            justifyContent="center"
            alignItems="center"
            _hover={{ bg: "rgba(255, 255, 255, .08)" }}
            cursor="pointer"
            mb={5}
        >
            {icon}
        </Box>
    )
}

const ContentVideo = ({ nickname, description, tick = false, music, title, avatar, video }) => {
    const [pause, setPause] = useState(false)
    const [isShow, setIsShow] = useState(false)
    const [showVolume, setShowVolume] = useState(false)
    const [volumn, setVolumn] = useState(50)
    const videoRef = useRef(null)
    const volumRef = useRef(null)
    useEffect(() => {
        videoRef.current.addEventListener('ended', () => {
            setPause(prev => true)
        })
        const video = document.querySelectorAll('video')

        window.addEventListener('load', () => {
            const Intersection = new IntersectionObserver((data) => {
                data.forEach(item => {
                    if (item.intersectionRatio === 1 && item.isIntersecting === true) {
                        item.target.play()
                    }
                })
            })
            video.forEach(item => {
                Intersection.observe(item)
            })
        })
        window.addEventListener('scroll', () => {
            const Intersection = new IntersectionObserver((data) => {
                data.forEach(item => {
                    if (item.intersectionRatio >= 1 && item.isIntersecting === true) {
                        setPause(videoRef.current.paused)
                        item.target.play()
                    }
                    else {
                        setPause(videoRef.current.paused)
                        item.target.pause()
                    }
                })
            })
            video.forEach(item => {
                Intersection.observe(item)
            })
        })

        videoRef.current.style.objectFit = 'cover'
        videoRef.current.style.minHeight = '470px'
        videoRef.current.style.maxWidth = '263px'
        videoRef.current.style.borderRadius = '5px'

    }, [])

    const onPlay = () => {
        videoRef.current.play()
        setPause(videoRef.current.paused)
    }

    const onPause = () => {
        videoRef.current.pause()
        setPause(videoRef.current.paused)
    }
    return (
        <Flex w="100%" mt={10} h="80vh" borderBottom="1px" borderBottomColor="rgb(255 255 255 / 12%)">
            <Box w="70%" >
                <HStack alignItems="flex-start">
                    <Box pr={5} pt={5}>
                        <Avatar src={avatar} />
                    </Box>
                    <Flex pt={2} flexDirection="column" >
                        <Box mb={3}>
                            <Box>
                                {!tick
                                    ?
                                    <Flex>
                                        <Box _hover={{ textDecoration: "underline" }}>
                                            <a href={nickname.href}>{nickname.title}</a>
                                        </Box>
                                        {description}
                                    </Flex>
                                    :
                                    <Flex>
                                        <Box _hover={{ textDecoration: "underline" }}>
                                            <a href={nickname.href}>{nickname.title}</a>
                                            <CheckCircleIcon
                                                fontSize="14px"
                                                color="rgb(32, 213, 236)"
                                                ml={1}
                                                mr={1}
                                                mb={2}
                                            />
                                        </Box>
                                        {description}
                                    </Flex>
                                }
                            </Box>
                            <Box>
                                {title}
                            </Box>
                            <Box>
                                <AddIcon />
                                <Box _hover={{ textDecoration: "underline" }} display="inline-block" ml={2}>
                                    <a href={music.href}>{music.title}</a>
                                </Box>
                            </Box>
                        </Box>
                        <HStack alignItems="flex-end">
                            <Box
                                minHeight="450px"
                                position="relative"
                                onMouseOver={() => setIsShow(prev => true)}
                                onMouseLeave={() => setIsShow(prev => false)}
                            >
                                <video ref={videoRef} src={video} muted />
                                <Box
                                    position="absolute"
                                    bottom="10"
                                    left="5"
                                >
                                    {isShow
                                        ?
                                        <>
                                            {pause
                                                ?
                                                <Box onClick={() => onPlay()}> {images.play}</Box>
                                                :
                                                <Box onClick={() => onPause()}> {images.pause}</Box>
                                            }
                                        </>
                                        :
                                        <>
                                        </>
                                    }

                                </Box>
                                <Box
                                    position="absolute"
                                    right="5"
                                    bottom="10"

                                >
                                    {isShow ? <Box
                                        onMouseOver={() => setShowVolume(prev => true)}
                                        onMouseLeave={() => setShowVolume(prev => false)}
                                        pt={5}
                                    >
                                        <Box >
                                            {images.music}
                                        </Box>
                                        {showVolume &&
                                            <input
                                                ref={volumRef}
                                                className={styles['vertical']}
                                                type="range"
                                                min="0"
                                                max="100"
                                                value={volumn}
                                                onChange={() => setVolumn(prev => volumRef.current.value)}
                                            />
                                        }
                                    </Box> : <></>}
                                </Box>
                            </Box>
                            <Box >
                                <VideoIcons icon={images.heart} />
                                <VideoIcons icon={images.comment} />
                                <VideoIcons icon={images.share} />
                            </Box>
                        </HStack>
                    </Flex>
                </HStack>
            </Box >
            <Flex w="30%" justify="center">
                <Button
                    size="sm"
                    color="rgba(255, 59, 92, 1)"
                    outline="1px solid rgba(255, 59, 92, 1)"
                    bg="rgba(255, 255, 255, .08)"
                    fontSize="16px"
                    _active={{ bg: "rgba(254, 44, 85, 0.16)" }}
                    _hover={{ bg: "rgba(254, 44, 85, 0.06)" }}
                    borderRadius="3px"
                    height="28px"
                    minWidth="88px"
                    _focus={{ boxShadow: 'none' }}
                >
                    Follow
                </Button>
            </Flex>
        </Flex >
    )
}


export default ContentVideo