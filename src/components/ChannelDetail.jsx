import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'

import { Videos, ChannelCard } from './'
import { fetchFromApi } from '../utils/fetchFromApi'

const ChannelDetail = () => {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([])

  console.log(videos, channelDetail);

  useEffect(() => {
    fetchFromApi(`channels?part=snippet&id=${id}`)
      .then((data) => setChannelDetail(data?.items[0]));
    fetchFromApi(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => setVideos(data?.items));
  }, [id])

  return (
    <div>ChannelDetail</div>
  )
}

export default ChannelDetail