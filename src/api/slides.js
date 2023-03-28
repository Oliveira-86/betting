import { v4 as uuidv4 } from "uuid";
import banner from '../assets/banner__.jpg'
import hero_banner from '../assets/hero_banner.jpg'
import star_banner from '../assets/star_banner.jpg'
import banner_6 from '../assets/banner_6.jpg'

const dataSlider = [
  {
    id: uuidv4(),
    title: "Lorem ipsum 1",
    src: star_banner 
  },
  {
    id: uuidv4(),
    title: "Lorem ipsum 2",
    src: hero_banner
  },
  // {
  //   id: uuidv4(),
  //   title: "Lorem ipsum 3",
  //   src: banner
  // },
];

export default dataSlider;