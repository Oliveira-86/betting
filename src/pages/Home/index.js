import React from 'react'
import { SPORTS_CATEGORY } from '../../api/sports'
import HomeTemplate from '../../atomic-components/templates/Home'

const Home = () => {
 
  return <HomeTemplate sportsCategory={SPORTS_CATEGORY} />
}

export default Home