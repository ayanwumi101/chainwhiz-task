import React, {useContext} from 'react'
import {Box, Image, Text, Heading, Button, Stack} from '@chakra-ui/react'
import iconComplete from '../assets/icon-complete.svg'
import { FormContext } from '../App'


const Message = ({setShowMessage, setError}) => {
  const { setCardName, setCardNumber, setMonth, setYear, setCvv } = useContext(FormContext)
  const handleClick = () => {
    setCardName('');
    setCardNumber('');
    setCvv('');
    setMonth('');
    setYear('');
    setError(false);
    setShowMessage(false)
  }
  return (
    <Stack spacing={7} maxW={{ base: '300px', md: '320px', lg: '380px' }} textAlign={'center'}>
      <Image src={iconComplete} display='block' margin={'auto'} />
      <Box >
        <Heading size='lg' mb='4'>THANK YOU!</Heading>
        <Text fontWeight={'bold'} color='hsl(279, 6%, 55%)'>We've added your card details</Text>
      </Box>
      <Button w='100%' bg='hsl(278, 68%, 11%)' color='white' _hover={{ background: 'hsl(278, 68%, 11%)' }} onClick={handleClick}>Continue</Button>
    </Stack>
  )
}

export default Message