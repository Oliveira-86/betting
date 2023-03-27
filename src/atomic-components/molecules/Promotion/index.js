import React from 'react'
import BannerImage from '../../../assets/casino4.jpg'
import useWindowDimensions from '../../../hook/useWindowDimensions';
import { Button } from '../../atoms/Button';
import Image from '../../atoms/Image';
import { BannerDown } from './styles';

const Banner = () => {
  const { width } = useWindowDimensions()

  return (
    <BannerDown widthProps={width}>
      <Image src={BannerImage} widthProps={'350px'} borderRadius='15px' />
      <Button margintop={'20px'} bold variant={'secondary'} textVariant={'white'} label={'APOSTE JÁ'} />
    </BannerDown>
  )
}

export default Banner