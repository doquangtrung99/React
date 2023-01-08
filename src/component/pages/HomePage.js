import { Flex } from '@chakra-ui/react'
import { ContentVideo } from '../headertiktok'
import video from '../../images/videos/video.mp4'
import video1 from '../../images/videos/video1.mp4'
const HomePage = () => {

    return (
        <Flex flexDirection="column" w="70%"  >
            <ContentVideo
                tick
                nickname={{
                    title: 'huyseoul_idol',
                    href: '#'
                }}
                description="Oppa Huy IDol"
                title="BỐ CỦA CÂU GIỜ 😎 #huyseoul #dcgr #giaitri"
                music={{
                    href: '#1',
                    title: "nhạc nền - Oppa Huy IDol"
                }}
                video={video1}
            />
            <ContentVideo
                tick
                nickname={{
                    title: 'huyseoul_idol',
                    href: '#'
                }}
                description="Oppa Huy IDol"
                title="BỐ CỦA CÂU GIỜ 😎 #huyseoul #dcgr #giaitri"
                music={{
                    href: '#1',
                    title: "nhạc nền - Oppa Huy IDol"
                }}
                video={video}
            />

        </Flex>

    )
}
export default HomePage