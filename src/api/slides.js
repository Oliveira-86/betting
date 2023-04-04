import { v4 as uuidv4 } from "uuid";
import hero_banner from '../assets/hero_banner.jpg'
import star_banner from '../assets/star_banner.jpg'
import legion_gold from '../assets/casino/legion_gold.jpg'
import premier_league from '../assets/casino/premier_league.jpg'
import casino_banner from '../assets/casino/casino_banner.jpg'
import casino_banner_1 from '../assets/casino/casino_banner_.png'

const dataSlider = [
  {
    id: uuidv4(),
    title: "Lorem ipsum 1",
    src: {
      mobile: legion_gold,
      web: star_banner,
      casino: casino_banner
    } 
  },
  {
    id: uuidv4(),
    title: "Lorem ipsum 2",
    src:{
      mobile: premier_league,
      web: hero_banner,
      casino: casino_banner
    } 
  },
  // {
  //   id: uuidv4(),
  //   title: "Lorem ipsum 3",
  //   src: banner
  // },
];

export default dataSlider;