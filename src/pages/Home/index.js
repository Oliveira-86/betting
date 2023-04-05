import React from 'react'
import { SPORTS_CATEGORY } from '../../api/sports'
import BottomBar from '../../atomic-components/molecules/BottomBar'
import HomeTemplate from '../../atomic-components/templates/Home'
import useDeviceDetect from '../../hook/useDeviceDetect'

const Home = () => {
  const { isMobile } = useDeviceDetect()
 
  return <>
    <HomeTemplate sportsCategory={SPORTS_CATEGORY} />
    {isMobile ? <BottomBar /> : null }
  </>
}

export default Home