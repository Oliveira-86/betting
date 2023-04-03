import React from 'react'
import useDeviceDetect from '../../../hook/useDeviceDetect';
import { StyledImage, Shadow } from './styles';

function Image(props) {
  const { isMobile } = useDeviceDetect()

  return  (
    <>
      <StyledImage isMobile={isMobile} borderRadius={isMobile} style={props.style}  {...props} src={props.src} alt={props.alt} />
      {props.shadow && <Shadow style={props.style} />}
    </>
    )
}

export default Image