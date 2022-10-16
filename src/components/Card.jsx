import React, {useContext} from 'react'
import {Box, Image, Stack, Flex, Text, Heading} from '@chakra-ui/react'
import cardBgFront from '../assets/bg-card-front.png'
import cardBgBack from '../assets/bg-card-back.png'
import cardLogo from '../assets/card-logo.svg'
import { FormContext } from '../App'

const Card = () => {
  const {cardName, cardNumber, cvv, month, year} = useContext(FormContext);
  return (
    <Flex flexDirection={{base: 'column-reverse', md: 'column', lg: 'column'}} maxW={'400px'}>
      <Box maxW='400px' position={'relative'} top={{ base: '-40px' }} zIndex={{base: '1'}} left={{base: '-10px',}} >

        <Box position={'absolute'} top={{base: '15px', lg: '25px'}} left={{base: '15px', md: '15px', lg: '30px'}}>
          <Image src={cardLogo} mb={{base: 5, lg: 9}} maxW={{base: '20%', md: '70%', lg: '100%'}} />
          <Heading color={'white'} mb={{base: 5,lg: 8}} size={{base: 'md', lg: 'lg'}} fontWeight={'medium'} letterSpacing='3px'>{cardNumber ? cardNumber : '0000 000 0000 0000'}</Heading>
            <Flex justifyContent={'space-between'} color='white'>
              <Text>{cardName ? cardName : 'Felicia  Leire'}</Text>
              <Text>{month ? month : '09'}/{year ? year : '00'}</Text>
            </Flex>
        </Box>

        <Image src={cardBgFront} maxW={{ base: '270px', md: '350px', lg: '400px' }} />
      </Box>

      <Box position={'relative'} left={{ base: '15px', md: '15px', lg: '80px' }} top={{base: '20px'}}>
          <Text position={'absolute'} top={{base: '60px', lg: '95px'}} right='13%' color='white'>{cvv ? cvv : '123'}</Text>
          <Image src={cardBgBack} maxW={{base: '270px', md: '350px', lg: '400px'}} />
      </Box>
    </Flex>
  )
}

export default Card