import React, { useEffect, useState } from 'react'
import Dot from '../../../atoms/Dot'
import Input from '../../../atoms/Input'
import { Title } from '../../../atoms/Text'
import ImagesCarousel  from '../../../molecules/ImagesCarousel'
import { StyledLiveHeader, Row } from './styles'
import { GiSoccerBall, GiBasketballBall, GiAmericanFootballBall } from 'react-icons/gi'
import { IoMdTennisball } from 'react-icons/io'
import { FaVolleyballBall } from 'react-icons/fa'
import theme from '../../../../global/styles/theme'

function LiveHeader() {

  const [featureList, setFeatureList] = useState([]);

  useEffect(() => {
    setFeatureList([
      {
        id: '01-feature-pix',
        title: 'Futebol',
        titleVariant: 'medium',
        icon:{ 
          grey: <GiSoccerBall size={15} color={theme.colors.grey} />,
          white: <GiSoccerBall size={15} color={theme.colors.white} />
        },
        onPress: () => {}
      },
      {
        id: '02-feature-transfers',
        title: 'Basquete',
        subtitle: 'Transferências',
        icon:{ 
          grey: <GiBasketballBall size={15} color={theme.colors.grey} />,
          white: <GiBasketballBall size={15} color={theme.colors.white} />
        },
        onPress: () => {}
      },
      {
        id: '03-feature-pay-bill',
        title: 'Football',
        subtitle: 'Conta',
        icon:{ 
          grey: <GiAmericanFootballBall size={15} color={theme.colors.grey} />,
          white: <GiAmericanFootballBall size={15} color={theme.colors.white} />
        },
        onPress: () => {}
      },
      {
        id: '08-feature-extract',
        title: 'Tênis',
        subtitle: 'Extrato',
        icon:{ 
          grey: <IoMdTennisball size={15} color={theme.colors.grey} />,
          white: <IoMdTennisball size={15} color={theme.colors.white} />
        },
        onPress: () => {}
      },
      {
        id: '06-feature-deposit',
        title: 'Vôlei',
        subtitle: 'Via Boleto',
        icon:{ 
          grey: <FaVolleyballBall size={15} color={theme.colors.grey} />,
          white: <FaVolleyballBall size={15} color={theme.colors.white} />
        },
        onPress: () => {}
      },
    ]);
  }, []);

  return (
    <StyledLiveHeader>
      <Row>
        <Dot />
        <Title marginLeft={'8px'} Mar level={1}>AO VIVO</Title>
      </Row>
      <Input  margintop={'16px'} marginBottom={'16px'} placeholder='Pesquise por jogos ao vivo' />
      <ImagesCarousel sportsList={featureList} swicth /> 
    </StyledLiveHeader>
  )
}

export default LiveHeader