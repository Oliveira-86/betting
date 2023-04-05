import React from 'react'
import useDeviceDetect from '../../../hook/useDeviceDetect';
import BottomBar from '../../molecules/BottomBar';
import HomeContent from '../../organism/Home/Content';
import HomeHeader from '../../organism/Home/Header';
import { StyledHomeTemplate } from './styles';

const DATA = [
  {
    id: 'game1',
    team1: "Manchester United",
    team2: "Liverpool",
    logo1: "https://media.api-sports.io/football/teams/33.png",
    logo2: "https://media.api-sports.io/football/teams/40.png",
    goals: {
      team1: 2,
      team2: 3,
    },
    time: '15:30',
    league: 'Premier League'
  },
  {
    id: 'game2',
    team1: "Manchester City",
    team2: "Arsenal",
    logo1: "https://media.api-sports.io/football/teams/50.png",
    logo2: "https://media.api-sports.io/football/teams/42.png",
    goals: {
      team1: 1,
      team2: 1,
    },
    time: '15:30',
    league: 'Premier League'
  },
  {
    id: 'game3',
    team1: "Manchester United",
    team2: "Liverpool",
    logo1: "https://media.api-sports.io/football/teams/33.png",
    logo2: "https://media.api-sports.io/football/teams/40.png",
    goals: {
      team1: 2,
      team2: 3,
    },
    time: '15:30',
    league: 'Premier League'
  },
  {
    id: 'game4',
    team1: "Manchester City",
    team2: "Arsenal",
    logo1: "https://media.api-sports.io/football/teams/50.png",
    logo2: "https://media.api-sports.io/football/teams/42.png",
    goals: {
      team1: 1,
      team2: 1,
    },
    time: '15:30',
    league: 'Premier League'
  },{
    id: 'game5',
    team1: "Manchester United",
    team2: "Liverpool",
    logo1: "https://media.api-sports.io/football/teams/33.png",
    logo2: "https://media.api-sports.io/football/teams/40.png",
    goals: {
      team1: 2,
      team2: 3,
    },
    time: '15:30',
    league: 'Premier League'
  },
  {
    id: 'game6',
    team1: "Manchester City",
    team2: "Arsenal",
    logo1: "https://media.api-sports.io/football/teams/50.png",
    logo2: "https://media.api-sports.io/football/teams/42.png",
    goals: {
      team1: 1,
      team2: 1,
    },
    time: '15:30',
    league: 'Premier League'
  },
  {
    id: 'game7',
    team1: "Manchester United",
    team2: "Liverpool",
    logo1: "https://media.api-sports.io/football/teams/33.png",
    logo2: "https://media.api-sports.io/football/teams/40.png",
    goals: {
      team1: 2,
      team2: 3,
    },
    time: '15:30',
    league: 'Premier League'
  },
  {
    id: 'game8',
    team1: "Manchester City",
    team2: "Arsenal",
    logo1: "https://media.api-sports.io/football/teams/50.png",
    logo2: "https://media.api-sports.io/football/teams/42.png",
    goals: {
      team1: 1,
      team2: 1,
    },
    time: '15:30',
    league: 'Premier League'
  },
  ];

function HomeTemplate({ sportsCategory }) {
  
  const { isMobile } = useDeviceDetect()
  
  return (
    <>
      <StyledHomeTemplate>
        <HomeHeader />
        <HomeContent sportsCategory={sportsCategory} sportsList={DATA} />
      </StyledHomeTemplate>
      {isMobile ? <BottomBar /> : null}
      
    </>
  )
}

export default HomeTemplate