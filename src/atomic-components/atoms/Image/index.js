import React from 'react'
import useDeviceDetect from '../../../hook/useDeviceDetect';
import { StyledImage } from './styles';

function Image(props) {
  const { isMobile } = useDeviceDetect()

  return  <StyledImage borderRadius={isMobile} style={props.style}  {...props} src={props.src} alt={props.alt} />;
}

export default Image