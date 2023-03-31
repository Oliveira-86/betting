import React from 'react'
import { SPORTS } from '../../../api/sports'
import LiveHeader from '../../../atomic-components/organism/Live/Header'
import ScoreCardLive from '../../molecules/ScoreCardSecondary'

function LiveTemplate() {
 
  return (
    <>
      <LiveHeader />
      {SPORTS.map((item) => (
        <ScoreCardLive 
          logo1={item.logo1} 
          logo2={item.logo2}
          altTeam1={item.altTeam1}
          altTeam2={item.altTeam2} 
          nameTeam1={item.team1} 
          nameTeam2={item.team2}
          league={item.league} 
          goalsTeam1={item.goals.team1} 
          goalsTeam2={item.goals.team2}
          time={item.time}
          bet={item.bet} 
        />
      ))}     
    </>
  )
}
export default LiveTemplate