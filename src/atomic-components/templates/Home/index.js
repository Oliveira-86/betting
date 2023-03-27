import React from 'react'
import useScrollingDirection from '../../../hook/useScrollingDirection';
import BottomBar from '../../molecules/BottomBar';
import HomeCarousels from '../../organism/Home/Carousels';
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
  },
  ];

function HomeTemplate() {
  
  return (
    <>
      <StyledHomeTemplate>
        <HomeHeader />
        <HomeCarousels sportsList={DATA} />
      </StyledHomeTemplate>
      <BottomBar />
      
    </>
  )
}

export default HomeTemplate