import { v4 as uuidv4 } from "uuid";
import { MdCasino, MdSportsHockey } from 'react-icons/md'
import { GiAmericanFootballBall, GiBasketballBall, GiBoxingGlove, GiCycling, GiSoccerBall,  } from 'react-icons/gi'
import { BsFillTrophyFill } from 'react-icons/bs'
import { FaVolleyballBall } from 'react-icons/fa'
import { IoMdTennisball } from 'react-icons/io'
import theme from "../global/styles/theme";

export const SPORTS = [
  {
    id: uuidv4(),
    team1: "Manchester United",
    team2: "Liverpool",
    logo1: "https://media.api-sports.io/football/teams/33.png",
    logo2: "https://media.api-sports.io/football/teams/40.png",
    goals: {
      team1: 2,
      team2: 3,
    },
    value: '',
    time: { hour: '15:30', live: true },
    league: 'Premier League',
    bet: [{ id: uuidv4(), odd: '1.2'}, { id: uuidv4(), odd: '1.8'}, { id: uuidv4(), odd: '2.0'}, { id: uuidv4(), odd: '2.1'}, { id: uuidv4(), odd: '2.2'}]
  },
  {
    id: uuidv4(),
    team1: "NY Nyx",
    team2: "Arsenal",
    logo1: "https://media.api-sports.io/football/teams/50.png",
    logo2: "https://media.api-sports.io/football/teams/42.png",
    goals: {
      team1: 1,
      team2: 1,
    },
    value: '',
    time: { hour: '15:30', live: true },
    league: 'Premier League',
    bet: [{ id: uuidv4(), odd: '1.2'}, { id: uuidv4(), odd: '1.8'}, { id: uuidv4(), odd: '2.0'}, { id: uuidv4(), odd: '2.1'}, { id: uuidv4(), odd: '2.2'}]
  },
  {
    id: uuidv4(),
    team1: "Manchester United",
    team2: "Liverpool",
    logo1: "https://media.api-sports.io/football/teams/33.png",
    logo2: "https://media.api-sports.io/football/teams/40.png",
    goals: {
      team1: 2,
      team2: 3,
    },
    value: '',
    time: { hour: '15:30', live: true  },
    league: 'Premier League',
    bet: [{ id: uuidv4(), odd: '1.2'}, { id: uuidv4(), odd: '1.8'}, { id: uuidv4(), odd: '2.0'}, { id: uuidv4(), odd: '2.1'}, { id: uuidv4(), odd: '2.2'}]
  },
  {
    id: uuidv4(),
    team1: "Manchester City",
    team2: "Arsenal",
    logo1: "https://media.api-sports.io/football/teams/50.png",
    logo2: "https://media.api-sports.io/football/teams/42.png",
    goals: {
      team1: 1,
      team2: 1,
    },
    value: '',
    time: { hour: '15:30', live: false },
    league: 'Premier League',
    bet: [{ id: uuidv4(), odd: '1.2'}, { id: uuidv4(), odd: '1.8'}, { id: uuidv4(), odd: '2.0'}, { id: uuidv4(), odd: '2.1'}, { id: uuidv4(), odd: '2.2'}]
  },
  {
    id: uuidv4(),
    team1: "Manchester United",
    team2: "Liverpool",
    logo1: "https://media.api-sports.io/football/teams/33.png",
    logo2: "https://media.api-sports.io/football/teams/40.png",
    goals: {
      team1: 2,
      team2: 3,
    },
    value: '',
    time: { hour: '15:30', live: false },
    league: 'Premier League',
    bet: [{ id: uuidv4(), odd: '1.2'}, { id: uuidv4(), odd: '1.8'}, { id: uuidv4(), odd: '2.0'}, { id: uuidv4(), odd: '2.1'}, { id: uuidv4(), odd: '2.2'}]
  },
  {
    id: uuidv4(),
    team1: "Manchester City",
    team2: "Arsenal",
    logo1: "https://media.api-sports.io/football/teams/50.png",
    logo2: "https://media.api-sports.io/football/teams/42.png",
    goals: {
      team1: 1,
      team2: 1,
    },
    value: '',
    time: { hour: '15:30', live: false },
    league: 'Premier League',
    bet: [{ id: uuidv4(), odd: '1.2'}, { id: uuidv4(), odd: '1.8'}, { id: uuidv4(), odd: '2.0'}, { id: uuidv4(), odd: '2.1'}, { id: uuidv4(), odd: '2.2'}]
  },
  {
    id: uuidv4(),
    team1: "Manchester United",
    team2: "Liverpool",
    logo1: "https://media.api-sports.io/football/teams/33.png",
    logo2: "https://media.api-sports.io/football/teams/40.png",
    goals: {
      team1: 2,
      team2: 3,
    },
    value: '',
    time: { hour: '15:30', live: false },
    league: 'Premier League',
    bet: [{ id: uuidv4(), odd: '1.2'}, { id: uuidv4(), odd: '1.8'}, { id: uuidv4(), odd: '2.0'}, { id: uuidv4(), odd: '2.1'}, { id: uuidv4(), odd: '2.2'}]
  },
  // {
  //   id: uuidv4(),
  //   team1: "Manchester City",
  //   team2: "Arsenal",
  //   logo1: "https://media.api-sports.io/football/teams/50.png",
  //   logo2: "https://media.api-sports.io/football/teams/42.png",
  //   goals: {
  //     team1: 1,
  //     team2: 1,
  //   },
  // value: '',
  //   time: { hour: '15:30', live: true },
  //   league: 'Premier League',
  //   bet: [{ id: uuidv4(), odd: '1.2'}, { id: uuidv4(), odd: '1.8'}, { id: uuidv4(), odd: '2.0'}, { id: uuidv4(), odd: '2.1'}, { id: uuidv4(), odd: '2.2'}, '2.8']
  // },{
  //   id: uuidv4(),
  //   team1: "Manchester United",
  //   team2: "Liverpool",
  //   logo1: "https://media.api-sports.io/football/teams/33.png",
  //   logo2: "https://media.api-sports.io/football/teams/40.png",
  //   goals: {
  //     team1: 2,
  //     team2: 3,
  //   },
  // value: '',
  //   time: { hour: '15:30', live: true },
  //   league: 'Premier League',
  //   bet: ['1.2', '1.8', '2.0', '2.1', '2.2', '2.3', '2.8']
  // },
  // {
  //   id: ',
  //   team1: "Manchester City",
  //   team2: "Arsenal",
  //   logo1: "https://media.api-sports.io/football/teams/50.png",
  //   logo2: "https://media.api-sports.io/football/teams/42.png",
  //   goals: {
  //     team1: 1,
  //     team2: 1,
  //   },
  // value: '',
  //   time: { hour: '15:30', live: true },
  //   league: 'Premier League',
  //   bet: ['1.2', '1.8', '2.0', '2.2', '2.3', '2.8']
  // },
  // {
  //   id: ',
  //   team1: "Manchester United",
  //   team2: "Liverpool",
  //   logo1: "https://media.api-sports.io/football/teams/33.png",
  //   logo2: "https://media.api-sports.io/football/teams/40.png",
  //   goals: {
  //     team1: 2,
  //     team2: 3,
  //   },
  // value: '',
  //   time: { hour: '15:30', live: true },
  //   league: 'Premier League',
  //   bet: ['1.2', '1.8', '2.0', '2.2', '2.3', '2.8']
  // },
  // {
  //   id: ',
  //   team1: "Manchester City",
  //   team2: "Arsenal",
  //   logo1: "https://media.api-sports.io/football/teams/50.png",
  //   logo2: "https://media.api-sports.io/football/teams/42.png",
  //   goals: {
  //     team1: 1,
  //     team2: 1,
  //   },
  // value: '',
  //   time: { hour: '15:30', live: true },
  //   league: 'Premier League',
  //   bet: ['1.2', '1.8', '2.0', '2.2', '2.3', '2.8']
  // },
  // {
  //   id: ',
  //   team1: "Manchester United",
  //   team2: "Liverpool",
  //   logo1: "https://media.api-sports.io/football/teams/33.png",
  //   logo2: "https://media.api-sports.io/football/teams/40.png",
  //   goals: {
  //     team1: 2,
  //     team2: 3,
  //   },
  // value: '',
  //   time: { hour: '15:30', live: true },
  //   league: 'Premier League',
  //   bet: ['1.2', '1.8', '2.0', '2.1', '2.2', '2.3', '2.8']
  // },
  // {
  //   id: ',
  //   team1: "Manchester City",
  //   team2: "Arsenal",
  //   logo1: "https://media.api-sports.io/football/teams/50.png",
  //   logo2: "https://media.api-sports.io/football/teams/42.png",
  //   goals: {
  //     team1: 1,
  //     team2: 1,
  //   },
  // value: '',
  //   time: { hour: '15:30', live: true },
  //   league: 'Premier League',
  //   bet: ['1.2', '1.8', '2.0', '2.2', '2.3', '2.8']
  // },
  // {
  //   id: ',
  //   team1: "Manchester United",
  //   team2: "Liverpool",
  //   logo1: "https://media.api-sports.io/football/teams/33.png",
  //   logo2: "https://media.api-sports.io/football/teams/40.png",
  //   goals: {
  //     team1: 2,
  //     team2: 3,
  //   },
  // value: '',
  //   time: { hour: '15:30', live: true },
  //   league: 'Premier League',
  //   bet: ['1.2', '1.8', '2.0', '2.2', '2.3', '2.8']
  // },
  // {
  //   id: ',
  //   team1: "Manchester City",
  //   team2: "Arsenal",
  //   logo1: "https://media.api-sports.io/football/teams/50.png",
  //   logo2: "https://media.api-sports.io/football/teams/42.png",
  //   goals: {
  //     team1: 1,
  //     team2: 1,
  //   },
  // value: '',
  //   time: { hour: '15:30', live: true },
  //   league: 'Premier League',
  //   bet: ['1.2', '1.8', '2.0', '2.2', '2.3', '2.8']
  // },
];

export const NEXT_GAMES = [
  {
    id: uuidv4(),
    team1: "Manchester United",
    team2: "Liverpool",
    logo1: "https://media.api-sports.io/football/teams/33.png",
    logo2: "https://media.api-sports.io/football/teams/40.png",
    goals: {
      team1: '',
      team2: '',
    },
    value: '',
    time: { hour: '15:30', live: false },
    league: 'Premier League',
    bet: ['1.2', '1.8', '2.0', '2.1', '2.2', '2.3', '2.8']
  },
  {
    id: uuidv4(),
    team1: "NY Nyx",
    team2: "Arsenal",
    logo1: "https://media.api-sports.io/football/teams/50.png",
    logo2: "https://media.api-sports.io/football/teams/42.png",
    goals: {
      team1: '',
      team2: '',
    },
    value: '',
    time: { hour: '15:30', live: false },
    league: 'Premier League',
    bet: ['1.2', '1.8', '2.0', '2.2', '2.3', '2.8']
  },
  {
    id: uuidv4(),
    team1: "Manchester United",
    team2: "Liverpool",
    logo1: "https://media.api-sports.io/football/teams/33.png",
    logo2: "https://media.api-sports.io/football/teams/40.png",
    goals: {
      team1: '',
      team2: '',
    },
    time: { hour: '15:30', live: false },
    league: 'Premier League',
    bet: ['1.2', '1.8', '2.0', '2.2', '2.3', '2.8']
  },
  {
    id: uuidv4(),
    team1: "NY Nyx",
    team2: "Arsenal",
    logo1: "https://media.api-sports.io/football/teams/50.png",
    logo2: "https://media.api-sports.io/football/teams/42.png",
    goals: {
      team1: '',
      team2: '',
    },
    time: { hour: '15:30', live: false },
    league: 'Premier League',
    bet: ['1.2', '1.8', '2.0', '2.2', '2.3', '2.8']
  },
  {
    id: uuidv4(),
    team1: "Manchester United",
    team2: "Liverpool",
    logo1: "https://media.api-sports.io/football/teams/33.png",
    logo2: "https://media.api-sports.io/football/teams/40.png",
    goals: {
      team1: '',
      team2: '',
    },
    time: { hour: '15:30', live: false },
    league: 'Premier League',
    bet: ['1.2', '1.8', '2.0', '2.1', '2.2', '2.3', '2.8']
  },
  {
    id: uuidv4(),
    team1: "NY Nyx",
    team2: "Arsenal",
    logo1: "https://media.api-sports.io/football/teams/50.png",
    logo2: "https://media.api-sports.io/football/teams/42.png",
    goals: {
      team1: '',
      team2: '',
    },
    time: { hour: '15:30', live: false },
    league: 'Premier League',
    bet: ['1.2', '1.8', '2.0', '2.2', '2.3', '2.8']
  },
  {
    id: uuidv4(),
    team1: "Manchester United",
    team2: "Liverpool",
    logo1: "https://media.api-sports.io/football/teams/33.png",
    logo2: "https://media.api-sports.io/football/teams/40.png",
    goals: {
      team1: '',
      team2: '',
    },
    time: { hour: '15:30', live: false },
    league: 'Premier League',
    bet: ['1.2', '1.8', '2.0', '2.2', '2.3', '2.8']
  },
];

export const SPORTS_CATEGORY = [
  {
    id: uuidv4(),
    name: 'Futebol',
    icon: {
            active: <GiSoccerBall size={15} color={theme.colors.secondary} />,
            inactive: <GiSoccerBall size={15} color={theme.colors.grey} />
          }
  },
  {
    id: uuidv4(),
    name: 'Basquete',
    icon: {
            active: <GiBasketballBall size={15} color={theme.colors.secondary} />,
            inactive: <GiBasketballBall size={15} color={theme.colors.grey} />
          }
  },
  {
    id: uuidv4(),
    name: 'Volei',
    icon: {
      active: <FaVolleyballBall size={15} color={theme.colors.secondary} />,
      inactive: <FaVolleyballBall size={15} color={theme.colors.grey} />
    }
  },
  {
    id: uuidv4(),
    name: 'Casino',
    icon: {
            active: <MdCasino size={15} color={theme.colors.secondary} />,
            inactive: <MdCasino size={15} color={theme.colors.grey} />
          }
  },
  {
    id: uuidv4(),
    name: 'Boxe',
    icon: {
            active: <GiBoxingGlove size={15} color={theme.colors.secondary} />,
            inactive: <GiBoxingGlove size={15} color={theme.colors.grey} />
          }
  },
  {
    id: uuidv4(),
    name: 'Football',
    icon:  {
            active: <GiAmericanFootballBall size={15} color={theme.colors.secondary} />,
            inactive: <GiAmericanFootballBall size={15} color={theme.colors.grey} />
          } 
  },
  {
    id: uuidv4(),
    name: 'Ciclismo',
    icon: {
            active: <GiCycling size={15} color={theme.colors.secondary} />,
            inactive: <GiCycling size={15} color={theme.colors.grey} />
          }
  },
  {
    id: uuidv4(),
    name: 'Tênis',
    icon: {
            active: <IoMdTennisball size={15} color={theme.colors.secondary} />,
            inactive: <IoMdTennisball size={15} color={theme.colors.grey} />
          }
  },
  {
    id: uuidv4(),
    name: 'Hóquei',
    icon: {
            active: <MdSportsHockey size={15} color={theme.colors.secondary} />,
            inactive: <MdSportsHockey size={15} color={theme.colors.grey} />
          }
  },
];

export const SPORTS_CHAMPIONSHIP = [
  {
    id: uuidv4(),
    name: 'Brasileirão',
    icon: {
            active: <BsFillTrophyFill size={15} color={theme.colors.secondary} />,
            inactive: <BsFillTrophyFill size={15} color={theme.colors.grey} />
          }
  },
  {
    id: uuidv4(),
    name: 'Premier league',
    icon: {
            active: <BsFillTrophyFill size={15} color={theme.colors.secondary} />,
            inactive: <BsFillTrophyFill size={15} color={theme.colors.grey} />
          }
  },
  {
    id: uuidv4(),
    name: 'Libertadores',
    icon: {
      active: <BsFillTrophyFill size={15} color={theme.colors.secondary} />,
      inactive: <BsFillTrophyFill size={15} color={theme.colors.grey} />
    }
  },
  {
    id: uuidv4(),
    name: 'Champions League',
    icon: {
            active: <BsFillTrophyFill size={15} color={theme.colors.secondary} />,
            inactive: <BsFillTrophyFill size={15} color={theme.colors.grey} />
          }
  },
  {
    id: uuidv4(),
    name: 'NBA',
    icon: {
            active: <BsFillTrophyFill size={15} color={theme.colors.secondary} />,
            inactive: <BsFillTrophyFill size={15} color={theme.colors.grey} />
          }
  },
  {
    id: uuidv4(),
    name: 'NBB',
    icon:  {
            active: <BsFillTrophyFill size={15} color={theme.colors.secondary} />,
            inactive: <BsFillTrophyFill size={15} color={theme.colors.grey} />
          } 
  },
  {
    id: uuidv4(),
    name: 'Liga Nacional',
    icon: {
            active: <BsFillTrophyFill size={15} color={theme.colors.secondary} />,
            inactive: <BsFillTrophyFill size={15} color={theme.colors.grey} />
          }
  },
  {
    id: uuidv4(),
    name: 'ATP Houston',
    icon: {
            active: <BsFillTrophyFill size={15} color={theme.colors.secondary} />,
            inactive: <BsFillTrophyFill size={15} color={theme.colors.grey} />
          }
  },
  {
    id: uuidv4(),
    name: 'ATP Paris',
    icon: {
            active: <BsFillTrophyFill size={15} color={theme.colors.secondary} />,
            inactive: <BsFillTrophyFill size={15} color={theme.colors.grey} />
          }
  },
];