import { v4 as uuidv4 } from "uuid";
import banner from '../assets/banner__.jpg'
import banner_1 from '../assets/banner.jpg'
import banner_3 from '../assets/banner_3.jpg'
import banner_6 from '../assets/banner_6.jpg'

const dataSlider = [
  {
    id: uuidv4(),
    title: "Lorem ipsum 1",
    src: banner_1
  },
  {
    id: uuidv4(),
    title: "Lorem ipsum 2",
    src: banner
  },
  {
    id: uuidv4(),
    title: "Lorem ipsum 3",
    src: banner_1
  },
];

export default dataSlider;