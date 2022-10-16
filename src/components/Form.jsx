import React, {useContext, useState} from 'react'
import {Box, FormLabel, Input, Button, FormControl, Text, Heading, Flex, Stack, Image } from '@chakra-ui/react'
import '../App.css'
import { FormContext } from '../App'
import iconComplete from '../assets/icon-complete.svg'
import Message from './Message'


const Form = () => {
  const {cardName, setCardName, cardNumber, setCardNumber, month, setMonth, year, setYear, cvv, setCvv} = useContext(FormContext);
  const [error, setError] = useState(false);
  const [validNum, setValidNum] = useState(true);
  const [validDate, setValidDate] = useState(true);
  const [validCvv, setValidCvv] = useState(true);
  const [filled, setFilled] = useState(false);
  const [showMessage, setShowMessage] = useState(false)

  const checkCardNum = (num) => {
    return /^[0-9]*$/.test(num)
  }

  const checkInputs = () => {
      if(cardName && cardNumber && month && year && cvv){
        if (checkCardNum(cardNumber) === false){
          if (checkCardNum(cvv) === false){
            if (checkCardNum(month) === false){
              if (checkCardNum(year) === false){
                  setValidDate(false)
              }
                setValidDate(false)
            }
            setValidCvv(false)
          }
          setValidNum(false);
        }else{
          setValidNum(true)
        }
        setFilled(true)
      }else{
        setError(true)
        setFilled(false)
      }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    checkInputs();
    if(filled === true){
      setShowMessage(true)
    }
  }

  return (
    <>
      { showMessage ? <Message setShowMessage={setShowMessage} setError={setError} /> : <Box maxW={{base: '280px', md: '320px', lg: '350px'}} >
        <FormControl mb='5' isRequired>

         <Box mb='5'>
            <FormLabel fontSize='xs'>CARDHOLDER NAME</FormLabel>
            <Input type='text' placeholder='e.g Jane Appleseed' value={cardName} onChange={(e) => setCardName(e.target.value)} mb='1' maxLength={15} style={{border: `${error ? '1.95px solid tomato' : ''}` }} />
            {error ? <><Text fontSize={'sm'} color='tomato'>Can't be blank</Text></> : ''}
         </Box>

         <Box mb='5'>
            <FormLabel fontSize='xs'>CARD NUMBER</FormLabel>
            <Input type='text' placeholder='e.g 1234 5678 9123 0000' value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} maxLength={16} style={{ border: `${error ? '1.95px solid tomato' : ''}` }} />
            {error ? <><Text fontSize={'sm'} color='tomato'>Can't be blank</Text></> : ''}
            {validNum ? '' : <><Text fontSize={'sm'} color='tomato'>Wrong format, numbers only</Text></>}
         </Box>
        
           <Flex justifyContent={'space-between'} mb='5' gap={{base: '13px'}}>
              <Box w={{base: '150px', lg: '180px'}}>
                <FormLabel fontSize='xs'>EXP. DATE (MM/YY)</FormLabel>
                <Flex justifyContent={'space-between'}>
                  <Input type='text' placeholder='MM' w={{ base: '70px', lg: '85px' }} value={month} onChange={(e) => setMonth(e.target.value)} maxLength={2} style={{ border: `${error ? '1.95px solid tomato' : ''}` }} />
                  <Input type='text' placeholder='YY' w={{ base: '70px', lg: '85px' }} value={year} onChange={(e) => setYear(e.target.value)} maxLength={2} style={{ border: `${error ? '1.95px solid tomato' : ''}` }} />
                </Flex>
                {error ? <><Text fontSize={'sm'} color='tomato'>Can't be blank</Text></> : ''}
                {validDate ? '' : <><Text fontSize={'sm'} color='tomato'>Wrong format, numbers only</Text></>}
              </Box>
              
              <Box w={{base: '125px', lg: '150px'}}>
                <FormLabel fontSize='xs'>CVC</FormLabel>
                <Input type='text' placeholder='e.g 123' value={cvv} onChange={(e) => setCvv(e.target.value)} maxLength={3} style={{ border: `${error ? '1.95px solid tomato' : ''}` }} />
                {error ? <><Text fontSize={'sm'} color='tomato'>Can't be blank</Text></> : ''}
                {validCvv ? '' : <><Text fontSize={'sm'} color='tomato'>Wrong format, numbers only</Text></>}
              </Box>
           </Flex>

        </FormControl>
      <Button w='100%' bg='hsl(278, 68%, 11%)' color='white' _hover={{ background: 'hsl(278, 68%, 11%)'}} onClick={handleSubmit}>Confirm</Button>
    </Box>}
    </>
  )
}

export default Form

