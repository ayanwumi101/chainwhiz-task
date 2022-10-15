import React, {useContext, useState} from 'react'
import {Box, FormLabel, Input, Select, Button, FormControl, Text, Heading, Flex } from '@chakra-ui/react'
import '../App.css'
import { FormContext } from '../App'
import Message from './Message'

const Form = () => {
  const {cardName, setCardName, cardNumber, setCardNumber, month, setMonth, year, setYear, cvv, setCvv} = useContext(FormContext);

  const [name, setName] = useState(cardName);
  const [number, setNumber] = useState(cardNumber)
  const [cardCvv, setCardCvv] = useState(cvv);
  const [expMonth, setExpMonth] = useState(month);
  const [expYear, setExpYear] = useState(year);
  const [isFilled, setIsFilled] = useState(null);
  const [error, setError] = useState(null)
  
  const handleSubmit = (e) => {
    e.preventDefault();

    const checkCardNum = (num) => {
      return /^[0-9]*$/.test(num)
    }

    
    if(name && cardCvv && expMonth && expYear && number){
      setIsFilled(true);
      console.log(cardName, cardNumber, month, year, cvv);
    }else if(!name || cardCvv || expMonth || expYear || number){
      setIsFilled(false);
    }else{
      setIsFilled(false);
      // setError(false)
    }


    if(checkCardNum(number) === false){
        setError(true);
    }else{
      setCardName(name);
      setCvv(cardCvv);
      setMonth(expMonth);
      setYear(expYear);
      setCardNumber(number);
      setNumber('');
      setName('');
      setCardCvv('')
      setExpMonth('')
      setExpYear('');
      setError(false)
    }


  }

  return (
    <>
      {isFilled && !error ? <Message /> : <Box maxW={{base: '280px', md: '320px', lg: '350px'}} >
        <FormControl mb='5' isRequired>

         <Box mb='5'>
            <FormLabel fontSize='xs'>CARDHOLDER NAME</FormLabel>
            <Input type='text' placeholder='e.g Jane Appleseed' value={name} onChange={(e) => setName(e.target.value)} mb='1' style={{border: `${isFilled ? '' : '1.95px solid tomato'}`}} />
            {isFilled ? '' : <><Text fontSize={'sm'} color='tomato'>Can't be blank</Text></>}
         </Box>

         <Box mb='5'>
            <FormLabel fontSize='xs'>CARD NUMBER</FormLabel>
          <Input type='text' placeholder='e.g 1234 5678 9123 0000' value={number} onChange={(e) => setNumber(e.target.value)} maxLength={16} style={{ border: `${isFilled ? '' : '1.95px solid tomato'}` }} />
            {isFilled ? '' : <><Text fontSize={'sm'} color='tomato'>Can't be blank</Text></>}
            {error ? <><Text fontSize={'sm'} color='tomato'>Wrong format, numbers only</Text></> : ''}
         </Box>
        
           <Flex justifyContent={'space-between'} mb='5' gap={{base: '13px'}}>
              <Box w={{base: '150px', lg: '180px'}}>
                <FormLabel fontSize='xs'>EXP. DATE (MM/YY)</FormLabel>
                <Flex justifyContent={'space-between'}>
                  <Input type='text' placeholder='MM' w={{base: '70px', lg: '85px'}} value={expMonth} onChange={(e) => setExpMonth(e.target.value)} maxLength={2} style={{ border: `${isFilled ? '' : '1.95px solid tomato'}` }} />
                  <Input type='text' placeholder='YY' w={{base: '70px', lg: '85px'}} value={expYear} onChange={(e) => setExpYear(e.target.value)} maxLength={2} style={{ border: `${isFilled ? '' : '1.95px solid tomato'}` }} />
                </Flex>
                {isFilled ? '' : <><Text fontSize={'sm'} color='tomato'>Can't be blank</Text></>}
              </Box>
              
              <Box w={{base: '125px', lg: '150px'}}>
                <FormLabel fontSize='xs'>CVC</FormLabel>
                <Input type='text' placeholder='e.g 123' value={cardCvv} onChange={(e) => setCardCvv(e.target.value)} maxLength={3} style={{ border: `${isFilled ? '' : '1.95px solid tomato'}` }} />
                {isFilled ? '' : <><Text fontSize={'sm'} color='tomato'>Can't be blank</Text></>}
              </Box>
           </Flex>

        </FormControl>
      <Button w='100%' bg='hsl(278, 68%, 11%)' color='white' _hover={{ background: 'hsl(278, 68%, 11%)'}} onClick={handleSubmit}>Confirm</Button>
    </Box>}
    </>
  )
}

export default Form