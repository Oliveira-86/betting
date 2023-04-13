import { v4 as uuidv4 } from "uuid";

export const SPORTS_BASKET = [
  {
    id: 'game1',
    team1: "Lackers",
    team2: "Boston Celtics",
    logo1: "https://media.api-sports.io/football/teams/33.png",
    logo2: "https://media.api-sports.io/football/teams/40.png",
    goals: {
      team1: 45,
      team2: 52,
    },
    value: '',
    time: { hour: '15:30', live: true },
    league: 'NBA',
    bet: [{ id: uuidv4(), odd: '1.2'}, { id: uuidv4(), odd: '1.8'}, { id: uuidv4(), odd: '2.0'}, { id: uuidv4(), odd: '2.1'}, { id: uuidv4(), odd: '2.2'}]
  },
  {
    id: 'game2',
    team1: "NY Nyx",
    team2: "Chicargo Bulls",
    logo1: "https://media.api-sports.io/football/teams/50.png",
    logo2: "https://media.api-sports.io/football/teams/42.png",
    goals: {
      team1: 87,
      team2: 87,
    },
    value: '',
    time: { hour: '15:30', live: true },
    league: 'NBA',
    bet: [{ id: uuidv4(), odd: '1.2'}, { id: uuidv4(), odd: '1.8'}, { id: uuidv4(), odd: '2.0'}, { id: uuidv4(), odd: '2.1'}, { id: uuidv4(), odd: '2.2'}] 
  },
  {
    id: 'game3',
    team1: "Lackers",
    team2: "Boston Celtics",
    logo1: "https://media.api-sports.io/football/teams/33.png",
    logo2: "https://media.api-sports.io/football/teams/40.png",
    goals: {
      team1: 45,
      team2: 52,
    },
    value: '',
    time: { hour: '15:30', live: true  },
    league: 'NBA',
    bet: [{ id: uuidv4(), odd: '1.2'}, { id: uuidv4(), odd: '1.8'}, { id: uuidv4(), odd: '2.0'}, { id: uuidv4(), odd: '2.1'}, { id: uuidv4(), odd: '2.2'}] 
  },
  {
    id: 'game4',
    team1: "NY Nyx",
    team2: "Chicargo Bulls",
    logo1: "https://media.api-sports.io/football/teams/50.png",
    logo2: "https://media.api-sports.io/football/teams/42.png",
    goals: {
      team1: 87,
      team2: 87,
    },
    value: '',
    time: { hour: '15:30', live: true },
    league: 'NBA',
    bet: [{ id: uuidv4(), odd: '1.2'}, { id: uuidv4(), odd: '1.8'}, { id: uuidv4(), odd: '2.0'}, { id: uuidv4(), odd: '2.1'}, { id: uuidv4(), odd: '2.2'}] 
  },
  {
    id: 'game5',
    team1: "Lackers",
    team2: "Boston Celtics",
    logo1: "https://media.api-sports.io/football/teams/33.png",
    logo2: "https://media.api-sports.io/football/teams/40.png",
    goals: {
      team1: 45,
      team2: 52,
    },
    value: '',
    time: { hour: '15:30', live: true },
    league: 'NBA',
    bet: [{ id: uuidv4(), odd: '1.2'}, { id: uuidv4(), odd: '1.8'}, { id: uuidv4(), odd: '2.0'}, { id: uuidv4(), odd: '2.1'}, { id: uuidv4(), odd: '2.2'}] 
  },
  {
    id: 'game6',
    team1: "NY Nyx",
    team2: "Chicargo Bulls",
    logo1: "https://media.api-sports.io/football/teams/50.png",
    logo2: "https://media.api-sports.io/football/teams/42.png",
    goals: {
      team1: 87,
      team2: 87,
    },
    value: '',
    time: { hour: '15:30', live: true },
    league: 'NBA',
    bet: [{ id: uuidv4(), odd: '1.2'}, { id: uuidv4(), odd: '1.8'}, { id: uuidv4(), odd: '2.0'}, { id: uuidv4(), odd: '2.1'}, { id: uuidv4(), odd: '2.2'}] 
  },
  {
    id: 'game7',
    team1: "Lackers",
    team2: "Boston Celtics",
    logo1: "https://media.api-sports.io/football/teams/33.png",
    logo2: "https://media.api-sports.io/football/teams/40.png",
    goals: {
      team1: 45,
      team2: 52,
    },
    value: '',
    time: { hour: '15:30', live: true },
    league: 'NBA',
    bet: [{ id: uuidv4(), odd: '1.2'}, { id: uuidv4(), odd: '1.8'}, { id: uuidv4(), odd: '2.0'}, { id: uuidv4(), odd: '2.1'}, { id: uuidv4(), odd: '2.2'}] 
  },
];

export const SPORTS_TENNIS = [
  {
    id: 'game1',
    team1: "Rafael Nadal",
    team2: "Novak Djokovic",
    logo1: "https://media.api-sports.io/football/teams/33.png",
    logo2: "https://media.api-sports.io/football/teams/40.png",
    sets: {
      team1: 0,
      team2: 0,
    },
    games: {
      team1: 0,
      team2: 0,
    },
    points: {
      team1: 15,
      team2: 40
    },
    time: { hour: '15:30', live: true },
    league: 'NBA',
    bet: [{ id: uuidv4(), odd: '1.2'}, { id: uuidv4(), odd: '1.8'}, { id: uuidv4(), odd: '2.0'}, { id: uuidv4(), odd: '2.1'}, { id: uuidv4(), odd: '2.2'}] 
  },
  {
    id: 'game2',
    team1: "Roger Federer",
    team2: "Casper Rudd",
    logo1: "https://media.api-sports.io/football/teams/50.png",
    logo2: "https://media.api-sports.io/football/teams/42.png",
    sets: {
      team1: 0,
      team2: 2,
    },
    games: {
      team1: 1,
      team2: 3,
    },
    points: {
      team1: 15,
      team2: 40
    },
    time: { hour: '15:30', live: true },
    league: 'NBA',
    bet: [{ id: uuidv4(), odd: '1.2'}, { id: uuidv4(), odd: '1.8'}, { id: uuidv4(), odd: '2.0'}, { id: uuidv4(), odd: '2.1'}, { id: uuidv4(), odd: '2.2'}] 
  },
  {
    id: 'game3',
    team1: "Rafael Nadal",
    team2: "Novak Djokovic",
    logo1: "https://media.api-sports.io/football/teams/33.png",
    logo2: "https://media.api-sports.io/football/teams/40.png",
    sets: {
      team1: 0,
      team2: 0,
    },
    games: {
      team1: 0,
      team2: 0,
    },
    points: {
      team1: 15,
      team2: 40
    },
    time: { hour: '15:30', live: true  },
    league: 'NBA',
    bet: [{ id: uuidv4(), odd: '1.2'}, { id: uuidv4(), odd: '1.8'}, { id: uuidv4(), odd: '2.0'}, { id: uuidv4(), odd: '2.1'}, { id: uuidv4(), odd: '2.2'}] 
  },
  {
    id: 'game4',
    team1: "Roger Federer",
    team2: "Casper Rudd",
    logo1: "https://media.api-sports.io/football/teams/50.png",
    logo2: "https://media.api-sports.io/football/teams/42.png",
    sets: {
      team1: 2,
      team2: 2,
    },
    games: {
      team1: 0,
      team2: 5,
    },
    points: {
      team1: 15,
      team2: 40
    },
    time: { hour: '15:30', live: true },
    league: 'NBA',
    bet: [{ id: uuidv4(), odd: '1.2'}, { id: uuidv4(), odd: '1.8'}, { id: uuidv4(), odd: '2.0'}, { id: uuidv4(), odd: '2.1'}, { id: uuidv4(), odd: '2.2'}] 
  },
  {
    id: 'game5',
    team1: "Rafael Nadal",
    team2: "Novak Djokovic",
    logo1: "https://media.api-sports.io/football/teams/33.png",
    logo2: "https://media.api-sports.io/football/teams/40.png",
    sets: {
      team1: 0,
      team2: 0,
    },
    games: {
      team1: 5,
      team2: 3,
    },
    points: {
      team1: 15,
      team2: 40
    },
    time: { hour: '15:30', live: true },
    league: 'NBA',
    bet: [{ id: uuidv4(), odd: '1.2'}, { id: uuidv4(), odd: '1.8'}, { id: uuidv4(), odd: '2.0'}, { id: uuidv4(), odd: '2.1'}, { id: uuidv4(), odd: '2.2'}]
  },
  {
    id: 'game6',
    team1: "Roger Federer",
    team2: "Casper Rudd",
    logo1: "https://media.api-sports.io/football/teams/50.png",
    logo2: "https://media.api-sports.io/football/teams/42.png",
    sets: {
      team1: 2,
      team2: 3,
    },
    games: {
      team1: 4,
      team2: 0,
    },
    points: {
      team1: 15,
      team2: 40
    },
    time: { hour: '15:30', live: true },
    league: 'NBA',
    bet: [{ id: uuidv4(), odd: '1.2'}, { id: uuidv4(), odd: '1.8'}, { id: uuidv4(), odd: '2.0'}, { id: uuidv4(), odd: '2.1'}, { id: uuidv4(), odd: '2.2'}] 
  },
  {
    id: 'game7',
    team1: "Rafael Nadal",
    team2: "Novak Djokovic",
    logo1: "https://media.api-sports.io/football/teams/33.png",
    logo2: "https://media.api-sports.io/football/teams/40.png",
    sets: {
      team1: 0,
      team2: 0,
    },
    games: {
      team1: 0,
      team2: 0,
    },
    points: {
      team1: 15,
      team2: 40
    },
    time: { hour: '15:30', live: true },
    league: 'NBA',
    bet: [{ id: uuidv4(), odd: '1.2'}, { id: uuidv4(), odd: '1.8'}, { id: uuidv4(), odd: '2.0'}, { id: uuidv4(), odd: '2.1'}, { id: uuidv4(), odd: '2.2'}] 
  },
];