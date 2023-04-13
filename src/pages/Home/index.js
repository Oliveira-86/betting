import React from 'react'
import { useEffect } from 'react'
import { SPORTS_CATEGORY } from '../../api/sports'
import BottomBar from '../../atomic-components/molecules/BottomBar'
import HomeTemplate from '../../atomic-components/templates/Home'
import { getLeagues } from '../../features/betting/bettingThunk'
import useDeviceDetect from '../../hook/useDeviceDetect'
import * as apiLeague from '../../features/leagues/leaguesThunk'
import { useDispatch } from 'react-redux'
import * as api from '../../api/index'
import Footer from '../../atomic-components/molecules/Footer'

const Home = () => {
  const { isMobile } = useDeviceDetect()
  const dispatch = useDispatch()
  
  // useEffect(() => {
  //   const getLeagues = async () => {
  //     try {
  //       const { data } = await api.fetchLeagues();
  //       console.log("data: ", data)
  //       return data;
  //     } catch (error) {
  //       console.log('aqui')
  //         console.log("error: ", error);
            
  //     }
  // }
  // getLeagues()
  // }, [])

  return <>
    <HomeTemplate sportsCategory={SPORTS_CATEGORY} />
    <Footer />
    {isMobile ? <BottomBar /> : null }
  </>
}

export default Home