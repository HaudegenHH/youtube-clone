import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'

import { Videos, ChannelCard } from './'
import { fetchFromApi } from '../utils/fetchFromApi'

const ChannelDetail = () => {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([])

  // console.log(videos, channelDetail);

  useEffect(() => {
    fetchFromApi(`channels?part=snippet&id=${id}`)
      .then((data) => setChannelDetail(data?.items[0]));
    fetchFromApi(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => setVideos(data?.items));
  }, [id])

  return (
    <Box minHeight="95vh">
      <Box>
        <div 
          style={{
            background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(163,105,194,1) 100%, rgba(0,212,255,1) 100%)',
            zIndex: 10,
            height: '300px'
          }}
        />
        <ChannelCard channelDetail={ channelDetail } marginTop="-110px" />
      </Box>
      <Box display="flex" p="2">
        {/* margin-right of 100px is applied to small devices and higher, but not extra small devices*/}
        <Box sx={{ mr: { sm: '100px'} }} />
        <Videos videos={videos}/>        
      </Box>
    </Box>
  )
}

export default ChannelDetail